import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import type { Producto, Movimiento } from '../../types';

interface SalidaFormProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
  onGuardar: (movimiento: Movimiento) => void;
  usuario: string;
}

export function SalidaForm({ producto, isOpen, onClose, onGuardar, usuario }: SalidaFormProps) {
  const [cantidad, setCantidad] = useState<number>(0);
  const [motivo, setMotivo] = useState('Venta');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!producto || cantidad <= 0 || cantidad > producto.stockActual) return;

    const movimiento: Movimiento = {
      id: `MOV-${Date.now()}`,
      tipo: 'SALIDA',
      productoId: producto.id,
      productoNombre: producto.nombre,
      cantidad,
      precioUnitario: producto.precioVentaMayorista,
      motivo,
      usuario,
      fechaMovimiento: new Date().toISOString(),
    };

    onGuardar(movimiento);
    
    // Reset form
    setCantidad(0);
    setMotivo('Venta');
    onClose();
  };

  if (!producto) return null;

  const stockInsuficiente = cantidad > producto.stockActual;
  const nuevoStock = producto.stockActual - cantidad;
  const stockCritico = nuevoStock <= producto.stockMinimo;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent onClose={onClose} className="max-w-md">
        <DialogHeader>
          <DialogTitle>Registrar Salida de Stock</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Producto */}
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Producto</p>
            <p className="font-semibold">{producto.nombre}</p>
            <p className="text-xs text-gray-500">{producto.marca}</p>
          </div>

          {/* Stock actual */}
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-gray-600">Stock Actual</p>
            <p className="text-2xl font-bold text-orange-600">{producto.stockActual}</p>
          </div>

          {/* Cantidad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cantidad a Retirar *
            </label>
            <Input
              type="number"
              min="1"
              max={producto.stockActual}
              value={cantidad || ''}
              onChange={(e) => setCantidad(parseInt(e.target.value) || 0)}
              placeholder="0"
              required
              autoFocus
            />
            {stockInsuficiente && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                La cantidad no puede superar el stock disponible
              </p>
            )}
          </div>

          {/* Motivo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Motivo
            </label>
            <select
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="Venta">Venta</option>
              <option value="Devolución a proveedor">Devolución a proveedor</option>
              <option value="Merma">Merma</option>
              <option value="Vencimiento">Vencimiento</option>
              <option value="Transferencia entre depósitos">Transferencia entre depósitos</option>
              <option value="Ajuste de inventario">Ajuste de inventario</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Preview del nuevo stock */}
          {cantidad > 0 && !stockInsuficiente && (
            <div className={`p-3 rounded-lg border ${stockCritico ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
              <p className="text-sm text-gray-600">Nuevo Stock</p>
              <p className={`text-2xl font-bold ${stockCritico ? 'text-red-600' : 'text-orange-600'}`}>
                {nuevoStock}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                -{cantidad} unidades
              </p>
              {stockCritico && (
                <div className="mt-2 flex items-start gap-2 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>El stock quedará por debajo del mínimo ({producto.stockMinimo})</p>
                </div>
              )}
            </div>
          )}

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={cantidad <= 0 || stockInsuficiente}
              className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg font-medium transition-colors"
            >
              Registrar Salida
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
