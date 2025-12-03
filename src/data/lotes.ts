// Mock data para demostración - Fecha del sistema: 03/05/2018
import type { Lote } from '../types';

export const lotes: Lote[] = [
  {
    id: 'lote-001',
    productoId: 'prod-004',
    productoNombre: 'Leche Entera 1L',
    numeroLote: 'L-2018-0425',
    fechaProduccion: '2018-04-25',
    fechaIngreso: '2018-04-26',
    fechaVencimiento: '2018-05-25',
    cantidadInicial: 200,
    cantidadActual: 32,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-002',
    productoId: 'prod-010',
    productoNombre: 'Yogur Entero 1kg',
    numeroLote: 'L-2018-0428',
    fechaProduccion: '2018-04-28',
    fechaIngreso: '2018-04-28',
    fechaVencimiento: '2018-05-08',
    cantidadInicial: 60,
    cantidadActual: 38,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-003',
    productoId: 'prod-005',
    productoNombre: 'Pan Lactal Blanco',
    numeroLote: 'L-2018-0420',
    fechaProduccion: '2018-04-30',
    fechaIngreso: '2018-05-01',
    fechaVencimiento: '2018-05-05',
    cantidadInicial: 50,
    cantidadActual: 45,
    estado: 'PROXIMO_VENCER'
  },
  {
    id: 'lote-004',
    productoId: 'prod-001',
    productoNombre: 'Aceite Girasol 1.5L',
    numeroLote: 'L-2018-0315',
    fechaProduccion: '2018-03-15',
    fechaIngreso: '2018-03-20',
    fechaVencimiento: '2019-03-15',
    cantidadInicial: 100,
    cantidadActual: 5,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-005',
    productoId: 'prod-003',
    numeroLote: 'L-2018-0410',
    productoNombre: 'Coca Cola 2.25L',
    fechaProduccion: '2018-04-10',
    fechaIngreso: '2018-04-15',
    fechaVencimiento: '2018-10-10',
    cantidadInicial: 150,
    cantidadActual: 54,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-006',
    productoId: 'prod-002',
    productoNombre: 'Arroz Largo Fino 1kg',
    numeroLote: 'L-2018-0301',
    fechaProduccion: '2018-03-01',
    fechaIngreso: '2018-03-05',
    fechaVencimiento: '2020-03-01',
    cantidadInicial: 80,
    cantidadActual: 12,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-007',
    productoId: 'prod-008',
    productoNombre: 'Fideos Tirabuzón 500g',
    numeroLote: 'L-2018-0418',
    fechaProduccion: '2018-04-18',
    fechaIngreso: '2018-04-20',
    fechaVencimiento: '2019-10-18',
    cantidadInicial: 120,
    cantidadActual: 84,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-008',
    productoId: 'prod-009',
    productoNombre: 'Agua Mineral 2L',
    numeroLote: 'L-2018-0420',
    fechaProduccion: '2018-04-20',
    fechaIngreso: '2018-04-22',
    fechaVencimiento: '2019-04-20',
    cantidadInicial: 200,
    cantidadActual: 76,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-009',
    productoId: 'prod-007',
    productoNombre: 'Papas Fritas 150g',
    numeroLote: 'L-2018-0425',
    fechaProduccion: '2018-04-25',
    fechaIngreso: '2018-04-26',
    fechaVencimiento: '2018-07-25',
    cantidadInicial: 150,
    cantidadActual: 48,
    estado: 'ACTIVO'
  },
  {
    id: 'lote-010',
    productoId: 'prod-006',
    productoNombre: 'Detergente Líquido 750ml',
    numeroLote: 'L-2018-0315',
    fechaProduccion: '2018-03-15',
    fechaIngreso: '2018-03-20',
    fechaVencimiento: '2020-03-15',
    cantidadInicial: 60,
    cantidadActual: 34,
    estado: 'ACTIVO'
  }
];
