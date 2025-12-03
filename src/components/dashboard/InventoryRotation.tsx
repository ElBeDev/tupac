import { useMemo } from 'react';
import { TrendingUp, TrendingDown, AlertCircle, Package } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import { useMovimientoStore } from '../../store/movimientoStore';
import { analizarRotacionInventario } from '../../utils/rotationAnalyzer';
import { formatCurrency } from '../../utils/helpers';

export default function InventoryRotation() {
  const productos = useStore((state) => state.productos);
  const movimientos = useMovimientoStore((state) => state.movimientos);

  const analisis = useMemo(() => {
    if (productos.length === 0 || movimientos.length === 0) {
      return null;
    }
    return analizarRotacionInventario(productos, movimientos);
  }, [productos, movimientos]);

  if (!analisis) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center py-8">
          <p className="text-gray-500">Cargando análisis de rotación...</p>
        </div>
      </div>
    );
  }

  const formatDias = (dias: number): string => {
    if (dias === Infinity || dias > 365) return '365+ días';
    if (dias < 1) return '< 1 día';
    return `${Math.round(dias)} días`;
  };

  return (
    <div className="space-y-6">
      {/* Resumen General */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Rotación Rápida</p>
              <p className="text-2xl font-bold text-gray-900">{analisis.productosRapidos.length}</p>
              <p className="text-xs text-gray-500">Productos</p>
            </div>
            <TrendingUp className="text-green-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Rotación Lenta</p>
              <p className="text-2xl font-bold text-gray-900">{analisis.productosLentos.length}</p>
              <p className="text-xs text-gray-500">Productos</p>
            </div>
            <TrendingDown className="text-yellow-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Sin Movimiento</p>
              <p className="text-2xl font-bold text-gray-900">{analisis.productosSinMovimiento.length}</p>
              <p className="text-xs text-gray-500">Productos</p>
            </div>
            <AlertCircle className="text-red-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Promedio Rotación</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(analisis.promedioRotacion)}</p>
              <p className="text-xs text-gray-500">Días</p>
            </div>
            <Package className="text-blue-500" size={32} />
          </div>
        </div>
      </div>

      {/* Productos de Rotación Rápida */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="text-green-500 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-gray-900">
            Productos de Alta Rotación (Top 10)
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Productos que se venden rápidamente y requieren monitoreo constante
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Actual
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Promedio Venta/Día
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Días de Stock
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Venta
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Vendido
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analisis.productosRapidos.slice(0, 10).map((producto) => (
                <tr key={producto.productoId} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {producto.nombre}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    <span className={`font-semibold ${producto.stockActual < 10 ? 'text-red-600' : 'text-gray-900'}`}>
                      {producto.stockActual}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {producto.promedioVentaDiaria.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      producto.diasDeStock < 7 ? 'bg-red-100 text-red-800' :
                      producto.diasDeStock < 15 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {formatDias(producto.diasDeStock)}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {producto.ultimaVenta}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {formatCurrency(producto.totalValorVendido)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {analisis.productosRapidos.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay productos con alta rotación en este momento
          </div>
        )}
      </div>

      {/* Productos de Rotación Lenta */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingDown className="text-yellow-500 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-gray-900">
            Productos de Baja Rotación (Top 10)
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Productos con movimiento lento que pueden requerir estrategias de venta
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Actual
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Promedio Venta/Día
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Días de Stock
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Venta
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Vendido
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analisis.productosLentos.slice(0, 10).map((producto) => (
                <tr key={producto.productoId} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {producto.nombre}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {producto.stockActual}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {producto.promedioVentaDiaria.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      {formatDias(producto.diasDeStock)}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {producto.ultimaVenta}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {formatCurrency(producto.totalValorVendido)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {analisis.productosLentos.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay productos con baja rotación en este momento
          </div>
        )}
      </div>

      {/* Productos Sin Movimiento */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <AlertCircle className="text-red-500 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-gray-900">
            Productos Sin Movimiento (Top 10)
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Productos con stock pero sin registros de venta - Requieren atención inmediata
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Actual
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analisis.productosSinMovimiento.slice(0, 10).map((producto) => (
                <tr key={producto.productoId} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {producto.nombre}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {producto.stockActual}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      Sin ventas registradas
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {analisis.productosSinMovimiento.length === 0 && (
          <div className="text-center py-8 text-green-600 font-medium">
            ¡Excelente! Todos los productos tienen movimiento
          </div>
        )}
      </div>

      {/* Nota informativa */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Package className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Acerca del Análisis de Rotación
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Rotación Rápida:</strong> Productos con menos de 15 días de stock disponible</li>
                <li><strong>Rotación Lenta:</strong> Productos con más de 45 días de stock disponible</li>
                <li><strong>Sin Movimiento:</strong> Productos sin registros de venta</li>
                <li><strong>Días de Stock:</strong> Calculado según el promedio de ventas diarias</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
