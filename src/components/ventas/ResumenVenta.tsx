interface ResumenVentaProps {
  subtotal: number;
  descuentoGlobal: number;
  iva21: number;
  iva105: number;
  total: number;
  onDescuentoGlobalChange?: (descuento: number) => void;
}

export function ResumenVenta({ 
  subtotal, 
  descuentoGlobal, 
  iva21, 
  iva105, 
  total,
  onDescuentoGlobalChange
}: ResumenVentaProps) {
  const descuentoMonto = subtotal * (descuentoGlobal / 100);
  const baseImponible = subtotal - descuentoMonto;

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-300 pb-2">
        Resumen
      </h3>

      {/* Subtotal */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium text-gray-900">${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>

      {/* Descuento Global */}
      {onDescuentoGlobalChange && (
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Descuento Global</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={descuentoGlobal}
              onChange={(e) => onDescuentoGlobalChange(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
              className="w-16 text-right border border-gray-300 rounded px-2 py-1 text-sm"
              min="0"
              max="100"
              step="0.5"
            />
            <span className="text-gray-600">%</span>
            {descuentoMonto > 0 && (
              <span className="font-medium text-green-600">
                -${descuentoMonto.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            )}
          </div>
        </div>
      )}

      {descuentoGlobal > 0 && !onDescuentoGlobalChange && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Descuento ({descuentoGlobal}%)</span>
          <span className="font-medium text-green-600">
            -${descuentoMonto.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      )}

      {/* Base Imponible */}
      {(iva21 > 0 || iva105 > 0) && (
        <div className="flex justify-between text-sm border-t border-gray-200 pt-2">
          <span className="text-gray-600">Base Imponible</span>
          <span className="font-medium text-gray-900">
            ${baseImponible.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      )}

      {/* IVA 21% */}
      {iva21 > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">IVA 21%</span>
          <span className="font-medium text-gray-900">
            ${iva21.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      )}

      {/* IVA 10.5% */}
      {iva105 > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">IVA 10.5%</span>
          <span className="font-medium text-gray-900">
            ${iva105.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between text-lg font-bold border-t-2 border-gray-300 pt-3">
        <span className="text-gray-900">TOTAL</span>
        <span className="text-orange-600">
          ${total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      {/* Desglose adicional */}
      <div className="text-xs text-gray-500 pt-2 border-t border-gray-200 space-y-1">
        <div className="flex justify-between">
          <span>Items con IVA 21%</span>
          <span>${(iva21 / 0.21).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        {iva105 > 0 && (
          <div className="flex justify-between">
            <span>Items con IVA 10.5%</span>
            <span>${(iva105 / 0.105).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        )}
      </div>
    </div>
  );
}
