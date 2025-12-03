export interface Proveedor {
  id: string;
  nombre: string;
  nombreFantasia?: string; // Nombre comercial
  razonSocial: string;
  cuit: string;
  condicionIVA?: string; // Responsable Inscripto, Monotributo, etc.
  direccion: string;
  ciudad?: string;
  localidad?: string;
  provincia: string;
  codigoPostal: string;
  telefono: string;
  email: string;
  contacto: string; // Nombre del contacto principal
  categorias?: string[]; // Categorías de productos que suministra
  calificacion: number; // 1-5 estrellas
  diasPago?: number; // Días promedio de pago
  condicionesPago?: string;
  descuentoVolumen?: number;
  saldoDeuda?: number;
  limiteCredito?: number;
  tiempoEntrega?: string;
  activo: boolean;
  notas?: string;
  fechaAlta?: string;
  ultimaCompra?: string;
}

export interface CompraProveedor {
  id: string;
  proveedorId: string;
  fecha: string;
  numeroOrden: string;
  total: number;
  estado: 'Pendiente' | 'Recibida' | 'Pagada' | 'Cancelada';
  items: CompraItem[];
  fechaPago?: string;
  metodoPago?: string;
  notas?: string;
}

export interface CompraItem {
  productoId: string;
  productoNombre: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export interface ProveedorProducto {
  proveedorId: string;
  productoId: string;
  precioCompra: number;
  codigoProveedor: string;
  ultimaActualizacion: string;
  principal: boolean; // Si es el proveedor principal de este producto
}
