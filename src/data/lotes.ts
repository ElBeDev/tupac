// Mock data para demostración
import type { Lote } from '../types';

export const lotes: Lote[] = [
  {
    id: 'lote-001',
    productoId: 'prod-004',
    productoNombre: 'Leche Entera 1L',
    numeroLote: 'L-2024-1120',
    fechaProduccion: '2024-11-20',
    fechaIngreso: '2024-11-22',
    fechaVencimiento: '2025-01-20',
    cantidadInicial: 200,
    cantidadActual: 104,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-002',
    productoId: 'prod-010',
    productoNombre: 'Yogur Entero 1kg',
    numeroLote: 'L-2024-1125',
    fechaProduccion: '2024-11-25',
    fechaIngreso: '2024-11-26',
    fechaVencimiento: '2024-12-25',
    cantidadInicial: 60,
    cantidadActual: 0,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-003',
    productoId: 'prod-005',
    productoNombre: 'Pan Lactal Blanco',
    numeroLote: 'L-2024-1128',
    fechaProduccion: '2024-11-28',
    fechaIngreso: '2024-11-28',
    fechaVencimiento: '2024-12-12',
    cantidadInicial: 50,
    cantidadActual: 6,
    estado: 'PROXIMO_VENCER'
  },
  {
    id: 'lote-004',
    productoId: 'prod-001',
    productoNombre: 'Aceite Girasol 1.5L',
    numeroLote: 'L-2024-1115',
    fechaProduccion: '2024-11-10',
    fechaIngreso: '2024-11-15',
    fechaVencimiento: '2025-11-10',
    cantidadInicial: 100,
    cantidadActual: 5,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-005',
    productoId: 'prod-003',
    numeroLote: 'L-2024-1125',
    productoNombre: 'Coca Cola 2.25L',
    fechaProduccion: '2024-11-20',
    fechaIngreso: '2024-11-25',
    fechaVencimiento: '2025-05-20',
    cantidadInicial: 150,
    cantidadActual: 54,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-006',
    productoId: 'prod-002',
    productoNombre: 'Arroz Largo Fino 1kg',
    numeroLote: 'L-2024-1110',
    fechaProduccion: '2024-11-05',
    fechaIngreso: '2024-11-10',
    fechaVencimiento: '2026-11-05',
    cantidadInicial: 80,
    cantidadActual: 18,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-007',
    productoId: 'prod-008',
    productoNombre: 'Fideos Tirabuzón 500g',
    numeroLote: 'L-2024-1118',
    fechaProduccion: '2024-11-15',
    fechaIngreso: '2024-11-18',
    fechaVencimiento: '2026-05-15',
    cantidadInicial: 120,
    cantidadActual: 84,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-008',
    productoId: 'prod-009',
    productoNombre: 'Agua Mineral 2L',
    numeroLote: 'L-2024-1120',
    fechaProduccion: '2024-11-18',
    fechaIngreso: '2024-11-20',
    fechaVencimiento: '2025-11-18',
    cantidadInicial: 200,
    cantidadActual: 76,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-009',
    productoId: 'prod-007',
    productoNombre: 'Papas Fritas 150g',
    numeroLote: 'L-2024-1122',
    fechaProduccion: '2024-11-20',
    fechaIngreso: '2024-11-22',
    fechaVencimiento: '2025-02-20',
    cantidadInicial: 150,
    cantidadActual: 78,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-010',
    productoId: 'prod-006',
    productoNombre: 'Detergente Líquido 750ml',
    numeroLote: 'L-2024-1115',
    fechaProduccion: '2024-11-10',
    fechaIngreso: '2024-11-15',
    fechaVencimiento: '2026-11-10',
    cantidadInicial: 60,
    cantidadActual: 34,
    estado: 'ACTIVO'
  }
];
