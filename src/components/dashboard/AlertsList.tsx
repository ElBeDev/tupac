import { AlertTriangle, AlertCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Alerta } from '../../types';
import { formatDateTime } from '../../utils/helpers';

interface AlertsListProps {
  alertas: Alerta[];
  maxItems?: number;
}

const iconMap = {
  STOCK_BAJO: AlertCircle,
  STOCK_CRITICO: AlertTriangle,
  VENCIMIENTO_PROXIMO: Clock,
  VENCIDO: AlertTriangle,
};

const prioridadColor = {
  BAJA: 'secondary',
  MEDIA: 'warning',
  ALTA: 'warning',
  CRITICA: 'destructive',
} as const;

export default function AlertsList({ alertas, maxItems = 5 }: AlertsListProps) {
  const alertasVisibles = alertas.slice(0, maxItems);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alertas Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        {alertasVisibles.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay alertas activas</p>
        ) : (
          <div className="space-y-3">
            {alertasVisibles.map((alerta) => {
              const Icon = iconMap[alerta.tipo];
              return (
                <div
                  key={alerta.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${
                    alerta.leida ? 'bg-gray-50 opacity-60' : 'bg-white'
                  }`}
                >
                  <div className={`${
                    alerta.nivelPrioridad === 'CRITICA'
                      ? 'text-red-600'
                      : alerta.nivelPrioridad === 'ALTA'
                      ? 'text-orange-600'
                      : 'text-yellow-600'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{alerta.mensaje}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDateTime(alerta.fechaAlerta)}
                    </p>
                  </div>
                  <Badge variant={prioridadColor[alerta.nivelPrioridad]} className="flex-shrink-0">
                    {alerta.nivelPrioridad}
                  </Badge>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
