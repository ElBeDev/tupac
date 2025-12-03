import { AlertTriangle, AlertCircle, Clock, CheckCircle2, Package } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { Alerta } from '../../types';
import { formatDateTime } from '../../utils/helpers';

interface AlertCardProps {
  alerta: Alerta;
  onMarcarLeida: (id: string) => void;
}

export function AlertCard({ alerta, onMarcarLeida }: AlertCardProps) {
  const iconosPorTipo = {
    STOCK_CRITICO: AlertTriangle,
    STOCK_BAJO: AlertCircle,
    VENCIMIENTO_PROXIMO: Clock,
    VENCIDO: AlertTriangle,
  };

  const coloresPorPrioridad = {
    CRITICA: {
      bg: 'bg-red-50 border-red-200',
      icon: 'text-red-600',
      badge: 'bg-red-100 text-red-800 border-red-200',
      button: 'bg-red-600 hover:bg-red-700',
    },
    ALTA: {
      bg: 'bg-orange-50 border-orange-200',
      icon: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800 border-orange-200',
      button: 'bg-orange-600 hover:bg-orange-700',
    },
    MEDIA: {
      bg: 'bg-yellow-50 border-yellow-200',
      icon: 'text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      button: 'bg-yellow-600 hover:bg-yellow-700',
    },
    BAJA: {
      bg: 'bg-orange-50 border-orange-200',
      icon: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800 border-orange-200',
      button: 'bg-orange-600 hover:bg-orange-700',
    },
  };

  const IconoTipo = iconosPorTipo[alerta.tipo];
  const colores = coloresPorPrioridad[alerta.nivelPrioridad];

  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${alerta.leida ? 'bg-gray-50 border-gray-200 opacity-60' : colores.bg}`}>
      <div className="flex items-start gap-4">
        {/* Icono */}
        <div className={`flex-shrink-0 ${colores.icon}`}>
          <IconoTipo className="w-6 h-6" />
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className={`text-xs ${alerta.leida ? 'bg-gray-200 text-gray-600 border-gray-300' : colores.badge}`}>
                  {alerta.nivelPrioridad}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {alerta.tipo.replace(/_/g, ' ')}
                </Badge>
                {alerta.leida && (
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Leída
                  </Badge>
                )}
              </div>
              <p className={`font-medium ${alerta.leida ? 'text-gray-600' : 'text-gray-900'}`}>
                {alerta.mensaje}
              </p>
            </div>
          </div>

          {/* Info del producto */}
          {alerta.productoNombre && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Package className="w-4 h-4" />
              <span>{alerta.productoNombre}</span>
              {alerta.loteNumero && (
                <span className="text-xs">• Lote: {alerta.loteNumero}</span>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">
              {formatDateTime(alerta.fechaAlerta)}
            </span>
            {!alerta.leida && (
              <button
                onClick={() => onMarcarLeida(alerta.id)}
                className={`px-3 py-1 text-xs font-medium text-white rounded-lg transition-colors ${colores.button}`}
              >
                Marcar como leída
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
