// Mock data para demostración - Fecha del sistema: 03/12/2025
import type { Lote } from '../types';

export const lotes: Lote[] = [
  {
    id: 'lote-001',
    productoId: 'prod-004',
    productoNombre: 'Leche Entera 1L',
    numeroLote: 'L-2025-1125',
    fechaProduccion: '2025-11-25',
    fechaIngreso: '2025-11-26',
    fechaVencimiento: '2025-12-10',
    cantidadInicial: 200,
    cantidadActual: 32,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-002',
    productoId: 'prod-010',
    productoNombre: 'Yogur Entero 1kg',
    numeroLote: 'L-2025-1128',
    fechaProduccion: '2025-11-28',
    fechaIngreso: '2025-11-28',
    fechaVencimiento: '2025-12-06',
    cantidadInicial: 60,
    cantidadActual: 38,
    estado: 'PROXIMO_VENCER'
  },
  {
    id: 'lote-003',
    productoId: 'prod-005',
    productoNombre: 'Pan Lactal Blanco',
    numeroLote: 'L-2025-1201',
    fechaProduccion: '2025-12-01',
    fechaIngreso: '2025-12-01',
    fechaVencimiento: '2025-12-08',
    cantidadInicial: 50,
    cantidadActual: 45,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-004',
    productoId: 'prod-001',
    productoNombre: 'Aceite Girasol 1.5L',
    numeroLote: 'L-2025-1015',
    fechaProduccion: '2025-10-15',
    fechaIngreso: '2025-10-20',
    fechaVencimiento: '2026-10-15',
    cantidadInicial: 100,
    cantidadActual: 5,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-005',
    productoId: 'prod-003',
    numeroLote: 'L-2025-1110',
    productoNombre: 'Coca Cola 2.25L',
    fechaProduccion: '2025-11-10',
    fechaIngreso: '2025-11-15',
    fechaVencimiento: '2026-05-10',
    cantidadInicial: 150,
    cantidadActual: 54,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-006',
    productoId: 'prod-002',
    productoNombre: 'Arroz Largo Fino 1kg',
    numeroLote: 'L-2025-0901',
    fechaProduccion: '2025-09-01',
    fechaIngreso: '2025-09-05',
    fechaVencimiento: '2026-09-01',
    cantidadInicial: 80,
    cantidadActual: 12,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-007',
    productoId: 'prod-008',
    productoNombre: 'Fideos Tirabuzón 500g',
    numeroLote: 'L-2025-1018',
    fechaProduccion: '2025-10-18',
    fechaIngreso: '2025-10-20',
    fechaVencimiento: '2026-04-18',
    cantidadInicial: 120,
    cantidadActual: 84,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-008',
    productoId: 'prod-009',
    productoNombre: 'Agua Mineral 2L',
    numeroLote: 'L-2025-1120',
    fechaProduccion: '2025-11-20',
    fechaIngreso: '2025-11-22',
    fechaVencimiento: '2026-11-20',
    cantidadInicial: 200,
    cantidadActual: 76,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-009',
    productoId: 'prod-007',
    productoNombre: 'Papas Fritas 150g',
    numeroLote: 'L-2025-1125',
    fechaProduccion: '2025-11-25',
    fechaIngreso: '2025-11-26',
    fechaVencimiento: '2026-02-25',
    cantidadInicial: 150,
    cantidadActual: 48,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-010',
    productoId: 'prod-006',
    productoNombre: 'Detergente Líquido 750ml',
    numeroLote: 'L-2025-1015',
    fechaProduccion: '2025-10-15',
    fechaIngreso: '2025-10-20',
    fechaVencimiento: '2027-10-15',
    cantidadInicial: 60,
    cantidadActual: 34,
    estado: 'ACTIVO'
  }
];
