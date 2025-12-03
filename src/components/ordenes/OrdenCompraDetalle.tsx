import { X, FileText, Calendar, Package, TrendingUp, CheckCircle, Clock, AlertCircle, AlertTriangle } from 'lucide-react';
import type { OrdenCompra } from '../../types/ordenCompra';

interface OrdenCompraDetalleProps {
  orden: OrdenCompra;
  onCerrar: () => void;
}

export function OrdenCompraDetalle({ orden, onCerrar }: OrdenCompraDetalleProps) {
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Borrador': return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'Enviada': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Confirmada': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Recibida Parcial': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Recibida Completa': return 'bg-green-100 text-green-800 border-green-300';
      case 'Cancelada': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'Borrador': return <FileText className="w-5 h-5" />;
      case 'Enviada': return <Clock className="w-5 h-5" />;
      case 'Confirmada': return <TrendingUp className="w-5 h-5" />;
      case 'Recibida Parcial': return <AlertCircle className="w-5 h-5" />;
      case 'Recibida Completa': return <CheckCircle className="w-5 h-5" />;
      case 'Cancelada': return <X className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const totalRecibido = orden.items.reduce((sum, item) => sum + item.cantidadRecibida, 0);
  const totalSolicitado = orden.items.reduce((sum, item) => sum + item.cantidadSolicitada, 0);
  const porcentajeRecibido = totalSolicitado > 0 ? (totalRecibido / totalSolicitado) * 100 : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">{orden.numeroOrden}</h2>
                <span className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 flex items-center gap-2 ${getEstadoColor(orden.estado)}`}>
                  {getEstadoIcon(orden.estado)}
                  {orden.estado}
                </span>
                {orden.generadaAutomaticamente && (
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    🤖 Generada Automáticamente
                  </span>
                )}
              </div>
              <p className="text-orange-100 text-lg font-semibold mb-1">{orden.proveedorNombre}</p>
              <div className="flex items-center gap-4 text-sm text-orange-100">
                <span>👤 Creada por: {orden.createdBy}</span>
                <span>•</span>
                <span>📅 {new Date(orden.createdAt).toLocaleDateString('es-AR', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </div>
            </div>
            <button
              onClick={onCerrar}
              className="text-white hover:text-orange-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progreso de recepción */}
          {orden.estado !== 'Borrador' && orden.estado !== 'Cancelada' && (
            <div className="mt-4 bg-white bg-opacity-20 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progreso de Recepción</span>
                <span className="text-sm font-bold">
                  {totalRecibido} / {totalSolicitado} unidades ({porcentajeRecibido.toFixed(0)}%)
                </span>
              </div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all"
                  style={{ width: `${Math.min(porcentajeRecibido, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Información general */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-medium">Fecha Orden</span>
              </div>
              <p className="font-bold text-gray-900">
                {new Date(orden.fecha).toLocaleDateString('es-AR', { 
                  day: '2-digit', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-2 text-orange-700 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium">Entrega Estimada</span>
              </div>
              <p className="font-bold text-orange-900">
                {new Date(orden.fechaEntregaEstimada).toLocaleDateString('es-AR', { 
                  day: '2-digit', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Package className="w-4 h-4" />
                <span className="text-xs font-medium">Productos</span>
              </div>
              <p className="font-bold text-blue-900">
                {orden.items.length} items
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-700 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium">Total</span>
              </div>
              <p className="font-bold text-xl text-green-600">
                ${orden.total.toLocaleString('es-AR')}
              </p>
            </div>
          </div>

          {/* Fechas adicionales (envío y recepción) */}
          {(orden.fechaEnvio || orden.fechaRecepcion) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {orden.fechaEnvio && (
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-2 text-blue-700 mb-1">
                    <span className="text-lg">📤</span>
                    <span className="text-sm font-semibold">Fecha de Envío</span>
                  </div>
                  <p className="font-bold text-blue-900 text-lg">
                    {new Date(orden.fechaEnvio).toLocaleDateString('es-AR', { 
                      weekday: 'long',
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              )}
              {orden.fechaRecepcion && (
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <div className="flex items-center gap-2 text-green-700 mb-1">
                    <span className="text-lg">📥</span>
                    <span className="text-sm font-semibold">Fecha de Recepción</span>
                  </div>
                  <p className="font-bold text-green-900 text-lg">
                    {new Date(orden.fechaRecepcion).toLocaleDateString('es-AR', { 
                      weekday: 'long',
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Productos */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-600" />
              Productos de la Orden
            </h3>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">Producto</th>
                    <th className="text-center p-3 text-sm font-semibold text-gray-700">Solicitado</th>
                    <th className="text-center p-3 text-sm font-semibold text-gray-700">Recibido</th>
                    <th className="text-center p-3 text-sm font-semibold text-gray-700">Estado</th>
                    <th className="text-right p-3 text-sm font-semibold text-gray-700">Precio Unit.</th>
                    <th className="text-right p-3 text-sm font-semibold text-gray-700">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {orden.items.map((item) => {
                    const diferencia = item.cantidadRecibida - item.cantidadSolicitada;
                    const porcentaje = item.cantidadSolicitada > 0 
                      ? (item.cantidadRecibida / item.cantidadSolicitada) * 100 
                      : 0;
                    
                    let estadoColor = 'bg-gray-100 text-gray-800';
                    let estadoTexto = 'Pendiente';
                    
                    if (item.cantidadRecibida === item.cantidadSolicitada) {
                      estadoColor = 'bg-green-100 text-green-800';
                      estadoTexto = 'Completo';
                    } else if (item.cantidadRecibida > 0) {
                      estadoColor = 'bg-yellow-100 text-yellow-800';
                      estadoTexto = 'Parcial';
                    }

                    return (
                      <tr key={item.productoId} className="border-t border-gray-200 hover:bg-white transition-colors">
                        <td className="p-3">
                          <p className="font-medium text-gray-900">{item.productoNombre}</p>
                          {diferencia !== 0 && (
                            <p className={`text-xs ${diferencia > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {diferencia > 0 ? '+' : ''}{diferencia} unidades
                            </p>
                          )}
                        </td>
                        <td className="p-3 text-center font-medium">{item.cantidadSolicitada}</td>
                        <td className="p-3 text-center">
                          <span className={`font-bold ${item.cantidadRecibida > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                            {item.cantidadRecibida}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${estadoColor}`}>
                            {estadoTexto} {porcentaje > 0 && `(${porcentaje.toFixed(0)}%)`}
                          </span>
                        </td>
                        <td className="p-3 text-right text-gray-600">
                          ${item.precioUnitario.toLocaleString()}
                        </td>
                        <td className="p-3 text-right font-semibold text-orange-600">
                          ${item.subtotal.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-gray-100 border-t-2 border-gray-300">
                  <tr>
                    <td colSpan={5} className="p-3 text-right font-semibold text-gray-900">
                      TOTAL:
                    </td>
                    <td className="p-3 text-right font-bold text-lg text-orange-600">
                      ${orden.total.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Observaciones */}
          {orden.observaciones && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Observaciones</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">{orden.observaciones}</p>
              </div>
            </div>
          )}

          {/* Historial de cambios (si se recibió) */}
          {(orden.estado === 'Recibida Parcial' || orden.estado === 'Recibida Completa') && (
            <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-900">Recepción Completada</h3>
              </div>
              <div className="text-sm text-green-800">
                <p>Se recibieron <strong>{totalRecibido}</strong> de <strong>{totalSolicitado}</strong> unidades solicitadas.</p>
                {porcentajeRecibido < 100 && (
                  <p className="mt-1 text-yellow-700 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Recepción parcial: faltan {totalSolicitado - totalRecibido} unidades
                  </p>
                )}
              </div>
            </div>
          )}
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
