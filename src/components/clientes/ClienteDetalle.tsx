import { X, ShoppingBag } from 'lucide-react';
import type { Cliente } from '../../types/cliente';
import { useVentaStore } from '../../store/ventaStore';

interface ClienteDetalleProps {
  cliente: Cliente;
  onCerrar: () => void;
}

export function ClienteDetalle({ cliente, onCerrar }: ClienteDetalleProps) {
  const { ventas } = useVentaStore();
  const ventasCliente = ventas.filter(v => v.clienteId === cliente.id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{cliente.razonSocial}</h2>
              <p className="text-orange-100 text-sm">Código del CSV: {cliente.id}</p>
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] space-y-6">
          {/* Información del Cliente */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-xs text-gray-600 mb-1">CUIT</p>
              <p className="font-semibold">{cliente.cuit}</p>
            </div>
            {cliente.telefono && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Teléfono</p>
                <p className="font-semibold">{cliente.telefono}</p>
              </div>
            )}
            {cliente.email && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Email</p>
                <p className="font-semibold">{cliente.email}</p>
              </div>
            )}
            {cliente.contacto && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Contacto</p>
                <p className="font-semibold">{cliente.contacto}</p>
              </div>
            )}
            {cliente.direccion && cliente.direccion !== 'Sin dirección' && (
              <div className="col-span-2">
                <p className="text-xs text-gray-600 mb-1">Dirección</p>
                <p className="font-semibold">{cliente.direccion}</p>
              </div>
            )}
            {cliente.localidad && cliente.localidad !== 'Sin datos' && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Localidad</p>
                <p className="font-semibold">{cliente.localidad}</p>
              </div>
            )}
            {cliente.provincia && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Provincia</p>
                <p className="font-semibold">{cliente.provincia}</p>
              </div>
            )}
            {cliente.codigoPostal && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Código Postal</p>
                <p className="font-semibold">{cliente.codigoPostal}</p>
              </div>
            )}
            {cliente.categoria && (
              <div>
                <p className="text-xs text-gray-600 mb-1">Categoría</p>
                <p className="font-semibold">{cliente.categoria}</p>
              </div>
            )}
            <div>
              <p className="text-xs text-gray-600 mb-1">Límite de Crédito</p>
              <p className="font-semibold text-green-600">${cliente.limiteCredito?.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Saldo Deuda</p>
              <p className={`font-semibold ${(cliente.saldoDeuda || 0) > 0 ? 'text-red-600' : 'text-gray-900'}`}>
                ${(cliente.saldoDeuda || 0).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Facturas */}
          <div>
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <ShoppingBag className="w-5 h-5 text-orange-600" />
              Facturas del CSV ({ventasCliente.length})
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {ventasCliente.length > 0 ? (
                <div className="space-y-2">
                  {ventasCliente.map((venta) => (
                    <div key={venta.id} className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{venta.numeroFactura}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(venta.fecha).toLocaleDateString('es-AR')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-orange-600">${venta.total.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">{venta.items.length} productos</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Sin facturas en el CSV</p>
                </div>
              )}
            </div>

            {/* Totales */}
            {ventasCliente.length > 0 && (
              <div className="mt-4 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Total Comprado</p>
                    <p className="text-lg font-bold text-orange-600">
                      ${ventasCliente.reduce((sum, v) => sum + v.total, 0).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Facturas</p>
                    <p className="text-lg font-bold text-gray-900">{ventasCliente.length}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Promedio</p>
                    <p className="text-lg font-bold text-gray-900">
                      ${(ventasCliente.reduce((sum, v) => sum + v.total, 0) / ventasCliente.length).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
              </div>
            )}
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
