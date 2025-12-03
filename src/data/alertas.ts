// Mock data para demostración
import type { Alerta } from '../types';

export const alertas: Alerta[] = [
  {
    id: 'alert-001',
    tipo: 'STOCK_CRITICO',
    productoId: 'prod-001',
    productoNombre: 'Aceite Girasol 1.5L',
    loteId: 'lote-004',
    loteNumero: 'L-2024-1115',
    nivelPrioridad: 'CRITICA',
    mensaje: 'Stock crítico: 5 unidades (mínimo: 20) - Requiere reposición urgente',
    leida: false,
    fechaAlerta: '2024-12-01'
  },
  {
    id: 'alert-002',
    tipo: 'STOCK_CRITICO',
    productoId: 'prod-010',
    productoNombre: 'Yogur Entero 1kg',
    loteId: 'lote-002',
    loteNumero: 'L-2024-1125',
    nivelPrioridad: 'CRITICA',
    mensaje: 'Stock agotado: 0 unidades (mínimo: 12) - Reposición URGENTE',
    leida: false,
    fechaAlerta: '2024-12-02'
  },
  {
    id: 'alert-003',
    tipo: 'STOCK_CRITICO',
    productoId: 'prod-005',
    productoNombre: 'Pan Lactal Blanco',
    loteId: 'lote-003',
    loteNumero: 'L-2024-1128',
    nivelPrioridad: 'CRITICA',
    mensaje: 'Stock crítico: 6 unidades (mínimo: 15) - Requiere reposición urgente',
    leida: false,
    fechaAlerta: '2024-12-01'
  },
  {
    id: 'alert-004',
    tipo: 'VENCIMIENTO_PROXIMO',
    productoId: 'prod-005',
    productoNombre: 'Pan Lactal Blanco',
    loteId: 'lote-003',
    loteNumero: 'L-2024-1128',
    nivelPrioridad: 'ALTA',
    mensaje: 'Producto próximo a vencer (10 días): Lote L-2024-1128 - Vencimiento: 2024-12-12',
    leida: false,
    fechaAlerta: '2024-12-02'
  },
  {
    id: 'alert-005',
    tipo: 'VENCIMIENTO_PROXIMO',
    productoId: 'prod-010',
    productoNombre: 'Yogur Entero 1kg',
    loteId: 'lote-002',
    loteNumero: 'L-2024-1125',
    nivelPrioridad: 'ALTA',
    mensaje: 'Producto próximo a vencer (23 días): Lote L-2024-1125 - Vencimiento: 2024-12-25 - Stock AGOTADO',
    leida: false,
    fechaAlerta: '2024-12-02'
  },
  {
    id: 'alert-006',
    tipo: 'STOCK_BAJO',
    productoId: 'prod-002',
    productoNombre: 'Arroz Largo Fino 1kg',
    loteId: 'lote-006',
    loteNumero: 'L-2024-1110',
    nivelPrioridad: 'MEDIA',
    mensaje: 'Stock por debajo del mínimo: 18 unidades (mínimo: 25)',
    leida: false,
    fechaAlerta: '2024-11-30'
  },
  {
    id: 'alert-007',
    tipo: 'STOCK_BAJO',
    productoId: 'prod-003',
    productoNombre: 'Coca Cola 2.25L',
    loteId: 'lote-005',
    loteNumero: 'L-2024-1125',
    nivelPrioridad: 'BAJA',
    mensaje: 'Stock cerca del mínimo: 54 unidades (mínimo: 30)',
    leida: true,
    fechaAlerta: '2024-11-28'
  }
];
