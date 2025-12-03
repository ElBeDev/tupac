/**
 * FACTURAS REALES DEL NEGOCIO
 * 
 * Datos parseados de:
 * - factu.txt: 2,969 facturas
 * - movi_fac.txt: 24,709 items
 * 
 * Total facturas: 2,969
 * Total items: 24,709
 * Monto total: $409.288.012,89
 * 
 * Generado: 18/11/2025, 05:49:01
 */

export interface ItemFactura {
  codigo: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  precioUnitario: number;
  subtotal: number;
}

export interface FacturaReal {
  id: string;
  numero: string;
  fecha: string;
  cliente: string;
  codigoCliente: string;
  subtotal: number;
  iva: number;
  total: number;
  estado: 'Completada' | 'Pendiente' | 'Cancelada' | 'Pagada';
  items: ItemFactura[];
  tipo: string;
}

export const facturasReales: FacturaReal[] = [];

export const estadisticasFacturas = {
  totalFacturas: 0,
  totalVentas: 0,
  promedioVenta: 0,
  ventaMaxima: 0,
  ventaMinima: 0
};
