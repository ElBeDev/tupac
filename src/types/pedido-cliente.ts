// Types para Pedidos de Clientes
// ⚠️ SOLO campos que existen en los CSV reales (pedidos.txt + movi_pedida.txt)

export interface PedidoItem {
  productoId: string;        // ID del producto (columna [1] de movi_pedida.txt)
  productoNombre: string;    // Nombre genérico basado en ID
  orden: number;             // Orden del item (columna [2])
  cantidad: number;          // Cantidad pedida (columna [4])
  precioUnitario: number;    // Precio unitario (columna [3])
  precioFinal: number;       // Precio final con descuentos (columna [10])
  descuento1: number;        // % descuento 1 (columna [11])
  descuento2: number;        // % descuento 2 (columna [12])
  subtotal: number;          // Subtotal del item (columna [22])
}

export interface PedidoCliente {
  id: string;                // ID del pedido (columna [0] de pedidos.txt)
  fechaPedido: string;       // Fecha del pedido (columna [1])
  fechaEntrega: string;      // Fecha de entrega estimada (columna [7])
  clienteId: string;         // ID del cliente (columna [3])
  clienteNombre: string;     // Nombre del cliente (columna [12])
  telefono: string;          // Teléfono (columna [13])
  plazoDias: string;         // Plazo en días (columna [4])
  estado: 'pendiente' | 'completado' | 'cancelado';  // Estado (columna [28]: C/P/A)
  observaciones: string;     // Observaciones (columna [11])
  usuarioCarga: string;      // Usuario que cargó (columna [25])
  fechaCarga: string;        // Fecha de carga (columna [26])
  horaCarga: string;         // Hora de carga (columna [27])
  items: PedidoItem[];       // Items del pedido (desde movi_pedida.txt)
  subtotal: number;          // Calculado: suma de items
  descuentoTotal: number;    // Calculado: suma de descuentos
  total: number;             // Calculado: subtotal - descuentos
}
