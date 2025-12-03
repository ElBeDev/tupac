import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { OrdenCompra, ItemOrdenCompra } from '../types/ordenCompra';
import { useStore } from '../stores/useStore';
import { useProveedorStore } from './proveedorStore';
import { useMovimientoStore } from './movimientoStore';
import { ordenesCompraIniciales } from '../data/pedidos';

interface OrdenCompraStore {
  ordenes: OrdenCompra[];
  
  // CRUD
  addOrden: (orden: Omit<OrdenCompra, 'id' | 'numeroOrden' | 'createdAt'>) => string;
  updateOrden: (id: string, orden: Partial<OrdenCompra>) => void;
  deleteOrden: (id: string) => void;
  getOrdenById: (id: string) => OrdenCompra | undefined;
  
  // Estados
  updateEstado: (id: string, estado: OrdenCompra['estado']) => void;
  confirmarOrden: (id: string) => void;
  recibirOrden: (id: string, itemsRecibidos: Array<{ productoId: string; cantidadRecibida: number; lote?: string; fechaVencimiento?: string }>) => void;
  cancelarOrden: (id: string) => void;
  
  // Generación automática
  generarOrdenesAutomaticas: () => string[];
  
  // Análisis
  getOrdenesPendientes: () => OrdenCompra[];
  getOrdenesPorProveedor: (proveedorId: string) => OrdenCompra[];
  getTotalOrdenesMes: () => number;
}

export const useOrdenCompraStore = create<OrdenCompraStore>()(
  persist(
    (set, get) => ({
      ordenes: ordenesCompraIniciales,

      addOrden: (ordenData) => {
        const id = `oc-${Date.now()}`;
        const numeroOrden = `OC-${String(get().ordenes.length + 1).padStart(6, '0')}`;
        
        const nuevaOrden: OrdenCompra = {
          ...ordenData,
          id,
          numeroOrden,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          ordenes: [...state.ordenes, nuevaOrden],
        }));

        return id;
      },

      updateOrden: (id, ordenData) => {
        set((state) => ({
          ordenes: state.ordenes.map((o) =>
            o.id === id ? { ...o, ...ordenData } : o
          ),
        }));
      },

      deleteOrden: (id) => {
        set((state) => ({
          ordenes: state.ordenes.filter((o) => o.id !== id),
        }));
      },

      getOrdenById: (id) => {
        return get().ordenes.find((o) => o.id === id);
      },

      updateEstado: (id, estado) => {
        set((state) => ({
          ordenes: state.ordenes.map((o) =>
            o.id === id ? { ...o, estado } : o
          ),
        }));
      },

      confirmarOrden: (id) => {
        get().updateEstado(id, 'Confirmada');
        set((state) => ({
          ordenes: state.ordenes.map((o) =>
            o.id === id ? { ...o, fechaEnvio: new Date().toISOString().split('T')[0] } : o
          ),
        }));
      },

      recibirOrden: (id, itemsRecibidos) => {
        const orden = get().getOrdenById(id);
        if (!orden) return;

        // Actualizar cantidades recibidas
        const itemsActualizados = orden.items.map((item) => {
          const recibido = itemsRecibidos.find((i) => i.productoId === item.productoId);
          if (recibido) {
            return {
              ...item,
              cantidadRecibida: item.cantidadRecibida + recibido.cantidadRecibida,
            };
          }
          return item;
        });

        // Actualizar stock de productos (solo actualización del stock estático)
        itemsRecibidos.forEach((itemRecibido) => {
          const producto = useStore.getState().getProducto(itemRecibido.productoId);
          if (producto) {
            useStore.getState().actualizarProducto(itemRecibido.productoId, {
              stockActual: producto.stockActual + itemRecibido.cantidadRecibida,
            });
            
            // Nota: Los movimientos reales provienen del CSV histórico.
            // Para nuevos movimientos, se debe integrar con movimientoStore.agregarMovimiento()
            // con los campos requeridos del tipo MovimientoReal
          }
        });

        // Determinar nuevo estado
        const todoRecibido = itemsActualizados.every(
          (item) => item.cantidadRecibida >= item.cantidadSolicitada
        );
        const algunoRecibido = itemsActualizados.some((item) => item.cantidadRecibida > 0);

        const nuevoEstado: OrdenCompra['estado'] = todoRecibido
          ? 'Recibida Completa'
          : algunoRecibido
          ? 'Recibida Parcial'
          : 'Confirmada';

        set((state) => ({
          ordenes: state.ordenes.map((o) =>
            o.id === id
              ? {
                  ...o,
                  items: itemsActualizados,
                  estado: nuevoEstado,
                  fechaRecepcion: nuevoEstado === 'Recibida Completa' 
                    ? new Date().toISOString().split('T')[0]
                    : o.fechaRecepcion,
                }
              : o
          ),
        }));
      },

      cancelarOrden: (id) => {
        get().updateEstado(id, 'Cancelada');
      },

      generarOrdenesAutomaticas: () => {
        const productos = useStore.getState().productos;
        const { calcularStockActual } = useMovimientoStore.getState();
        const todosProveedores = useProveedorStore.getState().proveedores;
        const ordenesPendientes = get().getOrdenesPendientes();
        
        // Obtener IDs de productos que ya tienen órdenes pendientes o borradores
        const productosConOrden = new Set<string>();
        ordenesPendientes.forEach(orden => {
          orden.items.forEach(item => {
            productosConOrden.add(item.productoId);
          });
        });
        
        // Filtrar productos que necesitan restock y NO tienen orden pendiente
        const productosRestock = productos
          .map((p) => ({
            ...p,
            stockRealActual: calcularStockActual(p.id),
          }))
          .filter((p) => p.stockRealActual < p.stockMinimo && !productosConOrden.has(p.id));

        if (productosRestock.length === 0) return [];

        // Agrupar por proveedor principal
        const productosPorProveedor = new Map<string, typeof productosRestock>();
        const productosSinProveedor: typeof productosRestock = [];

        productosRestock.forEach((producto) => {
          const proveedorPrincipal = useProveedorStore
            .getState()
            .getProveedorPrincipal(producto.id);

          if (proveedorPrincipal) {
            const productos = productosPorProveedor.get(proveedorPrincipal.proveedorId) || [];
            productos.push(producto);
            productosPorProveedor.set(proveedorPrincipal.proveedorId, productos);
          } else {
            // Productos sin proveedor asignado
            productosSinProveedor.push(producto);
          }
        });

        // Si hay productos sin proveedor, asignarlos al primer proveedor disponible
        if (productosSinProveedor.length > 0 && todosProveedores.length > 0) {
          const proveedorGeneral = todosProveedores[0];
          const productosExistentes = productosPorProveedor.get(proveedorGeneral.id) || [];
          productosPorProveedor.set(proveedorGeneral.id, [...productosExistentes, ...productosSinProveedor]);
        }

        const ordenesCreadas: string[] = [];

        // Crear una orden por proveedor
        productosPorProveedor.forEach((productos, proveedorId) => {
          const proveedor = useProveedorStore.getState().getProveedorById(proveedorId);
          if (!proveedor) return;

          const items: ItemOrdenCompra[] = productos.map((producto) => {
            // Calcular déficit y cantidad óptima
            const deficit = producto.stockMinimo - producto.stockRealActual;
            
            // Si el stock es negativo, necesitamos cubrir el déficit + stock mínimo
            // Si es positivo pero bajo, solo necesitamos cubrir el déficit + buffer
            const cantidadBase = deficit > producto.stockMinimo 
              ? deficit + producto.stockMinimo  // Stock negativo: cubrir todo + seguridad
              : producto.stockMinimo * 2 - producto.stockRealActual;  // Stock bajo: llevar al doble del mínimo
            
            const cantidad = Math.max(cantidadBase, producto.stockMinimo);

            const proveedorProducto = useProveedorStore
              .getState()
              .getProveedorPrincipal(producto.id);

            return {
              productoId: producto.id,
              productoNombre: producto.nombre,
              codigoBarras: producto.codigoBarras,
              cantidadSolicitada: Math.ceil(cantidad),
              cantidadRecibida: 0,
              precioUnitario: proveedorProducto?.precioCompra || (producto.precioVenta || 0) * 0.6, // 60% del precio de venta como estimado
              subtotal: (proveedorProducto?.precioCompra || (producto.precioVenta || 0) * 0.6) * Math.ceil(cantidad),
            };
          });

          const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
          const iva = subtotal * 0.21;
          const total = subtotal + iva;

          const fechaHoy = new Date();
          const fechaEntrega = new Date(fechaHoy);
          fechaEntrega.setDate(fechaEntrega.getDate() + (proveedor.diasPago || 7));
          
          // Contar productos por criticidad
          const urgentes = productos.filter(p => p.stockRealActual < 0).length;
          const criticos = productos.filter(p => p.stockRealActual === 0).length;
          const bajos = productos.filter(p => p.stockRealActual > 0 && p.stockRealActual < p.stockMinimo).length;
          
          let observacion = `Orden generada automáticamente con ${productos.length} producto(s). `;
          if (urgentes > 0) observacion += `${urgentes} URGENTE(S) con stock negativo. `;
          if (criticos > 0) observacion += `${criticos} CRÍTICO(S) sin stock. `;
          if (bajos > 0) observacion += `${bajos} con stock bajo. `;
          observacion += 'Stock calculado desde movimientos reales del sistema.';

          const ordenId = get().addOrden({
            proveedorId,
            proveedorNombre: proveedor.nombre,
            fecha: fechaHoy.toISOString().split('T')[0],
            fechaEntregaEstimada: fechaEntrega.toISOString().split('T')[0],
            estado: 'Borrador',
            items,
            subtotal,
            iva,
            total,
            observaciones: observacion,
            generadaAutomaticamente: true,
            createdBy: 'Sistema',
          });

          ordenesCreadas.push(ordenId);
        });

        return ordenesCreadas;
      },

      getOrdenesPendientes: () => {
        return get().ordenes.filter(
          (o) =>
            o.estado !== 'Recibida Completa' &&
            o.estado !== 'Cancelada'
        );
      },

      getOrdenesPorProveedor: (proveedorId) => {
        return get().ordenes.filter((o) => o.proveedorId === proveedorId);
      },

      getTotalOrdenesMes: () => {
        const hoy = new Date();
        const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1)
          .toISOString()
          .split('T')[0];
        
        return get().ordenes
          .filter((o) => o.fecha >= inicioMes && o.estado !== 'Cancelada')
          .reduce((total, o) => total + o.total, 0);
      },
    }),
    {
      name: 'orden-compra-storage',
    }
  )
);
