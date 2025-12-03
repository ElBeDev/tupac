import type { Proveedor } from '../../types/proveedor';

interface ProveedorCardProps {
  proveedor: Proveedor;
  onVerDetalle: (proveedor: Proveedor) => void;
}

export function ProveedorCard({ proveedor, onVerDetalle }: ProveedorCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{proveedor.nombre}</h3>
          <p className="text-sm text-gray-500">Código del CSV: {proveedor.id.replace('PROV', '')}</p>
        </div>
      </div>

      <div className="flex items-center justify-end pt-4 border-t border-gray-200">
        <button
          onClick={() => onVerDetalle(proveedor)}
          className="px-3 py-1.5 text-sm font-medium text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
        >
          Ver Detalle
        </button>
      </div>
    </div>
  );
}
