// Mock data para demostración
import type { Movimiento } from '../types';

export const movimientos: Movimiento[] = [
  {
    id: 'mov-001',
    tipo: 'ENTRADA',
    fecha: '2025-11-22',
    hora: '10:00',
    numeroComprobante: 'OC-2025-0001',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Distribuidora Central SA',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        cantidad: 50,
        precioUnitario: 1250.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 62500.00
      }
    ],
    totalCantidad: 50,
    totalValor: 62500.00,
    observaciones: 'Recepción orden de compra',
    usuario: 'admin'
  },
  {
    id: 'mov-002',
    tipo: 'ENTRADA',
    fecha: '2025-11-26',
    hora: '14:30',
    numeroComprobante: 'OC-2025-0002',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Coca Cola FEMSA',
    items: [
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        cantidad: 120,
        precioUnitario: 980.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 117600.00
      }
    ],
    totalCantidad: 120,
    totalValor: 117600.00,
    observaciones: 'Recepción orden de compra',
    usuario: 'admin'
  },
  {
    id: 'mov-003',
    tipo: 'SALIDA',
    fecha: '2025-11-25',
    hora: '10:30',
    numeroComprobante: 'FAC-0001',
    tipoComprobante: 'Factura B',
    entidad: 'Almacén Don Pedro',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        cantidad: 12,
        precioUnitario: 1890.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 21546.00
      },
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        cantidad: 24,
        precioUnitario: 950.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 21660.00
      }
    ],
    totalCantidad: 36,
    totalValor: 43206.00,
    observaciones: 'Venta facturada',
    usuario: 'admin'
  },
  {
    id: 'mov-004',
    tipo: 'SALIDA',
    fecha: '2025-11-26',
    hora: '14:15',
    numeroComprobante: 'FAC-0002',
    tipoComprobante: 'Factura B',
    entidad: 'Kiosco La Esquina',
    items: [
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        cantidad: 24,
        precioUnitario: 750.00,
        descuento: 2,
        alicuotaIva: 21,
        subtotal: 17640.00
      },
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        cantidad: 12,
        precioUnitario: 1550.00,
        descuento: 2,
        alicuotaIva: 21,
        subtotal: 18228.00
      }
    ],
    totalCantidad: 36,
    totalValor: 35868.00,
    observaciones: 'Venta facturada',
    usuario: 'admin'
  },
  {
    id: 'mov-005',
    tipo: 'AJUSTE',
    fecha: '2025-11-28',
    hora: '16:00',
    numeroComprobante: 'AJ-001',
    tipoComprobante: 'Ajuste',
    entidad: 'Inventario',
    items: [
      {
        productoId: 'prod-010',
        productoNombre: 'Yogur Entero 1kg',
        cantidad: -3,
        precioUnitario: 1450.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: -4350.00
      }
    ],
    totalCantidad: -3,
    totalValor: -4350.00,
    observaciones: 'Ajuste por vencimiento',
    usuario: 'admin',
    motivo: 'Productos vencidos dados de baja'
  },
  {
    id: 'mov-006',
    tipo: 'SALIDA',
    fecha: '2025-11-27',
    hora: '09:45',
    numeroComprobante: 'FAC-0003',
    tipoComprobante: 'Factura B',
    entidad: 'Súper Economía',
    items: [
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        cantidad: 30,
        precioUnitario: 890.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 25881.00
      },
      {
        productoId: 'prod-008',
        productoNombre: 'Fideos Tirabuzón 500g',
        cantidad: 36,
        precioUnitario: 580.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 20260.80
      }
    ],
    totalCantidad: 66,
    totalValor: 46141.80,
    observaciones: 'Venta facturada',
    usuario: 'admin'
  },
  {
    id: 'mov-007',
    tipo: 'SALIDA',
    fecha: '2025-11-30',
    hora: '09:15',
    numeroComprobante: 'FAC-0008',
    tipoComprobante: 'Factura B',
    entidad: 'Autoservicio Las Flores',
    items: [
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        cantidad: 24,
        precioUnitario: 1550.00,
        descuento: 6,
        alicuotaIva: 21,
        subtotal: 34992.00
      },
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        cantidad: 48,
        precioUnitario: 650.00,
        descuento: 6,
        alicuotaIva: 21,
        subtotal: 29376.00
      }
    ],
    totalCantidad: 72,
    totalValor: 64368.00,
    observaciones: 'Venta facturada',
    usuario: 'admin'
  },
  {
    id: 'mov-008',
    tipo: 'AJUSTE',
    fecha: '2025-11-29',
    hora: '17:30',
    numeroComprobante: 'AJ-002',
    tipoComprobante: 'Ajuste',
    entidad: 'Inventario',
    items: [
      {
        productoId: 'prod-005',
        productoNombre: 'Pan Lactal Blanco',
        cantidad: -2,
        precioUnitario: 1280.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: -2560.00
      }
    ],
    totalCantidad: -2,
    totalValor: -2560.00,
    observaciones: 'Productos dañados',
    usuario: 'admin',
    motivo: 'Mercadería en mal estado'
  },
  {
    id: 'mov-009',
    tipo: 'ENTRADA',
    fecha: '2025-11-15',
    hora: '09:00',
    numeroComprobante: 'OC-2025-NOV-01',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Molino San José',
    items: [
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        cantidad: 80,
        precioUnitario: 580.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 46400.00
      },
      {
        productoId: 'prod-008',
        productoNombre: 'Fideos Tirabuzón 500g',
        cantidad: 150,
        precioUnitario: 340.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 51000.00
      }
    ],
    totalCantidad: 230,
    totalValor: 97400.00,
    observaciones: 'Recepción mensual de harinas y pastas',
    usuario: 'admin'
  },
  {
    id: 'mov-010',
    tipo: 'ENTRADA',
    fecha: '2025-11-18',
    hora: '11:30',
    numeroComprobante: 'OC-2025-NOV-02',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Danone Argentina',
    items: [
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        cantidad: 200,
        precioUnitario: 380.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 76000.00
      }
    ],
    totalCantidad: 200,
    totalValor: 76000.00,
    observaciones: 'Reposición agua mineral',
    usuario: 'admin'
  },
  {
    id: 'mov-011',
    tipo: 'ENTRADA',
    fecha: '2025-11-20',
    hora: '14:00',
    numeroComprobante: 'OC-2025-NOV-03',
    tipoComprobante: 'Orden de Compra',
    entidad: 'PepsiCo Argentina',
    items: [
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        cantidad: 150,
        precioUnitario: 420.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 63000.00
      }
    ],
    totalCantidad: 150,
    totalValor: 63000.00,
    observaciones: 'Reposición snacks',
    usuario: 'admin'
  },
  {
    id: 'mov-012',
    tipo: 'ENTRADA',
    fecha: '2025-11-15',
    hora: '10:30',
    numeroComprobante: 'OC-2025-NOV-04',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Unilever Argentina',
    items: [
      {
        productoId: 'prod-006',
        productoNombre: 'Detergente Líquido 750ml',
        cantidad: 60,
        precioUnitario: 1350.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 81000.00
      }
    ],
    totalCantidad: 60,
    totalValor: 81000.00,
    observaciones: 'Compra mensual limpieza',
    usuario: 'admin'
  },
  {
    id: 'mov-013',
    tipo: 'ENTRADA',
    fecha: '2025-11-15',
    hora: '08:00',
    numeroComprobante: 'OC-2025-NOV-05',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Distribuidora Central SA',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        cantidad: 100,
        precioUnitario: 1250.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 125000.00
      }
    ],
    totalCantidad: 100,
    totalValor: 125000.00,
    observaciones: 'Stock inicial mes noviembre',
    usuario: 'admin'
  },
  {
    id: 'mov-014',
    tipo: 'ENTRADA',
    fecha: '2025-11-28',
    hora: '09:00',
    numeroComprobante: 'OC-2025-NOV-06',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Panificadora del Norte',
    items: [
      {
        productoId: 'prod-005',
        productoNombre: 'Pan Lactal Blanco',
        cantidad: 50,
        precioUnitario: 780.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 39000.00
      }
    ],
    totalCantidad: 50,
    totalValor: 39000.00,
    observaciones: 'Reposición pan semanal',
    usuario: 'admin'
  },
  {
    id: 'mov-015',
    tipo: 'ENTRADA',
    fecha: '2025-11-26',
    hora: '10:00',
    numeroComprobante: 'OC-2025-NOV-07',
    tipoComprobante: 'Orden de Compra',
    entidad: 'Sancor CUL',
    items: [
      {
        productoId: 'prod-010',
        productoNombre: 'Yogur Entero 1kg',
        cantidad: 60,
        precioUnitario: 890.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 53400.00
      }
    ],
    totalCantidad: 60,
    totalValor: 53400.00,
    observaciones: 'Reposición yogures',
    usuario: 'admin'
  }
];
