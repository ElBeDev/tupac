// Mock data para demostración
import type { Venta } from '../types/venta';

export const ventasIniciales: Venta[] = [
  {
    id: 'vta-001',
    numeroFactura: 'FAC-0001',
    clienteId: 'cli-001',
    clienteNombre: 'Almacén Don Pedro',
    fecha: '2025-11-25',
    hora: '10:30',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        codigoBarras: '7790001001011',
        cantidad: 12,
        precioUnitario: 1890.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 21546.00
      },
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        codigoBarras: '7790001001042',
        cantidad: 24,
        precioUnitario: 950.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 21660.00
      },
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        codigoBarras: '7790001001035',
        cantidad: 18,
        precioUnitario: 1550.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 26505.00
      }
    ],
    subtotal: 69711.00,
    descuentoGlobal: 0,
    iva21: 14639.31,
    total: 84350.31,
    metodoPago: 'Cuenta Corriente',
    estado: 'Confirmada',
    observaciones: 'Pedido quincenal habitual',
    vendedor: 'Sistema',
    fechaPago: undefined,
    createdBy: 'admin',
    createdAt: '2025-11-25T10:30:00'
  },
  {
    id: 'vta-002',
    numeroFactura: 'FAC-0002',
    clienteId: 'cli-003',
    clienteNombre: 'Kiosco La Esquina',
    fecha: '2025-11-26',
    hora: '14:15',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        codigoBarras: '7790001001073',
        cantidad: 24,
        precioUnitario: 750.00,
        descuento: 2,
        alicuotaIva: 21,
        subtotal: 17640.00
      },
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        codigoBarras: '7790001001035',
        cantidad: 12,
        precioUnitario: 1550.00,
        descuento: 2,
        alicuotaIva: 21,
        subtotal: 18228.00
      },
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        codigoBarras: '7790001001097',
        cantidad: 18,
        precioUnitario: 650.00,
        descuento: 2,
        alicuotaIva: 21,
        subtotal: 11466.00
      }
    ],
    subtotal: 47334.00,
    descuentoGlobal: 0,
    iva21: 9940.14,
    total: 57274.14,
    metodoPago: 'Efectivo',
    estado: 'Pagada',
    observaciones: '',
    vendedor: 'Sistema',
    fechaPago: '2025-11-26',
    createdBy: 'admin',
    createdAt: '2025-11-26T14:15:00'
  },
  {
    id: 'vta-003',
    numeroFactura: 'FAC-0003',
    clienteId: 'cli-002',
    clienteNombre: 'Súper Economía',
    fecha: '2025-11-27',
    hora: '09:45',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        codigoBarras: '7790001001028',
        cantidad: 30,
        precioUnitario: 890.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 25881.00
      },
      {
        productoId: 'prod-008',
        productoNombre: 'Fideos Tirabuzón 500g',
        codigoBarras: '7790001001080',
        cantidad: 36,
        precioUnitario: 580.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 20260.80
      },
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        codigoBarras: '7790001001011',
        cantidad: 15,
        precioUnitario: 1890.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 27499.50
      }
    ],
    subtotal: 73641.30,
    descuentoGlobal: 0,
    iva21: 15464.67,
    total: 89105.97,
    metodoPago: 'Cuenta Corriente',
    estado: 'Confirmada',
    observaciones: 'Envío el jueves',
    vendedor: 'Sistema',
    fechaPago: undefined,
    createdBy: 'admin',
    createdAt: '2025-11-27T09:45:00'
  },
  {
    id: 'vta-004',
    numeroFactura: 'FAC-0004',
    clienteId: 'cli-004',
    clienteNombre: 'Distribuidora Norte',
    fecha: '2025-11-27',
    hora: '11:20',
    tipoFactura: 'A',
    items: [
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        codigoBarras: '7790001001042',
        cantidad: 96,
        precioUnitario: 950.00,
        descuento: 8,
        alicuotaIva: 21,
        subtotal: 83904.00
      },
      {
        productoId: 'prod-010',
        productoNombre: 'Yogur Entero 1kg',
        codigoBarras: '7790001001103',
        cantidad: 48,
        precioUnitario: 1450.00,
        descuento: 8,
        alicuotaIva: 21,
        subtotal: 64032.00
      },
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        codigoBarras: '7790001001035',
        cantidad: 60,
        precioUnitario: 1550.00,
        descuento: 8,
        alicuotaIva: 21,
        subtotal: 85560.00
      }
    ],
    subtotal: 233496.00,
    descuentoGlobal: 0,
    iva21: 49034.16,
    total: 282530.16,
    metodoPago: 'Cuenta Corriente',
    estado: 'Confirmada',
    observaciones: 'Pedido semanal distribuidor',
    vendedor: 'Sistema',
    fechaPago: undefined,
    createdBy: 'admin',
    createdAt: '2025-11-27T11:20:00'
  },
  {
    id: 'vta-005',
    numeroFactura: 'FAC-0005',
    clienteId: 'cli-005',
    clienteNombre: 'Minimarket Central',
    fecha: '2025-11-28',
    hora: '08:30',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-005',
        productoNombre: 'Pan Lactal Blanco',
        codigoBarras: '7790001001059',
        cantidad: 20,
        precioUnitario: 1280.00,
        descuento: 4,
        alicuotaIva: 21,
        subtotal: 24576.00
      },
      {
        productoId: 'prod-006',
        productoNombre: 'Detergente Líquido 750ml',
        codigoBarras: '7790001001066',
        cantidad: 12,
        precioUnitario: 2100.00,
        descuento: 4,
        alicuotaIva: 21,
        subtotal: 24192.00
      },
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        codigoBarras: '7790001001097',
        cantidad: 30,
        precioUnitario: 650.00,
        descuento: 4,
        alicuotaIva: 21,
        subtotal: 18720.00
      }
    ],
    subtotal: 67488.00,
    descuentoGlobal: 0,
    iva21: 14172.48,
    total: 81660.48,
    metodoPago: 'Transferencia',
    estado: 'Pagada',
    observaciones: '',
    vendedor: 'Sistema',
    fechaPago: '2025-11-28',
    createdBy: 'admin',
    createdAt: '2025-11-28T08:30:00'
  },
  {
    id: 'vta-006',
    numeroFactura: 'FAC-0006',
    clienteId: 'cli-006',
    clienteNombre: 'Despensa La Moderna',
    fecha: '2025-11-28',
    hora: '15:45',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        codigoBarras: '7790001001028',
        cantidad: 10,
        precioUnitario: 890.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 8900.00
      },
      {
        productoId: 'prod-008',
        productoNombre: 'Fideos Tirabuzón 500g',
        codigoBarras: '7790001001080',
        cantidad: 15,
        precioUnitario: 580.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 8700.00
      },
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        codigoBarras: '7790001001073',
        cantidad: 12,
        precioUnitario: 750.00,
        descuento: 0,
        alicuotaIva: 21,
        subtotal: 9000.00
      }
    ],
    subtotal: 26600.00,
    descuentoGlobal: 0,
    iva21: 5586.00,
    total: 32186.00,
    metodoPago: 'Efectivo',
    estado: 'Pagada',
    observaciones: 'Cliente nuevo',
    vendedor: 'Sistema',
    fechaPago: '2025-11-28',
    createdBy: 'admin',
    createdAt: '2025-11-28T15:45:00'
  },
  {
    id: 'vta-007',
    numeroFactura: 'FAC-0007',
    clienteId: 'cli-007',
    clienteNombre: 'Almacén El Progreso',
    fecha: '2025-11-29',
    hora: '10:00',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-001',
        productoNombre: 'Aceite Girasol 1.5L',
        codigoBarras: '7790001001011',
        cantidad: 18,
        precioUnitario: 1890.00,
        descuento: 3.5,
        alicuotaIva: 21,
        subtotal: 32819.10
      },
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        codigoBarras: '7790001001042',
        cantidad: 36,
        precioUnitario: 950.00,
        descuento: 3.5,
        alicuotaIva: 21,
        subtotal: 32994.00
      },
      {
        productoId: 'prod-005',
        productoNombre: 'Pan Lactal Blanco',
        codigoBarras: '7790001001059',
        cantidad: 24,
        precioUnitario: 1280.00,
        descuento: 3.5,
        alicuotaIva: 21,
        subtotal: 29625.60
      }
    ],
    subtotal: 95438.70,
    descuentoGlobal: 0,
    iva21: 20042.13,
    total: 115480.83,
    metodoPago: 'Cuenta Corriente',
    estado: 'Confirmada',
    observaciones: 'Pedido quincenal',
    vendedor: 'Sistema',
    fechaPago: undefined,
    createdBy: 'admin',
    createdAt: '2025-11-29T10:00:00'
  },
  {
    id: 'vta-008',
    numeroFactura: 'FAC-0008',
    clienteId: 'cli-008',
    clienteNombre: 'Autoservicio Las Flores',
    fecha: '2025-11-30',
    hora: '09:15',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-003',
        productoNombre: 'Coca Cola 2.25L',
        codigoBarras: '7790001001035',
        cantidad: 24,
        precioUnitario: 1550.00,
        descuento: 6,
        alicuotaIva: 21,
        subtotal: 34992.00
      },
      {
        productoId: 'prod-007',
        productoNombre: 'Papas Fritas 150g',
        codigoBarras: '7790001001073',
        cantidad: 36,
        precioUnitario: 750.00,
        descuento: 6,
        alicuotaIva: 21,
        subtotal: 25380.00
      },
      {
        productoId: 'prod-009',
        productoNombre: 'Agua Mineral 2L',
        codigoBarras: '7790001001097',
        cantidad: 48,
        precioUnitario: 650.00,
        descuento: 6,
        alicuotaIva: 21,
        subtotal: 29376.00
      }
    ],
    subtotal: 89748.00,
    descuentoGlobal: 0,
    iva21: 18847.08,
    total: 108595.08,
    metodoPago: 'Cuenta Corriente',
    estado: 'Confirmada',
    observaciones: '',
    vendedor: 'Sistema',
    fechaPago: undefined,
    createdBy: 'admin',
    createdAt: '2025-11-30T09:15:00'
  },
  {
    id: 'vta-009',
    numeroFactura: 'FAC-0009',
    clienteId: 'cli-001',
    clienteNombre: 'Almacén Don Pedro',
    fecha: '2025-12-01',
    hora: '11:30',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-006',
        productoNombre: 'Detergente Líquido 750ml',
        codigoBarras: '7790001001066',
        cantidad: 15,
        precioUnitario: 2100.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 29925.00
      },
      {
        productoId: 'prod-010',
        productoNombre: 'Yogur Entero 1kg',
        codigoBarras: '7790001001103',
        cantidad: 18,
        precioUnitario: 1450.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 24795.00
      },
      {
        productoId: 'prod-008',
        productoNombre: 'Fideos Tirabuzón 500g',
        codigoBarras: '7790001001080',
        cantidad: 30,
        precioUnitario: 580.00,
        descuento: 5,
        alicuotaIva: 21,
        subtotal: 16530.00
      }
    ],
    subtotal: 71250.00,
    descuentoGlobal: 0,
    iva21: 14962.50,
    total: 86212.50,
    metodoPago: 'Cuenta Corriente',
    estado: 'Confirmada',
    observaciones: '',
    vendedor: 'Sistema',
    fechaPago: undefined,
    createdBy: 'admin',
    createdAt: '2025-12-01T11:30:00'
  },
  {
    id: 'vta-010',
    numeroFactura: 'FAC-0010',
    clienteId: 'cli-002',
    clienteNombre: 'Súper Economía',
    fecha: '2025-12-01',
    hora: '14:20',
    tipoFactura: 'B',
    items: [
      {
        productoId: 'prod-004',
        productoNombre: 'Leche Entera 1L',
        codigoBarras: '7790001001042',
        cantidad: 48,
        precioUnitario: 950.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 44256.00
      },
      {
        productoId: 'prod-005',
        productoNombre: 'Pan Lactal Blanco',
        codigoBarras: '7790001001059',
        cantidad: 18,
        precioUnitario: 1280.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 22348.80
      },
      {
        productoId: 'prod-002',
        productoNombre: 'Arroz Largo Fino 1kg',
        codigoBarras: '7790001001028',
        cantidad: 24,
        precioUnitario: 890.00,
        descuento: 3,
        alicuotaIva: 21,
        subtotal: 20740.80
      }
    ],
    subtotal: 87345.60,
    descuentoGlobal: 0,
    iva21: 18342.58,
    total: 105688.18,
    metodoPago: 'Transferencia',
    estado: 'Pagada',
    observaciones: 'Pago inmediato',
    vendedor: 'Sistema',
    fechaPago: '2025-12-01',
    createdBy: 'admin',
    createdAt: '2025-12-01T14:20:00'
  }
];
