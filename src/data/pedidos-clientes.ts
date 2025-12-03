// Mock data para demostración
import type { PedidoCliente } from '../types/pedido-cliente';

export const pedidosClientes: PedidoCliente[] = [
  {
    id: 'ped-001',
    fechaPedido: '2024-12-02',
    fechaEntrega: '2024-12-03',
    clienteId: 'cli-005',
    clienteNombre: 'Minimarket Central',
    estado: 'Pendiente',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        codigoBarras: '7790001001011',
        cantidad: 15,
        precioUnitario: 1890.00,
        descuento: 4,
        subtotal: 27216.00
      },
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        codigoBarras: '7790001001028',
        cantidad: 20,
        precioUnitario: 890.00,
        descuento: 4,
        subtotal: 17088.00
      }
    ],
    subtotal: 44304.00,
    descuento: 0,
    iva: 9303.84,
    total: 53607.84,
    observaciones: 'Entrega mañana temprano',
    generadoAutomaticamente: false
  },
  {
    id: 'ped-002',
    fechaPedido: '2024-12-02',
    fechaEntrega: '2024-12-04',
    clienteId: 'cli-007',
    clienteNombre: 'Almacén El Progreso',
    estado: 'Confirmado',
    items: [
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        codigoBarras: '7790001001035',
        cantidad: 24,
        precioUnitario: 1550.00,
        descuento: 3.5,
        subtotal: 35892.00
      },
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        codigoBarras: '7790001001097',
        cantidad: 36,
        precioUnitario: 650.00,
        descuento: 3.5,
        subtotal: 22581.00
      }
    ],
    subtotal: 58473.00,
    descuento: 0,
    iva: 12279.33,
    total: 70752.33,
    observaciones: 'Pedido semanal',
    generadoAutomaticamente: false
  },
  {
    id: 'ped-003',
    fechaPedido: '2024-12-02',
    fechaEntrega: '2024-12-05',
    clienteId: 'cli-004',
    clienteNombre: 'Distribuidora Norte',
    estado: 'Confirmado',
    items: [
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        codigoBarras: '7790001001042',
        cantidad: 120,
        precioUnitario: 950.00,
        descuento: 8,
        subtotal: 104880.00
      },
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        codigoBarras: '7790001001073',
        cantidad: 96,
        precioUnitario: 750.00,
        descuento: 8,
        subtotal: 66240.00
      }
    ],
    subtotal: 171120.00,
    descuento: 0,
    iva: 35935.20,
    total: 207055.20,
    observaciones: 'Pedido grande distribuidor',
    generadoAutomaticamente: false
  }
];
