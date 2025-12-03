import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import type { Producto, Movimiento } from '../../types';

interface EntradaFormProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
  onGuardar: (movimiento: Movimiento) => void;
  usuario: string;
}

export function EntradaForm({ producto, isOpen, onClose, onGuardar, usuario }: EntradaFormProps) {
  const [cantidad, setCantidad] = useState<number>(0);
  const [loteNumero, setLoteNumero] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [motivo, setMotivo] = useState('Compra a proveedor');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!producto || cantidad <= 0) return;

    const movimiento: Movimiento = {
      id: `MOV-${Date.now()}`,
      tipo: 'ENTRADA',
      productoId: producto.id,
      productoNombre: producto.nombre,
      cantidad,
      precioUnitario: producto.precioCosto,
      loteNumero: producto.perecedero ? loteNumero : undefined,
      fechaVencimiento: producto.perecedero ? fechaVencimiento : undefined,
      motivo,
      usuario,
      fechaMovimiento: new Date().toISOString(),
    };

    onGuardar(movimiento);
    
    // Reset form
    setCantidad(0);
    setLoteNumero('');
    setFechaVencimiento('');
    setMotivo('Compra a proveedor');
    onClose();
  };

  if (!producto) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent onClose={onClose} className="max-w-md">
        <DialogHeader>
          <DialogTitle>Registrar Entrada de Stock</DialogTitle>
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
              Cantidad a Ingresar *
            </label>
            <Input
              type="number"
              min="1"
              value={cantidad || ''}
              onChange={(e) => setCantidad(parseInt(e.target.value) || 0)}
              placeholder="0"
              required
              autoFocus
            />
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
              <option value="Compra a proveedor">Compra a proveedor</option>
              <option value="Devolución de cliente">Devolución de cliente</option>
              <option value="Ajuste de inventario">Ajuste de inventario</option>
              <option value="Transferencia entre depósitos">Transferencia entre depósitos</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Campos para productos perecederos */}
          {producto.perecedero && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Lote *
                </label>
                <Input
                  type="text"
                  value={loteNumero}
                  onChange={(e) => setLoteNumero(e.target.value)}
                  placeholder="Ej: L2024-001"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Vencimiento *
                </label>
                <Input
                  type="date"
                  value={fechaVencimiento}
                  onChange={(e) => setFechaVencimiento(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </>
          )}

          {/* Preview del nuevo stock */}
          {cantidad > 0 && (
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600">Nuevo Stock</p>
              <p className="text-2xl font-bold text-green-600">
                {producto.stockActual + cantidad}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                +{cantidad} unidades
              </p>
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
              disabled={cantidad <= 0}
              className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg font-medium transition-colors"
            >
              Registrar Entrada
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
