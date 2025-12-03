// Mock data para demostración - Fecha del sistema: 03/05/2018
import type { Alerta } from '../types';

export const alertas: Alerta[] = [
  {
    id: 'alert-001',
    tipo: 'STOCK_CRITICO',
    productoId: 'prod-001',
    productoNombre: 'Aceite Girasol 1.5L',
    nivelPrioridad: 'CRITICA',
    mensaje: 'STOCK AGOTADO: Aceite Girasol 1.5L - Stock en CERO. Reabastecer urgente.',
    leida: false,
    fechaAlerta: '2018-05-03'
  },
  {
    id: 'alert-002',
    tipo: 'STOCK_BAJO',
    productoId: 'prod-002',
    productoNombre: 'Arroz Largo Fino 1kg',
    nivelPrioridad: 'ALTA',
    mensaje: 'Stock Bajo: Arroz Largo Fino 1kg - Stock actual: 12, Mínimo: 25',
    leida: false,
    fechaAlerta: '2018-05-03'
  },
  {
    id: 'alert-003',
    tipo: 'VENCIMIENTO_PROXIMO',
    productoId: 'prod-005',
    productoNombre: 'Pan Lactal Blanco',
    loteId: 'lote-003',
    loteNumero: 'L-2018-0420',
    nivelPrioridad: 'CRITICA',
    mensaje: 'Vence en 2 días: Lote L-2018-0420 de Pan Lactal Blanco - 45 unidades',
    leida: false,
    fechaAlerta: '2018-05-03'
  },
  {
    id: 'alert-004',
    tipo: 'VENCIMIENTO_PROXIMO',
    productoId: 'prod-010',
    productoNombre: 'Yogur Entero 1kg',
    loteId: 'lote-002',
    loteNumero: 'L-2018-0428',
    nivelPrioridad: 'ALTA',
    mensaje: 'Vence en 5 días: Lote L-2018-0428 de Yogur Entero 1kg - 38 unidades',
    leida: false,
    fechaAlerta: '2018-05-02'
  },
  {
    id: 'alert-005',
    tipo: 'STOCK_BAJO',
    productoId: 'prod-004',
    productoNombre: 'Leche Entera 1L',
    nivelPrioridad: 'MEDIA',
    mensaje: 'Stock Bajo: Leche Entera 1L - Stock actual: 32, Mínimo: 50',
    leida: false,
    fechaAlerta: '2018-05-02'
  },
  {
    id: 'alert-006',
    tipo: 'STOCK_BAJO',
    productoId: 'prod-007',
    productoNombre: 'Papas Fritas 150g',
    nivelPrioridad: 'MEDIA',
    mensaje: 'Stock Bajo: Papas Fritas 150g - Stock actual: 48, Mínimo: 60',
    leida: false,
    fechaAlerta: '2018-05-01'
  },
  {
    id: 'alert-007',
    tipo: 'STOCK_BAJO',
    productoId: 'prod-003',
    productoNombre: 'Coca Cola 2.25L',
    nivelPrioridad: 'BAJA',
    mensaje: 'Stock cerca del mínimo: Coca Cola 2.25L - Stock actual: 54, Mínimo: 30',
    leida: true,
    fechaAlerta: '2018-04-30'
  }
];
