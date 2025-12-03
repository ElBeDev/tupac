import { useState } from 'react';
import { X, Package, AlertTriangle, CheckCircle } from 'lucide-react';
import type { OrdenCompra } from '../../types/ordenCompra';

interface RecepcionFormProps {
  orden: OrdenCompra;
  onConfirmar: (itemsRecibidos: Array<{ productoId: string; cantidadRecibida: number }>) => void;
  onCancelar: () => void;
}

export function RecepcionForm({ orden, onConfirmar, onCancelar }: RecepcionFormProps) {
  const [cantidades, setCantidades] = useState<Record<string, number>>(
    orden.items.reduce((acc, item) => ({
      ...acc,
      [item.productoId]: item.cantidadSolicitada - item.cantidadRecibida
    }), {})
  );

  const handleCantidadChange = (productoId: string, cantidad: number) => {
    setCantidades({
      ...cantidades,
      [productoId]: Math.max(0, cantidad)
    });
  };

  const handleConfirmar = () => {
    const itemsRecibidos = Object.entries(cantidades)
      .filter(([_, cantidad]) => cantidad > 0)
      .map(([productoId, cantidadRecibida]) => ({
        productoId,
        cantidadRecibida
      }));

    if (itemsRecibidos.length === 0) {
      alert('Debes ingresar al menos una cantidad recibida');
      return;
    }

    onConfirmar(itemsRecibidos);
  };

  const totalEsperado = orden.items.reduce((sum, item) => sum + (item.cantidadSolicitada - item.cantidadRecibida), 0);
  const totalRecibido = Object.values(cantidades).reduce((sum, cant) => sum + cant, 0);
  const hayDiferencias = orden.items.some(item => {
    const pendiente = item.cantidadSolicitada - item.cantidadRecibida;
    return cantidades[item.productoId] !== pendiente;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recepción de Mercadería</h2>
            <p className="text-sm text-gray-600 mt-1">
              {orden.numeroOrden} - {orden.proveedorNombre}
            </p>
          </div>
          <button onClick={onCancelar} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Info */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-orange-900 mb-1">
                  Ingresa las cantidades recibidas
                </p>
                <p className="text-xs text-orange-700">
                  El stock se actualizará automáticamente al confirmar la recepción.
                  Las cantidades predeterminadas son las pendientes de recibir.
                </p>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Total Esperado</p>
              <p className="text-2xl font-bold text-gray-900">{totalEsperado} unidades</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Total a Recibir Ahora</p>
              <p className="text-2xl font-bold text-orange-600">{totalRecibido} unidades</p>
            </div>
          </div>

          {/* Alerta de diferencias */}
          {hayDiferencias && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-orange-900 mb-1">
                    Hay diferencias en las cantidades
                  </p>
                  <p className="text-xs text-orange-700">
                    Las cantidades ingresadas no coinciden con lo esperado.
                    La orden quedará en estado "Recibida Parcial" si no se completa todo.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lista de productos */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Productos</h3>
            {orden.items.map((item) => {
              const pendiente = item.cantidadSolicitada - item.cantidadRecibida;
              const recibiendo = cantidades[item.productoId] || 0;
              const completado = recibiendo === pendiente && pendiente > 0;
              const diferencia = recibiendo !== pendiente;

              return (
                <div 
                  key={item.productoId} 
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    completado ? 'border-green-200 bg-green-50' :
                    diferencia ? 'border-orange-200 bg-orange-50' :
                    'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Info del producto */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900">{item.productoNombre}</p>
                        {completado && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {diferencia && recibiendo > 0 && <AlertTriangle className="w-4 h-4 text-orange-600" />}
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{item.codigoBarras}</p>
                      <div className="flex gap-4 text-xs">
                        <div>
                          <span className="text-gray-600">Solicitado: </span>
                          <span className="font-medium text-gray-900">{item.cantidadSolicitada}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Ya recibido: </span>
                          <span className="font-medium text-gray-900">{item.cantidadRecibida}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Pendiente: </span>
                          <span className="font-medium text-orange-600">{pendiente}</span>
                        </div>
                      </div>
                    </div>

                    {/* Input de cantidad */}
                    <div className="text-right">
                      <label className="block text-xs text-gray-600 mb-1">Recibir ahora</label>
                      <input
                        type="number"
                        value={cantidades[item.productoId]}
                        onChange={(e) => handleCantidadChange(item.productoId, parseInt(e.target.value) || 0)}
                        className={`w-24 text-center text-lg font-bold border-2 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                          completado ? 'border-green-500 text-green-700 bg-green-50' :
                          diferencia ? 'border-orange-500 text-orange-700 bg-orange-50' :
                          'border-gray-300 text-gray-900'
                        }`}
                        min="0"
                        max={pendiente}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onCancelar}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmar}
            disabled={totalRecibido === 0}
            className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
          >
            Confirmar Recepción ({totalRecibido} unidades)
          </button>
        </div>
      </div>
    </div>
  );
}
