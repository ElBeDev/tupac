import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Movimiento } from '../types';
import { movimientos as movimientosIniciales } from '../data/movimientos';
import { useStore } from '../stores/useStore';

interface MovimientoState {
  movimientos: Movimiento[];
  cargarMovimientos: () => void;
  agregarMovimiento: (movimiento: Omit<Movimiento, 'id'>) => void;
  obtenerMovimientosPorProducto: (productoId: string) => Movimiento[];
  obtenerMovimientosPorTipo: (tipo: string) => Movimiento[];
  obtenerMovimientosPorFecha: (fecha: string) => Movimiento[];
  obtenerMovimientosPorEntidad: (entidad: string) => Movimiento[];
  calcularStockActual: (productoId: string) => number;
  obtenerValorizacionTotal: () => number;
}

export const useMovimientoStore = create<MovimientoState>()(
  persist(
    (set, get) => ({
      movimientos: [],

      cargarMovimientos: () => {
        const state = get();
        if (state.movimientos.length === 0) {
          set({ movimientos: movimientosIniciales });
        }
      },

      agregarMovimiento: (movimiento) => {
        const id = `MOV${Date.now()}`;
        set((state) => ({
          movimientos: [...state.movimientos, { ...movimiento, id }],
        }));
      },

      obtenerMovimientosPorProducto: (productoId: string) => {
        return get().movimientos.filter((mov) =>
          mov.items?.some((item) => item.productoId === productoId) ||
          mov.productoId === productoId
        );
      },

      obtenerMovimientosPorTipo: (tipo: string) => {
        return get().movimientos.filter((mov) => mov.tipo === tipo);
      },

      obtenerMovimientosPorFecha: (fecha: string) => {
        return get().movimientos.filter((mov) => mov.fecha === fecha);
      },

      obtenerMovimientosPorEntidad: (entidad: string) => {
        return get().movimientos.filter((mov) => mov.entidad === entidad);
      },

      calcularStockActual: (productoId: string) => {
        // Obtener el stock inicial del producto (inventario base)
        const producto = useStore.getState().productos.find((p) => p.id === productoId);
        let stock = producto?.stockActual || 0;
        
        const movimientos = get().obtenerMovimientosPorProducto(productoId);

        movimientos.forEach((mov) => {
          if (mov.items) {
            // Movimientos nuevos con items
            mov.items.forEach((item) => {
              if (item.productoId === productoId) {
                if (mov.tipo === 'ENTRADA' || mov.tipo === 'COMPRA') {
                  stock += item.cantidad;
                } else if (mov.tipo === 'SALIDA' || mov.tipo === 'VENTA') {
                  stock -= item.cantidad;
                }
              }
            });
          } else if (mov.productoId === productoId) {
            // Movimientos legacy
            const cantidad = mov.cantidad || 0;
            if (mov.tipo === 'ENTRADA') {
              stock += cantidad;
            } else if (mov.tipo === 'SALIDA') {
              stock -= cantidad;
            }
          }
        });

        return stock;
      },

      obtenerValorizacionTotal: () => {
        return get().movimientos.reduce((total, mov) => {
          return total + (mov.totalValor || 0);
        }, 0);
      },
    }),
    {
      name: 'movimiento-storage-v1-real-csv',
      onRehydrateStorage: () => (state) => {
        if (state && state.movimientos.length === 0) {
          state.cargarMovimientos();
        }
      },
    }
  )
);
