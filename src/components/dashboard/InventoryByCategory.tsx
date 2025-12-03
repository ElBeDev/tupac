import { useMemo } from 'react';
import { Package, TrendingUp, DollarSign } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import { formatCurrency } from '../../utils/helpers';

interface CategoryValue {
  categoria: string;
  totalProductos: number;
  totalUnidades: number;
  valorInventario: number;
  porcentaje: number;
}

export default function InventoryByCategory() {
  const productos = useStore((state) => state.productos);

  const analisisCategoria = useMemo(() => {
    if (productos.length === 0) return null;

    // Agrupar productos por categoría
    const categoriaMap = new Map<string, CategoryValue>();
    let valorTotalInventario = 0;

    productos.forEach((producto) => {
      const categoria = producto.categoria || 'Sin categoría';
      const valorProducto = (producto.precioCompra || 0) * producto.stockActual;
      valorTotalInventario += valorProducto;

      const existing = categoriaMap.get(categoria);
      if (existing) {
        existing.totalProductos += 1;
        existing.totalUnidades += producto.stockActual;
        existing.valorInventario += valorProducto;
      } else {
        categoriaMap.set(categoria, {
          categoria,
          totalProductos: 1,
          totalUnidades: producto.stockActual,
          valorInventario: valorProducto,
          porcentaje: 0,
        });
      }
    });

    // Calcular porcentajes
    const categoriesData = Array.from(categoriaMap.values()).map((cat) => ({
      ...cat,
      porcentaje: valorTotalInventario > 0 ? (cat.valorInventario / valorTotalInventario) * 100 : 0,
    }));

    // Ordenar por valor de inventario
    categoriesData.sort((a, b) => b.valorInventario - a.valorInventario);

    const top5 = categoriesData.slice(0, 5);
    const otros = categoriesData.slice(5);
    const valorOtros = otros.reduce((sum, cat) => sum + cat.valorInventario, 0);
    const porcentajeOtros = valorTotalInventario > 0 ? (valorOtros / valorTotalInventario) * 100 : 0;

    return {
      categoriesData,
      top5,
      valorTotalInventario,
      valorOtros,
      porcentajeOtros,
      totalCategorias: categoriaMap.size,
    };
  }, [productos]);

  if (!analisisCategoria) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center py-8">
          <p className="text-gray-500">Cargando análisis por categoría...</p>
        </div>
      </div>
    );
  }

  const getColorForIndex = (index: number): string => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      {/* Resumen General */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Valor Total Inventario</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(analisisCategoria.valorTotalInventario)}
              </p>
            </div>
            <DollarSign className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Categorías Activas</p>
              <p className="text-2xl font-bold text-gray-900">{analisisCategoria.totalCategorias}</p>
            </div>
            <Package className="text-green-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Productos Total</p>
              <p className="text-2xl font-bold text-gray-900">{productos.length}</p>
            </div>
            <TrendingUp className="text-purple-500" size={32} />
          </div>
        </div>
      </div>

      {/* Top 5 Categorías */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 5 Categorías por Valor</h3>

        <div className="space-y-4">
          {analisisCategoria.top5.map((categoria, index) => (
            <div key={categoria.categoria} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${getColorForIndex(index)} bg-opacity-10 flex items-center justify-center`}
                  >
                    <span className="text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{categoria.categoria}</p>
                    <p className="text-xs text-gray-600">
                      {categoria.totalProductos} productos • {categoria.totalUnidades} unidades
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {formatCurrency(categoria.valorInventario)}
                  </p>
                  <p className="text-xs text-gray-600">{categoria.porcentaje.toFixed(1)}%</p>
                </div>
              </div>
              {/* Barra de progreso */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${getColorForIndex(index)} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${categoria.porcentaje}%` }}
                ></div>
              </div>
            </div>
          ))}

          {/* Otras categorías */}
          {analisisCategoria.valorOtros > 0 && (
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Package className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Otras Categorías</p>
                    <p className="text-xs text-gray-600">
                      {analisisCategoria.totalCategorias - 5} categorías restantes
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {formatCurrency(analisisCategoria.valorOtros)}
                  </p>
                  <p className="text-xs text-gray-600">
                    {analisisCategoria.porcentajeOtros.toFixed(1)}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${analisisCategoria.porcentajeOtros}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabla completa de categorías */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Desglose Completo por Categoría
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Productos
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unidades
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Inventario
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analisisCategoria.categoriesData.map((categoria) => (
                <tr key={categoria.categoria} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {categoria.categoria}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {categoria.totalProductos}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {categoria.totalUnidades.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {formatCurrency(categoria.valorInventario)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${categoria.porcentaje}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600">{categoria.porcentaje.toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nota informativa */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Package className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Acerca del Valor de Inventario
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Valor:</strong> Calculado multiplicando precio de compra × stock actual
                </li>
                <li>
                  <strong>Porcentaje:</strong> Representa la proporción del valor total del
                  inventario
                </li>
                <li>
                  <strong>Top 5:</strong> Las categorías con mayor inversión de capital
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
