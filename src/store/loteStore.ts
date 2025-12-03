import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Lote } from '../types';
import { lotes as lotesReales } from '../data/lotes';

interface LoteState {
  lotes: Lote[];
  cargarLotes: () => void;
  obtenerLotesPorProducto: (productoId: string) => Lote[];
  obtenerLotesPorEstado: (estado: string) => Lote[];
  obtenerLotesProximosVencer: (dias: number) => Lote[];
}

export const useLoteStore = create<LoteState>()(
  persist(
    (set, get) => ({
      lotes: [],

      cargarLotes: () => {
        // Solo cargar si no hay lotes
        if (get().lotes.length === 0) {
          set({ lotes: lotesReales });
          console.log(`✓ ${lotesReales.length} lotes cargados desde CSV`);
        }
      },

      obtenerLotesPorProducto: (productoId: string) => {
        return get().lotes.filter(lote => lote.productoId === productoId);
      },

      obtenerLotesPorEstado: (estado: string) => {
        return get().lotes.filter(lote => lote.estado === estado);
      },

      obtenerLotesProximosVencer: (dias: number) => {
        const hoy = new Date('2018-05-03'); // Fecha del sistema
        const limite = new Date(hoy);
        limite.setDate(limite.getDate() + dias);

        return get().lotes.filter(lote => {
          if (lote.estado !== 'ACTIVO') return false;
          
          try {
            // Parsear fecha DD/MM/YY o DD/MM/YYYY
            const partes = lote.fechaVencimiento.split('/');
            let anio = parseInt(partes[2]);
            if (anio < 100) anio += 2000; // Convertir YY a YYYY
            
            const fechaVenc = new Date(anio, parseInt(partes[1]) - 1, parseInt(partes[0]));
            
            return fechaVenc >= hoy && fechaVenc <= limite;
          } catch {
            return false;
          }
        });
      },
    }),
    {
      name: 'lote-storage-v1-real-csv',
      onRehydrateStorage: () => (state) => {
        if (state && state.lotes.length === 0) {
          state.cargarLotes();
        }
      },
    }
  )
);
