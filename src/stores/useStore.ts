import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Producto, Movimiento, Alerta, Lote } from '../types';
import { productos as productosIniciales } from '../data/productos';

interface AppState {
  // Auth
  isAuthenticated: boolean;
  user: { username: string; nombre: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;

  // Productos (DATOS REALES desde productos.ts)
  productos: Producto[];
  getProducto: (id: string) => Producto | undefined;
  agregarProducto: (producto: Producto) => void;
  actualizarProducto: (id: string, data: Partial<Producto>) => void;
  eliminarProducto: (id: string) => void;

  // Movimientos - DEPRECATED: usar movimientoStore
  movimientos: Movimiento[];
  agregarMovimiento: (movimiento: Movimiento) => void;

  // Alertas - DEPRECATED: calcular dinámicamente desde stores
  alertas: Alerta[];
  marcarAlertaLeida: (id: string) => void;
  getAlertasNoLeidas: () => number;

  // Lotes - DEPRECATED: usar loteStore
  lotes: Lote[];
  agregarLote: (lote: Lote) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Auth
      isAuthenticated: false,
      user: null,
      login: (username: string, password: string) => {
        if (username === 'admin' && password === 'demo123') {
          set({
            isAuthenticated: true,
            user: { username: 'admin', nombre: 'Administrador' },
          });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
      },

      // Productos
      productos: productosIniciales,
      getProducto: (id: string) => {
        return get().productos.find((p) => p.id === id);
      },
      agregarProducto: (producto: Producto) => {
        set((state) => ({
          productos: [...state.productos, producto],
        }));
      },
      actualizarProducto: (id: string, data: Partial<Producto>) => {
        set((state) => ({
          productos: state.productos.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        }));
      },
      eliminarProducto: (id: string) => {
        set((state) => ({
          productos: state.productos.filter((p) => p.id !== id),
        }));
      },

      // Movimientos - DEPRECATED: usar movimientoStore para datos reales
      movimientos: [],
      agregarMovimiento: (movimiento: Movimiento) => {
        set((state) => ({
          movimientos: [movimiento, ...state.movimientos],
        }));
        
        // Actualizar stock del producto
        const productoId = movimiento.productoId;
        if (!productoId || !movimiento.cantidad) return;
        
        const producto = get().getProducto(productoId);
        if (producto) {
          const nuevoStock =
            movimiento.tipo === 'ENTRADA'
              ? producto.stockActual + movimiento.cantidad
              : producto.stockActual - movimiento.cantidad;
          
          get().actualizarProducto(productoId, { stockActual: nuevoStock });
        }
      },

      // Alertas - DEPRECATED: calcular desde movimientoStore y loteStore
      alertas: [],
      marcarAlertaLeida: (id: string) => {
        set((state) => ({
          alertas: state.alertas.map((a) =>
            a.id === id ? { ...a, leida: true } : a
          ),
        }));
      },
      getAlertasNoLeidas: () => {
        return get().alertas.filter((a) => !a.leida).length;
      },

      // Lotes - DEPRECATED: usar loteStore para datos reales
      lotes: [],
      agregarLote: (lote: Lote) => {
        set((state) => ({
          lotes: [...state.lotes, lote],
        }));
      },
    }),
    {
      name: 'tupac-storage',
      partialize: (state) => ({
        productos: state.productos,
        movimientos: state.movimientos,
        alertas: state.alertas,
        lotes: state.lotes,
      }),
    }
  )
);
