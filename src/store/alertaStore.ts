import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Alerta } from '../types';
import { useMovimientoStore } from './movimientoStore';
import { useLoteStore } from './loteStore';
import { useStore } from '../stores/useStore';
import { getDiasHastaVencimiento } from '../utils/helpers';

interface AlertaState {
  alertas: Alerta[];
  generarAlertas: () => void;
  marcarAlertaLeida: (id: string) => void;
  marcarTodasLeidas: () => void;
  getAlertasNoLeidas: () => number;
  getAlertasPorTipo: (tipo: Alerta['tipo']) => Alerta[];
  getAlertasPorPrioridad: (prioridad: Alerta['nivelPrioridad']) => Alerta[];
}

export const useAlertaStore = create<AlertaState>()(
  persist(
    (set, get) => ({
      alertas: [],

      generarAlertas: () => {
        const alertasGeneradas: Alerta[] = [];
        let alertaId = 1;
        const fechaActual = new Date('2018-05-03'); // Fecha del sistema

        // Obtener datos desde otros stores
        const productos = useStore.getState().productos;
        const movimientoStore = useMovimientoStore.getState();
        const loteStore = useLoteStore.getState();
        
        // Asegurarse de que los datos estén cargados
        if (movimientoStore.movimientos.length === 0) {
          movimientoStore.cargarMovimientos();
        }
        if (loteStore.lotes.length === 0) {
          loteStore.cargarLotes();
        }
        
        const { calcularStockActual } = movimientoStore;
        const lotes = loteStore.lotes;
        
        console.log('📊 Generando alertas desde:');
        console.log(`  • ${productos.length} productos`);
        console.log(`  • ${movimientoStore.movimientos.length} movimientos`);
        console.log(`  • ${lotes.length} lotes`);

        // 1. ALERTAS DE STOCK CRÍTICO (stock = 0)
        let stockCriticoCount = 0;
        productos.forEach(producto => {
          const stockReal = calcularStockActual(producto.id);
          
          if (stockReal === 0) {
            stockCriticoCount++;
            alertasGeneradas.push({
              id: `ALERTA-${alertaId++}`,
              tipo: 'STOCK_CRITICO',
              nivelPrioridad: 'CRITICA',
              mensaje: `STOCK AGOTADO: ${producto.nombre} - Stock en CERO. Reabastecer urgente.`,
              productoId: producto.id,
              productoNombre: producto.nombre,
              fechaAlerta: fechaActual.toISOString().split('T')[0],
              leida: false,
            });
          }
        });
        console.log(`  ✓ ${stockCriticoCount} alertas de stock crítico`);

        // 2. ALERTAS DE STOCK BAJO (stock < stockMinimo pero > 0)
        let stockBajoCount = 0;
        productos.forEach(producto => {
          const stockReal = calcularStockActual(producto.id);
          
          if (stockReal > 0 && stockReal < producto.stockMinimo) {
            stockBajoCount++;
            alertasGeneradas.push({
              id: `ALERTA-${alertaId++}`,
              tipo: 'STOCK_BAJO',
              nivelPrioridad: stockReal < producto.stockMinimo * 0.5 ? 'ALTA' : 'MEDIA',
              mensaje: `Stock Bajo: ${producto.nombre} - Stock actual: ${stockReal}, Mínimo: ${producto.stockMinimo}`,
              productoId: producto.id,
              productoNombre: producto.nombre,
              fechaAlerta: fechaActual.toISOString().split('T')[0],
              leida: false,
            });
          }
        });
        console.log(`  ✓ ${stockBajoCount} alertas de stock bajo`);

        // 3. ALERTAS DE VENCIMIENTO PRÓXIMO (≤ 7 días)
        let vencimientoProximoCount = 0;
        lotes
          .filter(lote => lote.estado === 'ACTIVO' || lote.estado === 'PROXIMO_VENCER')
          .forEach(lote => {
            const diasRestantes = getDiasHastaVencimiento(lote.fechaVencimiento);
            
            if (diasRestantes >= 0 && diasRestantes <= 7) {
              vencimientoProximoCount++;
              const producto = productos.find(p => p.id === lote.productoId);
              const titulo = diasRestantes === 0 ? 'VENCE HOY' : `Vence en ${diasRestantes} día${diasRestantes > 1 ? 's' : ''}`;
              
              alertasGeneradas.push({
                id: `ALERTA-${alertaId++}`,
                tipo: 'VENCIMIENTO_PROXIMO',
                nivelPrioridad: diasRestantes <= 3 ? 'CRITICA' : 'ALTA',
                mensaje: `${titulo}: Lote ${lote.numeroLote} de ${lote.productoNombre || producto?.nombre || 'Producto'} - ${lote.cantidadActual} unidades`,
                productoId: lote.productoId,
                productoNombre: lote.productoNombre || producto?.nombre || 'Producto',
                loteId: lote.id,
                loteNumero: lote.numeroLote,
                fechaAlerta: fechaActual.toISOString().split('T')[0],
                leida: false,
              });
            }
          });
        console.log(`  ✓ ${vencimientoProximoCount} alertas de vencimiento próximo`);

        // 4. ALERTAS DE VENCIDOS
        let vencidosCount = 0;
        lotes
          .filter(lote => lote.estado === 'VENCIDO' || getDiasHastaVencimiento(lote.fechaVencimiento) < 0)
          .forEach(lote => {
            vencidosCount++;
            const producto = productos.find(p => p.id === lote.productoId);
            const diasVencido = Math.abs(getDiasHastaVencimiento(lote.fechaVencimiento));
            
            alertasGeneradas.push({
              id: `ALERTA-${alertaId++}`,
              tipo: 'VENCIDO',
              nivelPrioridad: 'CRITICA',
              mensaje: `PRODUCTO VENCIDO: Lote ${lote.numeroLote} de ${lote.productoNombre || producto?.nombre || 'Producto'} - Vencido hace ${diasVencido} día${diasVencido > 1 ? 's' : ''}. RETIRAR INMEDIATAMENTE.`,
              productoId: lote.productoId,
              productoNombre: lote.productoNombre || producto?.nombre || 'Producto',
              loteId: lote.id,
              loteNumero: lote.numeroLote,
              fechaAlerta: fechaActual.toISOString().split('T')[0],
              leida: false,
            });
          });
        console.log(`  ✓ ${vencidosCount} alertas de productos vencidos`);

        set({ alertas: alertasGeneradas });
        console.log(`✓ ${alertasGeneradas.length} alertas generadas dinámicamente`);
      },

      marcarAlertaLeida: (id: string) => {
        set(state => ({
          alertas: state.alertas.map(a =>
            a.id === id ? { ...a, leida: true } : a
          ),
        }));
      },

      marcarTodasLeidas: () => {
        set(state => ({
          alertas: state.alertas.map(a => ({ ...a, leida: true })),
        }));
      },

      getAlertasNoLeidas: () => {
        return get().alertas.filter(a => !a.leida).length;
      },

      getAlertasPorTipo: (tipo: Alerta['tipo']) => {
        return get().alertas.filter(a => a.tipo === tipo);
      },

      getAlertasPorPrioridad: (prioridad: Alerta['nivelPrioridad']) => {
        return get().alertas.filter(a => a.nivelPrioridad === prioridad);
      },
    }),
    {
      name: 'alerta-storage-v1',
    }
  )
);
