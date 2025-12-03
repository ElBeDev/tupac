import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { productos as productosData } from '../data/productos';
import { precios, preciosPorProductoId, getPrecioActual as getPrecioActualHelper } from '../data/precios';
import type { PrecioProducto } from '../types/precio';
import type { Producto } from '../types';

// REGLA: SOLO DATOS REALES - productos y precios vienen de CSV

interface ProductoStore {
  productos: Producto[];
  
  // Getters básicos
  getProductos: () => Producto[];
  getProductoById: (id: string) => Producto | undefined;
  getProductosByCategoria: (categoria: string) => Producto[];
  getProductosByProveedor: (proveedor: string) => Producto[];
  
  // Búsqueda
  buscarProductos: (query: string) => Producto[];
  
  // Alertas de stock
  getProductosBajoStock: () => Producto[];
  
  // ===== NUEVAS FUNCIONALIDADES DE PRECIOS =====
  
  // Obtener precio actual de un producto en una lista específica
  getPrecioProducto: (productoId: string, lista?: number) => number | null;
  
  // Obtener historial de precios de un producto
  getHistorialPrecios: (productoId: string) => PrecioProducto[];
  
  // Obtener productos con sus precios actuales
  getProductosConPrecios: (lista?: number) => Array<Producto & { precioActual: number | null }>;
  
  // Obtener estadísticas de precios
  getEstadisticasPrecios: () => {
    totalProductosConPrecio: number;
    totalPrecios: number;
    precioMinimo: number;
    precioMaximo: number;
    precioPromedio: number;
  };
}

export const useProductoStore = create<ProductoStore>()(
  persist(
    (_set, get) => ({
      productos: productosData,
      
      // Getters básicos
      getProductos: () => get().productos,
      
      getProductoById: (id: string) => {
        return get().productos.find(p => p.id === id);
      },
      
      getProductosByCategoria: (categoria: string) => {
        return get().productos.filter(p => 
          p.categoria?.toLowerCase() === categoria.toLowerCase()
        );
      },
      
      getProductosByProveedor: (proveedor: string) => {
        return get().productos.filter(p => 
          p.proveedor?.toLowerCase().includes(proveedor.toLowerCase())
        );
      },
      
      // Búsqueda
      buscarProductos: (query: string) => {
        const lowerQuery = query.toLowerCase();
        return get().productos.filter(p =>
          p.nombre.toLowerCase().includes(lowerQuery) ||
          p.codigo?.toLowerCase().includes(lowerQuery) ||
          p.categoria?.toLowerCase().includes(lowerQuery)
        );
      },
      
      // Alertas de stock
      getProductosBajoStock: () => {
        return get().productos.filter(p => p.stockActual <= p.stockMinimo);
      },
      
      // ===== FUNCIONALIDADES DE PRECIOS =====
      
      getPrecioProducto: (productoId: string, lista: number = 0) => {
        const precio = getPrecioActualHelper(productoId, lista);
        return precio !== undefined ? precio : null;
      },
      
      getHistorialPrecios: (productoId: string) => {
        const preciosProducto = preciosPorProductoId.get(productoId);
        if (!preciosProducto) return [];
        
        // Ordenar por fecha (más reciente primero)
        return [...preciosProducto].sort((a, b) => {
          const fechaA = a.fechaVigencia || a.fechaCarga;
          const fechaB = b.fechaVigencia || b.fechaCarga;
          return fechaB.localeCompare(fechaA);
        });
      },
      
      getProductosConPrecios: (lista: number = 0) => {
        return get().productos.map(producto => ({
          ...producto,
          precioActual: get().getPrecioProducto(producto.id, lista)
        }));
      },
      
      getEstadisticasPrecios: () => {
        const productosConPrecio = new Set(precios.map(p => p.productoId));
        const preciosValidos = precios.map(p => p.precio).filter(p => p > 0);
        
        return {
          totalProductosConPrecio: productosConPrecio.size,
          totalPrecios: precios.length,
          precioMinimo: Math.min(...preciosValidos),
          precioMaximo: Math.max(...preciosValidos),
          precioPromedio: preciosValidos.reduce((a, b) => a + b, 0) / preciosValidos.length
        };
      }
    }),
    {
      name: 'producto-storage'
    }
  )
);
