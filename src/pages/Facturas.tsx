import { useState, useMemo } from 'react';
import { Receipt, Search, FileText, Calendar, User, DollarSign, Package, X } from 'lucide-react';
import { useVentaStore } from '../store/ventaStore';
import { useClienteStore } from '../store/clienteStore';
import { Input } from '../components/ui/input';
import type { Venta } from '../types/venta';

export default function Facturas() {
  const { ventas } = useVentaStore();
  const { clientes } = useClienteStore();
  const [busqueda, setBusqueda] = useState('');
  const [facturaSeleccionada, setFacturaSeleccionada] = useState<Venta | null>(null);

  const facturasOrdenadas = useMemo(() => {
    return [...ventas].sort((a, b) => {
      // Ordenar por número de factura descendente
      return b.numeroFactura.localeCompare(a.numeroFactura);
    });
  }, [ventas]);

  const facturasFiltradas = useMemo(() => {
    if (!busqueda) return facturasOrdenadas;
    
    const busquedaLower = busqueda.toLowerCase();
    return facturasOrdenadas.filter(factura => {
      const cliente = clientes.find(c => c.id === factura.clienteId);
      return (
        factura.numeroFactura.toLowerCase().includes(busquedaLower) ||
        factura.clienteId.toLowerCase().includes(busquedaLower) ||
        cliente?.razonSocial.toLowerCase().includes(busquedaLower)
      );
    });
  }, [facturasOrdenadas, busqueda, clientes]);

  const totalFacturas = ventas.length;
  const totalMonto = ventas.reduce((sum, v) => sum + v.total, 0);
  const totalProductos = ventas.reduce((sum, v) => sum + v.items.length, 0);

  const getClienteNombre = (clienteId: string) => {
    const cliente = clientes.find(c => c.id === clienteId);
    return cliente?.razonSocial || clienteId;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Receipt className="h-8 w-8 text-primary" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Facturas Reales</h1>
          <p className="text-gray-500 mt-1">2,969 facturas del negocio • 24,709 items • $409,288,012 facturado • Clientes sincronizados</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Facturas</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{totalFacturas}</p>
            </div>
            <FileText className="w-12 h-12 text-blue-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monto Total</p>
              <p className="text-3xl font-bold text-green-600 mt-1">${totalMonto.toLocaleString()}</p>
            </div>
            <DollarSign className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-3xl font-bold text-orange-600 mt-1">{totalProductos}</p>
            </div>
            <Package className="w-12 h-12 text-orange-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar por número de factura o cliente..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Facturas List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Factura
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {facturasFiltradas.length > 0 ? (
                facturasFiltradas.map((factura) => (
                  <tr key={factura.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Receipt className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {factura.numeroFactura}
                          </div>
                          <div className="text-xs text-gray-500">{factura.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <div>
                          <div>{factura.fecha}</div>
                          {factura.hora && <div className="text-xs text-gray-500">{factura.hora}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {getClienteNombre(factura.clienteId)}
                          </div>
                          <div className="text-xs text-gray-500">{factura.clienteId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {factura.items.length} productos
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-bold text-gray-900">
                        ${factura.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => setFacturaSeleccionada(factura)}
                        className="text-primary hover:text-primary-dark font-medium text-sm"
                      >
                        Ver Detalle
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Receipt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No se encontraron facturas
                    </h3>
                    <p className="text-gray-600">
                      {busqueda ? 'Intenta con otro término de búsqueda' : 'No hay facturas registradas'}
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detalle de Factura Modal */}
      {facturaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">
                    Factura {facturaSeleccionada.numeroFactura}
                  </h2>
                  <p className="text-blue-100 text-sm">
                    Cliente: {getClienteNombre(facturaSeleccionada.clienteId)}
                  </p>
                </div>
                <button
                  onClick={() => setFacturaSeleccionada(null)}
                  className="text-white hover:text-blue-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Información General */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Fecha</p>
                  <p className="text-lg font-semibold text-gray-900">{facturaSeleccionada.fecha}</p>
                  {facturaSeleccionada.hora && <p className="text-sm text-gray-500 mt-1">{facturaSeleccionada.hora}</p>}
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Método de Pago</p>
                  <p className="text-lg font-semibold text-gray-900">{facturaSeleccionada.metodoPago}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Estado</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {facturaSeleccionada.estado}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Vendedor</p>
                  <p className="text-lg font-semibold text-gray-900">{facturaSeleccionada.vendedor}</p>
                </div>
              </div>

              {/* Items de la Factura */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Productos ({facturaSeleccionada.items.length})
                </h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                          Producto
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase">
                          Cantidad
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">
                          Precio Unit.
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {facturaSeleccionada.items.map((item, index) => (
                        <tr key={index} className="bg-white">
                          <td className="px-4 py-3">
                            <div className="text-sm font-medium text-gray-900">
                              Producto #{item.productoId}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center text-sm text-gray-900">
                            {item.cantidad}
                          </td>
                          <td className="px-4 py-3 text-right text-sm text-gray-900">
                            ${item.precioUnitario.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="px-4 py-3 text-right text-sm font-medium text-gray-900">
                            ${item.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Totales */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Subtotal:</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${facturaSeleccionada.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  {(facturaSeleccionada.descuento || 0) > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Descuento:</span>
                      <span className="text-lg font-semibold text-red-600">
                        -${((facturaSeleccionada.subtotal * (facturaSeleccionada.descuento || 0)) / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}
                  {facturaSeleccionada.iva21 !== undefined && facturaSeleccionada.iva21 > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">IVA 21%:</span>
                      <span className="text-lg font-semibold text-gray-700">
                        ${facturaSeleccionada.iva21.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}
                  {facturaSeleccionada.iva105 !== undefined && facturaSeleccionada.iva105 > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">IVA 10.5%:</span>
                      <span className="text-lg font-semibold text-gray-700">
                        ${facturaSeleccionada.iva105.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-blue-300 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${facturaSeleccionada.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <button
                onClick={() => setFacturaSeleccionada(null)}
                className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
