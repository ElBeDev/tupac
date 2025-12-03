import type { Cliente } from '../../types/cliente';

interface ClienteCardProps {
  cliente: Cliente;
  onVerDetalle: (cliente: Cliente) => void;
}

export function ClienteCard({ cliente, onVerDetalle }: ClienteCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{cliente.razonSocial}</h3>
          <p className="text-sm text-gray-500">Código del CSV: {cliente.id}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="text-xs text-gray-500">Total Comprado</p>
          <p className="font-semibold text-gray-900">${(cliente.totalComprado || 0).toLocaleString()}</p>
        </div>
        <button
          onClick={() => onVerDetalle(cliente)}
          className="px-3 py-1.5 text-sm font-medium text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
        >
          Ver Detalle
        </button>
      </div>
    </div>
  );
}
