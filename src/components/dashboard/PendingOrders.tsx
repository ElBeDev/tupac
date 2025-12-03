import { useMemo } from 'react';
import { Package, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useOrdenCompraStore } from '../../store/ordenCompraStore';
import { formatCurrency } from '../../utils/helpers';
import type { OrdenCompra, ItemOrdenCompra } from '../../types/ordenCompra';

export default function PendingOrders() {
  const ordenes = useOrdenCompraStore((state) => state.ordenes);

  const estadisticas = useMemo(() => {
    const confirmadas = ordenes.filter((o: OrdenCompra) => o.estado === 'Confirmada').length;
    const enviadas = ordenes.filter((o: OrdenCompra) => o.estado === 'Enviada').length;
    const recibidas = ordenes.filter((o: OrdenCompra) => o.estado === 'Recibida Completa' || o.estado === 'Recibida Parcial').length;
    const canceladas = ordenes.filter((o: OrdenCompra) => o.estado === 'Cancelada').length;

    // Productos más solicitados
    const productosMap = new Map<string, { nombre: string; cantidad: number; veces: number }>();
    ordenes.forEach((orden: OrdenCompra) => {
      orden.items.forEach((item: ItemOrdenCompra) => {
        const existing = productosMap.get(item.productoId);
        if (existing) {
          existing.cantidad += item.cantidadSolicitada;
          existing.veces += 1;
        } else {
          productosMap.set(item.productoId, {
            nombre: item.productoNombre,
            cantidad: item.cantidadSolicitada,
            veces: 1,
          });
        }
      });
    });

    const topProductos = Array.from(productosMap.entries())
      .map(([id, data]) => ({ id, ...data }))
      .sort((a, b) => b.cantidad - a.cantidad)
      .slice(0, 10);

    // Calcular tiempo promedio de procesamiento (solo órdenes recibidas)
    const ordenesRecibidas = ordenes.filter((o: OrdenCompra) => o.estado === 'Recibida Completa' || o.estado === 'Recibida Parcial');
    let tiempoPromedioMs = 0;
    if (ordenesRecibidas.length > 0) {
      const tiemposTotales = ordenesRecibidas.reduce((sum: number, orden: OrdenCompra) => {
        if (orden.fechaEntregaEstimada && orden.fecha) {
          const fechaSolicitud = new Date(orden.fecha).getTime();
          const fechaRecibida = new Date(orden.fechaEntregaEstimada).getTime();
          return sum + (fechaRecibida - fechaSolicitud);
        }
        return sum;
      }, 0);
      tiempoPromedioMs = tiemposTotales / ordenesRecibidas.length;
    }
    const tiempoPromedioDias = Math.round(tiempoPromedioMs / (1000 * 60 * 60 * 24));

    // Valor total de órdenes pendientes
    const valorPendiente = ordenes
      .filter((o: OrdenCompra) => o.estado !== 'Recibida Completa' && o.estado !== 'Recibida Parcial' && o.estado !== 'Cancelada')
      .reduce((sum: number, o: OrdenCompra) => sum + o.total, 0);

    return {
      confirmadas,
      enviadas,
      recibidas,
      canceladas,
      topProductos,
      tiempoPromedioDias,
      valorPendiente,
    };
  }, [ordenes]);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Confirmada':
        return 'bg-blue-100 text-blue-800';
      case 'Enviada':
        return 'bg-yellow-100 text-yellow-800';
      case 'Recibida':
        return 'bg-green-100 text-green-800';
      case 'Cancelada':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'Confirmada':
        return <AlertCircle className="w-4 h-4" />;
      case 'Enviada':
        return <Clock className="w-4 h-4" />;
      case 'Recibida':
        return <CheckCircle className="w-4 h-4" />;
      case 'Cancelada':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Resumen de Estados */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Confirmadas</p>
              <p className="text-2xl font-bold text-gray-900">{estadisticas.confirmadas}</p>
            </div>
            <AlertCircle className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Enviadas</p>
              <p className="text-2xl font-bold text-gray-900">{estadisticas.enviadas}</p>
            </div>
            <Clock className="text-yellow-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Recibidas</p>
              <p className="text-2xl font-bold text-gray-900">{estadisticas.recibidas}</p>
            </div>
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Canceladas</p>
              <p className="text-2xl font-bold text-gray-900">{estadisticas.canceladas}</p>
            </div>
            <XCircle className="text-red-500" size={32} />
          </div>
        </div>
      </div>

      {/* Métricas Adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Tiempo Promedio</h3>
          <p className="text-3xl font-bold text-indigo-600">{estadisticas.tiempoPromedioDias} días</p>
          <p className="text-sm text-gray-600 mt-1">Tiempo de procesamiento promedio</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Valor Pendiente</h3>
          <p className="text-3xl font-bold text-orange-600">
            {formatCurrency(estadisticas.valorPendiente)}
          </p>
          <p className="text-sm text-gray-600 mt-1">Órdenes confirmadas y enviadas</p>
        </div>
      </div>

      {/* Productos Más Solicitados */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Top 10 Productos Más Solicitados</h3>
          <Package className="text-indigo-500" size={24} />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ranking
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cantidad Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Veces Pedido
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {estadisticas.topProductos.map((producto, index) => (
                <tr key={producto.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}°`}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {producto.nombre}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-600">
                    {producto.cantidad.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {producto.veces} veces
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lista de Órdenes Pendientes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Órdenes Pendientes de Recepción
          </h3>
          <Link
            to="/ordenes-compra"
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Ver todas →
          </Link>
        </div>

        <div className="space-y-3">
          {ordenes
            .filter((o: OrdenCompra) => o.estado !== 'Recibida Completa' && o.estado !== 'Recibida Parcial' && o.estado !== 'Cancelada')
            .slice(0, 10)
            .map((orden: OrdenCompra) => (
              <div
                key={orden.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <Package className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Orden #{orden.numeroOrden}</p>
                      <p className="text-xs text-gray-600">{orden.proveedorNombre}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getEstadoColor(
                        orden.estado
                      )}`}
                    >
                      {getEstadoIcon(orden.estado)}
                      {orden.estado}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Fecha Solicitud</p>
                    <p className="font-medium text-gray-900">{orden.fecha}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Entrega Estimada</p>
                    <p className="font-medium text-gray-900">{orden.fechaEntregaEstimada}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total</p>
                    <p className="font-bold text-indigo-600">{formatCurrency(orden.total)}</p>
                  </div>
                </div>

                <div className="mt-2 text-xs text-gray-600">
                  {orden.items.length} productos • Total items: {orden.items.reduce((sum: number, item: ItemOrdenCompra) => sum + item.cantidadSolicitada, 0)}
                </div>
              </div>
            ))}
        </div>

        {ordenes.filter((o: OrdenCompra) => o.estado !== 'Recibida Completa' && o.estado !== 'Recibida Parcial' && o.estado !== 'Cancelada').length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
            <p className="font-medium">¡Todas las órdenes están recibidas!</p>
            <p className="text-sm">No hay órdenes pendientes en este momento</p>
          </div>
        )}
      </div>

      {/* Nota informativa */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Package className="h-5 w-5 text-indigo-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">
              Acerca de las Órdenes de Compra
            </h3>
            <div className="mt-2 text-sm text-indigo-700">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Confirmada:</strong> Orden creada y confirmada, pendiente de envío
                </li>
                <li>
                  <strong>Enviada:</strong> En tránsito desde el proveedor
                </li>
                <li>
                  <strong>Recibida:</strong> Mercadería recibida y verificada
                </li>
                <li>
                  <strong>Valor Pendiente:</strong> Total de órdenes confirmadas + enviadas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
