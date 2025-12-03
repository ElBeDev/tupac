import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Proveedor, ProveedorProducto } from '../types/proveedor';
import { proveedores as proveedoresIniciales, proveedorProductosIniciales } from '../data/proveedores';

interface ProveedorStore {
  proveedores: Proveedor[];
  proveedorProductos: ProveedorProducto[];
  
  // Proveedores CRUD
  addProveedor: (proveedor: Omit<Proveedor, 'id' | 'fechaAlta'>) => void;
  updateProveedor: (id: string, proveedor: Partial<Proveedor>) => void;
  deleteProveedor: (id: string) => void;
  getProveedorById: (id: string) => Proveedor | undefined;
  getProveedoresActivos: () => Proveedor[];
  
  // Relaciones producto-proveedor
  vincularProducto: (proveedorId: string, productoId: string, precioCompra: number, codigoProveedor: string, principal?: boolean) => void;
  desvincularProducto: (proveedorId: string, productoId: string) => void;
  getProveedoresByProducto: (productoId: string) => ProveedorProducto[];
  getProductosByProveedor: (proveedorId: string) => ProveedorProducto[];
  getProveedorPrincipal: (productoId: string) => ProveedorProducto | undefined;
  
  // Utilidades
  actualizarSaldoDeuda: (proveedorId: string, monto: number) => void;
  actualizarCalificacion: (proveedorId: string, calificacion: number) => void;
}

export const useProveedorStore = create<ProveedorStore>()(
  persist(
    (set, get) => ({
      proveedores: proveedoresIniciales,
      proveedorProductos: (proveedorProductosIniciales as ProveedorProducto[]).map(pp => ({
        proveedorId: pp.proveedorId,
        productoId: pp.productoId,
        precioCompra: pp.precioCompra,
        codigoProveedor: `COD-${pp.productoId}`,
        ultimaActualizacion: '2018-05-03',
        principal: pp.principal,
      })),

      addProveedor: (proveedorData) => {
        const nuevoProveedor: Proveedor = {
          ...proveedorData,
          id: `prov-${Date.now()}`,
          fechaAlta: new Date().toISOString().split('T')[0],
        };
        set((state) => ({
          proveedores: [...state.proveedores, nuevoProveedor],
        }));
      },

      updateProveedor: (id, proveedorData) => {
        set((state) => ({
          proveedores: state.proveedores.map((p) =>
            p.id === id ? { ...p, ...proveedorData } : p
          ),
        }));
      },

      deleteProveedor: (id) => {
        set((state) => ({
          proveedores: state.proveedores.filter((p) => p.id !== id),
          proveedorProductos: state.proveedorProductos.filter((pp) => pp.proveedorId !== id),
        }));
      },

      getProveedorById: (id) => {
        return get().proveedores.find((p) => p.id === id);
      },

      getProveedoresActivos: () => {
        return get().proveedores.filter((p) => p.activo);
      },

      vincularProducto: (proveedorId, productoId, precioCompra, codigoProveedor, principal = false) => {
        const nuevaVinculacion: ProveedorProducto = {
          proveedorId,
          productoId,
          precioCompra,
          codigoProveedor,
          ultimaActualizacion: new Date().toISOString().split('T')[0],
          principal,
        };

        set((state) => {
          // Si este será el principal, quitar principal de otros
          let productos = state.proveedorProductos;
          if (principal) {
            productos = productos.map((pp) =>
              pp.productoId === productoId ? { ...pp, principal: false } : pp
            );
          }

          return {
            proveedorProductos: [...productos, nuevaVinculacion],
          };
        });
      },

      desvincularProducto: (proveedorId, productoId) => {
        set((state) => ({
          proveedorProductos: state.proveedorProductos.filter(
            (pp) => !(pp.proveedorId === proveedorId && pp.productoId === productoId)
          ),
        }));
      },

      getProveedoresByProducto: (productoId) => {
        return get().proveedorProductos.filter((pp) => pp.productoId === productoId);
      },

      getProductosByProveedor: (proveedorId) => {
        return get().proveedorProductos.filter((pp) => pp.proveedorId === proveedorId);
      },

      getProveedorPrincipal: (productoId) => {
        return get().proveedorProductos.find(
          (pp) => pp.productoId === productoId && pp.principal
        );
      },

      actualizarSaldoDeuda: (proveedorId, monto) => {
        set((state) => ({
          proveedores: state.proveedores.map((p) =>
            p.id === proveedorId
              ? { ...p, saldoDeuda: (p.saldoDeuda || 0) + monto }
              : p
          ),
        }));
      },

      actualizarCalificacion: (proveedorId, calificacion) => {
        set((state) => ({
          proveedores: state.proveedores.map((p) =>
            p.id === proveedorId ? { ...p, calificacion } : p
          ),
        }));
      },
    }),
    {
      name: 'proveedor-storage-v2', // Cambiado para forzar recarga de datos reales
    }
  )
);
