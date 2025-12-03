import { Package, Calendar, DollarSign, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';
import type { OrdenCompra } from '../../types/ordenCompra';

interface OrdenCompraCardProps {
  orden: OrdenCompra;
  onVerDetalle: (orden: OrdenCompra) => void;
  onConfirmar?: (orden: OrdenCompra) => void;
  onRecibir?: (orden: OrdenCompra) => void;
  onCancelar?: (orden: OrdenCompra) => void;
}

export function OrdenCompraCard({ orden, onVerDetalle, onConfirmar, onRecibir, onCancelar }: OrdenCompraCardProps) {
  const getEstadoConfig = (estado: OrdenCompra['estado']) => {
    const configs = {
      'Borrador': {
        color: 'bg-gray-100 text-gray-800 border-gray-300',
        icon: <Clock className="w-4 h-4" />,
        label: 'Borrador'
      },
      'Enviada': {
        color: 'bg-orange-100 text-orange-800 border-orange-300',
        icon: <Clock className="w-4 h-4" />,
        label: 'Enviada'
      },
      'Confirmada': {
        color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        icon: <Clock className="w-4 h-4" />,
        label: 'Confirmada'
      },
      'Recibida Parcial': {
        color: 'bg-orange-100 text-orange-800 border-orange-300',
        icon: <AlertCircle className="w-4 h-4" />,
        label: 'Parcial'
      },
      'Recibida Completa': {
        color: 'bg-green-100 text-green-800 border-green-300',
        icon: <CheckCircle className="w-4 h-4" />,
        label: 'Completa'
      },
      'Cancelada': {
        color: 'bg-red-100 text-red-800 border-red-300',
        icon: <XCircle className="w-4 h-4" />,
        label: 'Cancelada'
      }
    };
    return configs[estado];
  };

  const estadoConfig = getEstadoConfig(orden.estado);
  const totalItems = orden.items.reduce((sum, item) => sum + item.cantidadSolicitada, 0);
  const itemsRecibidos = orden.items.reduce((sum, item) => sum + item.cantidadRecibida, 0);
  const porcentajeRecibido = totalItems > 0 ? (itemsRecibidos / totalItems) * 100 : 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:border-orange-300 transition-all hover:shadow-md">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-xl">{orden.numeroOrden}</h3>
              {orden.generadaAutomaticamente && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full border border-purple-300 font-medium">
                  🤖 Auto
                </span>
              )}
            </div>
            <p className="text-base text-gray-700 font-semibold mb-1">{orden.proveedorNombre}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>👤 {orden.createdBy}</span>
              <span>•</span>
              <span>📅 Creada: {new Date(orden.createdAt).toLocaleDateString('es-AR', { 
                day: '2-digit', 
                month: 'short', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${estadoConfig.color}`}>
            {estadoConfig.icon}
            <span className="text-sm font-semibold">{estadoConfig.label}</span>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-3 mb-4 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gray-500 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Fecha de Orden</p>
              <p className="text-sm text-gray-900 font-semibold">
                {new Date(orden.fecha).toLocaleDateString('es-AR', { 
                  day: '2-digit', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-orange-500 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Entrega Estimada</p>
              <p className="text-sm text-orange-600 font-semibold">
                {new Date(orden.fechaEntregaEstimada).toLocaleDateString('es-AR', { 
                  day: '2-digit', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Package className="w-4 h-4 text-blue-500 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Productos</p>
              <p className="text-sm text-gray-900 font-semibold">{orden.items.length} items</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <DollarSign className="w-4 h-4 text-green-600 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Total</p>
              <p className="text-sm text-green-600 font-bold">${orden.total.toLocaleString('es-AR')}</p>
            </div>
          </div>
        </div>

        {/* Progreso de recepción */}
        {(orden.estado === 'Confirmada' || orden.estado === 'Recibida Parcial' || orden.estado === 'Recibida Completa') && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span className="font-medium">Progreso de recepción</span>
              <span className="font-semibold">{itemsRecibidos} / {totalItems} unidades ({porcentajeRecibido.toFixed(0)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full transition-all ${
                  porcentajeRecibido === 100 ? 'bg-green-500' : 
                  porcentajeRecibido > 0 ? 'bg-orange-500' : 'bg-gray-400'
                }`}
                style={{ width: `${porcentajeRecibido}%` }}
              />
            </div>
          </div>
        )}

        {/* Fechas de envío y recepción */}
        {(orden.fechaEnvio || orden.fechaRecepcion) && (
          <div className="mb-4 flex gap-3 text-xs">
            {orden.fechaEnvio && (
              <div className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded">
                <span>📤 Enviada:</span>
                <span className="font-semibold">
                  {new Date(orden.fechaEnvio).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                </span>
              </div>
            )}
            {orden.fechaRecepcion && (
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded">
                <span>📥 Recibida:</span>
                <span className="font-semibold">
                  {new Date(orden.fechaRecepcion).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Observaciones */}
        {orden.observaciones && (
          <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded mb-4 line-clamp-2">
            {orden.observaciones}
          </div>
        )}

        {/* Acciones */}
        <div className="flex gap-2 pt-4 border-t border-gray-200">
          <button
            onClick={() => onVerDetalle(orden)}
            className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            Ver Detalle
          </button>
          
          {orden.estado === 'Borrador' && onConfirmar && (
            <button
              onClick={() => onConfirmar(orden)}
              className="flex-1 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Confirmar
            </button>
          )}

          {(orden.estado === 'Confirmada' || orden.estado === 'Recibida Parcial') && onRecibir && (
            <button
              onClick={() => onRecibir(orden)}
              className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Recibir
            </button>
          )}

          {(orden.estado === 'Borrador' || orden.estado === 'Enviada') && onCancelar && (
            <button
              onClick={() => onCancelar(orden)}
              className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-sm font-medium transition-colors"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
