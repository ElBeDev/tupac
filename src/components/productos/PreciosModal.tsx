import { useState } from 'react';
import { X, DollarSign, TrendingUp, Clock, User, Calendar } from 'lucide-react';
import { useProductoStore } from '../../store/productoStore';
import type { PrecioProducto } from '../../types/precio';

interface PreciosModalProps {
  productoId: string;
  productoNombre: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PreciosModal({ productoId, productoNombre, isOpen, onClose }: PreciosModalProps) {
  const [listaSeleccionada, setListaSeleccionada] = useState(0);
  
  const { getPrecioProducto, getHistorialPrecios } = useProductoStore();
  
  if (!isOpen) return null;
  
  const precioActual = getPrecioProducto(productoId, listaSeleccionada);
  const historial = getHistorialPrecios(productoId);
  
  // Agrupar por lista
  const historialPorLista = historial.reduce((acc, precio) => {
    if (!acc[precio.lista]) {
      acc[precio.lista] = [];
    }
    acc[precio.lista].push(precio);
    return acc;
  }, {} as Record<number, PrecioProducto[]>);
  
  const historialFiltrado = historialPorLista[listaSeleccionada] || [];
  
  // Calcular estadísticas
  const preciosLista = historialFiltrado.map(p => p.precio);
  const precioMin = preciosLista.length > 0 ? Math.min(...preciosLista) : 0;
  const precioMax = preciosLista.length > 0 ? Math.max(...preciosLista) : 0;
  const precioPromedio = preciosLista.length > 0 
    ? preciosLista.reduce((a, b) => a + b, 0) / preciosLista.length 
    : 0;
  
  const formatFecha = (fecha: string) => {
    if (!fecha) return '-';
    const [dia, mes, anio] = fecha.split('/');
    return `${dia}/${mes}/20${anio}`;
  };
  
  const formatPrecio = (precio: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(precio);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Precios del Producto</h2>
              <p className="text-blue-100">{productoNombre}</p>
              <p className="text-blue-200 text-sm mt-1">ID: {productoId}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {historial.length === 0 ? (
            <div className="text-center py-12">
              <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No hay precios registrados para este producto</p>
            </div>
          ) : (
            <>
              {/* Selector de Lista */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lista de Precios
                </label>
                <select
                  value={listaSeleccionada}
                  onChange={(e) => setListaSeleccionada(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.keys(historialPorLista).map(lista => (
                    <option key={lista} value={lista}>
                      Lista {lista} {lista === '0' ? '(Default)' : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600 font-medium">Precio Actual</p>
                      <p className="text-2xl font-bold text-green-700">
                        {precioActual ? formatPrecio(precioActual) : '-'}
                      </p>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Precio Mínimo</p>
                      <p className="text-xl font-bold text-blue-700">
                        {formatPrecio(precioMin)}
                      </p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-blue-600 transform rotate-180" />
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-600 font-medium">Precio Máximo</p>
                      <p className="text-xl font-bold text-purple-700">
                        {formatPrecio(precioMax)}
                      </p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-orange-600 font-medium">Precio Promedio</p>
                      <p className="text-xl font-bold text-orange-700">
                        {formatPrecio(precioPromedio)}
                      </p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
              </div>
              
              {/* Historial de Precios */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Historial de Precios ({historialFiltrado.length} registros)
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Precio
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fecha Vigencia
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Hora
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Usuario
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fecha Carga
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Origen
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {historialFiltrado.map((precio, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="text-lg font-semibold text-gray-900">
                              {formatPrecio(precio.precio)}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center text-gray-700">
                              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                              {formatFecha(precio.fechaVigencia)}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-gray-700">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-gray-400" />
                              {precio.horaVigencia || '-'}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center text-gray-700">
                              <User className="w-4 h-4 mr-2 text-gray-400" />
                              {precio.usuario || '-'}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-gray-700">
                            {formatFecha(precio.fechaCarga)}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              {precio.origen || '-'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
