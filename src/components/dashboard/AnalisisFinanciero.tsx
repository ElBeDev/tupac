import { useMemo } from 'react';
import { DollarSign, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { usePedidoClienteStore } from '../../store/pedidoClienteStore';
import { useVentaStore } from '../../store/ventaStore';
import { formatCurrency } from '../../utils/helpers';

export default function AnalisisFinanciero() {
  const { getPedidosByEstado, getMontoTotal } = usePedidoClienteStore();
  const { ventas } = useVentaStore();
  
  // Calcular métricas financieras
  const metricas = useMemo(() => {
    const pedidosPendientes = getPedidosByEstado('pendiente');
    const pedidosCompletados = getPedidosByEstado('completado');
    
    // Proyección de ingresos basado en pedidos pendientes
    const ingresosProyectados = pedidosPendientes.reduce((sum: number, p) => sum + p.total, 0);
    
    // Ingresos realizados (pedidos completados)
    const ingresosRealizados = pedidosCompletados.reduce((sum: number, p) => sum + p.total, 0);
    
    // Total de ventas facturadas
    const totalVentas = ventas
      .filter(v => v.estado === 'Completada')
      .reduce((sum, v) => sum + v.total, 0);
    
    // Promedio de pedido
    const totalPedidos = pedidosPendientes.length + pedidosCompletados.length;
    const montoTotal = getMontoTotal();
    const promedioPedido = totalPedidos > 0 ? montoTotal / totalPedidos : 0;
    
    return {
      ingresosProyectados,
      ingresosRealizados,
      totalVentas,
      promedioPedido,
      pedidosPendientesCount: pedidosPendientes.length,
      pedidosCompletadosCount: pedidosCompletados.length
    };
  }, [getPedidosByEstado, getMontoTotal, ventas]);
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Análisis Financiero</h2>
          <p className="text-sm text-gray-600 mt-1">Proyecciones e ingresos basados en datos reales</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg">
          <DollarSign className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Ingresos Proyectados */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-medium text-blue-900">Ingresos Proyectados</p>
          </div>
          <p className="text-2xl font-bold text-blue-900">
            {formatCurrency(metricas.ingresosProyectados)}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            {metricas.pedidosPendientesCount} pedidos pendientes
          </p>
        </div>
        
        {/* Ingresos Realizados (Pedidos) */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <p className="text-sm font-medium text-green-900">Pedidos Completados</p>
          </div>
          <p className="text-2xl font-bold text-green-900">
            {formatCurrency(metricas.ingresosRealizados)}
          </p>
          <p className="text-xs text-green-700 mt-1">
            {metricas.pedidosCompletadosCount} pedidos
          </p>
        </div>
        
        {/* Total Ventas Facturadas */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <p className="text-sm font-medium text-purple-900">Ventas Facturadas</p>
          </div>
          <p className="text-2xl font-bold text-purple-900">
            {formatCurrency(metricas.totalVentas)}
          </p>
          <p className="text-xs text-purple-700 mt-1">
            {ventas.filter(v => v.estado === 'Completada').length} facturas
          </p>
        </div>
        
        {/* Promedio por Pedido */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <p className="text-sm font-medium text-orange-900">Promedio por Pedido</p>
          </div>
          <p className="text-2xl font-bold text-orange-900">
            {formatCurrency(metricas.promedioPedido)}
          </p>
          <p className="text-xs text-orange-700 mt-1">
            Basado en {metricas.pedidosPendientesCount + metricas.pedidosCompletadosCount} pedidos
          </p>
        </div>
      </div>
      
      {/* Información adicional */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-900 mb-1">
              💡 Análisis Financiero
            </p>
            <p className="text-xs text-blue-700">
              Los <strong>ingresos proyectados</strong> se basan en {metricas.pedidosPendientesCount} pedidos pendientes por completar.
              Los <strong>pedidos completados</strong> suman {formatCurrency(metricas.ingresosRealizados)} en {metricas.pedidosCompletadosCount} órdenes.
              Las <strong>ventas facturadas</strong> totalizan {formatCurrency(metricas.totalVentas)} en facturas emitidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
