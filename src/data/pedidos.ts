// Mock data para demostración
import type { OrdenCompra } from '../types/ordenCompra';

export const ordenesCompraIniciales: OrdenCompra[] = [
  {
    id: 'oc-001',
    numeroOrden: 'OC-2025-0001',
    proveedorId: 'prov-001',
    proveedorNombre: 'Distribuidora Central SA',
    fecha: '2025-11-20',
    fechaEntregaEstimada: '2025-11-22',
    estado: 'Recibida Completa',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        codigoBarras: '7790001001011',
        cantidadSolicitada: 50,
        cantidadRecibida: 50,
        precioUnitario: 1250.00,
        subtotal: 62500.00
      }
    ],
    subtotal: 62500.00,
    iva: 13125.00,
    total: 75625.00,
    observaciones: 'Entrega completada',
    generadaAutomaticamente: false,
    fechaEnvio: '2025-11-20',
    fechaRecepcion: '2025-11-22',
    createdBy: 'admin',
    createdAt: '2025-11-20T10:00:00'
  },
  {
    id: 'oc-002',
    numeroOrden: 'OC-2025-0002',
    proveedorId: 'prov-003',
    proveedorNombre: 'Coca Cola FEMSA',
    fecha: '2025-11-25',
    fechaEntregaEstimada: '2025-11-26',
    estado: 'Recibida Completa',
    items: [
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        codigoBarras: '7790001001035',
        cantidadSolicitada: 120,
        cantidadRecibida: 120,
        precioUnitario: 980.00,
        subtotal: 117600.00
      }
    ],
    subtotal: 117600.00,
    iva: 24696.00,
    total: 142296.00,
    observaciones: 'Entrega puntual',
    generadaAutomaticamente: false,
    fechaEnvio: '2025-11-25',
    fechaRecepcion: '2025-11-26',
    createdBy: 'admin',
    createdAt: '2025-11-25T08:30:00'
  },
  {
    id: 'oc-003',
    numeroOrden: 'OC-2025-0003',
    proveedorId: 'prov-002',
    proveedorNombre: 'Molino San José',
    fecha: '2025-11-27',
    fechaEntregaEstimada: '2025-12-02',
    estado: 'Confirmada',
    items: [
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        codigoBarras: '7790001001028',
        cantidadSolicitada: 100,
        cantidadRecibida: 0,
        precioUnitario: 580.00,
        subtotal: 58000.00
      },
      {
        productoId: 'prod-008',
        productoNombre: 'Fideos Tirabuzón 500g',
        codigoBarras: '7790001001080',
        cantidadSolicitada: 150,
        cantidadRecibida: 0,
        precioUnitario: 340.00,
        subtotal: 51000.00
      }
    ],
    subtotal: 109000.00,
    iva: 22890.00,
    total: 131890.00,
    observaciones: 'Pendiente de entrega',
    generadaAutomaticamente: true,
    fechaEnvio: '2025-11-27',
    fechaRecepcion: undefined,
    createdBy: 'sistema',
    createdAt: '2025-11-27T15:00:00'
  },
  {
    id: 'oc-004',
    numeroOrden: 'OC-2025-0004',
    proveedorId: 'prov-004',
    proveedorNombre: 'Mastellone Hermanos SA',
    fecha: '2025-11-28',
    fechaEntregaEstimada: '2025-11-30',
    estado: 'Enviada',
    items: [
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        codigoBarras: '7790001001042',
        cantidadSolicitada: 200,
        cantidadRecibida: 0,
        precioUnitario: 620.00,
        subtotal: 124000.00
      },
      {
        productoId: 'prod-010',
        productoNombre: 'Yogur Entero 1kg',
        codigoBarras: '7790001001103',
        cantidadSolicitada: 80,
        cantidadRecibida: 0,
        precioUnitario: 890.00,
        subtotal: 71200.00
      }
    ],
    subtotal: 195200.00,
    iva: 40992.00,
    total: 236192.00,
    observaciones: 'En tránsito',
    generadaAutomaticamente: true,
    fechaEnvio: '2025-11-28',
    fechaRecepcion: undefined,
    createdBy: 'sistema',
    createdAt: '2025-11-28T09:00:00'
  }
];
