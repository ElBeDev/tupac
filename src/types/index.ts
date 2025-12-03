export interface Producto {
  id: string;
  codigo?: string; // Código interno del producto
  codigoBarras: string;
  nombre: string;
  descripcion: string;
  categoria?: string; // Nombre de categoría
  categoriaId?: string; // ID de categoría (legacy)
  marca: string;
  familia?: string; // Código de familia del producto (from CSV)
  departamento?: string; // Código de departamento (from CSV)
  unidad?: string; // Unidad de medida del CSV (u, g, b, kg, etc.)
  unidadMedida: string;
  precioCompra?: number; // Precio de compra/costo
  precioCosto?: number; // Alias de precioCompra (legacy)
  precioVenta?: number; // Precio de venta principal
  precioVentaMinorista?: number; // Precio minorista (legacy)
  precioVentaMayorista?: number; // Precio mayorista (legacy)
  stockActual: number;
  stockMinimo: number;
  stockMaximo: number;
  proveedor?: string; // Nombre del proveedor
  ubicacion?: string; // Ubicación en depósito
  ubicacionDeposito?: string; // Alias de ubicación (legacy)
  imagen?: string; // URL de la imagen
  imagenUrl?: string; // Alias de imagen (legacy)
  activo?: boolean;
  perecedero?: boolean;
  alicuotaIva?: number; // 21, 10.5, 0
}

export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface ItemMovimiento {
  productoId: string;
  productoNombre?: string;
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  alicuotaIva: number;
  subtotal: number;
}

export interface Movimiento {
  id: string;
  tipo: 'ENTRADA' | 'SALIDA' | 'VENTA' | 'COMPRA' | 'AJUSTE' | 'DEVOLUCION';
  fecha?: string;
  hora?: string;
  numeroComprobante?: string;
  tipoComprobante?: string;
  entidad?: string; // Cliente o Proveedor
  items?: ItemMovimiento[];
  totalCantidad?: number;
  totalValor?: number;
  observaciones?: string;
  // Campos legacy para compatibilidad
  productoId?: string;
  productoNombre?: string;
  cantidad?: number;
  precioUnitario?: number;
  loteNumero?: string;
  fechaVencimiento?: string;
  motivo?: string;
  usuario?: string;
  fechaMovimiento?: string;
}

export interface Lote {
  id: string;
  productoId: string;
  productoNombre: string;
  numeroLote: string;
  fechaProduccion?: string;
  fechaIngreso: string;
  fechaVencimiento: string;
  cantidadInicial: number;
  cantidadActual: number;
  estado: 'ACTIVO' | 'VENCIDO' | 'RETIRADO' | 'PROXIMO_VENCER';
}

export interface Alerta {
  id: string;
  tipo: 'STOCK_BAJO' | 'VENCIMIENTO_PROXIMO' | 'VENCIDO' | 'STOCK_CRITICO';
  productoId?: string;
  productoNombre?: string;
  loteId?: string;
  loteNumero?: string;
  nivelPrioridad: 'BAJA' | 'MEDIA' | 'ALTA' | 'CRITICA';
  mensaje: string;
  leida: boolean;
  fechaAlerta: string;
}

export type EstadoStock = 'OK' | 'BAJO' | 'CRITICO';
