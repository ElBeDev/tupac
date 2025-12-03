import { useState, useMemo } from 'react';
import { Search, User, X, ChevronDown } from 'lucide-react';
import { useClienteStore } from '../../store/clienteStore';
import type { Cliente } from '../../types/cliente';

interface ClienteSelectorProps {
  clienteSeleccionado: string | null;
  onSeleccionar: (clienteId: string | null) => void;
}

export function ClienteSelector({ clienteSeleccionado, onSeleccionar }: ClienteSelectorProps) {
  const { clientes, getClienteById } = useClienteStore();
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const clienteActual = clienteSeleccionado ? getClienteById(clienteSeleccionado) : null;

  const clientesFiltrados = useMemo(() => {
    if (!busqueda) return clientes;
    
    const busquedaLower = busqueda.toLowerCase();
    return clientes.filter(
      (c) =>
        c.nombre?.toLowerCase().includes(busquedaLower) ||
        c.cuit?.includes(busquedaLower) ||
        c.ciudad?.toLowerCase().includes(busquedaLower)
    );
  }, [clientes, busqueda]);

  const handleSeleccionar = (cliente: Cliente) => {
    onSeleccionar(cliente.id);
    setMostrarDropdown(false);
    setBusqueda('');
  };

  const handleLimpiar = () => {
    onSeleccionar(null);
    setBusqueda('');
  };

  const getCategoriaColor = (categoria: Cliente['categoria']) => {
    const colores = {
      VIP: 'bg-purple-100 text-purple-800 border-purple-300',
      Regular: 'bg-orange-100 text-orange-800 border-orange-300',
      Nuevo: 'bg-green-100 text-green-800 border-green-300',
      Moroso: 'bg-red-100 text-red-800 border-red-300',
    };
    return colores[categoria || 'Regular'];
  };

  return (
    <div className="relative">
      {/* Cliente seleccionado o botón para seleccionar */}
      {clienteActual ? (
        <div className="bg-white border-2 border-orange-500 rounded-lg p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-gray-900">{clienteActual.nombre}</h3>
                <span className={`text-xs px-2 py-1 rounded-full border ${getCategoriaColor(clienteActual.categoria)}`}>
                  {clienteActual.categoria}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">CUIT:</span> {clienteActual.cuit}
                </div>
                <div>
                  <span className="font-medium">Lista:</span> {clienteActual.listaPrecio}
                </div>
                <div>
                  <span className="font-medium">Descuento:</span> {clienteActual.descuento}%
                </div>
                <div>
                  <span className="font-medium">Crédito:</span> $
                  {(clienteActual.limiteCredito - (clienteActual.saldoDeuda || 0)).toLocaleString()}
                </div>
              </div>
              {(clienteActual.saldoDeuda || 0) > 0 && (
                <div className="mt-2 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                  ⚠️ Deuda actual: ${(clienteActual.saldoDeuda || 0).toLocaleString()}
                </div>
              )}
            </div>
            <button
              onClick={handleLimpiar}
              className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
              title="Quitar cliente"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setMostrarDropdown(!mostrarDropdown)}
          className="w-full bg-white border-2 border-dashed border-gray-300 hover:border-orange-400 rounded-lg p-4 text-left transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-5 h-5" />
              <span>Seleccionar Cliente (Opcional)</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${mostrarDropdown ? 'rotate-180' : ''}`} />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Consumidor Final o selecciona un cliente mayorista para aplicar descuentos
          </p>
        </button>
      )}

      {/* Dropdown de búsqueda */}
      {mostrarDropdown && !clienteActual && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-96 overflow-hidden flex flex-col">
          {/* Búsqueda */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por nombre, CUIT o ciudad..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                autoFocus
              />
            </div>
          </div>

          {/* Lista de clientes */}
          <div className="overflow-y-auto max-h-80">
            {clientesFiltrados.length > 0 ? (
              clientesFiltrados.map((cliente) => (
                <button
                  key={cliente.id}
                  onClick={() => handleSeleccionar(cliente)}
                  className="w-full text-left p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900 truncate">{cliente.nombre}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${getCategoriaColor(cliente.categoria)}`}>
                          {cliente.categoria}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {cliente.cuit} • {cliente.ciudad}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-semibold text-orange-600">{cliente.descuento}%</p>
                      <p className="text-xs text-gray-500">{cliente.listaPrecio}</p>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p>No se encontraron clientes</p>
              </div>
            )}
          </div>

          {/* Botón para cerrar */}
          <div className="p-2 border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => {
                setMostrarDropdown(false);
                setBusqueda('');
              }}
              className="w-full py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Continuar sin cliente (Consumidor Final)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
