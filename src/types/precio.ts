// REGLA: SOLO DATOS REALES DEL CSV - NO CAMPOS INVENTADOS
// Campos basados ÚNICAMENTE en dprecio.txt

export interface PrecioProducto {
  productoId: string;        // CSV col[0] - ID del producto
  lista: number;             // CSV col[1] - Número de lista (0 = default)
  tipoPrecio: number;        // CSV col[2] - Tipo de precio (1 = principal)
  fechaVigencia: string;     // CSV col[3] - Fecha desde la cual es válido
  horaVigencia: string;      // CSV col[4] - Hora de vigencia
  precio: number;            // CSV col[7] - Precio del producto
  usuario: string;           // CSV col[8] - Usuario que cargó el precio
  fechaCarga: string;        // CSV col[9] - Fecha de carga
  horaCarga: string;         // CSV col[10] - Hora de carga
  origen: string;            // CSV col[11] - Origen (pedidos, etc.)
}

export interface TipoPrecio {
  id: number;
  nombre: string;
  descripcion?: string;
}

// Tipos de lista de precios (inferidos del CSV)
// export enum ListaPrecio {
//   DEFAULT = 0,
//   MAYORISTA = 1,
//   MINORISTA = 2,
//   DISTRIBUIDOR = 3
// }
