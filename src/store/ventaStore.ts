import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Venta, ItemVenta, CarritoItem } from '../types/venta';
import { facturasReales } from '../data/facturas-reales';
import { useStore } from '../stores/useStore';
import { useClienteStore } from './clienteStore';

interface VentaStore {
  ventas: Venta[];
  carrito: CarritoItem[];
  clienteSeleccionado: string | null;
  descuentoGlobal: number;
  
  // Ventas CRUD
  addVenta: (venta: Omit<Venta, 'id' | 'numeroFactura' | 'createdAt'>) => string;
  getVentaById: (id: string) => Venta | undefined;
  updateEstadoVenta: (id: string, estado: Venta['estado']) => void;
  cancelarVenta: (id: string) => void;
  
  // Carrito
  agregarAlCarrito: (item: CarritoItem) => void;
  removerDelCarrito: (productoId: string) => void;
  actualizarCantidadCarrito: (productoId: string, cantidad: number) => void;
  actualizarDescuentoItem: (productoId: string, descuento: number) => void;
  limpiarCarrito: () => void;
  
  // Cliente y descuentos
  seleccionarCliente: (clienteId: string | null) => void;
  setDescuentoGlobal: (descuento: number) => void;
  
  // Cálculos
  getSubtotalCarrito: () => number;
  getTotalDescuentos: () => number;
  getIVA: () => { iva21: number; iva105: number };
  getTotalCarrito: () => number;
  
  // Finalizar venta
  finalizarVenta: (metodoPago: Venta['metodoPago'], tipoFactura: Venta['tipoFactura'], observaciones?: string) => string | null;
  
  // Análisis
  getVentasDelDia: () => Venta[];
  getVentasPorFecha: (fecha: string) => Venta[];
  getTotalVentasDia: () => number;
  getTopProductosVendidos: (limit?: number) => Array<{ productoId: string; productoNombre: string; cantidad: number; total: number }>;
}

// Convertir facturas reales a formato Venta
const convertirFacturasAVentas = (): Venta[] => {
  return facturasReales.map((factura) => ({
    id: factura.id,
    numeroFactura: factura.numero,
    clienteId: factura.codigoCliente,
    clienteNombre: factura.cliente,
    fecha: factura.fecha,
    tipoFactura: factura.tipo === 'Nota de Crédito' ? 'C' as const : 'B' as const,
    items: factura.items.map((item) => ({
      productoId: item.codigo,
      productoNombre: item.nombre,
      codigoBarras: item.codigo,
      cantidad: item.cantidad,
      precioUnitario: item.precioUnitario,
      descuento: 0,
      alicuotaIva: 21,
      subtotal: item.subtotal,
    })),
    subtotal: factura.subtotal,
    descuentoGlobal: 0,
    iva21: factura.iva,
    iva105: 0,
    total: factura.total,
    metodoPago: factura.total > 50000 ? 'Transferencia' as const : 'Efectivo' as const,
    estado: factura.estado as Venta['estado'],
    observaciones: '',
    vendedor: 'Sistema',
    createdAt: factura.fecha,
    createdBy: 'sistema',
  }));
};

export const useVentaStore = create<VentaStore>()(
  persist(
    (set, get) => ({
      ventas: convertirFacturasAVentas(),
      carrito: [],
      clienteSeleccionado: null,
      descuentoGlobal: 0,

      addVenta: (ventaData) => {
        const id = `venta-${Date.now()}`;
        const numeroFactura = `${ventaData.tipoFactura}-${String(get().ventas.length + 1).padStart(8, '0')}`;
        
        const nuevaVenta: Venta = {
          ...ventaData,
          id,
          numeroFactura,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          ventas: [...state.ventas, nuevaVenta],
        }));

        return id;
      },

      getVentaById: (id) => {
        return get().ventas.find((v) => v.id === id);
      },

      updateEstadoVenta: (id, estado) => {
        set((state) => ({
          ventas: state.ventas.map((v) =>
            v.id === id ? { ...v, estado } : v
          ),
        }));
      },

      cancelarVenta: (id) => {
        const venta = get().getVentaById(id);
        if (!venta || venta.estado === 'Cancelada') return;

        // Devolver stock si la venta estaba confirmada
        if (venta.estado === 'Confirmada') {
          venta.items.forEach((item) => {
            const producto = useStore.getState().getProducto(item.productoId);
            if (producto) {
              useStore.getState().actualizarProducto(item.productoId, {
                stockActual: producto.stockActual + item.cantidad
              });
            }
          });
        }

        get().updateEstadoVenta(id, 'Cancelada');
      },

      agregarAlCarrito: (item) => {
        set((state) => {
          const existente = state.carrito.find((i) => i.producto.id === item.producto.id);
          
          if (existente) {
            return {
              carrito: state.carrito.map((i) =>
                i.producto.id === item.producto.id
                  ? { ...i, cantidad: i.cantidad + item.cantidad }
                  : i
              ),
            };
          }
          
          return {
            carrito: [...state.carrito, item],
          };
        });
      },

      removerDelCarrito: (productoId) => {
        set((state) => ({
          carrito: state.carrito.filter((i) => i.producto.id !== productoId),
        }));
      },

      actualizarCantidadCarrito: (productoId, cantidad) => {
        if (cantidad <= 0) {
          get().removerDelCarrito(productoId);
          return;
        }

        set((state) => ({
          carrito: state.carrito.map((i) =>
            i.producto.id === productoId ? { ...i, cantidad } : i
          ),
        }));
      },

      actualizarDescuentoItem: (productoId, descuento) => {
        set((state) => ({
          carrito: state.carrito.map((i) =>
            i.producto.id === productoId ? { ...i, descuento } : i
          ),
        }));
      },

      limpiarCarrito: () => {
        set({
          carrito: [],
          clienteSeleccionado: null,
          descuentoGlobal: 0,
        });
      },

      seleccionarCliente: (clienteId) => {
        set({ clienteSeleccionado: clienteId });
        
        // Aplicar descuento del cliente automáticamente
        if (clienteId) {
          const cliente = useClienteStore.getState().getClienteById(clienteId);
          if (cliente) {
            set({ descuentoGlobal: cliente.descuento });
          }
        } else {
          set({ descuentoGlobal: 0 });
        }
      },

      setDescuentoGlobal: (descuento) => {
        set({ descuentoGlobal: Math.max(0, Math.min(100, descuento)) });
      },

      getSubtotalCarrito: () => {
        return get().carrito.reduce((total, item) => {
          const subtotal = item.producto.precioVenta * item.cantidad;
          const descuento = subtotal * (item.descuento / 100);
          return total + (subtotal - descuento);
        }, 0);
      },

      getTotalDescuentos: () => {
        const subtotal = get().getSubtotalCarrito();
        const descuentoGlobal = subtotal * (get().descuentoGlobal / 100);
        
        const descuentosItems = get().carrito.reduce((total, item) => {
          const subtotal = item.producto.precioVenta * item.cantidad;
          return total + (subtotal * (item.descuento / 100));
        }, 0);
        
        return descuentosItems + descuentoGlobal;
      },

      getIVA: () => {
        let iva21 = 0;
        let iva105 = 0;
        
        get().carrito.forEach((item) => {
          const subtotal = item.producto.precioVenta * item.cantidad;
          const descuento = subtotal * (item.descuento / 100);
          const subtotalConDescuentoGlobal = (subtotal - descuento) * (1 - get().descuentoGlobal / 100);
          
          if (item.producto.alicuotaIva === 21) {
            iva21 += subtotalConDescuentoGlobal * 0.21;
          } else if (item.producto.alicuotaIva === 10.5) {
            iva105 += subtotalConDescuentoGlobal * 0.105;
          }
        });
        
        return { iva21, iva105 };
      },

      getTotalCarrito: () => {
        const subtotal = get().getSubtotalCarrito();
        const descuentoGlobal = subtotal * (get().descuentoGlobal / 100);
        const { iva21, iva105 } = get().getIVA();
        
        return subtotal - descuentoGlobal + iva21 + iva105;
      },

      finalizarVenta: (metodoPago, tipoFactura, observaciones = '') => {
        const { carrito, clienteSeleccionado, descuentoGlobal } = get();
        
        if (carrito.length === 0) return null;
        
        // Verificar stock
        for (const item of carrito) {
          if (item.producto.stockActual < item.cantidad) {
            return null; // Stock insuficiente
          }
        }
        
        // Preparar items
        const items: ItemVenta[] = carrito.map((item) => ({
          productoId: item.producto.id,
          productoNombre: item.producto.nombre,
          codigoBarras: item.producto.codigoBarras,
          cantidad: item.cantidad,
          precioUnitario: item.producto.precioVenta,
          descuento: item.descuento,
          alicuotaIva: item.producto.alicuotaIva,
          subtotal: item.producto.precioVenta * item.cantidad * (1 - item.descuento / 100),
        }));
        
        const subtotal = get().getSubtotalCarrito();
        const { iva21, iva105 } = get().getIVA();
        const total = get().getTotalCarrito();
        
        // Cliente info
        const cliente = clienteSeleccionado 
          ? useClienteStore.getState().getClienteById(clienteSeleccionado)
          : null;
        
        const ventaData = {
          clienteId: clienteSeleccionado || 'consumidor-final',
          clienteNombre: cliente?.nombre || 'Consumidor Final',
          fecha: new Date().toISOString().split('T')[0],
          tipoFactura,
          items,
          subtotal,
          descuentoGlobal,
          iva21,
          iva105,
          total,
          metodoPago,
          estado: 'Confirmada' as const,
          observaciones,
          vendedor: 'Admin', // TODO: obtener del usuario actual
          createdBy: 'admin',
        };
        
        const ventaId = get().addVenta(ventaData);
        
        // Actualizar stock
        items.forEach((item) => {
          const producto = useStore.getState().getProducto(item.productoId);
          if (producto) {
            useStore.getState().actualizarProducto(item.productoId, {
              stockActual: producto.stockActual - item.cantidad
            });
          }
        });
        
        // Actualizar cliente (si aplica)
        if (clienteSeleccionado && cliente) {
          useClienteStore.getState().registrarCompra(clienteSeleccionado, total);
          
          if (metodoPago === 'Cuenta Corriente') {
            useClienteStore.getState().actualizarSaldoDeuda(clienteSeleccionado, total);
          }
        }
        
        // Limpiar carrito
        get().limpiarCarrito();
        
        return ventaId;
      },

      getVentasDelDia: () => {
        const hoy = new Date().toISOString().split('T')[0];
        return get().ventas.filter((v) => v.fecha === hoy && v.estado !== 'Cancelada');
      },

      getVentasPorFecha: (fecha) => {
        return get().ventas.filter((v) => v.fecha === fecha && v.estado !== 'Cancelada');
      },

      getTotalVentasDia: () => {
        return get().getVentasDelDia().reduce((total, v) => total + v.total, 0);
      },

      getTopProductosVendidos: (limit = 10) => {
        const productosMap = new Map<string, { productoId: string; productoNombre: string; cantidad: number; total: number }>();
        
        get().ventas
          .filter((v) => v.estado !== 'Cancelada')
          .forEach((venta) => {
            venta.items.forEach((item) => {
              const existing = productosMap.get(item.productoId);
              if (existing) {
                existing.cantidad += item.cantidad;
                existing.total += item.subtotal;
              } else {
                productosMap.set(item.productoId, {
                  productoId: item.productoId,
                  productoNombre: item.productoNombre || 'Producto sin nombre',
                  cantidad: item.cantidad,
                  total: item.subtotal,
                });
              }
            });
          });
        
        return Array.from(productosMap.values())
          .sort((a, b) => b.cantidad - a.cantidad)
          .slice(0, limit);
      },
    }),
    {
      name: 'venta-storage-v3-real-csv-data', // Cambiado para forzar recarga de datos reales del CSV
      partialize: (state) => ({
        ventas: state.ventas,
        // No persistir carrito ni selecciones temporales
      }),
    }
  )
);
