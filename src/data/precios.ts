// ⚠️ ARCHIVO GENERADO AUTOMÁTICAMENTE - NO EDITAR MANUALMENTE
// Generado desde: Info/dprecio.txt
// Fecha: 18/11/2025, 05:22:56
// Total de precios: 6055
// REGLA: SOLO DATOS REALES DEL CSV - NO SE INVENTÓ NINGÚN DATO

import type { PrecioProducto } from '../types/precio';

export const precios: PrecioProducto[] = [];

export const preciosPorProductoId = new Map<string, PrecioProducto[]>();

export const estadisticasPrecios = {
  totalProductos: 0,
  promedioPrecios: 0,
  precioMaximo: 0,
  precioMinimo: 0
};

// Función helper para obtener el precio actual de un producto
export function getPrecioActual(productoId: string, lista: number = 0): number | undefined {
  const preciosProducto = preciosPorProductoId.get(productoId);
  if (!preciosProducto || preciosProducto.length === 0) {
    return undefined;
  }
  
  // Buscar precio para la lista específica
  const precioLista = preciosProducto.find(p => p.lista === lista);
  return precioLista?.precio;
}
