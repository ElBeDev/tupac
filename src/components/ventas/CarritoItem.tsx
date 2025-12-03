import { useState } from 'react';
import { Trash2, Minus, Plus, Percent, Package } from 'lucide-react';
import type { CarritoItem as CarritoItemType } from '../../types/venta';

interface CarritoItemProps {
  item: CarritoItemType;
  onActualizarCantidad: (productoId: string, cantidad: number) => void;
  onActualizarDescuento: (productoId: string, descuento: number) => void;
  onRemover: (productoId: string) => void;
}

export function CarritoItem({ item, onActualizarCantidad, onActualizarDescuento, onRemover }: CarritoItemProps) {
  const [editandoDescuento, setEditandoDescuento] = useState(false);
  const [descuentoTemp, setDescuentoTemp] = useState(item.descuento.toString());

  const subtotal = item.producto.precioVenta * item.cantidad;
  const descuentoMonto = subtotal * (item.descuento / 100);
  const total = subtotal - descuentoMonto;

  const handleCantidadChange = (delta: number) => {
    const nuevaCantidad = Math.max(1, Math.min(item.cantidad + delta, item.producto.stockActual));
    onActualizarCantidad(item.producto.id, nuevaCantidad);
  };

  const handleGuardarDescuento = () => {
    const descuento = parseFloat(descuentoTemp) || 0;
    onActualizarDescuento(item.producto.id, Math.max(0, Math.min(100, descuento)));
    setEditandoDescuento(false);
  };

  const getStockColor = () => {
    if (item.cantidad > item.producto.stockActual) return 'text-red-600';
    if (item.cantidad === item.producto.stockActual) return 'text-orange-600';
    return 'text-gray-600';
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      {/* Imagen */}
      <div className="w-16 h-16 bg-white rounded-lg border border-gray-200 flex-shrink-0 overflow-hidden">
        {item.producto.imagenUrl ? (
          <img 
            src={item.producto.imagenUrl} 
            alt={item.producto.nombre}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Package className="w-8 h-8" />
          </div>
        )}
      </div>

      {/* Info del producto */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{item.producto.nombre}</h4>
        <p className="text-sm text-gray-500">
          ${item.producto.precioVenta.toLocaleString()} × {item.cantidad}
        </p>
        <p className={`text-xs ${getStockColor()}`}>
          Stock: {item.producto.stockActual} unidades
        </p>
      </div>

      {/* Controles de cantidad */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleCantidadChange(-1)}
          disabled={item.cantidad <= 1}
          className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          type="number"
          value={item.cantidad}
          onChange={(e) => onActualizarCantidad(item.producto.id, parseInt(e.target.value) || 1)}
          className="w-16 text-center border border-gray-300 rounded px-2 py-1 text-sm"
          min="1"
          max={item.producto.stockActual}
        />
        <button
          onClick={() => handleCantidadChange(1)}
          disabled={item.cantidad >= item.producto.stockActual}
          className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Descuento */}
      <div className="flex items-center gap-2">
        {editandoDescuento ? (
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={descuentoTemp}
              onChange={(e) => setDescuentoTemp(e.target.value)}
              onBlur={handleGuardarDescuento}
              onKeyDown={(e) => e.key === 'Enter' && handleGuardarDescuento()}
              className="w-14 text-center border border-orange-500 rounded px-1 py-1 text-sm"
              autoFocus
              min="0"
              max="100"
            />
            <span className="text-sm text-gray-600">%</span>
          </div>
        ) : (
          <button
            onClick={() => {
              setEditandoDescuento(true);
              setDescuentoTemp(item.descuento.toString());
            }}
            className="flex items-center gap-1 px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded"
          >
            <Percent className="w-3 h-3" />
            {item.descuento > 0 ? `${item.descuento}%` : '0%'}
          </button>
        )}
      </div>

      {/* Total */}
      <div className="text-right min-w-[80px]">
        {item.descuento > 0 && (
          <p className="text-xs text-gray-500 line-through">${subtotal.toLocaleString()}</p>
        )}
        <p className="font-semibold text-gray-900">${total.toLocaleString()}</p>
      </div>

      {/* Eliminar */}
      <button
        onClick={() => onRemover(item.producto.id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
        title="Eliminar del carrito"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
