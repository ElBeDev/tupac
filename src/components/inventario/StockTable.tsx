import { Package, TrendingUp, TrendingDown } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { Producto } from '../../types';
import { getEstadoStock, formatCurrency, getPrecioCosto } from '../../utils/helpers';
import { categorias } from '../../data/categorias';

interface StockTableProps {
  productos: Producto[];
  onEntrada: (producto: Producto) => void;
  onSalida: (producto: Producto) => void;
}

export function StockTable({ productos, onEntrada, onSalida }: StockTableProps) {
  const getNombreCategoria = (categoriaId: string) => {
    return categorias.find(c => c.id === categoriaId)?.nombre || categoriaId;
  };

  const estadoColors = {
    OK: 'bg-green-100 text-green-800 border-green-200',
    BAJO: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    CRITICO: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Producto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock Actual
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock Mín
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock Máx
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Valor Stock
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productos.map((producto) => {
              const estadoStock = getEstadoStock(producto.stockActual, producto.stockMinimo);
              const precioCosto = getPrecioCosto(producto);
              const valorStock = producto.stockActual * precioCosto;

              return (
                <tr key={producto.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        {producto.imagenUrl ? (
                          <img 
                            src={producto.imagenUrl} 
                            alt={producto.nombre}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <Package className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{producto.nombre}</p>
                        <p className="text-xs text-gray-500">{producto.marca}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="text-xs">
                      {getNombreCategoria(producto.categoriaId || producto.categoria || 'General')}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-lg font-bold">{producto.stockActual}</span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {producto.stockMinimo}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {producto.stockMaximo}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${estadoColors[estadoStock]}`}>
                      {estadoStock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold">
                    {formatCurrency(valorStock)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => onEntrada(producto)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Registrar entrada"
                      >
                        <TrendingUp className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => onSalida(producto)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Registrar salida"
                      >
                        <TrendingDown className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {productos.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No hay productos para mostrar
        </div>
      )}
    </div>
  );
}
