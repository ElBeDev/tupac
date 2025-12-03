import { X } from 'lucide-react';
import type { Proveedor } from '../../types/proveedor';

interface ProveedorDetalleProps {
  proveedor: Proveedor;
  onCerrar: () => void;
}

export function ProveedorDetalle({ proveedor, onCerrar }: ProveedorDetalleProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{proveedor.nombre}</h2>
              <p className="text-orange-100 text-sm">Código del CSV: {proveedor.id.replace('PROV', '')}</p>
            </div>
            <button
              onClick={onCerrar}
              className="text-white hover:text-orange-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] space-y-6">
          {/* Información del CSV */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Datos del CSV</h3>
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              {proveedor.telefono && (
                <div>
                  <p className="text-xs text-gray-600 mb-1">Teléfono</p>
                  <p className="font-semibold">{proveedor.telefono}</p>
                </div>
              )}
              {proveedor.contacto && (
                <div>
                  <p className="text-xs text-gray-600 mb-1">Contacto</p>
                  <p className="font-semibold">{proveedor.contacto}</p>
                </div>
              )}
            </div>
          </div>

          {/* Mensaje informativo */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              ℹ️ <strong>Solo se muestran datos reales del CSV.</strong> El archivo original solo contiene: Código, Nombre y Teléfono.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <button
            onClick={onCerrar}
            className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
