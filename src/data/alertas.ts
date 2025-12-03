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
  {
    "id": "ALT000001",
    "tipo": "STOCK_CRITICO",
    "productoId": "50",
    "productoNombre": "Producto 50",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 50 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000002",
    "tipo": "STOCK_CRITICO",
    "productoId": "56",
    "productoNombre": "Producto 56",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 56 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000003",
    "tipo": "STOCK_BAJO",
    "productoId": "60",
    "productoNombre": "Producto 60",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 60 tiene stock bajo (4 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000004",
    "tipo": "STOCK_BAJO",
    "productoId": "68",
    "productoNombre": "Producto 68",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 68 tiene stock bajo (10 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000005",
    "tipo": "STOCK_CRITICO",
    "productoId": "177",
    "productoNombre": "Producto 177",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 177 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000006",
    "tipo": "STOCK_CRITICO",
    "productoId": "213",
    "productoNombre": "Producto 213",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 213 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000007",
    "tipo": "STOCK_BAJO",
    "productoId": "818",
    "productoNombre": "Producto 818",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 818 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000008",
    "tipo": "STOCK_CRITICO",
    "productoId": "1118",
    "productoNombre": "Producto 1118",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1118 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000009",
    "tipo": "STOCK_CRITICO",
    "productoId": "1339",
    "productoNombre": "Producto 1339",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1339 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000010",
    "tipo": "STOCK_CRITICO",
    "productoId": "1340",
    "productoNombre": "Producto 1340",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1340 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000011",
    "tipo": "STOCK_CRITICO",
    "productoId": "1550",
    "productoNombre": "Producto 1550",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1550 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000012",
    "tipo": "STOCK_CRITICO",
    "productoId": "1551",
    "productoNombre": "Producto 1551",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1551 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000013",
    "tipo": "STOCK_CRITICO",
    "productoId": "1553",
    "productoNombre": "Producto 1553",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1553 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000014",
    "tipo": "STOCK_CRITICO",
    "productoId": "1554",
    "productoNombre": "Producto 1554",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1554 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000015",
    "tipo": "STOCK_CRITICO",
    "productoId": "1581",
    "productoNombre": "Producto 1581",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1581 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000016",
    "tipo": "STOCK_CRITICO",
    "productoId": "1614",
    "productoNombre": "Producto 1614",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1614 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000017",
    "tipo": "STOCK_BAJO",
    "productoId": "1947",
    "productoNombre": "Producto 1947",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 1947 tiene stock bajo (1 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000018",
    "tipo": "STOCK_CRITICO",
    "productoId": "2461",
    "productoNombre": "Producto 2461",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2461 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000019",
    "tipo": "STOCK_BAJO",
    "productoId": "2675",
    "productoNombre": "Producto 2675",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2675 tiene stock bajo (2 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000020",
    "tipo": "STOCK_CRITICO",
    "productoId": "2676",
    "productoNombre": "Producto 2676",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2676 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000021",
    "tipo": "STOCK_BAJO",
    "productoId": "2785",
    "productoNombre": "Producto 2785",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2785 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000022",
    "tipo": "STOCK_CRITICO",
    "productoId": "2841",
    "productoNombre": "Producto 2841",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2841 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000023",
    "tipo": "STOCK_CRITICO",
    "productoId": "2843",
    "productoNombre": "Producto 2843",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2843 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000024",
    "tipo": "STOCK_CRITICO",
    "productoId": "2894",
    "productoNombre": "Producto 2894",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2894 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000025",
    "tipo": "STOCK_CRITICO",
    "productoId": "2947",
    "productoNombre": "Producto 2947",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2947 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000026",
    "tipo": "STOCK_BAJO",
    "productoId": "2981",
    "productoNombre": "Producto 2981",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2981 tiene stock bajo (10 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000027",
    "tipo": "STOCK_BAJO",
    "productoId": "2982",
    "productoNombre": "Producto 2982",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2982 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000028",
    "tipo": "STOCK_BAJO",
    "productoId": "3339",
    "productoNombre": "Producto 3339",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3339 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000029",
    "tipo": "STOCK_CRITICO",
    "productoId": "3549",
    "productoNombre": "Producto 3549",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3549 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000030",
    "tipo": "STOCK_CRITICO",
    "productoId": "3550",
    "productoNombre": "Producto 3550",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3550 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000031",
    "tipo": "STOCK_CRITICO",
    "productoId": "3552",
    "productoNombre": "Producto 3552",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3552 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000032",
    "tipo": "STOCK_CRITICO",
    "productoId": "3553",
    "productoNombre": "Producto 3553",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3553 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000033",
    "tipo": "STOCK_CRITICO",
    "productoId": "3554",
    "productoNombre": "Producto 3554",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3554 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000034",
    "tipo": "STOCK_CRITICO",
    "productoId": "3555",
    "productoNombre": "Producto 3555",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3555 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000035",
    "tipo": "STOCK_CRITICO",
    "productoId": "3556",
    "productoNombre": "Producto 3556",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3556 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000036",
    "tipo": "STOCK_CRITICO",
    "productoId": "3558",
    "productoNombre": "Producto 3558",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3558 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000037",
    "tipo": "STOCK_CRITICO",
    "productoId": "3559",
    "productoNombre": "Producto 3559",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3559 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000038",
    "tipo": "STOCK_CRITICO",
    "productoId": "3606",
    "productoNombre": "Producto 3606",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3606 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000039",
    "tipo": "STOCK_BAJO",
    "productoId": "3607",
    "productoNombre": "Producto 3607",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3607 tiene stock bajo (4 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000040",
    "tipo": "STOCK_CRITICO",
    "productoId": "4456",
    "productoNombre": "Producto 4456",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4456 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000041",
    "tipo": "STOCK_CRITICO",
    "productoId": "4785",
    "productoNombre": "Producto 4785",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4785 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000042",
    "tipo": "STOCK_BAJO",
    "productoId": "4942",
    "productoNombre": "Producto 4942",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 4942 tiene stock bajo (8 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000043",
    "tipo": "STOCK_BAJO",
    "productoId": "4981",
    "productoNombre": "Producto 4981",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 4981 tiene stock bajo (10 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000044",
    "tipo": "STOCK_CRITICO",
    "productoId": "4994",
    "productoNombre": "Producto 4994",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4994 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000045",
    "tipo": "STOCK_CRITICO",
    "productoId": "5645",
    "productoNombre": "Producto 5645",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5645 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000046",
    "tipo": "STOCK_CRITICO",
    "productoId": "6004",
    "productoNombre": "Producto 6004",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6004 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000047",
    "tipo": "STOCK_CRITICO",
    "productoId": "6005",
    "productoNombre": "Producto 6005",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6005 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000048",
    "tipo": "STOCK_CRITICO",
    "productoId": "6020",
    "productoNombre": "Producto 6020",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6020 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000049",
    "tipo": "STOCK_BAJO",
    "productoId": "6045",
    "productoNombre": "Producto 6045",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 6045 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000050",
    "tipo": "STOCK_CRITICO",
    "productoId": "6439",
    "productoNombre": "Producto 6439",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6439 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000051",
    "tipo": "STOCK_CRITICO",
    "productoId": "6441",
    "productoNombre": "Producto 6441",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6441 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000052",
    "tipo": "STOCK_CRITICO",
    "productoId": "6646",
    "productoNombre": "Producto 6646",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6646 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000053",
    "tipo": "STOCK_CRITICO",
    "productoId": "6647",
    "productoNombre": "Producto 6647",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6647 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000054",
    "tipo": "STOCK_CRITICO",
    "productoId": "6805",
    "productoNombre": "Producto 6805",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6805 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000055",
    "tipo": "STOCK_CRITICO",
    "productoId": "6915",
    "productoNombre": "Producto 6915",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6915 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000056",
    "tipo": "STOCK_BAJO",
    "productoId": "6982",
    "productoNombre": "Producto 6982",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 6982 tiene stock bajo (10 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000057",
    "tipo": "STOCK_CRITICO",
    "productoId": "6988",
    "productoNombre": "Producto 6988",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6988 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000058",
    "tipo": "STOCK_CRITICO",
    "productoId": "608",
    "productoNombre": "Producto 608",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 608 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000059",
    "tipo": "STOCK_CRITICO",
    "productoId": "1059",
    "productoNombre": "Producto 1059",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1059 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000060",
    "tipo": "STOCK_CRITICO",
    "productoId": "1064",
    "productoNombre": "Producto 1064",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1064 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000061",
    "tipo": "STOCK_BAJO",
    "productoId": "3895",
    "productoNombre": "Producto 3895",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3895 tiene stock bajo (1 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000062",
    "tipo": "STOCK_CRITICO",
    "productoId": "6635",
    "productoNombre": "Producto 6635",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6635 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000063",
    "tipo": "STOCK_CRITICO",
    "productoId": "496",
    "productoNombre": "Producto 496",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 496 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000064",
    "tipo": "STOCK_CRITICO",
    "productoId": "497",
    "productoNombre": "Producto 497",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 497 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000065",
    "tipo": "STOCK_CRITICO",
    "productoId": "1092",
    "productoNombre": "Producto 1092",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1092 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000066",
    "tipo": "STOCK_CRITICO",
    "productoId": "1093",
    "productoNombre": "Producto 1093",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1093 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000067",
    "tipo": "STOCK_CRITICO",
    "productoId": "1094",
    "productoNombre": "Producto 1094",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1094 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000068",
    "tipo": "STOCK_CRITICO",
    "productoId": "1095",
    "productoNombre": "Producto 1095",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1095 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000069",
    "tipo": "STOCK_CRITICO",
    "productoId": "1799",
    "productoNombre": "Producto 1799",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1799 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000070",
    "tipo": "STOCK_CRITICO",
    "productoId": "2216",
    "productoNombre": "Producto 2216",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2216 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000071",
    "tipo": "STOCK_CRITICO",
    "productoId": "2217",
    "productoNombre": "Producto 2217",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2217 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000072",
    "tipo": "STOCK_CRITICO",
    "productoId": "2218",
    "productoNombre": "Producto 2218",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2218 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000073",
    "tipo": "STOCK_CRITICO",
    "productoId": "3150",
    "productoNombre": "Producto 3150",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3150 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000074",
    "tipo": "STOCK_CRITICO",
    "productoId": "3153",
    "productoNombre": "Producto 3153",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3153 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000075",
    "tipo": "STOCK_CRITICO",
    "productoId": "3154",
    "productoNombre": "Producto 3154",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3154 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000076",
    "tipo": "STOCK_CRITICO",
    "productoId": "3155",
    "productoNombre": "Producto 3155",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3155 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000077",
    "tipo": "STOCK_CRITICO",
    "productoId": "3157",
    "productoNombre": "Producto 3157",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3157 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000078",
    "tipo": "STOCK_CRITICO",
    "productoId": "3158",
    "productoNombre": "Producto 3158",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3158 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000079",
    "tipo": "STOCK_CRITICO",
    "productoId": "3159",
    "productoNombre": "Producto 3159",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3159 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000080",
    "tipo": "STOCK_CRITICO",
    "productoId": "3160",
    "productoNombre": "Producto 3160",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3160 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000081",
    "tipo": "STOCK_CRITICO",
    "productoId": "3161",
    "productoNombre": "Producto 3161",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3161 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000082",
    "tipo": "STOCK_CRITICO",
    "productoId": "3163",
    "productoNombre": "Producto 3163",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3163 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000083",
    "tipo": "STOCK_BAJO",
    "productoId": "3164",
    "productoNombre": "Producto 3164",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3164 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000084",
    "tipo": "STOCK_CRITICO",
    "productoId": "3166",
    "productoNombre": "Producto 3166",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3166 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000085",
    "tipo": "STOCK_CRITICO",
    "productoId": "3167",
    "productoNombre": "Producto 3167",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3167 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000086",
    "tipo": "STOCK_CRITICO",
    "productoId": "3168",
    "productoNombre": "Producto 3168",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3168 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000087",
    "tipo": "STOCK_CRITICO",
    "productoId": "3266",
    "productoNombre": "Producto 3266",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3266 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000088",
    "tipo": "STOCK_CRITICO",
    "productoId": "3267",
    "productoNombre": "Producto 3267",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3267 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000089",
    "tipo": "STOCK_CRITICO",
    "productoId": "3268",
    "productoNombre": "Producto 3268",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3268 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000090",
    "tipo": "STOCK_CRITICO",
    "productoId": "3274",
    "productoNombre": "Producto 3274",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3274 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000091",
    "tipo": "STOCK_CRITICO",
    "productoId": "3941",
    "productoNombre": "Producto 3941",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3941 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000092",
    "tipo": "STOCK_CRITICO",
    "productoId": "3944",
    "productoNombre": "Producto 3944",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3944 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000093",
    "tipo": "STOCK_BAJO",
    "productoId": "3946",
    "productoNombre": "Producto 3946",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3946 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000094",
    "tipo": "STOCK_CRITICO",
    "productoId": "3947",
    "productoNombre": "Producto 3947",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3947 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000095",
    "tipo": "STOCK_CRITICO",
    "productoId": "3948",
    "productoNombre": "Producto 3948",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3948 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000096",
    "tipo": "STOCK_CRITICO",
    "productoId": "3951",
    "productoNombre": "Producto 3951",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3951 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000097",
    "tipo": "STOCK_CRITICO",
    "productoId": "4024",
    "productoNombre": "Producto 4024",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4024 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000098",
    "tipo": "STOCK_CRITICO",
    "productoId": "5073",
    "productoNombre": "Producto 5073",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5073 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000099",
    "tipo": "STOCK_CRITICO",
    "productoId": "5075",
    "productoNombre": "Producto 5075",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5075 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000100",
    "tipo": "STOCK_CRITICO",
    "productoId": "5076",
    "productoNombre": "Producto 5076",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5076 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000101",
    "tipo": "STOCK_CRITICO",
    "productoId": "5081",
    "productoNombre": "Producto 5081",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5081 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000102",
    "tipo": "STOCK_CRITICO",
    "productoId": "5085",
    "productoNombre": "Producto 5085",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5085 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000103",
    "tipo": "STOCK_CRITICO",
    "productoId": "5086",
    "productoNombre": "Producto 5086",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5086 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000104",
    "tipo": "STOCK_CRITICO",
    "productoId": "5087",
    "productoNombre": "Producto 5087",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5087 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000105",
    "tipo": "STOCK_CRITICO",
    "productoId": "5093",
    "productoNombre": "Producto 5093",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5093 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000106",
    "tipo": "STOCK_CRITICO",
    "productoId": "5149",
    "productoNombre": "Producto 5149",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5149 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000107",
    "tipo": "STOCK_CRITICO",
    "productoId": "5263",
    "productoNombre": "Producto 5263",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5263 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000108",
    "tipo": "STOCK_CRITICO",
    "productoId": "5568",
    "productoNombre": "Producto 5568",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5568 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000109",
    "tipo": "STOCK_CRITICO",
    "productoId": "5569",
    "productoNombre": "Producto 5569",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5569 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000110",
    "tipo": "STOCK_CRITICO",
    "productoId": "5570",
    "productoNombre": "Producto 5570",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5570 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000111",
    "tipo": "STOCK_CRITICO",
    "productoId": "5571",
    "productoNombre": "Producto 5571",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5571 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000112",
    "tipo": "STOCK_CRITICO",
    "productoId": "5641",
    "productoNombre": "Producto 5641",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5641 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000113",
    "tipo": "STOCK_CRITICO",
    "productoId": "5736",
    "productoNombre": "Producto 5736",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5736 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000114",
    "tipo": "STOCK_CRITICO",
    "productoId": "5738",
    "productoNombre": "Producto 5738",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5738 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000115",
    "tipo": "STOCK_CRITICO",
    "productoId": "5847",
    "productoNombre": "Producto 5847",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5847 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000116",
    "tipo": "STOCK_CRITICO",
    "productoId": "5849",
    "productoNombre": "Producto 5849",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5849 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000117",
    "tipo": "STOCK_CRITICO",
    "productoId": "5868",
    "productoNombre": "Producto 5868",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5868 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000118",
    "tipo": "STOCK_CRITICO",
    "productoId": "5912",
    "productoNombre": "Producto 5912",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5912 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000119",
    "tipo": "STOCK_CRITICO",
    "productoId": "6053",
    "productoNombre": "Producto 6053",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6053 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000120",
    "tipo": "STOCK_CRITICO",
    "productoId": "6119",
    "productoNombre": "Producto 6119",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6119 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000121",
    "tipo": "STOCK_CRITICO",
    "productoId": "6277",
    "productoNombre": "Producto 6277",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6277 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000122",
    "tipo": "STOCK_CRITICO",
    "productoId": "6674",
    "productoNombre": "Producto 6674",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6674 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000123",
    "tipo": "STOCK_CRITICO",
    "productoId": "7080",
    "productoNombre": "Producto 7080",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7080 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000124",
    "tipo": "STOCK_BAJO",
    "productoId": "7081",
    "productoNombre": "Producto 7081",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 7081 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000125",
    "tipo": "STOCK_CRITICO",
    "productoId": "7219",
    "productoNombre": "Producto 7219",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7219 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000126",
    "tipo": "STOCK_CRITICO",
    "productoId": "7220",
    "productoNombre": "Producto 7220",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7220 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000127",
    "tipo": "STOCK_CRITICO",
    "productoId": "7254",
    "productoNombre": "Producto 7254",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7254 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000128",
    "tipo": "STOCK_CRITICO",
    "productoId": "7255",
    "productoNombre": "Producto 7255",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7255 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000129",
    "tipo": "STOCK_CRITICO",
    "productoId": "7256",
    "productoNombre": "Producto 7256",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7256 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000130",
    "tipo": "STOCK_CRITICO",
    "productoId": "4328",
    "productoNombre": "Producto 4328",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4328 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000131",
    "tipo": "STOCK_CRITICO",
    "productoId": "5070",
    "productoNombre": "Producto 5070",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5070 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000132",
    "tipo": "STOCK_CRITICO",
    "productoId": "5071",
    "productoNombre": "Producto 5071",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5071 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000133",
    "tipo": "STOCK_CRITICO",
    "productoId": "6019",
    "productoNombre": "Producto 6019",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6019 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000134",
    "tipo": "STOCK_CRITICO",
    "productoId": "6421",
    "productoNombre": "Producto 6421",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6421 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000135",
    "tipo": "STOCK_CRITICO",
    "productoId": "3844",
    "productoNombre": "Producto 3844",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3844 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000136",
    "tipo": "STOCK_CRITICO",
    "productoId": "3846",
    "productoNombre": "Producto 3846",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3846 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000137",
    "tipo": "STOCK_CRITICO",
    "productoId": "3847",
    "productoNombre": "Producto 3847",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3847 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000138",
    "tipo": "STOCK_CRITICO",
    "productoId": "3848",
    "productoNombre": "Producto 3848",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3848 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000139",
    "tipo": "STOCK_CRITICO",
    "productoId": "12",
    "productoNombre": "Producto 12",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 12 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000140",
    "tipo": "STOCK_CRITICO",
    "productoId": "579",
    "productoNombre": "Producto 579",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 579 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000141",
    "tipo": "STOCK_CRITICO",
    "productoId": "582",
    "productoNombre": "Producto 582",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 582 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000142",
    "tipo": "STOCK_CRITICO",
    "productoId": "1091",
    "productoNombre": "Producto 1091",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1091 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000143",
    "tipo": "STOCK_CRITICO",
    "productoId": "2835",
    "productoNombre": "Producto 2835",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2835 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000144",
    "tipo": "STOCK_CRITICO",
    "productoId": "3216",
    "productoNombre": "Producto 3216",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3216 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000145",
    "tipo": "STOCK_CRITICO",
    "productoId": "3217",
    "productoNombre": "Producto 3217",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3217 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000146",
    "tipo": "STOCK_CRITICO",
    "productoId": "3723",
    "productoNombre": "Producto 3723",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3723 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000147",
    "tipo": "STOCK_CRITICO",
    "productoId": "3800",
    "productoNombre": "Producto 3800",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3800 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000148",
    "tipo": "STOCK_CRITICO",
    "productoId": "4908",
    "productoNombre": "Producto 4908",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4908 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000149",
    "tipo": "STOCK_CRITICO",
    "productoId": "7258",
    "productoNombre": "Producto 7258",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7258 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000150",
    "tipo": "STOCK_BAJO",
    "productoId": "135",
    "productoNombre": "Producto 135",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 135 tiene stock bajo (4 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000151",
    "tipo": "STOCK_BAJO",
    "productoId": "145",
    "productoNombre": "Producto 145",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 145 tiene stock bajo (9 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000152",
    "tipo": "STOCK_CRITICO",
    "productoId": "203",
    "productoNombre": "Producto 203",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 203 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000153",
    "tipo": "STOCK_CRITICO",
    "productoId": "1101",
    "productoNombre": "Producto 1101",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1101 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000154",
    "tipo": "STOCK_CRITICO",
    "productoId": "1102",
    "productoNombre": "Producto 1102",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1102 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000155",
    "tipo": "STOCK_CRITICO",
    "productoId": "1365",
    "productoNombre": "Producto 1365",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1365 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000156",
    "tipo": "STOCK_BAJO",
    "productoId": "2474",
    "productoNombre": "Producto 2474",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2474 tiene stock bajo (4 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000157",
    "tipo": "STOCK_BAJO",
    "productoId": "2706",
    "productoNombre": "Producto 2706",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2706 tiene stock bajo (2 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000158",
    "tipo": "STOCK_CRITICO",
    "productoId": "2819",
    "productoNombre": "Producto 2819",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2819 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000159",
    "tipo": "STOCK_CRITICO",
    "productoId": "4173",
    "productoNombre": "Producto 4173",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4173 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000160",
    "tipo": "STOCK_CRITICO",
    "productoId": "6244",
    "productoNombre": "Producto 6244",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6244 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000161",
    "tipo": "STOCK_CRITICO",
    "productoId": "6391",
    "productoNombre": "Producto 6391",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6391 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000162",
    "tipo": "STOCK_CRITICO",
    "productoId": "1416",
    "productoNombre": "Producto 1416",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1416 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000163",
    "tipo": "STOCK_CRITICO",
    "productoId": "631",
    "productoNombre": "Producto 631",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 631 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000164",
    "tipo": "STOCK_CRITICO",
    "productoId": "632",
    "productoNombre": "Producto 632",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 632 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000165",
    "tipo": "STOCK_CRITICO",
    "productoId": "1069",
    "productoNombre": "Producto 1069",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1069 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000166",
    "tipo": "STOCK_CRITICO",
    "productoId": "1070",
    "productoNombre": "Producto 1070",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1070 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000167",
    "tipo": "STOCK_CRITICO",
    "productoId": "1071",
    "productoNombre": "Producto 1071",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1071 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000168",
    "tipo": "STOCK_CRITICO",
    "productoId": "1317",
    "productoNombre": "Producto 1317",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1317 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000169",
    "tipo": "STOCK_CRITICO",
    "productoId": "1318",
    "productoNombre": "Producto 1318",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1318 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000170",
    "tipo": "STOCK_CRITICO",
    "productoId": "1319",
    "productoNombre": "Producto 1319",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1319 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000171",
    "tipo": "STOCK_CRITICO",
    "productoId": "1823",
    "productoNombre": "Producto 1823",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1823 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000172",
    "tipo": "STOCK_CRITICO",
    "productoId": "1825",
    "productoNombre": "Producto 1825",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1825 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000173",
    "tipo": "STOCK_CRITICO",
    "productoId": "1826",
    "productoNombre": "Producto 1826",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1826 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000174",
    "tipo": "STOCK_CRITICO",
    "productoId": "1827",
    "productoNombre": "Producto 1827",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1827 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000175",
    "tipo": "STOCK_CRITICO",
    "productoId": "2283",
    "productoNombre": "Producto 2283",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2283 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000176",
    "tipo": "STOCK_CRITICO",
    "productoId": "2284",
    "productoNombre": "Producto 2284",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2284 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000177",
    "tipo": "STOCK_CRITICO",
    "productoId": "3102",
    "productoNombre": "Producto 3102",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3102 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000178",
    "tipo": "STOCK_CRITICO",
    "productoId": "3103",
    "productoNombre": "Producto 3103",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3103 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000179",
    "tipo": "STOCK_CRITICO",
    "productoId": "3458",
    "productoNombre": "Producto 3458",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3458 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000180",
    "tipo": "STOCK_CRITICO",
    "productoId": "3459",
    "productoNombre": "Producto 3459",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3459 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000181",
    "tipo": "STOCK_CRITICO",
    "productoId": "3802",
    "productoNombre": "Producto 3802",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3802 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000182",
    "tipo": "STOCK_CRITICO",
    "productoId": "3803",
    "productoNombre": "Producto 3803",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3803 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000183",
    "tipo": "STOCK_CRITICO",
    "productoId": "3804",
    "productoNombre": "Producto 3804",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3804 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000184",
    "tipo": "STOCK_CRITICO",
    "productoId": "3882",
    "productoNombre": "Producto 3882",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3882 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000185",
    "tipo": "STOCK_CRITICO",
    "productoId": "3883",
    "productoNombre": "Producto 3883",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3883 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000186",
    "tipo": "STOCK_CRITICO",
    "productoId": "3884",
    "productoNombre": "Producto 3884",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3884 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000187",
    "tipo": "STOCK_CRITICO",
    "productoId": "3885",
    "productoNombre": "Producto 3885",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3885 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000188",
    "tipo": "STOCK_CRITICO",
    "productoId": "3886",
    "productoNombre": "Producto 3886",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3886 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000189",
    "tipo": "STOCK_CRITICO",
    "productoId": "3887",
    "productoNombre": "Producto 3887",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3887 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000190",
    "tipo": "STOCK_CRITICO",
    "productoId": "3888",
    "productoNombre": "Producto 3888",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3888 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000191",
    "tipo": "STOCK_CRITICO",
    "productoId": "4388",
    "productoNombre": "Producto 4388",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4388 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000192",
    "tipo": "STOCK_CRITICO",
    "productoId": "4544",
    "productoNombre": "Producto 4544",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4544 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000193",
    "tipo": "STOCK_CRITICO",
    "productoId": "4922",
    "productoNombre": "Producto 4922",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4922 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000194",
    "tipo": "STOCK_CRITICO",
    "productoId": "4964",
    "productoNombre": "Producto 4964",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4964 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000195",
    "tipo": "STOCK_CRITICO",
    "productoId": "4965",
    "productoNombre": "Producto 4965",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4965 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000196",
    "tipo": "STOCK_CRITICO",
    "productoId": "4970",
    "productoNombre": "Producto 4970",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4970 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000197",
    "tipo": "STOCK_CRITICO",
    "productoId": "4971",
    "productoNombre": "Producto 4971",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4971 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000198",
    "tipo": "STOCK_CRITICO",
    "productoId": "5111",
    "productoNombre": "Producto 5111",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5111 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000199",
    "tipo": "STOCK_CRITICO",
    "productoId": "5112",
    "productoNombre": "Producto 5112",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5112 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000200",
    "tipo": "STOCK_CRITICO",
    "productoId": "5113",
    "productoNombre": "Producto 5113",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5113 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000201",
    "tipo": "STOCK_CRITICO",
    "productoId": "5118",
    "productoNombre": "Producto 5118",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5118 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000202",
    "tipo": "STOCK_CRITICO",
    "productoId": "5119",
    "productoNombre": "Producto 5119",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5119 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000203",
    "tipo": "STOCK_CRITICO",
    "productoId": "5122",
    "productoNombre": "Producto 5122",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5122 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000204",
    "tipo": "STOCK_CRITICO",
    "productoId": "5123",
    "productoNombre": "Producto 5123",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5123 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000205",
    "tipo": "STOCK_CRITICO",
    "productoId": "5124",
    "productoNombre": "Producto 5124",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5124 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000206",
    "tipo": "STOCK_CRITICO",
    "productoId": "5126",
    "productoNombre": "Producto 5126",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5126 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000207",
    "tipo": "STOCK_CRITICO",
    "productoId": "5128",
    "productoNombre": "Producto 5128",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5128 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000208",
    "tipo": "STOCK_CRITICO",
    "productoId": "5129",
    "productoNombre": "Producto 5129",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5129 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000209",
    "tipo": "STOCK_CRITICO",
    "productoId": "5132",
    "productoNombre": "Producto 5132",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5132 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000210",
    "tipo": "STOCK_CRITICO",
    "productoId": "5134",
    "productoNombre": "Producto 5134",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5134 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000211",
    "tipo": "STOCK_CRITICO",
    "productoId": "5236",
    "productoNombre": "Producto 5236",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5236 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000212",
    "tipo": "STOCK_CRITICO",
    "productoId": "5237",
    "productoNombre": "Producto 5237",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5237 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000213",
    "tipo": "STOCK_CRITICO",
    "productoId": "5238",
    "productoNombre": "Producto 5238",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5238 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000214",
    "tipo": "STOCK_CRITICO",
    "productoId": "5380",
    "productoNombre": "Producto 5380",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5380 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000215",
    "tipo": "STOCK_CRITICO",
    "productoId": "5438",
    "productoNombre": "Producto 5438",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5438 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000216",
    "tipo": "STOCK_CRITICO",
    "productoId": "5439",
    "productoNombre": "Producto 5439",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5439 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000217",
    "tipo": "STOCK_CRITICO",
    "productoId": "5440",
    "productoNombre": "Producto 5440",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5440 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000218",
    "tipo": "STOCK_CRITICO",
    "productoId": "5441",
    "productoNombre": "Producto 5441",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5441 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000219",
    "tipo": "STOCK_CRITICO",
    "productoId": "5442",
    "productoNombre": "Producto 5442",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5442 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000220",
    "tipo": "STOCK_CRITICO",
    "productoId": "5448",
    "productoNombre": "Producto 5448",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5448 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000221",
    "tipo": "STOCK_CRITICO",
    "productoId": "5450",
    "productoNombre": "Producto 5450",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5450 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000222",
    "tipo": "STOCK_CRITICO",
    "productoId": "5599",
    "productoNombre": "Producto 5599",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5599 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000223",
    "tipo": "STOCK_CRITICO",
    "productoId": "5631",
    "productoNombre": "Producto 5631",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5631 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000224",
    "tipo": "STOCK_CRITICO",
    "productoId": "5662",
    "productoNombre": "Producto 5662",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5662 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000225",
    "tipo": "STOCK_CRITICO",
    "productoId": "5686",
    "productoNombre": "Producto 5686",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5686 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000226",
    "tipo": "STOCK_CRITICO",
    "productoId": "5688",
    "productoNombre": "Producto 5688",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5688 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000227",
    "tipo": "STOCK_CRITICO",
    "productoId": "5689",
    "productoNombre": "Producto 5689",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5689 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000228",
    "tipo": "STOCK_CRITICO",
    "productoId": "5776",
    "productoNombre": "Producto 5776",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5776 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000229",
    "tipo": "STOCK_CRITICO",
    "productoId": "5777",
    "productoNombre": "Producto 5777",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5777 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000230",
    "tipo": "STOCK_CRITICO",
    "productoId": "5778",
    "productoNombre": "Producto 5778",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5778 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000231",
    "tipo": "STOCK_CRITICO",
    "productoId": "5779",
    "productoNombre": "Producto 5779",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5779 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000232",
    "tipo": "STOCK_CRITICO",
    "productoId": "5780",
    "productoNombre": "Producto 5780",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5780 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000233",
    "tipo": "STOCK_CRITICO",
    "productoId": "5782",
    "productoNombre": "Producto 5782",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5782 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000234",
    "tipo": "STOCK_CRITICO",
    "productoId": "5783",
    "productoNombre": "Producto 5783",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5783 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000235",
    "tipo": "STOCK_CRITICO",
    "productoId": "5784",
    "productoNombre": "Producto 5784",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5784 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000236",
    "tipo": "STOCK_CRITICO",
    "productoId": "5785",
    "productoNombre": "Producto 5785",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5785 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000237",
    "tipo": "STOCK_CRITICO",
    "productoId": "5787",
    "productoNombre": "Producto 5787",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5787 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000238",
    "tipo": "STOCK_CRITICO",
    "productoId": "5788",
    "productoNombre": "Producto 5788",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5788 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000239",
    "tipo": "STOCK_CRITICO",
    "productoId": "5789",
    "productoNombre": "Producto 5789",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5789 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000240",
    "tipo": "STOCK_CRITICO",
    "productoId": "5790",
    "productoNombre": "Producto 5790",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5790 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000241",
    "tipo": "STOCK_CRITICO",
    "productoId": "5791",
    "productoNombre": "Producto 5791",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5791 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000242",
    "tipo": "STOCK_CRITICO",
    "productoId": "5792",
    "productoNombre": "Producto 5792",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5792 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000243",
    "tipo": "STOCK_CRITICO",
    "productoId": "5794",
    "productoNombre": "Producto 5794",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5794 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000244",
    "tipo": "STOCK_CRITICO",
    "productoId": "5796",
    "productoNombre": "Producto 5796",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5796 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000245",
    "tipo": "STOCK_CRITICO",
    "productoId": "5797",
    "productoNombre": "Producto 5797",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5797 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000246",
    "tipo": "STOCK_CRITICO",
    "productoId": "5800",
    "productoNombre": "Producto 5800",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5800 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000247",
    "tipo": "STOCK_CRITICO",
    "productoId": "5802",
    "productoNombre": "Producto 5802",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5802 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000248",
    "tipo": "STOCK_CRITICO",
    "productoId": "5882",
    "productoNombre": "Producto 5882",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5882 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000249",
    "tipo": "STOCK_CRITICO",
    "productoId": "5886",
    "productoNombre": "Producto 5886",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5886 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000250",
    "tipo": "STOCK_CRITICO",
    "productoId": "5916",
    "productoNombre": "Producto 5916",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5916 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000251",
    "tipo": "STOCK_CRITICO",
    "productoId": "5917",
    "productoNombre": "Producto 5917",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5917 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000252",
    "tipo": "STOCK_CRITICO",
    "productoId": "5997",
    "productoNombre": "Producto 5997",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5997 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000253",
    "tipo": "STOCK_CRITICO",
    "productoId": "5998",
    "productoNombre": "Producto 5998",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5998 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000254",
    "tipo": "STOCK_CRITICO",
    "productoId": "6117",
    "productoNombre": "Producto 6117",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6117 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000255",
    "tipo": "STOCK_CRITICO",
    "productoId": "6118",
    "productoNombre": "Producto 6118",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6118 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000256",
    "tipo": "STOCK_CRITICO",
    "productoId": "6240",
    "productoNombre": "Producto 6240",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6240 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000257",
    "tipo": "STOCK_CRITICO",
    "productoId": "6241",
    "productoNombre": "Producto 6241",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6241 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000258",
    "tipo": "STOCK_CRITICO",
    "productoId": "6242",
    "productoNombre": "Producto 6242",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6242 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000259",
    "tipo": "STOCK_CRITICO",
    "productoId": "6325",
    "productoNombre": "Producto 6325",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6325 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000260",
    "tipo": "STOCK_CRITICO",
    "productoId": "6328",
    "productoNombre": "Producto 6328",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6328 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000261",
    "tipo": "STOCK_CRITICO",
    "productoId": "6329",
    "productoNombre": "Producto 6329",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6329 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000262",
    "tipo": "STOCK_CRITICO",
    "productoId": "6332",
    "productoNombre": "Producto 6332",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6332 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000263",
    "tipo": "STOCK_CRITICO",
    "productoId": "6333",
    "productoNombre": "Producto 6333",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6333 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000264",
    "tipo": "STOCK_CRITICO",
    "productoId": "6334",
    "productoNombre": "Producto 6334",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6334 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000265",
    "tipo": "STOCK_CRITICO",
    "productoId": "6485",
    "productoNombre": "Producto 6485",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6485 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000266",
    "tipo": "STOCK_CRITICO",
    "productoId": "6640",
    "productoNombre": "Producto 6640",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6640 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000267",
    "tipo": "STOCK_CRITICO",
    "productoId": "6641",
    "productoNombre": "Producto 6641",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6641 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000268",
    "tipo": "STOCK_CRITICO",
    "productoId": "6642",
    "productoNombre": "Producto 6642",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6642 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000269",
    "tipo": "STOCK_CRITICO",
    "productoId": "6733",
    "productoNombre": "Producto 6733",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6733 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000270",
    "tipo": "STOCK_CRITICO",
    "productoId": "6736",
    "productoNombre": "Producto 6736",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6736 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000271",
    "tipo": "STOCK_CRITICO",
    "productoId": "6829",
    "productoNombre": "Producto 6829",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6829 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000272",
    "tipo": "STOCK_CRITICO",
    "productoId": "6831",
    "productoNombre": "Producto 6831",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6831 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000273",
    "tipo": "STOCK_CRITICO",
    "productoId": "6833",
    "productoNombre": "Producto 6833",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6833 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000274",
    "tipo": "STOCK_CRITICO",
    "productoId": "6834",
    "productoNombre": "Producto 6834",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6834 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000275",
    "tipo": "STOCK_CRITICO",
    "productoId": "6835",
    "productoNombre": "Producto 6835",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6835 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000276",
    "tipo": "STOCK_CRITICO",
    "productoId": "6839",
    "productoNombre": "Producto 6839",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6839 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000277",
    "tipo": "STOCK_CRITICO",
    "productoId": "6840",
    "productoNombre": "Producto 6840",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6840 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000278",
    "tipo": "STOCK_CRITICO",
    "productoId": "6842",
    "productoNombre": "Producto 6842",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6842 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000279",
    "tipo": "STOCK_CRITICO",
    "productoId": "7040",
    "productoNombre": "Producto 7040",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7040 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000280",
    "tipo": "STOCK_CRITICO",
    "productoId": "7150",
    "productoNombre": "Producto 7150",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7150 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000281",
    "tipo": "STOCK_CRITICO",
    "productoId": "7151",
    "productoNombre": "Producto 7151",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7151 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000282",
    "tipo": "STOCK_CRITICO",
    "productoId": "7153",
    "productoNombre": "Producto 7153",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7153 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000283",
    "tipo": "STOCK_CRITICO",
    "productoId": "7154",
    "productoNombre": "Producto 7154",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7154 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000284",
    "tipo": "STOCK_CRITICO",
    "productoId": "7155",
    "productoNombre": "Producto 7155",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7155 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000285",
    "tipo": "STOCK_CRITICO",
    "productoId": "249",
    "productoNombre": "Producto 249",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 249 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000286",
    "tipo": "STOCK_CRITICO",
    "productoId": "250",
    "productoNombre": "Producto 250",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 250 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000287",
    "tipo": "STOCK_CRITICO",
    "productoId": "251",
    "productoNombre": "Producto 251",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 251 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000288",
    "tipo": "STOCK_CRITICO",
    "productoId": "505",
    "productoNombre": "Producto 505",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 505 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000289",
    "tipo": "STOCK_CRITICO",
    "productoId": "590",
    "productoNombre": "Producto 590",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 590 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000290",
    "tipo": "STOCK_CRITICO",
    "productoId": "648",
    "productoNombre": "Producto 648",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 648 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000291",
    "tipo": "STOCK_CRITICO",
    "productoId": "649",
    "productoNombre": "Producto 649",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 649 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000292",
    "tipo": "STOCK_CRITICO",
    "productoId": "650",
    "productoNombre": "Producto 650",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 650 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000293",
    "tipo": "STOCK_CRITICO",
    "productoId": "651",
    "productoNombre": "Producto 651",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 651 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000294",
    "tipo": "STOCK_CRITICO",
    "productoId": "652",
    "productoNombre": "Producto 652",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 652 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000295",
    "tipo": "STOCK_CRITICO",
    "productoId": "1002",
    "productoNombre": "Producto 1002",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1002 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000296",
    "tipo": "STOCK_CRITICO",
    "productoId": "1004",
    "productoNombre": "Producto 1004",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1004 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000297",
    "tipo": "STOCK_CRITICO",
    "productoId": "1005",
    "productoNombre": "Producto 1005",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1005 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000298",
    "tipo": "STOCK_CRITICO",
    "productoId": "1028",
    "productoNombre": "Producto 1028",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1028 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000299",
    "tipo": "STOCK_CRITICO",
    "productoId": "1035",
    "productoNombre": "Producto 1035",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1035 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000300",
    "tipo": "STOCK_CRITICO",
    "productoId": "1036",
    "productoNombre": "Producto 1036",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1036 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000301",
    "tipo": "STOCK_CRITICO",
    "productoId": "1037",
    "productoNombre": "Producto 1037",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1037 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000302",
    "tipo": "STOCK_CRITICO",
    "productoId": "1040",
    "productoNombre": "Producto 1040",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1040 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000303",
    "tipo": "STOCK_CRITICO",
    "productoId": "1042",
    "productoNombre": "Producto 1042",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1042 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000304",
    "tipo": "STOCK_CRITICO",
    "productoId": "1607",
    "productoNombre": "Producto 1607",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1607 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000305",
    "tipo": "STOCK_CRITICO",
    "productoId": "1616",
    "productoNombre": "Producto 1616",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1616 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000306",
    "tipo": "STOCK_CRITICO",
    "productoId": "1854",
    "productoNombre": "Producto 1854",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1854 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000307",
    "tipo": "STOCK_CRITICO",
    "productoId": "1897",
    "productoNombre": "Producto 1897",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1897 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000308",
    "tipo": "STOCK_CRITICO",
    "productoId": "1898",
    "productoNombre": "Producto 1898",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1898 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000309",
    "tipo": "STOCK_CRITICO",
    "productoId": "1903",
    "productoNombre": "Producto 1903",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1903 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000310",
    "tipo": "STOCK_CRITICO",
    "productoId": "2761",
    "productoNombre": "Producto 2761",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2761 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000311",
    "tipo": "STOCK_CRITICO",
    "productoId": "2836",
    "productoNombre": "Producto 2836",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2836 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000312",
    "tipo": "STOCK_CRITICO",
    "productoId": "2837",
    "productoNombre": "Producto 2837",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2837 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000313",
    "tipo": "STOCK_CRITICO",
    "productoId": "2838",
    "productoNombre": "Producto 2838",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2838 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000314",
    "tipo": "STOCK_CRITICO",
    "productoId": "3279",
    "productoNombre": "Producto 3279",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3279 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000315",
    "tipo": "STOCK_CRITICO",
    "productoId": "3612",
    "productoNombre": "Producto 3612",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3612 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000316",
    "tipo": "STOCK_CRITICO",
    "productoId": "4078",
    "productoNombre": "Producto 4078",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4078 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000317",
    "tipo": "STOCK_CRITICO",
    "productoId": "4079",
    "productoNombre": "Producto 4079",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4079 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000318",
    "tipo": "STOCK_CRITICO",
    "productoId": "4304",
    "productoNombre": "Producto 4304",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4304 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000319",
    "tipo": "STOCK_CRITICO",
    "productoId": "4770",
    "productoNombre": "Producto 4770",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4770 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000320",
    "tipo": "STOCK_CRITICO",
    "productoId": "4771",
    "productoNombre": "Producto 4771",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4771 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000321",
    "tipo": "STOCK_CRITICO",
    "productoId": "4772",
    "productoNombre": "Producto 4772",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4772 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000322",
    "tipo": "STOCK_CRITICO",
    "productoId": "4773",
    "productoNombre": "Producto 4773",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4773 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000323",
    "tipo": "STOCK_CRITICO",
    "productoId": "4774",
    "productoNombre": "Producto 4774",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4774 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000324",
    "tipo": "STOCK_CRITICO",
    "productoId": "4909",
    "productoNombre": "Producto 4909",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4909 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000325",
    "tipo": "STOCK_CRITICO",
    "productoId": "4910",
    "productoNombre": "Producto 4910",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4910 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000326",
    "tipo": "STOCK_CRITICO",
    "productoId": "4911",
    "productoNombre": "Producto 4911",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4911 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000327",
    "tipo": "STOCK_CRITICO",
    "productoId": "5559",
    "productoNombre": "Producto 5559",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5559 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000328",
    "tipo": "STOCK_CRITICO",
    "productoId": "5560",
    "productoNombre": "Producto 5560",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5560 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000329",
    "tipo": "STOCK_CRITICO",
    "productoId": "5561",
    "productoNombre": "Producto 5561",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5561 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000330",
    "tipo": "STOCK_CRITICO",
    "productoId": "5562",
    "productoNombre": "Producto 5562",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5562 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000331",
    "tipo": "STOCK_CRITICO",
    "productoId": "5674",
    "productoNombre": "Producto 5674",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5674 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000332",
    "tipo": "STOCK_CRITICO",
    "productoId": "5853",
    "productoNombre": "Producto 5853",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5853 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000333",
    "tipo": "STOCK_CRITICO",
    "productoId": "6023",
    "productoNombre": "Producto 6023",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6023 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000334",
    "tipo": "STOCK_CRITICO",
    "productoId": "6024",
    "productoNombre": "Producto 6024",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6024 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000335",
    "tipo": "STOCK_CRITICO",
    "productoId": "6025",
    "productoNombre": "Producto 6025",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6025 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000336",
    "tipo": "STOCK_CRITICO",
    "productoId": "6216",
    "productoNombre": "Producto 6216",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6216 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000337",
    "tipo": "STOCK_CRITICO",
    "productoId": "6218",
    "productoNombre": "Producto 6218",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6218 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000338",
    "tipo": "STOCK_CRITICO",
    "productoId": "6248",
    "productoNombre": "Producto 6248",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6248 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000339",
    "tipo": "STOCK_CRITICO",
    "productoId": "6446",
    "productoNombre": "Producto 6446",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6446 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000340",
    "tipo": "STOCK_CRITICO",
    "productoId": "6447",
    "productoNombre": "Producto 6447",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6447 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000341",
    "tipo": "STOCK_CRITICO",
    "productoId": "6453",
    "productoNombre": "Producto 6453",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6453 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000342",
    "tipo": "STOCK_CRITICO",
    "productoId": "6965",
    "productoNombre": "Producto 6965",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6965 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000343",
    "tipo": "STOCK_CRITICO",
    "productoId": "6966",
    "productoNombre": "Producto 6966",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6966 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000344",
    "tipo": "STOCK_CRITICO",
    "productoId": "7096",
    "productoNombre": "Producto 7096",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7096 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000345",
    "tipo": "STOCK_CRITICO",
    "productoId": "3",
    "productoNombre": "Producto 3",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000346",
    "tipo": "STOCK_CRITICO",
    "productoId": "216",
    "productoNombre": "Producto 216",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 216 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000347",
    "tipo": "STOCK_CRITICO",
    "productoId": "280",
    "productoNombre": "Producto 280",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 280 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000348",
    "tipo": "STOCK_CRITICO",
    "productoId": "283",
    "productoNombre": "Producto 283",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 283 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000349",
    "tipo": "STOCK_CRITICO",
    "productoId": "284",
    "productoNombre": "Producto 284",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 284 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000350",
    "tipo": "STOCK_CRITICO",
    "productoId": "513",
    "productoNombre": "Producto 513",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 513 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000351",
    "tipo": "STOCK_CRITICO",
    "productoId": "1139",
    "productoNombre": "Producto 1139",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1139 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000352",
    "tipo": "STOCK_BAJO",
    "productoId": "1228",
    "productoNombre": "Producto 1228",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 1228 tiene stock bajo (9 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000353",
    "tipo": "STOCK_CRITICO",
    "productoId": "1372",
    "productoNombre": "Producto 1372",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1372 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000354",
    "tipo": "STOCK_CRITICO",
    "productoId": "1377",
    "productoNombre": "Producto 1377",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1377 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000355",
    "tipo": "STOCK_CRITICO",
    "productoId": "1822",
    "productoNombre": "Producto 1822",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1822 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000356",
    "tipo": "STOCK_CRITICO",
    "productoId": "2073",
    "productoNombre": "Producto 2073",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2073 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000357",
    "tipo": "STOCK_BAJO",
    "productoId": "2150",
    "productoNombre": "Producto 2150",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2150 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000358",
    "tipo": "STOCK_CRITICO",
    "productoId": "2190",
    "productoNombre": "Producto 2190",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2190 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000359",
    "tipo": "STOCK_BAJO",
    "productoId": "3132",
    "productoNombre": "Producto 3132",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3132 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000360",
    "tipo": "STOCK_BAJO",
    "productoId": "3786",
    "productoNombre": "Producto 3786",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3786 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000361",
    "tipo": "STOCK_CRITICO",
    "productoId": "3852",
    "productoNombre": "Producto 3852",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3852 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000362",
    "tipo": "STOCK_BAJO",
    "productoId": "3857",
    "productoNombre": "Producto 3857",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3857 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000363",
    "tipo": "STOCK_BAJO",
    "productoId": "3860",
    "productoNombre": "Producto 3860",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3860 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000364",
    "tipo": "STOCK_BAJO",
    "productoId": "3995",
    "productoNombre": "Producto 3995",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3995 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000365",
    "tipo": "STOCK_BAJO",
    "productoId": "6624",
    "productoNombre": "Producto 6624",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 6624 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000366",
    "tipo": "STOCK_CRITICO",
    "productoId": "7248",
    "productoNombre": "Producto 7248",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7248 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000367",
    "tipo": "STOCK_CRITICO",
    "productoId": "5173",
    "productoNombre": "Producto 5173",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5173 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000368",
    "tipo": "STOCK_CRITICO",
    "productoId": "5851",
    "productoNombre": "Producto 5851",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5851 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000369",
    "tipo": "STOCK_BAJO",
    "productoId": "6619",
    "productoNombre": "Producto 6619",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 6619 tiene stock bajo (10 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000370",
    "tipo": "STOCK_CRITICO",
    "productoId": "587",
    "productoNombre": "Producto 587",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 587 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000371",
    "tipo": "STOCK_CRITICO",
    "productoId": "2869",
    "productoNombre": "Producto 2869",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2869 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000372",
    "tipo": "STOCK_CRITICO",
    "productoId": "5691",
    "productoNombre": "Producto 5691",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5691 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000373",
    "tipo": "STOCK_CRITICO",
    "productoId": "6282",
    "productoNombre": "Producto 6282",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6282 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000374",
    "tipo": "STOCK_CRITICO",
    "productoId": "7260",
    "productoNombre": "Producto 7260",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7260 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000375",
    "tipo": "STOCK_CRITICO",
    "productoId": "7261",
    "productoNombre": "Producto 7261",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7261 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000376",
    "tipo": "STOCK_CRITICO",
    "productoId": "915",
    "productoNombre": "Producto 915",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 915 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000377",
    "tipo": "STOCK_CRITICO",
    "productoId": "934",
    "productoNombre": "Producto 934",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 934 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000378",
    "tipo": "STOCK_CRITICO",
    "productoId": "937",
    "productoNombre": "Producto 937",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 937 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000379",
    "tipo": "STOCK_CRITICO",
    "productoId": "938",
    "productoNombre": "Producto 938",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 938 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000380",
    "tipo": "STOCK_CRITICO",
    "productoId": "2526",
    "productoNombre": "Producto 2526",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2526 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000381",
    "tipo": "STOCK_CRITICO",
    "productoId": "2703",
    "productoNombre": "Producto 2703",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2703 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000382",
    "tipo": "STOCK_CRITICO",
    "productoId": "2805",
    "productoNombre": "Producto 2805",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2805 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000383",
    "tipo": "STOCK_CRITICO",
    "productoId": "2812",
    "productoNombre": "Producto 2812",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2812 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000384",
    "tipo": "STOCK_CRITICO",
    "productoId": "2986",
    "productoNombre": "Producto 2986",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2986 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000385",
    "tipo": "STOCK_CRITICO",
    "productoId": "2987",
    "productoNombre": "Producto 2987",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2987 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000386",
    "tipo": "STOCK_CRITICO",
    "productoId": "2988",
    "productoNombre": "Producto 2988",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2988 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000387",
    "tipo": "STOCK_BAJO",
    "productoId": "3062",
    "productoNombre": "Producto 3062",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3062 tiene stock bajo (1 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000388",
    "tipo": "STOCK_CRITICO",
    "productoId": "3307",
    "productoNombre": "Producto 3307",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3307 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000389",
    "tipo": "STOCK_CRITICO",
    "productoId": "3870",
    "productoNombre": "Producto 3870",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3870 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000390",
    "tipo": "STOCK_CRITICO",
    "productoId": "3871",
    "productoNombre": "Producto 3871",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3871 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000391",
    "tipo": "STOCK_CRITICO",
    "productoId": "3872",
    "productoNombre": "Producto 3872",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3872 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000392",
    "tipo": "STOCK_CRITICO",
    "productoId": "3873",
    "productoNombre": "Producto 3873",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3873 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000393",
    "tipo": "STOCK_CRITICO",
    "productoId": "3875",
    "productoNombre": "Producto 3875",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3875 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000394",
    "tipo": "STOCK_CRITICO",
    "productoId": "3876",
    "productoNombre": "Producto 3876",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3876 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000395",
    "tipo": "STOCK_CRITICO",
    "productoId": "3877",
    "productoNombre": "Producto 3877",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3877 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000396",
    "tipo": "STOCK_CRITICO",
    "productoId": "4343",
    "productoNombre": "Producto 4343",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4343 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000397",
    "tipo": "STOCK_CRITICO",
    "productoId": "4502",
    "productoNombre": "Producto 4502",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4502 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000398",
    "tipo": "STOCK_CRITICO",
    "productoId": "4503",
    "productoNombre": "Producto 4503",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4503 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000399",
    "tipo": "STOCK_CRITICO",
    "productoId": "4504",
    "productoNombre": "Producto 4504",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4504 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000400",
    "tipo": "STOCK_CRITICO",
    "productoId": "4921",
    "productoNombre": "Producto 4921",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4921 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000401",
    "tipo": "STOCK_CRITICO",
    "productoId": "5266",
    "productoNombre": "Producto 5266",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5266 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000402",
    "tipo": "STOCK_CRITICO",
    "productoId": "5267",
    "productoNombre": "Producto 5267",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5267 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000403",
    "tipo": "STOCK_CRITICO",
    "productoId": "5269",
    "productoNombre": "Producto 5269",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5269 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000404",
    "tipo": "STOCK_CRITICO",
    "productoId": "5272",
    "productoNombre": "Producto 5272",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5272 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000405",
    "tipo": "STOCK_CRITICO",
    "productoId": "5274",
    "productoNombre": "Producto 5274",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5274 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000406",
    "tipo": "STOCK_CRITICO",
    "productoId": "5275",
    "productoNombre": "Producto 5275",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5275 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000407",
    "tipo": "STOCK_CRITICO",
    "productoId": "5276",
    "productoNombre": "Producto 5276",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5276 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000408",
    "tipo": "STOCK_CRITICO",
    "productoId": "5321",
    "productoNombre": "Producto 5321",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5321 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000409",
    "tipo": "STOCK_CRITICO",
    "productoId": "5322",
    "productoNombre": "Producto 5322",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5322 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000410",
    "tipo": "STOCK_CRITICO",
    "productoId": "5708",
    "productoNombre": "Producto 5708",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5708 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000411",
    "tipo": "STOCK_CRITICO",
    "productoId": "5709",
    "productoNombre": "Producto 5709",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5709 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000412",
    "tipo": "STOCK_CRITICO",
    "productoId": "5712",
    "productoNombre": "Producto 5712",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5712 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000413",
    "tipo": "STOCK_CRITICO",
    "productoId": "5715",
    "productoNombre": "Producto 5715",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5715 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000414",
    "tipo": "STOCK_CRITICO",
    "productoId": "5716",
    "productoNombre": "Producto 5716",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5716 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000415",
    "tipo": "STOCK_CRITICO",
    "productoId": "5717",
    "productoNombre": "Producto 5717",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5717 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000416",
    "tipo": "STOCK_CRITICO",
    "productoId": "5719",
    "productoNombre": "Producto 5719",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5719 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000417",
    "tipo": "STOCK_CRITICO",
    "productoId": "5751",
    "productoNombre": "Producto 5751",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5751 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000418",
    "tipo": "STOCK_CRITICO",
    "productoId": "5869",
    "productoNombre": "Producto 5869",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5869 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000419",
    "tipo": "STOCK_CRITICO",
    "productoId": "6269",
    "productoNombre": "Producto 6269",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6269 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000420",
    "tipo": "STOCK_CRITICO",
    "productoId": "6283",
    "productoNombre": "Producto 6283",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6283 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000421",
    "tipo": "STOCK_CRITICO",
    "productoId": "6422",
    "productoNombre": "Producto 6422",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6422 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000422",
    "tipo": "STOCK_CRITICO",
    "productoId": "6424",
    "productoNombre": "Producto 6424",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6424 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000423",
    "tipo": "STOCK_CRITICO",
    "productoId": "6953",
    "productoNombre": "Producto 6953",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6953 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000424",
    "tipo": "STOCK_CRITICO",
    "productoId": "6955",
    "productoNombre": "Producto 6955",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6955 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000425",
    "tipo": "STOCK_CRITICO",
    "productoId": "6956",
    "productoNombre": "Producto 6956",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6956 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000426",
    "tipo": "STOCK_CRITICO",
    "productoId": "4272",
    "productoNombre": "Producto 4272",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4272 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000427",
    "tipo": "STOCK_CRITICO",
    "productoId": "4273",
    "productoNombre": "Producto 4273",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4273 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000428",
    "tipo": "STOCK_CRITICO",
    "productoId": "4297",
    "productoNombre": "Producto 4297",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4297 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000429",
    "tipo": "STOCK_CRITICO",
    "productoId": "4310",
    "productoNombre": "Producto 4310",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4310 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000430",
    "tipo": "STOCK_CRITICO",
    "productoId": "4340",
    "productoNombre": "Producto 4340",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4340 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000431",
    "tipo": "STOCK_CRITICO",
    "productoId": "4374",
    "productoNombre": "Producto 4374",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4374 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000432",
    "tipo": "STOCK_CRITICO",
    "productoId": "4375",
    "productoNombre": "Producto 4375",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4375 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000433",
    "tipo": "STOCK_CRITICO",
    "productoId": "4376",
    "productoNombre": "Producto 4376",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4376 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000434",
    "tipo": "STOCK_CRITICO",
    "productoId": "4377",
    "productoNombre": "Producto 4377",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4377 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000435",
    "tipo": "STOCK_CRITICO",
    "productoId": "4378",
    "productoNombre": "Producto 4378",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4378 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000436",
    "tipo": "STOCK_CRITICO",
    "productoId": "4379",
    "productoNombre": "Producto 4379",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4379 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000437",
    "tipo": "STOCK_CRITICO",
    "productoId": "4380",
    "productoNombre": "Producto 4380",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4380 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000438",
    "tipo": "STOCK_CRITICO",
    "productoId": "4386",
    "productoNombre": "Producto 4386",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4386 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000439",
    "tipo": "STOCK_CRITICO",
    "productoId": "4501",
    "productoNombre": "Producto 4501",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4501 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000440",
    "tipo": "STOCK_CRITICO",
    "productoId": "4527",
    "productoNombre": "Producto 4527",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4527 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000441",
    "tipo": "STOCK_CRITICO",
    "productoId": "4560",
    "productoNombre": "Producto 4560",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4560 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000442",
    "tipo": "STOCK_CRITICO",
    "productoId": "4561",
    "productoNombre": "Producto 4561",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4561 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000443",
    "tipo": "STOCK_CRITICO",
    "productoId": "4580",
    "productoNombre": "Producto 4580",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4580 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000444",
    "tipo": "STOCK_CRITICO",
    "productoId": "4593",
    "productoNombre": "Producto 4593",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4593 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000445",
    "tipo": "STOCK_CRITICO",
    "productoId": "4594",
    "productoNombre": "Producto 4594",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4594 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000446",
    "tipo": "STOCK_CRITICO",
    "productoId": "4768",
    "productoNombre": "Producto 4768",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4768 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000447",
    "tipo": "STOCK_CRITICO",
    "productoId": "4778",
    "productoNombre": "Producto 4778",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4778 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000448",
    "tipo": "STOCK_CRITICO",
    "productoId": "4787",
    "productoNombre": "Producto 4787",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4787 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000449",
    "tipo": "STOCK_CRITICO",
    "productoId": "4800",
    "productoNombre": "Producto 4800",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4800 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000450",
    "tipo": "STOCK_CRITICO",
    "productoId": "4856",
    "productoNombre": "Producto 4856",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4856 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000451",
    "tipo": "STOCK_CRITICO",
    "productoId": "4861",
    "productoNombre": "Producto 4861",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4861 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000452",
    "tipo": "STOCK_CRITICO",
    "productoId": "4863",
    "productoNombre": "Producto 4863",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4863 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000453",
    "tipo": "STOCK_CRITICO",
    "productoId": "5103",
    "productoNombre": "Producto 5103",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5103 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000454",
    "tipo": "STOCK_CRITICO",
    "productoId": "5104",
    "productoNombre": "Producto 5104",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5104 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000455",
    "tipo": "STOCK_CRITICO",
    "productoId": "5135",
    "productoNombre": "Producto 5135",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5135 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000456",
    "tipo": "STOCK_CRITICO",
    "productoId": "5197",
    "productoNombre": "Producto 5197",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5197 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000457",
    "tipo": "STOCK_CRITICO",
    "productoId": "5549",
    "productoNombre": "Producto 5549",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5549 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000458",
    "tipo": "STOCK_CRITICO",
    "productoId": "5557",
    "productoNombre": "Producto 5557",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5557 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000459",
    "tipo": "STOCK_CRITICO",
    "productoId": "6281",
    "productoNombre": "Producto 6281",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6281 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000460",
    "tipo": "STOCK_CRITICO",
    "productoId": "6778",
    "productoNombre": "Producto 6778",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6778 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000461",
    "tipo": "STOCK_CRITICO",
    "productoId": "7133",
    "productoNombre": "Producto 7133",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7133 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000462",
    "tipo": "STOCK_CRITICO",
    "productoId": "571",
    "productoNombre": "Producto 571",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 571 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000463",
    "tipo": "STOCK_CRITICO",
    "productoId": "572",
    "productoNombre": "Producto 572",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 572 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000464",
    "tipo": "STOCK_CRITICO",
    "productoId": "1346",
    "productoNombre": "Producto 1346",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1346 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000465",
    "tipo": "STOCK_CRITICO",
    "productoId": "1347",
    "productoNombre": "Producto 1347",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1347 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000466",
    "tipo": "STOCK_CRITICO",
    "productoId": "1349",
    "productoNombre": "Producto 1349",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1349 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000467",
    "tipo": "STOCK_CRITICO",
    "productoId": "1353",
    "productoNombre": "Producto 1353",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1353 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000468",
    "tipo": "STOCK_CRITICO",
    "productoId": "1354",
    "productoNombre": "Producto 1354",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1354 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000469",
    "tipo": "STOCK_CRITICO",
    "productoId": "1422",
    "productoNombre": "Producto 1422",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1422 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000470",
    "tipo": "STOCK_CRITICO",
    "productoId": "1423",
    "productoNombre": "Producto 1423",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1423 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000471",
    "tipo": "STOCK_CRITICO",
    "productoId": "1477",
    "productoNombre": "Producto 1477",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1477 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000472",
    "tipo": "STOCK_CRITICO",
    "productoId": "1597",
    "productoNombre": "Producto 1597",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1597 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000473",
    "tipo": "STOCK_CRITICO",
    "productoId": "1602",
    "productoNombre": "Producto 1602",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1602 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000474",
    "tipo": "STOCK_CRITICO",
    "productoId": "1861",
    "productoNombre": "Producto 1861",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1861 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000475",
    "tipo": "STOCK_CRITICO",
    "productoId": "2018",
    "productoNombre": "Producto 2018",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2018 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000476",
    "tipo": "STOCK_CRITICO",
    "productoId": "2024",
    "productoNombre": "Producto 2024",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2024 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000477",
    "tipo": "STOCK_BAJO",
    "productoId": "2440",
    "productoNombre": "Producto 2440",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2440 tiene stock bajo (2 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000478",
    "tipo": "STOCK_BAJO",
    "productoId": "2441",
    "productoNombre": "Producto 2441",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2441 tiene stock bajo (8 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000479",
    "tipo": "STOCK_CRITICO",
    "productoId": "2832",
    "productoNombre": "Producto 2832",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2832 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000480",
    "tipo": "STOCK_BAJO",
    "productoId": "2833",
    "productoNombre": "Producto 2833",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2833 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000481",
    "tipo": "STOCK_CRITICO",
    "productoId": "2899",
    "productoNombre": "Producto 2899",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2899 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000482",
    "tipo": "STOCK_CRITICO",
    "productoId": "2914",
    "productoNombre": "Producto 2914",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2914 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000483",
    "tipo": "STOCK_BAJO",
    "productoId": "3107",
    "productoNombre": "Producto 3107",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3107 tiene stock bajo (1 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000484",
    "tipo": "STOCK_CRITICO",
    "productoId": "3127",
    "productoNombre": "Producto 3127",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3127 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000485",
    "tipo": "STOCK_BAJO",
    "productoId": "3653",
    "productoNombre": "Producto 3653",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3653 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000486",
    "tipo": "STOCK_BAJO",
    "productoId": "3859",
    "productoNombre": "Producto 3859",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3859 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000487",
    "tipo": "STOCK_CRITICO",
    "productoId": "4231",
    "productoNombre": "Producto 4231",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4231 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000488",
    "tipo": "STOCK_CRITICO",
    "productoId": "6226",
    "productoNombre": "Producto 6226",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6226 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000489",
    "tipo": "STOCK_CRITICO",
    "productoId": "6230",
    "productoNombre": "Producto 6230",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6230 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000490",
    "tipo": "STOCK_CRITICO",
    "productoId": "6259",
    "productoNombre": "Producto 6259",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6259 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000491",
    "tipo": "STOCK_CRITICO",
    "productoId": "6263",
    "productoNombre": "Producto 6263",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6263 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000492",
    "tipo": "STOCK_BAJO",
    "productoId": "6967",
    "productoNombre": "Producto 6967",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 6967 tiene stock bajo (4 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000493",
    "tipo": "STOCK_CRITICO",
    "productoId": "7213",
    "productoNombre": "Producto 7213",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7213 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000494",
    "tipo": "STOCK_CRITICO",
    "productoId": "7235",
    "productoNombre": "Producto 7235",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7235 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000495",
    "tipo": "STOCK_CRITICO",
    "productoId": "7236",
    "productoNombre": "Producto 7236",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7236 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000496",
    "tipo": "STOCK_CRITICO",
    "productoId": "7237",
    "productoNombre": "Producto 7237",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7237 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000497",
    "tipo": "STOCK_CRITICO",
    "productoId": "2212",
    "productoNombre": "Producto 2212",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2212 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000498",
    "tipo": "STOCK_CRITICO",
    "productoId": "4660",
    "productoNombre": "Producto 4660",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4660 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000499",
    "tipo": "STOCK_CRITICO",
    "productoId": "231",
    "productoNombre": "Producto 231",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 231 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000500",
    "tipo": "STOCK_CRITICO",
    "productoId": "500",
    "productoNombre": "Producto 500",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 500 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000501",
    "tipo": "STOCK_CRITICO",
    "productoId": "575",
    "productoNombre": "Producto 575",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 575 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000502",
    "tipo": "STOCK_CRITICO",
    "productoId": "629",
    "productoNombre": "Producto 629",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 629 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000503",
    "tipo": "STOCK_CRITICO",
    "productoId": "874",
    "productoNombre": "Producto 874",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 874 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000504",
    "tipo": "STOCK_CRITICO",
    "productoId": "875",
    "productoNombre": "Producto 875",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 875 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000505",
    "tipo": "STOCK_CRITICO",
    "productoId": "876",
    "productoNombre": "Producto 876",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 876 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000506",
    "tipo": "STOCK_CRITICO",
    "productoId": "877",
    "productoNombre": "Producto 877",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 877 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000507",
    "tipo": "STOCK_CRITICO",
    "productoId": "878",
    "productoNombre": "Producto 878",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 878 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000508",
    "tipo": "STOCK_CRITICO",
    "productoId": "1193",
    "productoNombre": "Producto 1193",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1193 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000509",
    "tipo": "STOCK_CRITICO",
    "productoId": "1390",
    "productoNombre": "Producto 1390",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1390 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000510",
    "tipo": "STOCK_CRITICO",
    "productoId": "1396",
    "productoNombre": "Producto 1396",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1396 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000511",
    "tipo": "STOCK_CRITICO",
    "productoId": "1397",
    "productoNombre": "Producto 1397",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1397 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000512",
    "tipo": "STOCK_CRITICO",
    "productoId": "1454",
    "productoNombre": "Producto 1454",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1454 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000513",
    "tipo": "STOCK_CRITICO",
    "productoId": "1455",
    "productoNombre": "Producto 1455",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1455 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000514",
    "tipo": "STOCK_CRITICO",
    "productoId": "1456",
    "productoNombre": "Producto 1456",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1456 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000515",
    "tipo": "STOCK_CRITICO",
    "productoId": "1457",
    "productoNombre": "Producto 1457",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1457 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000516",
    "tipo": "STOCK_CRITICO",
    "productoId": "1458",
    "productoNombre": "Producto 1458",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1458 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000517",
    "tipo": "STOCK_CRITICO",
    "productoId": "1460",
    "productoNombre": "Producto 1460",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1460 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000518",
    "tipo": "STOCK_CRITICO",
    "productoId": "1462",
    "productoNombre": "Producto 1462",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1462 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000519",
    "tipo": "STOCK_CRITICO",
    "productoId": "1463",
    "productoNombre": "Producto 1463",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1463 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000520",
    "tipo": "STOCK_CRITICO",
    "productoId": "1464",
    "productoNombre": "Producto 1464",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1464 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000521",
    "tipo": "STOCK_CRITICO",
    "productoId": "1465",
    "productoNombre": "Producto 1465",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1465 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000522",
    "tipo": "STOCK_CRITICO",
    "productoId": "1466",
    "productoNombre": "Producto 1466",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1466 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000523",
    "tipo": "STOCK_CRITICO",
    "productoId": "1468",
    "productoNombre": "Producto 1468",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1468 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000524",
    "tipo": "STOCK_CRITICO",
    "productoId": "1469",
    "productoNombre": "Producto 1469",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1469 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000525",
    "tipo": "STOCK_CRITICO",
    "productoId": "1503",
    "productoNombre": "Producto 1503",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1503 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000526",
    "tipo": "STOCK_CRITICO",
    "productoId": "1504",
    "productoNombre": "Producto 1504",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1504 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000527",
    "tipo": "STOCK_CRITICO",
    "productoId": "1505",
    "productoNombre": "Producto 1505",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1505 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000528",
    "tipo": "STOCK_CRITICO",
    "productoId": "1506",
    "productoNombre": "Producto 1506",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1506 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000529",
    "tipo": "STOCK_CRITICO",
    "productoId": "1507",
    "productoNombre": "Producto 1507",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1507 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000530",
    "tipo": "STOCK_CRITICO",
    "productoId": "1508",
    "productoNombre": "Producto 1508",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1508 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000531",
    "tipo": "STOCK_CRITICO",
    "productoId": "1509",
    "productoNombre": "Producto 1509",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1509 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000532",
    "tipo": "STOCK_CRITICO",
    "productoId": "1510",
    "productoNombre": "Producto 1510",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1510 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000533",
    "tipo": "STOCK_CRITICO",
    "productoId": "1624",
    "productoNombre": "Producto 1624",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1624 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000534",
    "tipo": "STOCK_CRITICO",
    "productoId": "1782",
    "productoNombre": "Producto 1782",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1782 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000535",
    "tipo": "STOCK_CRITICO",
    "productoId": "1792",
    "productoNombre": "Producto 1792",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1792 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000536",
    "tipo": "STOCK_CRITICO",
    "productoId": "1801",
    "productoNombre": "Producto 1801",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1801 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000537",
    "tipo": "STOCK_CRITICO",
    "productoId": "1855",
    "productoNombre": "Producto 1855",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1855 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000538",
    "tipo": "STOCK_CRITICO",
    "productoId": "1858",
    "productoNombre": "Producto 1858",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1858 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000539",
    "tipo": "STOCK_CRITICO",
    "productoId": "2031",
    "productoNombre": "Producto 2031",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2031 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000540",
    "tipo": "STOCK_CRITICO",
    "productoId": "2351",
    "productoNombre": "Producto 2351",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2351 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000541",
    "tipo": "STOCK_CRITICO",
    "productoId": "2352",
    "productoNombre": "Producto 2352",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2352 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000542",
    "tipo": "STOCK_CRITICO",
    "productoId": "2356",
    "productoNombre": "Producto 2356",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2356 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000543",
    "tipo": "STOCK_CRITICO",
    "productoId": "2357",
    "productoNombre": "Producto 2357",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2357 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000544",
    "tipo": "STOCK_CRITICO",
    "productoId": "2501",
    "productoNombre": "Producto 2501",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2501 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000545",
    "tipo": "STOCK_CRITICO",
    "productoId": "2502",
    "productoNombre": "Producto 2502",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2502 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000546",
    "tipo": "STOCK_CRITICO",
    "productoId": "2608",
    "productoNombre": "Producto 2608",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2608 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000547",
    "tipo": "STOCK_CRITICO",
    "productoId": "2609",
    "productoNombre": "Producto 2609",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2609 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000548",
    "tipo": "STOCK_CRITICO",
    "productoId": "2610",
    "productoNombre": "Producto 2610",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2610 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000549",
    "tipo": "STOCK_CRITICO",
    "productoId": "3134",
    "productoNombre": "Producto 3134",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3134 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000550",
    "tipo": "STOCK_CRITICO",
    "productoId": "3139",
    "productoNombre": "Producto 3139",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3139 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000551",
    "tipo": "STOCK_CRITICO",
    "productoId": "3363",
    "productoNombre": "Producto 3363",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3363 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000552",
    "tipo": "STOCK_CRITICO",
    "productoId": "3364",
    "productoNombre": "Producto 3364",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3364 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000553",
    "tipo": "STOCK_CRITICO",
    "productoId": "3365",
    "productoNombre": "Producto 3365",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3365 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000554",
    "tipo": "STOCK_CRITICO",
    "productoId": "3366",
    "productoNombre": "Producto 3366",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3366 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000555",
    "tipo": "STOCK_CRITICO",
    "productoId": "3380",
    "productoNombre": "Producto 3380",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3380 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000556",
    "tipo": "STOCK_CRITICO",
    "productoId": "3382",
    "productoNombre": "Producto 3382",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3382 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000557",
    "tipo": "STOCK_CRITICO",
    "productoId": "3387",
    "productoNombre": "Producto 3387",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3387 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000558",
    "tipo": "STOCK_CRITICO",
    "productoId": "3389",
    "productoNombre": "Producto 3389",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3389 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000559",
    "tipo": "STOCK_CRITICO",
    "productoId": "3393",
    "productoNombre": "Producto 3393",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3393 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000560",
    "tipo": "STOCK_CRITICO",
    "productoId": "3394",
    "productoNombre": "Producto 3394",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3394 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000561",
    "tipo": "STOCK_CRITICO",
    "productoId": "3395",
    "productoNombre": "Producto 3395",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3395 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000562",
    "tipo": "STOCK_CRITICO",
    "productoId": "3505",
    "productoNombre": "Producto 3505",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3505 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000563",
    "tipo": "STOCK_CRITICO",
    "productoId": "4049",
    "productoNombre": "Producto 4049",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4049 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000564",
    "tipo": "STOCK_CRITICO",
    "productoId": "4050",
    "productoNombre": "Producto 4050",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4050 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000565",
    "tipo": "STOCK_CRITICO",
    "productoId": "4094",
    "productoNombre": "Producto 4094",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4094 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000566",
    "tipo": "STOCK_CRITICO",
    "productoId": "4563",
    "productoNombre": "Producto 4563",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4563 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000567",
    "tipo": "STOCK_CRITICO",
    "productoId": "4564",
    "productoNombre": "Producto 4564",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4564 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000568",
    "tipo": "STOCK_CRITICO",
    "productoId": "4597",
    "productoNombre": "Producto 4597",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4597 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000569",
    "tipo": "STOCK_CRITICO",
    "productoId": "4599",
    "productoNombre": "Producto 4599",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4599 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000570",
    "tipo": "STOCK_CRITICO",
    "productoId": "4600",
    "productoNombre": "Producto 4600",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4600 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000571",
    "tipo": "STOCK_CRITICO",
    "productoId": "4639",
    "productoNombre": "Producto 4639",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4639 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000572",
    "tipo": "STOCK_CRITICO",
    "productoId": "4642",
    "productoNombre": "Producto 4642",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4642 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000573",
    "tipo": "STOCK_CRITICO",
    "productoId": "4644",
    "productoNombre": "Producto 4644",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4644 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000574",
    "tipo": "STOCK_CRITICO",
    "productoId": "4646",
    "productoNombre": "Producto 4646",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4646 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000575",
    "tipo": "STOCK_CRITICO",
    "productoId": "4655",
    "productoNombre": "Producto 4655",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4655 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000576",
    "tipo": "STOCK_CRITICO",
    "productoId": "4657",
    "productoNombre": "Producto 4657",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4657 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000577",
    "tipo": "STOCK_CRITICO",
    "productoId": "4658",
    "productoNombre": "Producto 4658",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4658 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000578",
    "tipo": "STOCK_CRITICO",
    "productoId": "4746",
    "productoNombre": "Producto 4746",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4746 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000579",
    "tipo": "STOCK_CRITICO",
    "productoId": "4747",
    "productoNombre": "Producto 4747",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4747 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000580",
    "tipo": "STOCK_CRITICO",
    "productoId": "4748",
    "productoNombre": "Producto 4748",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4748 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000581",
    "tipo": "STOCK_CRITICO",
    "productoId": "4749",
    "productoNombre": "Producto 4749",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4749 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000582",
    "tipo": "STOCK_CRITICO",
    "productoId": "4750",
    "productoNombre": "Producto 4750",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4750 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000583",
    "tipo": "STOCK_CRITICO",
    "productoId": "4751",
    "productoNombre": "Producto 4751",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4751 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000584",
    "tipo": "STOCK_CRITICO",
    "productoId": "5337",
    "productoNombre": "Producto 5337",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5337 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000585",
    "tipo": "STOCK_CRITICO",
    "productoId": "5577",
    "productoNombre": "Producto 5577",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5577 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000586",
    "tipo": "STOCK_CRITICO",
    "productoId": "5637",
    "productoNombre": "Producto 5637",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5637 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000587",
    "tipo": "STOCK_CRITICO",
    "productoId": "5740",
    "productoNombre": "Producto 5740",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5740 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000588",
    "tipo": "STOCK_CRITICO",
    "productoId": "5830",
    "productoNombre": "Producto 5830",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5830 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000589",
    "tipo": "STOCK_CRITICO",
    "productoId": "5832",
    "productoNombre": "Producto 5832",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5832 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000590",
    "tipo": "STOCK_CRITICO",
    "productoId": "5836",
    "productoNombre": "Producto 5836",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5836 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000591",
    "tipo": "STOCK_CRITICO",
    "productoId": "5837",
    "productoNombre": "Producto 5837",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5837 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000592",
    "tipo": "STOCK_CRITICO",
    "productoId": "5865",
    "productoNombre": "Producto 5865",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5865 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000593",
    "tipo": "STOCK_CRITICO",
    "productoId": "5936",
    "productoNombre": "Producto 5936",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5936 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000594",
    "tipo": "STOCK_CRITICO",
    "productoId": "5938",
    "productoNombre": "Producto 5938",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5938 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000595",
    "tipo": "STOCK_CRITICO",
    "productoId": "5939",
    "productoNombre": "Producto 5939",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5939 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000596",
    "tipo": "STOCK_CRITICO",
    "productoId": "5945",
    "productoNombre": "Producto 5945",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5945 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000597",
    "tipo": "STOCK_CRITICO",
    "productoId": "5946",
    "productoNombre": "Producto 5946",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5946 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000598",
    "tipo": "STOCK_CRITICO",
    "productoId": "5947",
    "productoNombre": "Producto 5947",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5947 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000599",
    "tipo": "STOCK_CRITICO",
    "productoId": "5951",
    "productoNombre": "Producto 5951",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5951 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000600",
    "tipo": "STOCK_CRITICO",
    "productoId": "5959",
    "productoNombre": "Producto 5959",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5959 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000601",
    "tipo": "STOCK_CRITICO",
    "productoId": "5960",
    "productoNombre": "Producto 5960",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5960 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000602",
    "tipo": "STOCK_CRITICO",
    "productoId": "5961",
    "productoNombre": "Producto 5961",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5961 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000603",
    "tipo": "STOCK_CRITICO",
    "productoId": "5962",
    "productoNombre": "Producto 5962",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5962 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000604",
    "tipo": "STOCK_CRITICO",
    "productoId": "5963",
    "productoNombre": "Producto 5963",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5963 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000605",
    "tipo": "STOCK_CRITICO",
    "productoId": "5964",
    "productoNombre": "Producto 5964",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5964 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000606",
    "tipo": "STOCK_CRITICO",
    "productoId": "5965",
    "productoNombre": "Producto 5965",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5965 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000607",
    "tipo": "STOCK_CRITICO",
    "productoId": "5986",
    "productoNombre": "Producto 5986",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5986 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000608",
    "tipo": "STOCK_CRITICO",
    "productoId": "5987",
    "productoNombre": "Producto 5987",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5987 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000609",
    "tipo": "STOCK_CRITICO",
    "productoId": "5988",
    "productoNombre": "Producto 5988",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5988 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000610",
    "tipo": "STOCK_CRITICO",
    "productoId": "5989",
    "productoNombre": "Producto 5989",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5989 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000611",
    "tipo": "STOCK_CRITICO",
    "productoId": "5990",
    "productoNombre": "Producto 5990",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5990 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000612",
    "tipo": "STOCK_CRITICO",
    "productoId": "5991",
    "productoNombre": "Producto 5991",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5991 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000613",
    "tipo": "STOCK_CRITICO",
    "productoId": "5992",
    "productoNombre": "Producto 5992",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5992 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000614",
    "tipo": "STOCK_CRITICO",
    "productoId": "5993",
    "productoNombre": "Producto 5993",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5993 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000615",
    "tipo": "STOCK_CRITICO",
    "productoId": "5994",
    "productoNombre": "Producto 5994",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5994 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000616",
    "tipo": "STOCK_CRITICO",
    "productoId": "5995",
    "productoNombre": "Producto 5995",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5995 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000617",
    "tipo": "STOCK_CRITICO",
    "productoId": "6227",
    "productoNombre": "Producto 6227",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6227 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000618",
    "tipo": "STOCK_CRITICO",
    "productoId": "6231",
    "productoNombre": "Producto 6231",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6231 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000619",
    "tipo": "STOCK_CRITICO",
    "productoId": "6232",
    "productoNombre": "Producto 6232",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6232 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000620",
    "tipo": "STOCK_CRITICO",
    "productoId": "6233",
    "productoNombre": "Producto 6233",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6233 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000621",
    "tipo": "STOCK_CRITICO",
    "productoId": "6278",
    "productoNombre": "Producto 6278",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6278 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000622",
    "tipo": "STOCK_CRITICO",
    "productoId": "6279",
    "productoNombre": "Producto 6279",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6279 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000623",
    "tipo": "STOCK_CRITICO",
    "productoId": "6280",
    "productoNombre": "Producto 6280",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6280 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000624",
    "tipo": "STOCK_CRITICO",
    "productoId": "6553",
    "productoNombre": "Producto 6553",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6553 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000625",
    "tipo": "STOCK_CRITICO",
    "productoId": "6554",
    "productoNombre": "Producto 6554",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6554 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000626",
    "tipo": "STOCK_CRITICO",
    "productoId": "6555",
    "productoNombre": "Producto 6555",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6555 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000627",
    "tipo": "STOCK_CRITICO",
    "productoId": "6621",
    "productoNombre": "Producto 6621",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6621 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000628",
    "tipo": "STOCK_CRITICO",
    "productoId": "6946",
    "productoNombre": "Producto 6946",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6946 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000629",
    "tipo": "STOCK_CRITICO",
    "productoId": "7021",
    "productoNombre": "Producto 7021",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7021 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000630",
    "tipo": "STOCK_CRITICO",
    "productoId": "7022",
    "productoNombre": "Producto 7022",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7022 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000631",
    "tipo": "STOCK_CRITICO",
    "productoId": "7023",
    "productoNombre": "Producto 7023",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7023 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000632",
    "tipo": "STOCK_CRITICO",
    "productoId": "7024",
    "productoNombre": "Producto 7024",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7024 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000633",
    "tipo": "STOCK_CRITICO",
    "productoId": "7099",
    "productoNombre": "Producto 7099",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7099 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000634",
    "tipo": "STOCK_CRITICO",
    "productoId": "7100",
    "productoNombre": "Producto 7100",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7100 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000635",
    "tipo": "STOCK_CRITICO",
    "productoId": "7101",
    "productoNombre": "Producto 7101",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7101 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000636",
    "tipo": "STOCK_CRITICO",
    "productoId": "3673",
    "productoNombre": "Producto 3673",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3673 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000637",
    "tipo": "STOCK_CRITICO",
    "productoId": "4084",
    "productoNombre": "Producto 4084",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4084 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000638",
    "tipo": "STOCK_CRITICO",
    "productoId": "5461",
    "productoNombre": "Producto 5461",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5461 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000639",
    "tipo": "STOCK_CRITICO",
    "productoId": "6696",
    "productoNombre": "Producto 6696",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6696 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000640",
    "tipo": "STOCK_CRITICO",
    "productoId": "6697",
    "productoNombre": "Producto 6697",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6697 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000641",
    "tipo": "STOCK_CRITICO",
    "productoId": "6815",
    "productoNombre": "Producto 6815",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6815 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000642",
    "tipo": "STOCK_CRITICO",
    "productoId": "7245",
    "productoNombre": "Producto 7245",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7245 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000643",
    "tipo": "STOCK_CRITICO",
    "productoId": "7249",
    "productoNombre": "Producto 7249",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7249 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000644",
    "tipo": "STOCK_CRITICO",
    "productoId": "7250",
    "productoNombre": "Producto 7250",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7250 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000645",
    "tipo": "STOCK_CRITICO",
    "productoId": "7251",
    "productoNombre": "Producto 7251",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7251 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000646",
    "tipo": "STOCK_CRITICO",
    "productoId": "7252",
    "productoNombre": "Producto 7252",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7252 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000647",
    "tipo": "STOCK_CRITICO",
    "productoId": "7253",
    "productoNombre": "Producto 7253",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7253 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000648",
    "tipo": "STOCK_BAJO",
    "productoId": "72",
    "productoNombre": "Producto 72",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 72 tiene stock bajo (8 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000649",
    "tipo": "STOCK_CRITICO",
    "productoId": "158",
    "productoNombre": "Producto 158",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 158 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000650",
    "tipo": "STOCK_BAJO",
    "productoId": "179",
    "productoNombre": "Producto 179",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 179 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000651",
    "tipo": "STOCK_CRITICO",
    "productoId": "180",
    "productoNombre": "Producto 180",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 180 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000652",
    "tipo": "STOCK_CRITICO",
    "productoId": "181",
    "productoNombre": "Producto 181",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 181 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000653",
    "tipo": "STOCK_CRITICO",
    "productoId": "183",
    "productoNombre": "Producto 183",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 183 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000654",
    "tipo": "STOCK_CRITICO",
    "productoId": "184",
    "productoNombre": "Producto 184",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 184 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000655",
    "tipo": "STOCK_BAJO",
    "productoId": "185",
    "productoNombre": "Producto 185",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 185 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000656",
    "tipo": "STOCK_CRITICO",
    "productoId": "188",
    "productoNombre": "Producto 188",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 188 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000657",
    "tipo": "STOCK_BAJO",
    "productoId": "191",
    "productoNombre": "Producto 191",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 191 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000658",
    "tipo": "STOCK_BAJO",
    "productoId": "196",
    "productoNombre": "Producto 196",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 196 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000659",
    "tipo": "STOCK_BAJO",
    "productoId": "291",
    "productoNombre": "Producto 291",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 291 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000660",
    "tipo": "STOCK_CRITICO",
    "productoId": "292",
    "productoNombre": "Producto 292",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 292 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000661",
    "tipo": "STOCK_BAJO",
    "productoId": "294",
    "productoNombre": "Producto 294",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 294 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000662",
    "tipo": "STOCK_BAJO",
    "productoId": "296",
    "productoNombre": "Producto 296",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 296 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000663",
    "tipo": "STOCK_BAJO",
    "productoId": "297",
    "productoNombre": "Producto 297",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 297 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000664",
    "tipo": "STOCK_BAJO",
    "productoId": "298",
    "productoNombre": "Producto 298",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 298 tiene stock bajo (1 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000665",
    "tipo": "STOCK_CRITICO",
    "productoId": "312",
    "productoNombre": "Producto 312",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 312 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000666",
    "tipo": "STOCK_CRITICO",
    "productoId": "421",
    "productoNombre": "Producto 421",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 421 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000667",
    "tipo": "STOCK_CRITICO",
    "productoId": "1048",
    "productoNombre": "Producto 1048",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1048 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000668",
    "tipo": "STOCK_CRITICO",
    "productoId": "1068",
    "productoNombre": "Producto 1068",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1068 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000669",
    "tipo": "STOCK_CRITICO",
    "productoId": "1173",
    "productoNombre": "Producto 1173",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1173 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000670",
    "tipo": "STOCK_CRITICO",
    "productoId": "1184",
    "productoNombre": "Producto 1184",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1184 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000671",
    "tipo": "STOCK_CRITICO",
    "productoId": "1187",
    "productoNombre": "Producto 1187",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1187 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000672",
    "tipo": "STOCK_CRITICO",
    "productoId": "1188",
    "productoNombre": "Producto 1188",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1188 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000673",
    "tipo": "STOCK_CRITICO",
    "productoId": "1209",
    "productoNombre": "Producto 1209",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1209 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000674",
    "tipo": "STOCK_CRITICO",
    "productoId": "1218",
    "productoNombre": "Producto 1218",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1218 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000675",
    "tipo": "STOCK_CRITICO",
    "productoId": "1496",
    "productoNombre": "Producto 1496",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1496 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000676",
    "tipo": "STOCK_CRITICO",
    "productoId": "1497",
    "productoNombre": "Producto 1497",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1497 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000677",
    "tipo": "STOCK_CRITICO",
    "productoId": "1498",
    "productoNombre": "Producto 1498",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1498 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000678",
    "tipo": "STOCK_CRITICO",
    "productoId": "1499",
    "productoNombre": "Producto 1499",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1499 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000679",
    "tipo": "STOCK_CRITICO",
    "productoId": "1500",
    "productoNombre": "Producto 1500",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1500 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000680",
    "tipo": "STOCK_CRITICO",
    "productoId": "1571",
    "productoNombre": "Producto 1571",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1571 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000681",
    "tipo": "STOCK_CRITICO",
    "productoId": "1620",
    "productoNombre": "Producto 1620",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1620 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000682",
    "tipo": "STOCK_CRITICO",
    "productoId": "1716",
    "productoNombre": "Producto 1716",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1716 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000683",
    "tipo": "STOCK_CRITICO",
    "productoId": "1787",
    "productoNombre": "Producto 1787",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1787 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000684",
    "tipo": "STOCK_CRITICO",
    "productoId": "1824",
    "productoNombre": "Producto 1824",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1824 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000685",
    "tipo": "STOCK_CRITICO",
    "productoId": "2311",
    "productoNombre": "Producto 2311",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2311 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000686",
    "tipo": "STOCK_CRITICO",
    "productoId": "2347",
    "productoNombre": "Producto 2347",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2347 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000687",
    "tipo": "STOCK_CRITICO",
    "productoId": "2465",
    "productoNombre": "Producto 2465",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2465 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000688",
    "tipo": "STOCK_CRITICO",
    "productoId": "2598",
    "productoNombre": "Producto 2598",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2598 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000689",
    "tipo": "STOCK_CRITICO",
    "productoId": "2599",
    "productoNombre": "Producto 2599",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2599 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000690",
    "tipo": "STOCK_CRITICO",
    "productoId": "2600",
    "productoNombre": "Producto 2600",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2600 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000691",
    "tipo": "STOCK_CRITICO",
    "productoId": "2628",
    "productoNombre": "Producto 2628",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2628 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000692",
    "tipo": "STOCK_CRITICO",
    "productoId": "2631",
    "productoNombre": "Producto 2631",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2631 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000693",
    "tipo": "STOCK_CRITICO",
    "productoId": "2633",
    "productoNombre": "Producto 2633",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2633 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000694",
    "tipo": "STOCK_CRITICO",
    "productoId": "2647",
    "productoNombre": "Producto 2647",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2647 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000695",
    "tipo": "STOCK_CRITICO",
    "productoId": "2651",
    "productoNombre": "Producto 2651",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2651 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000696",
    "tipo": "STOCK_CRITICO",
    "productoId": "2654",
    "productoNombre": "Producto 2654",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2654 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000697",
    "tipo": "STOCK_BAJO",
    "productoId": "2763",
    "productoNombre": "Producto 2763",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2763 tiene stock bajo (10 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000698",
    "tipo": "STOCK_BAJO",
    "productoId": "2764",
    "productoNombre": "Producto 2764",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2764 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000699",
    "tipo": "STOCK_CRITICO",
    "productoId": "2780",
    "productoNombre": "Producto 2780",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2780 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000700",
    "tipo": "STOCK_CRITICO",
    "productoId": "2783",
    "productoNombre": "Producto 2783",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2783 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000701",
    "tipo": "STOCK_CRITICO",
    "productoId": "2791",
    "productoNombre": "Producto 2791",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2791 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000702",
    "tipo": "STOCK_CRITICO",
    "productoId": "2792",
    "productoNombre": "Producto 2792",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2792 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000703",
    "tipo": "STOCK_CRITICO",
    "productoId": "2876",
    "productoNombre": "Producto 2876",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2876 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000704",
    "tipo": "STOCK_BAJO",
    "productoId": "2895",
    "productoNombre": "Producto 2895",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2895 tiene stock bajo (4 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000705",
    "tipo": "STOCK_BAJO",
    "productoId": "3071",
    "productoNombre": "Producto 3071",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3071 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000706",
    "tipo": "STOCK_CRITICO",
    "productoId": "3143",
    "productoNombre": "Producto 3143",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3143 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000707",
    "tipo": "STOCK_BAJO",
    "productoId": "3149",
    "productoNombre": "Producto 3149",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3149 tiene stock bajo (3 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000708",
    "tipo": "STOCK_CRITICO",
    "productoId": "3181",
    "productoNombre": "Producto 3181",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3181 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000709",
    "tipo": "STOCK_CRITICO",
    "productoId": "3285",
    "productoNombre": "Producto 3285",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3285 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000710",
    "tipo": "STOCK_CRITICO",
    "productoId": "3373",
    "productoNombre": "Producto 3373",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3373 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000711",
    "tipo": "STOCK_CRITICO",
    "productoId": "3376",
    "productoNombre": "Producto 3376",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3376 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000712",
    "tipo": "STOCK_CRITICO",
    "productoId": "3377",
    "productoNombre": "Producto 3377",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3377 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000713",
    "tipo": "STOCK_CRITICO",
    "productoId": "3399",
    "productoNombre": "Producto 3399",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3399 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000714",
    "tipo": "STOCK_CRITICO",
    "productoId": "3400",
    "productoNombre": "Producto 3400",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3400 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000715",
    "tipo": "STOCK_CRITICO",
    "productoId": "3478",
    "productoNombre": "Producto 3478",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3478 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000716",
    "tipo": "STOCK_CRITICO",
    "productoId": "3479",
    "productoNombre": "Producto 3479",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3479 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000717",
    "tipo": "STOCK_CRITICO",
    "productoId": "3587",
    "productoNombre": "Producto 3587",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3587 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000718",
    "tipo": "STOCK_CRITICO",
    "productoId": "3588",
    "productoNombre": "Producto 3588",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3588 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000719",
    "tipo": "STOCK_CRITICO",
    "productoId": "3729",
    "productoNombre": "Producto 3729",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3729 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000720",
    "tipo": "STOCK_CRITICO",
    "productoId": "3878",
    "productoNombre": "Producto 3878",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3878 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000721",
    "tipo": "STOCK_BAJO",
    "productoId": "3879",
    "productoNombre": "Producto 3879",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 3879 tiene stock bajo (2 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000722",
    "tipo": "STOCK_CRITICO",
    "productoId": "3880",
    "productoNombre": "Producto 3880",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3880 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000723",
    "tipo": "STOCK_CRITICO",
    "productoId": "3881",
    "productoNombre": "Producto 3881",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3881 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000724",
    "tipo": "STOCK_CRITICO",
    "productoId": "3889",
    "productoNombre": "Producto 3889",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3889 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000725",
    "tipo": "STOCK_CRITICO",
    "productoId": "4021",
    "productoNombre": "Producto 4021",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4021 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000726",
    "tipo": "STOCK_BAJO",
    "productoId": "4022",
    "productoNombre": "Producto 4022",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 4022 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000727",
    "tipo": "STOCK_BAJO",
    "productoId": "4023",
    "productoNombre": "Producto 4023",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 4023 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000728",
    "tipo": "STOCK_CRITICO",
    "productoId": "4418",
    "productoNombre": "Producto 4418",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4418 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000729",
    "tipo": "STOCK_CRITICO",
    "productoId": "4419",
    "productoNombre": "Producto 4419",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4419 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000730",
    "tipo": "STOCK_CRITICO",
    "productoId": "4420",
    "productoNombre": "Producto 4420",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4420 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000731",
    "tipo": "STOCK_CRITICO",
    "productoId": "4429",
    "productoNombre": "Producto 4429",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4429 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000732",
    "tipo": "STOCK_CRITICO",
    "productoId": "4435",
    "productoNombre": "Producto 4435",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4435 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000733",
    "tipo": "STOCK_CRITICO",
    "productoId": "4437",
    "productoNombre": "Producto 4437",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4437 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000734",
    "tipo": "STOCK_CRITICO",
    "productoId": "4462",
    "productoNombre": "Producto 4462",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4462 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000735",
    "tipo": "STOCK_CRITICO",
    "productoId": "4624",
    "productoNombre": "Producto 4624",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4624 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000736",
    "tipo": "STOCK_CRITICO",
    "productoId": "4625",
    "productoNombre": "Producto 4625",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4625 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000737",
    "tipo": "STOCK_CRITICO",
    "productoId": "4628",
    "productoNombre": "Producto 4628",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4628 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000738",
    "tipo": "STOCK_CRITICO",
    "productoId": "4629",
    "productoNombre": "Producto 4629",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4629 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000739",
    "tipo": "STOCK_CRITICO",
    "productoId": "4630",
    "productoNombre": "Producto 4630",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4630 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000740",
    "tipo": "STOCK_CRITICO",
    "productoId": "4631",
    "productoNombre": "Producto 4631",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4631 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000741",
    "tipo": "STOCK_CRITICO",
    "productoId": "4632",
    "productoNombre": "Producto 4632",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4632 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000742",
    "tipo": "STOCK_CRITICO",
    "productoId": "4651",
    "productoNombre": "Producto 4651",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4651 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000743",
    "tipo": "STOCK_CRITICO",
    "productoId": "4661",
    "productoNombre": "Producto 4661",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4661 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000744",
    "tipo": "STOCK_CRITICO",
    "productoId": "4662",
    "productoNombre": "Producto 4662",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4662 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000745",
    "tipo": "STOCK_CRITICO",
    "productoId": "4777",
    "productoNombre": "Producto 4777",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4777 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000746",
    "tipo": "STOCK_CRITICO",
    "productoId": "4790",
    "productoNombre": "Producto 4790",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4790 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000747",
    "tipo": "STOCK_CRITICO",
    "productoId": "4935",
    "productoNombre": "Producto 4935",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4935 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000748",
    "tipo": "STOCK_CRITICO",
    "productoId": "5007",
    "productoNombre": "Producto 5007",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5007 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000749",
    "tipo": "STOCK_CRITICO",
    "productoId": "5115",
    "productoNombre": "Producto 5115",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5115 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000750",
    "tipo": "STOCK_CRITICO",
    "productoId": "5127",
    "productoNombre": "Producto 5127",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5127 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000751",
    "tipo": "STOCK_CRITICO",
    "productoId": "5239",
    "productoNombre": "Producto 5239",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5239 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000752",
    "tipo": "STOCK_BAJO",
    "productoId": "5345",
    "productoNombre": "Producto 5345",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 5345 tiene stock bajo (2 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000753",
    "tipo": "STOCK_CRITICO",
    "productoId": "5772",
    "productoNombre": "Producto 5772",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5772 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000754",
    "tipo": "STOCK_BAJO",
    "productoId": "5871",
    "productoNombre": "Producto 5871",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 5871 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000755",
    "tipo": "STOCK_CRITICO",
    "productoId": "5881",
    "productoNombre": "Producto 5881",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5881 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000756",
    "tipo": "STOCK_CRITICO",
    "productoId": "5887",
    "productoNombre": "Producto 5887",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5887 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000757",
    "tipo": "STOCK_CRITICO",
    "productoId": "5895",
    "productoNombre": "Producto 5895",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5895 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000758",
    "tipo": "STOCK_BAJO",
    "productoId": "5929",
    "productoNombre": "Producto 5929",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 5929 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000759",
    "tipo": "STOCK_CRITICO",
    "productoId": "5952",
    "productoNombre": "Producto 5952",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5952 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000760",
    "tipo": "STOCK_CRITICO",
    "productoId": "5955",
    "productoNombre": "Producto 5955",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5955 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000761",
    "tipo": "STOCK_CRITICO",
    "productoId": "6006",
    "productoNombre": "Producto 6006",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6006 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000762",
    "tipo": "STOCK_CRITICO",
    "productoId": "6064",
    "productoNombre": "Producto 6064",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6064 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000763",
    "tipo": "STOCK_CRITICO",
    "productoId": "6065",
    "productoNombre": "Producto 6065",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6065 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000764",
    "tipo": "STOCK_CRITICO",
    "productoId": "6116",
    "productoNombre": "Producto 6116",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6116 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000765",
    "tipo": "STOCK_CRITICO",
    "productoId": "6134",
    "productoNombre": "Producto 6134",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6134 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000766",
    "tipo": "STOCK_CRITICO",
    "productoId": "6135",
    "productoNombre": "Producto 6135",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6135 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000767",
    "tipo": "STOCK_CRITICO",
    "productoId": "6137",
    "productoNombre": "Producto 6137",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6137 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000768",
    "tipo": "STOCK_CRITICO",
    "productoId": "6138",
    "productoNombre": "Producto 6138",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6138 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000769",
    "tipo": "STOCK_CRITICO",
    "productoId": "6139",
    "productoNombre": "Producto 6139",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6139 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000770",
    "tipo": "STOCK_BAJO",
    "productoId": "6303",
    "productoNombre": "Producto 6303",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 6303 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000771",
    "tipo": "STOCK_CRITICO",
    "productoId": "6487",
    "productoNombre": "Producto 6487",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6487 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000772",
    "tipo": "STOCK_CRITICO",
    "productoId": "6552",
    "productoNombre": "Producto 6552",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6552 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000773",
    "tipo": "STOCK_CRITICO",
    "productoId": "6556",
    "productoNombre": "Producto 6556",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6556 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000774",
    "tipo": "STOCK_CRITICO",
    "productoId": "6558",
    "productoNombre": "Producto 6558",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6558 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000775",
    "tipo": "STOCK_CRITICO",
    "productoId": "6559",
    "productoNombre": "Producto 6559",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6559 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000776",
    "tipo": "STOCK_CRITICO",
    "productoId": "6561",
    "productoNombre": "Producto 6561",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6561 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000777",
    "tipo": "STOCK_CRITICO",
    "productoId": "6617",
    "productoNombre": "Producto 6617",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6617 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000778",
    "tipo": "STOCK_CRITICO",
    "productoId": "6734",
    "productoNombre": "Producto 6734",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6734 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000779",
    "tipo": "STOCK_CRITICO",
    "productoId": "6837",
    "productoNombre": "Producto 6837",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6837 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000780",
    "tipo": "STOCK_CRITICO",
    "productoId": "6841",
    "productoNombre": "Producto 6841",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6841 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000781",
    "tipo": "STOCK_CRITICO",
    "productoId": "7037",
    "productoNombre": "Producto 7037",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7037 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000782",
    "tipo": "STOCK_CRITICO",
    "productoId": "1182",
    "productoNombre": "Producto 1182",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1182 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000783",
    "tipo": "STOCK_CRITICO",
    "productoId": "1306",
    "productoNombre": "Producto 1306",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1306 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000784",
    "tipo": "STOCK_CRITICO",
    "productoId": "3188",
    "productoNombre": "Producto 3188",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3188 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000785",
    "tipo": "STOCK_CRITICO",
    "productoId": "3315",
    "productoNombre": "Producto 3315",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3315 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000786",
    "tipo": "STOCK_CRITICO",
    "productoId": "3367",
    "productoNombre": "Producto 3367",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3367 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000787",
    "tipo": "STOCK_CRITICO",
    "productoId": "3408",
    "productoNombre": "Producto 3408",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3408 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000788",
    "tipo": "STOCK_CRITICO",
    "productoId": "3410",
    "productoNombre": "Producto 3410",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3410 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000789",
    "tipo": "STOCK_CRITICO",
    "productoId": "3411",
    "productoNombre": "Producto 3411",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3411 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000790",
    "tipo": "STOCK_CRITICO",
    "productoId": "3415",
    "productoNombre": "Producto 3415",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3415 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000791",
    "tipo": "STOCK_CRITICO",
    "productoId": "3416",
    "productoNombre": "Producto 3416",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3416 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000792",
    "tipo": "STOCK_CRITICO",
    "productoId": "3417",
    "productoNombre": "Producto 3417",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3417 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000793",
    "tipo": "STOCK_CRITICO",
    "productoId": "3418",
    "productoNombre": "Producto 3418",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3418 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000794",
    "tipo": "STOCK_CRITICO",
    "productoId": "3419",
    "productoNombre": "Producto 3419",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3419 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000795",
    "tipo": "STOCK_CRITICO",
    "productoId": "3420",
    "productoNombre": "Producto 3420",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3420 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000796",
    "tipo": "STOCK_CRITICO",
    "productoId": "3469",
    "productoNombre": "Producto 3469",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3469 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000797",
    "tipo": "STOCK_CRITICO",
    "productoId": "3586",
    "productoNombre": "Producto 3586",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3586 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000798",
    "tipo": "STOCK_CRITICO",
    "productoId": "3629",
    "productoNombre": "Producto 3629",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3629 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000799",
    "tipo": "STOCK_CRITICO",
    "productoId": "3630",
    "productoNombre": "Producto 3630",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3630 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000800",
    "tipo": "STOCK_CRITICO",
    "productoId": "3985",
    "productoNombre": "Producto 3985",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3985 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000801",
    "tipo": "STOCK_CRITICO",
    "productoId": "4004",
    "productoNombre": "Producto 4004",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4004 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000802",
    "tipo": "STOCK_CRITICO",
    "productoId": "4005",
    "productoNombre": "Producto 4005",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4005 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000803",
    "tipo": "STOCK_CRITICO",
    "productoId": "4006",
    "productoNombre": "Producto 4006",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4006 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000804",
    "tipo": "STOCK_CRITICO",
    "productoId": "4007",
    "productoNombre": "Producto 4007",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4007 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000805",
    "tipo": "STOCK_CRITICO",
    "productoId": "4062",
    "productoNombre": "Producto 4062",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4062 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000806",
    "tipo": "STOCK_CRITICO",
    "productoId": "4065",
    "productoNombre": "Producto 4065",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4065 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000807",
    "tipo": "STOCK_CRITICO",
    "productoId": "4081",
    "productoNombre": "Producto 4081",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4081 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000808",
    "tipo": "STOCK_CRITICO",
    "productoId": "4120",
    "productoNombre": "Producto 4120",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4120 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000809",
    "tipo": "STOCK_CRITICO",
    "productoId": "4125",
    "productoNombre": "Producto 4125",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4125 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000810",
    "tipo": "STOCK_CRITICO",
    "productoId": "4134",
    "productoNombre": "Producto 4134",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4134 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000811",
    "tipo": "STOCK_CRITICO",
    "productoId": "4135",
    "productoNombre": "Producto 4135",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4135 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000812",
    "tipo": "STOCK_CRITICO",
    "productoId": "4137",
    "productoNombre": "Producto 4137",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4137 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000813",
    "tipo": "STOCK_CRITICO",
    "productoId": "4138",
    "productoNombre": "Producto 4138",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4138 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000814",
    "tipo": "STOCK_CRITICO",
    "productoId": "4139",
    "productoNombre": "Producto 4139",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4139 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000815",
    "tipo": "STOCK_CRITICO",
    "productoId": "4140",
    "productoNombre": "Producto 4140",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4140 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000816",
    "tipo": "STOCK_CRITICO",
    "productoId": "4141",
    "productoNombre": "Producto 4141",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4141 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000817",
    "tipo": "STOCK_CRITICO",
    "productoId": "4142",
    "productoNombre": "Producto 4142",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4142 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000818",
    "tipo": "STOCK_CRITICO",
    "productoId": "4143",
    "productoNombre": "Producto 4143",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4143 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000819",
    "tipo": "STOCK_CRITICO",
    "productoId": "4144",
    "productoNombre": "Producto 4144",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4144 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000820",
    "tipo": "STOCK_CRITICO",
    "productoId": "4311",
    "productoNombre": "Producto 4311",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4311 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000821",
    "tipo": "STOCK_CRITICO",
    "productoId": "4349",
    "productoNombre": "Producto 4349",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4349 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000822",
    "tipo": "STOCK_CRITICO",
    "productoId": "4350",
    "productoNombre": "Producto 4350",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4350 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000823",
    "tipo": "STOCK_CRITICO",
    "productoId": "4351",
    "productoNombre": "Producto 4351",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4351 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000824",
    "tipo": "STOCK_CRITICO",
    "productoId": "4352",
    "productoNombre": "Producto 4352",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4352 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000825",
    "tipo": "STOCK_CRITICO",
    "productoId": "4384",
    "productoNombre": "Producto 4384",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4384 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000826",
    "tipo": "STOCK_CRITICO",
    "productoId": "4505",
    "productoNombre": "Producto 4505",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4505 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000827",
    "tipo": "STOCK_CRITICO",
    "productoId": "4506",
    "productoNombre": "Producto 4506",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4506 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000828",
    "tipo": "STOCK_CRITICO",
    "productoId": "4508",
    "productoNombre": "Producto 4508",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4508 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000829",
    "tipo": "STOCK_CRITICO",
    "productoId": "4510",
    "productoNombre": "Producto 4510",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4510 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000830",
    "tipo": "STOCK_CRITICO",
    "productoId": "4511",
    "productoNombre": "Producto 4511",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4511 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000831",
    "tipo": "STOCK_CRITICO",
    "productoId": "4512",
    "productoNombre": "Producto 4512",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4512 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000832",
    "tipo": "STOCK_CRITICO",
    "productoId": "4513",
    "productoNombre": "Producto 4513",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4513 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000833",
    "tipo": "STOCK_CRITICO",
    "productoId": "4514",
    "productoNombre": "Producto 4514",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4514 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000834",
    "tipo": "STOCK_CRITICO",
    "productoId": "4524",
    "productoNombre": "Producto 4524",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4524 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000835",
    "tipo": "STOCK_CRITICO",
    "productoId": "4528",
    "productoNombre": "Producto 4528",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4528 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000836",
    "tipo": "STOCK_CRITICO",
    "productoId": "4535",
    "productoNombre": "Producto 4535",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4535 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000837",
    "tipo": "STOCK_CRITICO",
    "productoId": "4536",
    "productoNombre": "Producto 4536",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4536 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000838",
    "tipo": "STOCK_CRITICO",
    "productoId": "4570",
    "productoNombre": "Producto 4570",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4570 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000839",
    "tipo": "STOCK_CRITICO",
    "productoId": "4695",
    "productoNombre": "Producto 4695",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4695 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000840",
    "tipo": "STOCK_CRITICO",
    "productoId": "4704",
    "productoNombre": "Producto 4704",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4704 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000841",
    "tipo": "STOCK_CRITICO",
    "productoId": "4705",
    "productoNombre": "Producto 4705",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4705 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000842",
    "tipo": "STOCK_CRITICO",
    "productoId": "4713",
    "productoNombre": "Producto 4713",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4713 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000843",
    "tipo": "STOCK_CRITICO",
    "productoId": "4714",
    "productoNombre": "Producto 4714",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4714 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000844",
    "tipo": "STOCK_CRITICO",
    "productoId": "4715",
    "productoNombre": "Producto 4715",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4715 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000845",
    "tipo": "STOCK_CRITICO",
    "productoId": "4716",
    "productoNombre": "Producto 4716",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4716 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000846",
    "tipo": "STOCK_CRITICO",
    "productoId": "4734",
    "productoNombre": "Producto 4734",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4734 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000847",
    "tipo": "STOCK_CRITICO",
    "productoId": "4736",
    "productoNombre": "Producto 4736",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4736 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000848",
    "tipo": "STOCK_CRITICO",
    "productoId": "4739",
    "productoNombre": "Producto 4739",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4739 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000849",
    "tipo": "STOCK_CRITICO",
    "productoId": "4741",
    "productoNombre": "Producto 4741",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4741 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000850",
    "tipo": "STOCK_CRITICO",
    "productoId": "4742",
    "productoNombre": "Producto 4742",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4742 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000851",
    "tipo": "STOCK_CRITICO",
    "productoId": "4761",
    "productoNombre": "Producto 4761",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4761 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000852",
    "tipo": "STOCK_CRITICO",
    "productoId": "4764",
    "productoNombre": "Producto 4764",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4764 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000853",
    "tipo": "STOCK_CRITICO",
    "productoId": "4766",
    "productoNombre": "Producto 4766",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4766 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000854",
    "tipo": "STOCK_CRITICO",
    "productoId": "4849",
    "productoNombre": "Producto 4849",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4849 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000855",
    "tipo": "STOCK_CRITICO",
    "productoId": "5013",
    "productoNombre": "Producto 5013",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5013 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000856",
    "tipo": "STOCK_CRITICO",
    "productoId": "5014",
    "productoNombre": "Producto 5014",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5014 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000857",
    "tipo": "STOCK_CRITICO",
    "productoId": "5015",
    "productoNombre": "Producto 5015",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5015 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000858",
    "tipo": "STOCK_CRITICO",
    "productoId": "5142",
    "productoNombre": "Producto 5142",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5142 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000859",
    "tipo": "STOCK_CRITICO",
    "productoId": "5154",
    "productoNombre": "Producto 5154",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5154 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000860",
    "tipo": "STOCK_CRITICO",
    "productoId": "5155",
    "productoNombre": "Producto 5155",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5155 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000861",
    "tipo": "STOCK_CRITICO",
    "productoId": "5157",
    "productoNombre": "Producto 5157",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5157 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000862",
    "tipo": "STOCK_CRITICO",
    "productoId": "5158",
    "productoNombre": "Producto 5158",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5158 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000863",
    "tipo": "STOCK_CRITICO",
    "productoId": "5159",
    "productoNombre": "Producto 5159",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5159 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000864",
    "tipo": "STOCK_CRITICO",
    "productoId": "5161",
    "productoNombre": "Producto 5161",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5161 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000865",
    "tipo": "STOCK_CRITICO",
    "productoId": "5162",
    "productoNombre": "Producto 5162",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5162 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000866",
    "tipo": "STOCK_CRITICO",
    "productoId": "5164",
    "productoNombre": "Producto 5164",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5164 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000867",
    "tipo": "STOCK_CRITICO",
    "productoId": "5165",
    "productoNombre": "Producto 5165",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5165 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000868",
    "tipo": "STOCK_CRITICO",
    "productoId": "5167",
    "productoNombre": "Producto 5167",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5167 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000869",
    "tipo": "STOCK_CRITICO",
    "productoId": "5980",
    "productoNombre": "Producto 5980",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5980 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000870",
    "tipo": "STOCK_CRITICO",
    "productoId": "6507",
    "productoNombre": "Producto 6507",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6507 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000871",
    "tipo": "STOCK_CRITICO",
    "productoId": "6512",
    "productoNombre": "Producto 6512",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6512 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000872",
    "tipo": "STOCK_CRITICO",
    "productoId": "6513",
    "productoNombre": "Producto 6513",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6513 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000873",
    "tipo": "STOCK_CRITICO",
    "productoId": "6514",
    "productoNombre": "Producto 6514",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6514 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000874",
    "tipo": "STOCK_CRITICO",
    "productoId": "6515",
    "productoNombre": "Producto 6515",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6515 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000875",
    "tipo": "STOCK_CRITICO",
    "productoId": "6594",
    "productoNombre": "Producto 6594",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6594 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000876",
    "tipo": "STOCK_CRITICO",
    "productoId": "7222",
    "productoNombre": "Producto 7222",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7222 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000877",
    "tipo": "STOCK_CRITICO",
    "productoId": "7223",
    "productoNombre": "Producto 7223",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7223 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000878",
    "tipo": "STOCK_CRITICO",
    "productoId": "7224",
    "productoNombre": "Producto 7224",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7224 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000879",
    "tipo": "STOCK_CRITICO",
    "productoId": "7225",
    "productoNombre": "Producto 7225",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7225 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000880",
    "tipo": "STOCK_CRITICO",
    "productoId": "7226",
    "productoNombre": "Producto 7226",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7226 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000881",
    "tipo": "STOCK_CRITICO",
    "productoId": "7227",
    "productoNombre": "Producto 7227",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7227 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000882",
    "tipo": "STOCK_BAJO",
    "productoId": "66",
    "productoNombre": "Producto 66",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 66 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000883",
    "tipo": "STOCK_CRITICO",
    "productoId": "67",
    "productoNombre": "Producto 67",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 67 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000884",
    "tipo": "STOCK_CRITICO",
    "productoId": "71",
    "productoNombre": "Producto 71",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 71 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000885",
    "tipo": "STOCK_CRITICO",
    "productoId": "275",
    "productoNombre": "Producto 275",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 275 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000886",
    "tipo": "STOCK_CRITICO",
    "productoId": "1523",
    "productoNombre": "Producto 1523",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1523 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000887",
    "tipo": "STOCK_CRITICO",
    "productoId": "1524",
    "productoNombre": "Producto 1524",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1524 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000888",
    "tipo": "STOCK_CRITICO",
    "productoId": "1525",
    "productoNombre": "Producto 1525",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1525 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000889",
    "tipo": "STOCK_CRITICO",
    "productoId": "1527",
    "productoNombre": "Producto 1527",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1527 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000890",
    "tipo": "STOCK_CRITICO",
    "productoId": "1528",
    "productoNombre": "Producto 1528",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1528 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000891",
    "tipo": "STOCK_CRITICO",
    "productoId": "1529",
    "productoNombre": "Producto 1529",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1529 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000892",
    "tipo": "STOCK_CRITICO",
    "productoId": "1530",
    "productoNombre": "Producto 1530",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1530 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000893",
    "tipo": "STOCK_CRITICO",
    "productoId": "1531",
    "productoNombre": "Producto 1531",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1531 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000894",
    "tipo": "STOCK_CRITICO",
    "productoId": "1532",
    "productoNombre": "Producto 1532",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1532 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000895",
    "tipo": "STOCK_BAJO",
    "productoId": "2759",
    "productoNombre": "Producto 2759",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 2759 tiene stock bajo (2 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000896",
    "tipo": "STOCK_CRITICO",
    "productoId": "3251",
    "productoNombre": "Producto 3251",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3251 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000897",
    "tipo": "STOCK_CRITICO",
    "productoId": "3252",
    "productoNombre": "Producto 3252",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3252 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000898",
    "tipo": "STOCK_CRITICO",
    "productoId": "3256",
    "productoNombre": "Producto 3256",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3256 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000899",
    "tipo": "STOCK_CRITICO",
    "productoId": "3257",
    "productoNombre": "Producto 3257",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3257 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000900",
    "tipo": "STOCK_CRITICO",
    "productoId": "4059",
    "productoNombre": "Producto 4059",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4059 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000901",
    "tipo": "STOCK_CRITICO",
    "productoId": "4190",
    "productoNombre": "Producto 4190",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4190 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000902",
    "tipo": "STOCK_CRITICO",
    "productoId": "4515",
    "productoNombre": "Producto 4515",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4515 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000903",
    "tipo": "STOCK_CRITICO",
    "productoId": "4516",
    "productoNombre": "Producto 4516",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4516 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000904",
    "tipo": "STOCK_CRITICO",
    "productoId": "4517",
    "productoNombre": "Producto 4517",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4517 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000905",
    "tipo": "STOCK_CRITICO",
    "productoId": "4518",
    "productoNombre": "Producto 4518",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4518 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000906",
    "tipo": "STOCK_CRITICO",
    "productoId": "4519",
    "productoNombre": "Producto 4519",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4519 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000907",
    "tipo": "STOCK_CRITICO",
    "productoId": "5816",
    "productoNombre": "Producto 5816",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5816 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000908",
    "tipo": "STOCK_CRITICO",
    "productoId": "5817",
    "productoNombre": "Producto 5817",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5817 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000909",
    "tipo": "STOCK_CRITICO",
    "productoId": "5818",
    "productoNombre": "Producto 5818",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5818 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000910",
    "tipo": "STOCK_CRITICO",
    "productoId": "5819",
    "productoNombre": "Producto 5819",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5819 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000911",
    "tipo": "STOCK_CRITICO",
    "productoId": "5820",
    "productoNombre": "Producto 5820",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5820 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000912",
    "tipo": "STOCK_CRITICO",
    "productoId": "5821",
    "productoNombre": "Producto 5821",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5821 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000913",
    "tipo": "STOCK_CRITICO",
    "productoId": "5823",
    "productoNombre": "Producto 5823",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5823 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000914",
    "tipo": "STOCK_CRITICO",
    "productoId": "5824",
    "productoNombre": "Producto 5824",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5824 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000915",
    "tipo": "STOCK_CRITICO",
    "productoId": "5827",
    "productoNombre": "Producto 5827",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5827 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000916",
    "tipo": "STOCK_BAJO",
    "productoId": "5856",
    "productoNombre": "Producto 5856",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 5856 tiene stock bajo (1 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000917",
    "tipo": "STOCK_CRITICO",
    "productoId": "6451",
    "productoNombre": "Producto 6451",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6451 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000918",
    "tipo": "STOCK_CRITICO",
    "productoId": "7039",
    "productoNombre": "Producto 7039",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7039 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000919",
    "tipo": "STOCK_CRITICO",
    "productoId": "7160",
    "productoNombre": "Producto 7160",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7160 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000920",
    "tipo": "STOCK_BAJO",
    "productoId": "7179",
    "productoNombre": "Producto 7179",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 7179 tiene stock bajo (6 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000921",
    "tipo": "STOCK_CRITICO",
    "productoId": "40",
    "productoNombre": "Producto 40",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 40 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000922",
    "tipo": "STOCK_CRITICO",
    "productoId": "64",
    "productoNombre": "Producto 64",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 64 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000923",
    "tipo": "STOCK_BAJO",
    "productoId": "127",
    "productoNombre": "Producto 127",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 127 tiene stock bajo (5 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000924",
    "tipo": "STOCK_CRITICO",
    "productoId": "171",
    "productoNombre": "Producto 171",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 171 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000925",
    "tipo": "STOCK_CRITICO",
    "productoId": "504",
    "productoNombre": "Producto 504",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 504 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000926",
    "tipo": "STOCK_CRITICO",
    "productoId": "509",
    "productoNombre": "Producto 509",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 509 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000927",
    "tipo": "STOCK_CRITICO",
    "productoId": "553",
    "productoNombre": "Producto 553",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 553 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000928",
    "tipo": "STOCK_CRITICO",
    "productoId": "685",
    "productoNombre": "Producto 685",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 685 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000929",
    "tipo": "STOCK_CRITICO",
    "productoId": "694",
    "productoNombre": "Producto 694",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 694 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000930",
    "tipo": "STOCK_CRITICO",
    "productoId": "703",
    "productoNombre": "Producto 703",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 703 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000931",
    "tipo": "STOCK_CRITICO",
    "productoId": "705",
    "productoNombre": "Producto 705",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 705 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000932",
    "tipo": "STOCK_CRITICO",
    "productoId": "706",
    "productoNombre": "Producto 706",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 706 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000933",
    "tipo": "STOCK_CRITICO",
    "productoId": "1128",
    "productoNombre": "Producto 1128",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1128 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000934",
    "tipo": "STOCK_CRITICO",
    "productoId": "1129",
    "productoNombre": "Producto 1129",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1129 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000935",
    "tipo": "STOCK_CRITICO",
    "productoId": "1132",
    "productoNombre": "Producto 1132",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1132 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000936",
    "tipo": "STOCK_CRITICO",
    "productoId": "1133",
    "productoNombre": "Producto 1133",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1133 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000937",
    "tipo": "STOCK_CRITICO",
    "productoId": "1227",
    "productoNombre": "Producto 1227",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1227 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000938",
    "tipo": "STOCK_CRITICO",
    "productoId": "1256",
    "productoNombre": "Producto 1256",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1256 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000939",
    "tipo": "STOCK_CRITICO",
    "productoId": "1611",
    "productoNombre": "Producto 1611",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1611 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000940",
    "tipo": "STOCK_CRITICO",
    "productoId": "1766",
    "productoNombre": "Producto 1766",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1766 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000941",
    "tipo": "STOCK_CRITICO",
    "productoId": "1767",
    "productoNombre": "Producto 1767",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1767 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000942",
    "tipo": "STOCK_CRITICO",
    "productoId": "1768",
    "productoNombre": "Producto 1768",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1768 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000943",
    "tipo": "STOCK_CRITICO",
    "productoId": "1929",
    "productoNombre": "Producto 1929",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1929 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000944",
    "tipo": "STOCK_CRITICO",
    "productoId": "1930",
    "productoNombre": "Producto 1930",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1930 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000945",
    "tipo": "STOCK_CRITICO",
    "productoId": "1931",
    "productoNombre": "Producto 1931",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1931 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000946",
    "tipo": "STOCK_CRITICO",
    "productoId": "2135",
    "productoNombre": "Producto 2135",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2135 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000947",
    "tipo": "STOCK_CRITICO",
    "productoId": "2300",
    "productoNombre": "Producto 2300",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2300 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000948",
    "tipo": "STOCK_CRITICO",
    "productoId": "2358",
    "productoNombre": "Producto 2358",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2358 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000949",
    "tipo": "STOCK_CRITICO",
    "productoId": "2437",
    "productoNombre": "Producto 2437",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2437 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000950",
    "tipo": "STOCK_CRITICO",
    "productoId": "2458",
    "productoNombre": "Producto 2458",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2458 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000951",
    "tipo": "STOCK_CRITICO",
    "productoId": "2695",
    "productoNombre": "Producto 2695",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2695 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000952",
    "tipo": "STOCK_CRITICO",
    "productoId": "2708",
    "productoNombre": "Producto 2708",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2708 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000953",
    "tipo": "STOCK_CRITICO",
    "productoId": "2757",
    "productoNombre": "Producto 2757",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2757 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000954",
    "tipo": "STOCK_CRITICO",
    "productoId": "2834",
    "productoNombre": "Producto 2834",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2834 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000955",
    "tipo": "STOCK_CRITICO",
    "productoId": "2842",
    "productoNombre": "Producto 2842",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2842 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000956",
    "tipo": "STOCK_CRITICO",
    "productoId": "3026",
    "productoNombre": "Producto 3026",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3026 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000957",
    "tipo": "STOCK_CRITICO",
    "productoId": "3027",
    "productoNombre": "Producto 3027",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3027 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000958",
    "tipo": "STOCK_CRITICO",
    "productoId": "3034",
    "productoNombre": "Producto 3034",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3034 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000959",
    "tipo": "STOCK_CRITICO",
    "productoId": "3040",
    "productoNombre": "Producto 3040",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3040 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000960",
    "tipo": "STOCK_CRITICO",
    "productoId": "3109",
    "productoNombre": "Producto 3109",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3109 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000961",
    "tipo": "STOCK_CRITICO",
    "productoId": "3110",
    "productoNombre": "Producto 3110",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3110 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000962",
    "tipo": "STOCK_CRITICO",
    "productoId": "3121",
    "productoNombre": "Producto 3121",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3121 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000963",
    "tipo": "STOCK_CRITICO",
    "productoId": "3521",
    "productoNombre": "Producto 3521",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3521 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000964",
    "tipo": "STOCK_CRITICO",
    "productoId": "3522",
    "productoNombre": "Producto 3522",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3522 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000965",
    "tipo": "STOCK_CRITICO",
    "productoId": "3557",
    "productoNombre": "Producto 3557",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3557 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000966",
    "tipo": "STOCK_CRITICO",
    "productoId": "3657",
    "productoNombre": "Producto 3657",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3657 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000967",
    "tipo": "STOCK_CRITICO",
    "productoId": "3855",
    "productoNombre": "Producto 3855",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3855 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000968",
    "tipo": "STOCK_CRITICO",
    "productoId": "3953",
    "productoNombre": "Producto 3953",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3953 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000969",
    "tipo": "STOCK_CRITICO",
    "productoId": "3954",
    "productoNombre": "Producto 3954",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3954 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000970",
    "tipo": "STOCK_BAJO",
    "productoId": "4033",
    "productoNombre": "Producto 4033",
    "nivelPrioridad": "MEDIA",
    "mensaje": "Producto 4033 tiene stock bajo (7 unidades)",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000971",
    "tipo": "STOCK_CRITICO",
    "productoId": "4052",
    "productoNombre": "Producto 4052",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4052 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000972",
    "tipo": "STOCK_CRITICO",
    "productoId": "4053",
    "productoNombre": "Producto 4053",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4053 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000973",
    "tipo": "STOCK_CRITICO",
    "productoId": "4174",
    "productoNombre": "Producto 4174",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4174 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000974",
    "tipo": "STOCK_CRITICO",
    "productoId": "5099",
    "productoNombre": "Producto 5099",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5099 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000975",
    "tipo": "STOCK_CRITICO",
    "productoId": "5466",
    "productoNombre": "Producto 5466",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5466 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000976",
    "tipo": "STOCK_CRITICO",
    "productoId": "5497",
    "productoNombre": "Producto 5497",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5497 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000977",
    "tipo": "STOCK_CRITICO",
    "productoId": "5544",
    "productoNombre": "Producto 5544",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5544 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000978",
    "tipo": "STOCK_CRITICO",
    "productoId": "5553",
    "productoNombre": "Producto 5553",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5553 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000979",
    "tipo": "STOCK_CRITICO",
    "productoId": "5554",
    "productoNombre": "Producto 5554",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5554 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000980",
    "tipo": "STOCK_CRITICO",
    "productoId": "5555",
    "productoNombre": "Producto 5555",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5555 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000981",
    "tipo": "STOCK_CRITICO",
    "productoId": "5556",
    "productoNombre": "Producto 5556",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5556 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000982",
    "tipo": "STOCK_CRITICO",
    "productoId": "5573",
    "productoNombre": "Producto 5573",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5573 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000983",
    "tipo": "STOCK_CRITICO",
    "productoId": "5829",
    "productoNombre": "Producto 5829",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5829 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000984",
    "tipo": "STOCK_CRITICO",
    "productoId": "5878",
    "productoNombre": "Producto 5878",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5878 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000985",
    "tipo": "STOCK_CRITICO",
    "productoId": "5880",
    "productoNombre": "Producto 5880",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5880 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000986",
    "tipo": "STOCK_CRITICO",
    "productoId": "5985",
    "productoNombre": "Producto 5985",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5985 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000987",
    "tipo": "STOCK_CRITICO",
    "productoId": "6046",
    "productoNombre": "Producto 6046",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6046 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000988",
    "tipo": "STOCK_CRITICO",
    "productoId": "6047",
    "productoNombre": "Producto 6047",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6047 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000989",
    "tipo": "STOCK_CRITICO",
    "productoId": "6417",
    "productoNombre": "Producto 6417",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6417 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000990",
    "tipo": "STOCK_CRITICO",
    "productoId": "6440",
    "productoNombre": "Producto 6440",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6440 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000991",
    "tipo": "STOCK_CRITICO",
    "productoId": "6442",
    "productoNombre": "Producto 6442",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6442 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000992",
    "tipo": "STOCK_CRITICO",
    "productoId": "6519",
    "productoNombre": "Producto 6519",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6519 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000993",
    "tipo": "STOCK_CRITICO",
    "productoId": "6522",
    "productoNombre": "Producto 6522",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6522 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000994",
    "tipo": "STOCK_CRITICO",
    "productoId": "6525",
    "productoNombre": "Producto 6525",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6525 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000995",
    "tipo": "STOCK_CRITICO",
    "productoId": "6526",
    "productoNombre": "Producto 6526",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6526 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000996",
    "tipo": "STOCK_CRITICO",
    "productoId": "6528",
    "productoNombre": "Producto 6528",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6528 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000997",
    "tipo": "STOCK_CRITICO",
    "productoId": "6576",
    "productoNombre": "Producto 6576",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6576 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000998",
    "tipo": "STOCK_CRITICO",
    "productoId": "6577",
    "productoNombre": "Producto 6577",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6577 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT000999",
    "tipo": "STOCK_CRITICO",
    "productoId": "6578",
    "productoNombre": "Producto 6578",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6578 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001000",
    "tipo": "STOCK_CRITICO",
    "productoId": "6579",
    "productoNombre": "Producto 6579",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6579 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001001",
    "tipo": "STOCK_CRITICO",
    "productoId": "6580",
    "productoNombre": "Producto 6580",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6580 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001002",
    "tipo": "STOCK_CRITICO",
    "productoId": "6581",
    "productoNombre": "Producto 6581",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6581 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001003",
    "tipo": "STOCK_CRITICO",
    "productoId": "6582",
    "productoNombre": "Producto 6582",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6582 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001004",
    "tipo": "STOCK_CRITICO",
    "productoId": "6583",
    "productoNombre": "Producto 6583",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6583 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001005",
    "tipo": "STOCK_CRITICO",
    "productoId": "6584",
    "productoNombre": "Producto 6584",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6584 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001006",
    "tipo": "STOCK_CRITICO",
    "productoId": "6586",
    "productoNombre": "Producto 6586",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6586 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001007",
    "tipo": "STOCK_CRITICO",
    "productoId": "6587",
    "productoNombre": "Producto 6587",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6587 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001008",
    "tipo": "STOCK_CRITICO",
    "productoId": "6588",
    "productoNombre": "Producto 6588",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6588 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001009",
    "tipo": "STOCK_CRITICO",
    "productoId": "6589",
    "productoNombre": "Producto 6589",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6589 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001010",
    "tipo": "STOCK_CRITICO",
    "productoId": "6590",
    "productoNombre": "Producto 6590",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6590 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001011",
    "tipo": "STOCK_CRITICO",
    "productoId": "6604",
    "productoNombre": "Producto 6604",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6604 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001012",
    "tipo": "STOCK_CRITICO",
    "productoId": "7158",
    "productoNombre": "Producto 7158",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7158 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001013",
    "tipo": "STOCK_CRITICO",
    "productoId": "7186",
    "productoNombre": "Producto 7186",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7186 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001014",
    "tipo": "STOCK_CRITICO",
    "productoId": "7218",
    "productoNombre": "Producto 7218",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7218 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001015",
    "tipo": "STOCK_CRITICO",
    "productoId": "7262",
    "productoNombre": "Producto 7262",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7262 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001016",
    "tipo": "STOCK_CRITICO",
    "productoId": "7264",
    "productoNombre": "Producto 7264",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7264 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001017",
    "tipo": "STOCK_CRITICO",
    "productoId": "7265",
    "productoNombre": "Producto 7265",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7265 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001018",
    "tipo": "STOCK_CRITICO",
    "productoId": "7266",
    "productoNombre": "Producto 7266",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7266 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001019",
    "tipo": "STOCK_CRITICO",
    "productoId": "7267",
    "productoNombre": "Producto 7267",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7267 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001020",
    "tipo": "STOCK_CRITICO",
    "productoId": "330",
    "productoNombre": "Producto 330",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 330 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001021",
    "tipo": "STOCK_CRITICO",
    "productoId": "3853",
    "productoNombre": "Producto 3853",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3853 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001022",
    "tipo": "STOCK_CRITICO",
    "productoId": "4410",
    "productoNombre": "Producto 4410",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 4410 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001023",
    "tipo": "STOCK_CRITICO",
    "productoId": "7263",
    "productoNombre": "Producto 7263",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 7263 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001024",
    "tipo": "STOCK_CRITICO",
    "productoId": "1111",
    "productoNombre": "Producto 1111",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1111 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001025",
    "tipo": "STOCK_CRITICO",
    "productoId": "1605",
    "productoNombre": "Producto 1605",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1605 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001026",
    "tipo": "STOCK_CRITICO",
    "productoId": "1606",
    "productoNombre": "Producto 1606",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 1606 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001027",
    "tipo": "STOCK_CRITICO",
    "productoId": "2396",
    "productoNombre": "Producto 2396",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2396 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001028",
    "tipo": "STOCK_CRITICO",
    "productoId": "2397",
    "productoNombre": "Producto 2397",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2397 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001029",
    "tipo": "STOCK_CRITICO",
    "productoId": "2694",
    "productoNombre": "Producto 2694",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2694 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001030",
    "tipo": "STOCK_CRITICO",
    "productoId": "2696",
    "productoNombre": "Producto 2696",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2696 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001031",
    "tipo": "STOCK_CRITICO",
    "productoId": "2697",
    "productoNombre": "Producto 2697",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2697 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001032",
    "tipo": "STOCK_CRITICO",
    "productoId": "2773",
    "productoNombre": "Producto 2773",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2773 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001033",
    "tipo": "STOCK_CRITICO",
    "productoId": "2820",
    "productoNombre": "Producto 2820",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2820 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001034",
    "tipo": "STOCK_CRITICO",
    "productoId": "2821",
    "productoNombre": "Producto 2821",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2821 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001035",
    "tipo": "STOCK_CRITICO",
    "productoId": "2822",
    "productoNombre": "Producto 2822",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 2822 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001036",
    "tipo": "STOCK_CRITICO",
    "productoId": "3108",
    "productoNombre": "Producto 3108",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3108 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001037",
    "tipo": "STOCK_CRITICO",
    "productoId": "3805",
    "productoNombre": "Producto 3805",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3805 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001038",
    "tipo": "STOCK_CRITICO",
    "productoId": "3806",
    "productoNombre": "Producto 3806",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 3806 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001039",
    "tipo": "STOCK_CRITICO",
    "productoId": "5098",
    "productoNombre": "Producto 5098",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5098 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001040",
    "tipo": "STOCK_CRITICO",
    "productoId": "5100",
    "productoNombre": "Producto 5100",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5100 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001041",
    "tipo": "STOCK_CRITICO",
    "productoId": "5634",
    "productoNombre": "Producto 5634",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 5634 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001042",
    "tipo": "STOCK_CRITICO",
    "productoId": "6415",
    "productoNombre": "Producto 6415",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6415 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001043",
    "tipo": "STOCK_CRITICO",
    "productoId": "6416",
    "productoNombre": "Producto 6416",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6416 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  },
  {
    "id": "ALT001044",
    "tipo": "STOCK_CRITICO",
    "productoId": "6972",
    "productoNombre": "Producto 6972",
    "nivelPrioridad": "ALTA",
    "mensaje": "Producto 6972 está agotado",
    "leida": false,
    "fechaAlerta": "2025-11-18"
  }
];
