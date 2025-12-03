export type EstadoOrdenCompra = 
  | 'Borrador' 
  | 'Enviada' 
  | 'Confirmada'
  | 'Recibida Parcial'
  | 'Recibida Completa'
  | 'Cancelada';

export interface OrdenCompra {
  id: string;
  numeroOrden: string;
  proveedorId: string;
  proveedorNombre: string;
  fecha: string;
  fechaEntregaEstimada: string;
  estado: EstadoOrdenCompra;
  items: ItemOrdenCompra[];
  subtotal: number;
  iva: number;
  total: number;
  observaciones: string;
  generadaAutomaticamente: boolean; // Si fue generada por stock mínimo
  fechaEnvio?: string;
  fechaRecepcion?: string;
  createdBy: string;
  createdAt: string;
}

export interface ItemOrdenCompra {
  productoId: string;
  productoNombre: string;
  codigoBarras: string;
  cantidadSolicitada: number;
  cantidadRecibida: number;
  precioUnitario: number;
  subtotal: number;
}

export interface RecepcionMercaderia {
  id: string;
  ordenCompraId: string;
  fecha: string;
  items: ItemRecepcion[];
  diferencias: DiferenciaRecepcion[];
  recibidoPor: string;
  observaciones: string;
}

export interface ItemRecepcion {
  productoId: string;
  productoNombre: string;
  cantidadSolicitada: number;
  cantidadRecibida: number;
  lote?: string;
  fechaVencimiento?: string;
}

export interface DiferenciaRecepcion {
  productoId: string;
  productoNombre: string;
  tipo: 'Faltante' | 'Sobrante' | 'Dañado';
  cantidad: number;
  motivo: string;
}
