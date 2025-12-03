import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Lote } from '../../types';
import { getDiasHastaVencimiento } from '../../utils/helpers';

interface VencimientosTableProps {
  lotes: Lote[];
  maxItems?: number;
}

export default function VencimientosTable({ lotes, maxItems = 5 }: VencimientosTableProps) {
  // Ordenar por fecha de vencimiento más cercana
  const lotesOrdenados = [...lotes]
    .filter(l => l.estado === 'ACTIVO')
    .sort((a, b) => new Date(a.fechaVencimiento).getTime() - new Date(b.fechaVencimiento).getTime())
    .slice(0, maxItems);

  const getBadgeVariant = (dias: number) => {
    if (dias <= 0) return 'destructive';
    if (dias <= 3) return 'destructive';
    if (dias <= 7) return 'warning';
    return 'secondary';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos Próximos a Vencer</CardTitle>
      </CardHeader>
      <CardContent>
        {lotesOrdenados.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay productos próximos a vencer</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-2 text-xs font-medium text-gray-500">Producto</th>
                  <th className="pb-2 text-xs font-medium text-gray-500">Lote</th>
                  <th className="pb-2 text-xs font-medium text-gray-500">Vence</th>
                  <th className="pb-2 text-xs font-medium text-gray-500">Stock</th>
                  <th className="pb-2 text-xs font-medium text-gray-500">Estado</th>
                </tr>
              </thead>
              <tbody>
                {lotesOrdenados.map((lote) => {
                  const dias = getDiasHastaVencimiento(lote.fechaVencimiento);
                  const fechaVenc = new Date(lote.fechaVencimiento).toLocaleDateString('es-AR');
                  
                  return (
                    <tr key={lote.id} className="border-b last:border-0">
                      <td className="py-3 text-sm text-gray-900">{lote.productoNombre}</td>
                      <td className="py-3 text-sm text-gray-600">{lote.numeroLote}</td>
                      <td className="py-3 text-sm text-gray-600">{fechaVenc}</td>
                      <td className="py-3 text-sm text-gray-600">{lote.cantidadActual}</td>
                      <td className="py-3">
                        <Badge variant={getBadgeVariant(dias)}>
                          {dias <= 0 ? 'Vencido' : `${dias} días`}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
