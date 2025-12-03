export type MetodoPago = 
  | 'Efectivo' 
  | 'Transferencia' 
  | 'Cheque Propio' 
  | 'Cheque Tercero'
  | 'Cuenta Corriente'
  | 'Mercado Pago'
  | 'Tarjeta Débito'
  | 'Tarjeta Crédito';

export type TipoFactura = 'A' | 'B' | 'C';
export type EstadoVenta = 'Borrador' | 'Confirmada' | 'Pagada' | 'Cancelada' | 'Completada';

export interface Venta {
  id: string;
  numeroFactura: string;
  clienteId: string;
  clienteNombre?: string;
  fecha: string;
  hora?: string;
  tipoFactura?: TipoFactura;
  items: ItemVenta[];
  subtotal: number;
  descuentoGlobal?: number;
  descuento?: number; // Alias para descuentoGlobal
  iva21?: number;
  iva105?: number;
  total: number;
  metodoPago: MetodoPago;
  estado: EstadoVenta;
  observaciones?: string;
  vendedor?: string;
  cae?: string; // Código de Autorización Electrónico (AFIP)
  vencimientoCae?: string;
  fechaPago?: string;
  createdBy?: string;
  createdAt?: string;
}

export interface ItemVenta {
  productoId: string;
  productoNombre?: string;
  codigoBarras?: string;
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  alicuotaIva?: 21 | 10.5 | 0;
  subtotal: number;
}

export interface CarritoItem {
  producto: {
    id: string;
    nombre: string;
    codigoBarras: string;
    precioVenta: number;
    stockActual: number;
    alicuotaIva: 21 | 10.5 | 0;
    imagenUrl?: string;
  };
  cantidad: number;
  descuento: number;
}
