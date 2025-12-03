export type CategoriaCliente = 'VIP' | 'Regular' | 'Nuevo' | 'Moroso';

export interface Cliente {
  id: string;
  codigo?: string; // Código del cliente del sistema ERP
  nombre?: string; // Nombre corto (legacy)
  nombreFantasia?: string; // Nombre comercial
  razonSocial: string;
  cuit: string;
  condicionIVA?: string;
  direccion: string;
  ciudad?: string;
  localidad?: string;
  provincia: string;
  codigoPostal?: string;
  telefono: string;
  email: string;
  contacto?: string; // Persona de contacto (optional)
  categoria?: CategoriaCliente;
  limiteCredito: number;
  saldoActual?: number; // Saldo actual de deuda
  saldoDeuda?: number; // Alias de saldoActual (legacy)
  diasCredito?: number; // Días de crédito otorgados
  descuentoGeneral?: number; // % de descuento general (nuevo)
  descuento?: number; // % de descuento general (legacy)
  listaPrecio?: 'Mayorista' | 'Minorista' | 'Distribuidor';
  activo: boolean;
  notas?: string;
  observaciones?: string; // Alias de notas
  fechaAlta?: string;
  ultimaCompra?: string;
  totalComprado?: number;
}

export interface VentaCliente {
  id: string;
  clienteId: string;
  fecha: string;
  numeroFactura: string;
  tipoFactura: 'A' | 'B' | 'C';
  subtotal: number;
  descuento: number;
  iva: number;
  total: number;
  estado: 'Pendiente' | 'Pagada' | 'Vencida' | 'Cancelada';
  items: VentaItem[];
  metodoPago: string;
  fechaPago?: string;
  fechaVencimiento?: string;
  notas?: string;
}

export interface VentaItem {
  productoId: string;
  productoNombre: string;
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  subtotal: number;
}

export interface CuentaCorriente {
  clienteId: string;
  saldoActual: number;
  limiteCredito: number;
  disponible: number;
  movimientos: MovimientoCuenta[];
}

export interface MovimientoCuenta {
  id: string;
  fecha: string;
  tipo: 'Venta' | 'Pago' | 'Nota Crédito' | 'Ajuste';
  descripcion: string;
  debe: number;
  haber: number;
  saldo: number;
  referencia?: string;
}
