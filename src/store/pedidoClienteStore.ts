import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PedidoCliente } from '../types/pedido-cliente';
import { pedidosClientes as pedidosIniciales } from '../data/pedidos-clientes';

interface PedidoClienteStore {
  pedidos: PedidoCliente[];
  
  // Getters básicos
  getPedidos: () => PedidoCliente[];
  getPedidoById: (id: string) => PedidoCliente | undefined;
  getPedidosByCliente: (clienteId: string) => PedidoCliente[];
  getPedidosByEstado: (estado: string) => PedidoCliente[];
  
  // Filtros
  filtrarPorFecha: (fechaInicio: string, fechaFin: string) => PedidoCliente[];
  buscarPedidos: (query: string) => PedidoCliente[];
  
  // Estadísticas
  getTotalPedidos: () => number;
  getPedidosPendientes: () => number;
  getPedidosCompletados: () => number;
  getPedidosCancelados: () => number;
  getMontoTotal: () => number;
  getMontoTotalPorEstado: (estado: string) => number;
}

export const usePedidoClienteStore = create<PedidoClienteStore>()(
  persist(
    (_set, get) => ({
      // Estado inicial con datos reales del CSV
      pedidos: pedidosIniciales,
      
      // ============================================
      // GETTERS BÁSICOS
      // ============================================
      
      getPedidos: () => {
        return get().pedidos;
      },
      
      getPedidoById: (id: string) => {
        return get().pedidos.find(p => p.id === id);
      },
      
      getPedidosByCliente: (clienteId: string) => {
        return get().pedidos.filter(p => p.clienteId === clienteId);
      },
      
      getPedidosByEstado: (estado: string) => {
        return get().pedidos.filter(p => p.estado === estado);
      },
      
      // ============================================
      // FILTROS
      // ============================================
      
      filtrarPorFecha: (fechaInicio: string, fechaFin: string) => {
        return get().pedidos.filter(p => {
          const fecha = new Date(p.fechaPedido);
          const inicio = new Date(fechaInicio);
          const fin = new Date(fechaFin);
          return fecha >= inicio && fecha <= fin;
        });
      },
      
      buscarPedidos: (query: string) => {
        const queryLower = query.toLowerCase();
        return get().pedidos.filter(p => 
          p.id.toLowerCase().includes(queryLower) ||
          p.clienteNombre.toLowerCase().includes(queryLower) ||
          p.telefono.includes(query) ||
          p.clienteId.includes(query)
        );
      },
      
      // ============================================
      // ESTADÍSTICAS
      // ============================================
      
      getTotalPedidos: () => {
        return get().pedidos.length;
      },
      
      getPedidosPendientes: () => {
        return get().pedidos.filter(p => p.estado === 'pendiente').length;
      },
      
      getPedidosCompletados: () => {
        return get().pedidos.filter(p => p.estado === 'completado').length;
      },
      
      getPedidosCancelados: () => {
        return get().pedidos.filter(p => p.estado === 'cancelado').length;
      },
      
      getMontoTotal: () => {
        return get().pedidos.reduce((sum, p) => sum + p.total, 0);
      },
      
      getMontoTotalPorEstado: (estado: string) => {
        return get().pedidos
          .filter(p => p.estado === estado)
          .reduce((sum, p) => sum + p.total, 0);
      },
    }),
    {
      name: 'pedido-cliente-storage',
      version: 1,
    }
  )
);
