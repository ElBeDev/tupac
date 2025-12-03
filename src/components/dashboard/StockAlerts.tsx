import { useMemo } from 'react';
import { AlertTriangle, Clock, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/useStore';
import { useMovimientoStore } from '../../store/movimientoStore';
import { identificarProductosParaReorden, calcularCantidadReorden } from '../../utils/rotationAnalyzer';
import { formatCurrency } from '../../utils/helpers';

export default function StockAlerts() {
  const productos = useStore((state) => state.productos);
  const movimientos = useMovimientoStore((state) => state.movimientos);

  const alertas = useMemo(() => {
    if (productos.length === 0 || movimientos.length === 0) {
      return {
        stockCritico: [],
        reordenUrgente: [],
        stockBajo: []
      };
    }

    // Productos con stock crítico (< 5 unidades)
    const stockCritico = productos
      .filter(p => p.stockActual > 0 && p.stockActual < 5)
      .sort((a, b) => a.stockActual - b.stockActual)
      .slice(0, 10);

    // Productos que necesitan reorden urgente (menos de 7 días de stock)
    const reordenUrgente = identificarProductosParaReorden(productos, movimientos, 7)
      .slice(0, 10);

    // Productos con stock bajo pero no crítico (5-10 unidades)
    const stockBajo = productos
      .filter(p => p.stockActual >= 5 && p.stockActual <= 10)
      .sort((a, b) => a.stockActual - b.stockActual)
      .slice(0, 10);

    return {
      stockCritico,
      reordenUrgente,
      stockBajo
    };
  }, [productos, movimientos]);

  const totalAlertas = 
    alertas.stockCritico.length + 
    alertas.reordenUrgente.length + 
    alertas.stockBajo.length;

  if (totalAlertas === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="text-green-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">¡Todo en orden!</h3>
            <p className="text-gray-500">No hay alertas de stock en este momento</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Resumen de Alertas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stock Crítico</p>
              <p className="text-2xl font-bold text-gray-900">{alertas.stockCritico.length}</p>
              <p className="text-xs text-gray-500">Menos de 5 unidades</p>
            </div>
            <AlertTriangle className="text-red-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reorden Urgente</p>
              <p className="text-2xl font-bold text-gray-900">{alertas.reordenUrgente.length}</p>
              <p className="text-xs text-gray-500">Menos de 7 días de stock</p>
            </div>
            <Clock className="text-orange-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stock Bajo</p>
              <p className="text-2xl font-bold text-gray-900">{alertas.stockBajo.length}</p>
              <p className="text-xs text-gray-500">Entre 5 y 10 unidades</p>
            </div>
            <ShoppingCart className="text-yellow-500" size={32} />
          </div>
        </div>
      </div>

      {/* Stock Crítico */}
      {alertas.stockCritico.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <AlertTriangle className="text-red-500 mr-2" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">
                Stock Crítico - Acción Inmediata Requerida
              </h3>
            </div>
            <Link 
              to="/productos" 
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Ver todos →
            </Link>
          </div>
          <p className="text-sm text-red-600 mb-4 font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Estos productos tienen menos de 5 unidades en stock
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Producto
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Código
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock Actual
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Proveedor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio Compra
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alertas.stockCritico.map((producto) => (
                  <tr key={producto.id} className="hover:bg-red-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {producto.nombre}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                      {producto.codigo}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                        {producto.stockActual} {producto.unidadMedida}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                      {producto.proveedor}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(producto.precioCompra || 0)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
                        CRÍTICO
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reorden Urgente */}
      {alertas.reordenUrgente.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Clock className="text-orange-500 mr-2" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">
                Reorden Urgente - Menos de 7 Días de Stock
              </h3>
            </div>
            <Link 
              to="/ordenes-compra" 
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Crear orden →
            </Link>
          </div>
          <p className="text-sm text-orange-600 mb-4 font-medium">
            Estos productos se agotarán pronto según su ritmo de venta actual
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
                    Venta Diaria
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Días de Stock
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad Sugerida
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Inversión
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alertas.reordenUrgente.map((rotacion) => {
                  const cantidadSugerida = calcularCantidadReorden(rotacion, 30);
                  const producto = productos.find(p => p.id === rotacion.productoId);
                  const inversionEstimada = producto ? cantidadSugerida * (producto.precioCompra || 0) : 0;
                  
                  return (
                    <tr key={rotacion.productoId} className="hover:bg-orange-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {rotacion.nombre}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="font-semibold text-orange-600">
                          {rotacion.stockActual}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        {rotacion.promedioVentaDiaria.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                          {Math.round(rotacion.diasDeStock)} días
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="font-bold text-indigo-600">
                          {cantidadSugerida}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">
                          (30 días)
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-semibold">
                        {formatCurrency(inversionEstimada)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Total de inversión sugerida */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-sm text-gray-600">Inversión Total Estimada</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(
                    alertas.reordenUrgente.reduce((total, rotacion) => {
                      const producto = productos.find(p => p.id === rotacion.productoId);
                      const cantidadSugerida = calcularCantidadReorden(rotacion, 30);
                      return total + (producto ? cantidadSugerida * (producto.precioCompra || 0) : 0);
                    }, 0)
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stock Bajo */}
      {alertas.stockBajo.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <ShoppingCart className="text-yellow-500 mr-2" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">
                Stock Bajo - Monitorear de Cerca
              </h3>
            </div>
          </div>
          <p className="text-sm text-yellow-600 mb-4">
            Productos con stock bajo que requieren atención
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
                    Stock Mínimo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Proveedor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alertas.stockBajo.map((producto) => (
                  <tr key={producto.id} className="hover:bg-yellow-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {producto.nombre}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="font-semibold text-yellow-600">
                        {producto.stockActual} {producto.unidadMedida}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                      {producto.stockMinimo}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                      {producto.proveedor}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                        BAJO
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Nota informativa */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">
              Criterios de Alertas
            </h3>
            <div className="mt-2 text-sm text-indigo-700">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Stock Crítico:</strong> Productos con menos de 5 unidades disponibles</li>
                <li><strong>Reorden Urgente:</strong> Productos que se agotarán en menos de 7 días según su venta promedio</li>
                <li><strong>Stock Bajo:</strong> Productos con 5-10 unidades que requieren monitoreo</li>
                <li><strong>Cantidad Sugerida:</strong> Calculada para 30 días de cobertura</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
