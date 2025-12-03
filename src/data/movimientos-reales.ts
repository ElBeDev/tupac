// Movimientos de stock reales generados desde CSV
// Fecha: 03/05/2018
// Total movimientos: 376
// Productos únicos: 483
// VENTAS: 9, COMPRAS: 14, ENTRADAS: 3, SALIDAS: 350

export interface ItemMovimiento {
  productoId: string;
  cantidad: number;
  unidad: string;
  precio: number;
  valorizacion: number;
}

export interface MovimientoReal {
  id: string;
  tipo: 'ENTRADA' | 'SALIDA' | 'VENTA' | 'COMPRA';
  fecha: string;
  hora: string;
  numeroComprobante: string;
  tipoComprobante: string;
  entidad: string;
  items: ItemMovimiento[];
  totalCantidad: number;
  totalValor: number;
  observaciones: string;
}

export const movimientosReales: MovimientoReal[] = [];
