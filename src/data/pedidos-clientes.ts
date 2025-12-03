// Mock data para demostración
import type { PedidoCliente } from '../types/pedido-cliente';

export const pedidosClientes: PedidoCliente[] = [
  {
    id: 'ped-001',
    fechaPedido: '2025-12-01',
    fechaEntrega: '2025-12-02',
    clienteId: 'cli-005',
    clienteNombre: 'Minimarket Central',
    telefono: '011-4555-1234',
    plazoDias: '7',
    estado: 'pendiente',
    observaciones: 'Entrega mañana temprano',
    usuarioCarga: 'admin',
    fechaCarga: '2025-12-01',
    horaCarga: '09:30',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        orden: 1,
        cantidad: 15,
        precioUnitario: 1890.00,
        precioFinal: 1814.40,
        descuento1: 4,
        descuento2: 0,
        subtotal: 27216.00
      },
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        orden: 2,
        cantidad: 20,
        precioUnitario: 890.00,
        precioFinal: 854.40,
        descuento1: 4,
        descuento2: 0,
        subtotal: 17088.00
      }
    ],
    subtotal: 44304.00,
    descuentoTotal: 0,
    total: 44304.00
  },
  {
    id: 'ped-002',
    fechaPedido: '2025-12-01',
    fechaEntrega: '2025-12-03',
    clienteId: 'cli-007',
    clienteNombre: 'Almacén El Progreso',
    telefono: '011-4555-7890',
    plazoDias: '15',
    estado: 'completado',
    observaciones: 'Pedido semanal',
    usuarioCarga: 'ventas',
    fechaCarga: '2025-12-01',
    horaCarga: '10:15',
    items: [
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        orden: 1,
        cantidad: 24,
        precioUnitario: 1550.00,
        precioFinal: 1495.75,
        descuento1: 3.5,
        descuento2: 0,
        subtotal: 35892.00
      },
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        orden: 2,
        cantidad: 36,
        precioUnitario: 650.00,
        precioFinal: 627.25,
        descuento1: 3.5,
        descuento2: 0,
        subtotal: 22581.00
      }
    ],
    subtotal: 58473.00,
    descuentoTotal: 0,
    total: 58473.00
  },
  {
    id: 'ped-003',
    fechaPedido: '2025-12-01',
    fechaEntrega: '2025-12-04',
    clienteId: 'cli-004',
    clienteNombre: 'Distribuidora Norte',
    telefono: '011-4555-4567',
    plazoDias: '30',
    estado: 'completado',
    observaciones: 'Pedido grande distribuidor',
    usuarioCarga: 'admin',
    fechaCarga: '2025-12-01',
    horaCarga: '11:00',
    items: [
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        orden: 1,
        cantidad: 120,
        precioUnitario: 950.00,
        precioFinal: 874.00,
        descuento1: 8,
        descuento2: 0,
        subtotal: 104880.00
      },
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        orden: 2,
        cantidad: 96,
        precioUnitario: 750.00,
        precioFinal: 690.00,
        descuento1: 8,
        descuento2: 0,
        subtotal: 66240.00
      }
    ],
    subtotal: 171120.00,
    descuentoTotal: 0,
    total: 171120.00
  }
];
