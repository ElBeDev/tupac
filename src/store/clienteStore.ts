import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Cliente } from '../types/cliente';
import { clientes as clientesIniciales } from '../data/clientes';

interface ClienteStore {
  clientes: Cliente[];
  
  // Clientes CRUD
  addCliente: (cliente: Omit<Cliente, 'id' | 'fechaAlta' | 'totalComprado'>) => void;
  updateCliente: (id: string, cliente: Partial<Cliente>) => void;
  deleteCliente: (id: string) => void;
  getClienteById: (id: string) => Cliente | undefined;
  getClientesActivos: () => Cliente[];
  getClientesByCategoria: (categoria: string) => Cliente[];
  
  // Cuenta corriente
  actualizarSaldoDeuda: (clienteId: string, monto: number) => void;
  registrarPago: (clienteId: string, monto: number) => void;
  registrarCompra: (clienteId: string, monto: number) => void;
  getClientesConDeuda: () => Cliente[];
  getClientesConDeudaVencida: () => Cliente[];
  
  // Análisis
  getTopClientes: (limit?: number) => Cliente[];
  getCreditoDisponible: (clienteId: string) => number;
  getTotalDeudas: () => number;
}

export const useClienteStore = create<ClienteStore>()(
  persist(
    (set, get) => ({
      clientes: clientesIniciales,

      addCliente: (clienteData) => {
        const nuevoCliente: Cliente = {
          ...clienteData,
          id: `cli-${Date.now()}`,
          fechaAlta: new Date().toISOString().split('T')[0],
          totalComprado: 0,
        };
        set((state) => ({
          clientes: [...state.clientes, nuevoCliente],
        }));
      },

      updateCliente: (id, clienteData) => {
        set((state) => ({
          clientes: state.clientes.map((c) =>
            c.id === id ? { ...c, ...clienteData } : c
          ),
        }));
      },

      deleteCliente: (id) => {
        set((state) => ({
          clientes: state.clientes.filter((c) => c.id !== id),
        }));
      },

      getClienteById: (id) => {
        return get().clientes.find((c) => c.id === id);
      },

      getClientesActivos: () => {
        return get().clientes.filter((c) => c.activo);
      },

      getClientesByCategoria: (categoria) => {
        return get().clientes.filter((c) => c.categoria === categoria);
      },

      actualizarSaldoDeuda: (clienteId, monto) => {
        set((state) => ({
          clientes: state.clientes.map((c) =>
            c.id === clienteId
              ? { ...c, saldoDeuda: (c.saldoDeuda || c.saldoActual || 0) + monto }
              : c
          ),
        }));
      },

      registrarPago: (clienteId, monto) => {
        set((state) => ({
          clientes: state.clientes.map((c) =>
            c.id === clienteId
              ? { 
                  ...c, 
                  saldoDeuda: Math.max(0, (c.saldoDeuda || c.saldoActual || 0) - monto),
                  ultimaCompra: new Date().toISOString().split('T')[0]
                }
              : c
          ),
        }));
      },

      registrarCompra: (clienteId, monto) => {
        set((state) => ({
          clientes: state.clientes.map((c) =>
            c.id === clienteId
              ? { 
                  ...c, 
                  totalComprado: (c.totalComprado || 0) + monto,
                  ultimaCompra: new Date().toISOString().split('T')[0]
                }
              : c
          ),
        }));
      },

      getClientesConDeuda: () => {
        return get().clientes.filter((c) => (c.saldoDeuda || c.saldoActual || 0) > 0);
      },

      getClientesConDeudaVencida: () => {
        // Por ahora simplificado: clientes con deuda > límite o categoría Moroso
        return get().clientes.filter(
          (c) => (c.saldoDeuda || c.saldoActual || 0) > c.limiteCredito || c.categoria === 'Moroso'
        );
      },

      getTopClientes: (limit = 10) => {
        return [...get().clientes]
          .sort((a, b) => (b.totalComprado || 0) - (a.totalComprado || 0))
          .slice(0, limit);
      },

      getCreditoDisponible: (clienteId) => {
        const cliente = get().getClienteById(clienteId);
        if (!cliente) return 0;
        return Math.max(0, cliente.limiteCredito - (cliente.saldoDeuda || cliente.saldoActual || 0));
      },

      getTotalDeudas: () => {
        return get().clientes.reduce((total, c) => total + (c.saldoDeuda || c.saldoActual || 0), 0);
      },
    }),
    {
      name: 'cliente-storage-v3-real-csv', // Cambiado para forzar recarga de datos reales del CSV
    }
  )
);
