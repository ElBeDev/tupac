import { useState, useMemo } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Package, AlertTriangle, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProductoStore } from '../store/productoStore';

interface ProductoConRentabilidad {
  id: string;
  nombre: string;
  categoria?: string;
  precioCosto: number;
  precioVenta: number;
  precioActual: number | null;
  margen: number;
  margenPorcentaje: number;
  stockActual: number;
  valorInventario: number;
  esRentable: boolean;
}

export default function AnalisisRentabilidad() {
  const [vistaActiva, setVistaActiva] = useState<'general' | 'rentables' | 'perdidas'>('general');
  const [ordenamiento, setOrdenamiento] = useState<'margen' | 'valor'>('margen');
  
  const { getProductos, getPrecioProducto } = useProductoStore();
  
  // Calcular rentabilidad de todos los productos
  const productosConRentabilidad = useMemo<ProductoConRentabilidad[]>(() => {
    const productos = getProductos();
    
    return productos.map(producto => {
      // Obtener precio actual del sistema de precios
      const precioActual = getPrecioProducto(producto.id, 0);
      
      // Usar precio de venta del producto o precio actual del sistema
      const precioVenta = precioActual || producto.precioVenta || 0;
      
      // Usar precio de compra/costo
      const precioCosto = producto.precioCompra || producto.precioCosto || 0;
      
      // Calcular margen
      const margen = precioVenta - precioCosto;
      const margenPorcentaje = precioCosto > 0 ? (margen / precioCosto) * 100 : 0;
      
      // Valor del inventario
      const valorInventario = producto.stockActual * precioCosto;
      
      // Es rentable si el margen es positivo
      const esRentable = margen > 0;
      
      return {
        id: producto.id,
        nombre: producto.nombre,
        categoria: producto.categoria,
        precioCosto,
        precioVenta,
        precioActual,
        margen,
        margenPorcentaje,
        stockActual: producto.stockActual,
        valorInventario,
        esRentable
      };
    }).filter(p => p.precioCosto > 0 || p.precioVenta > 0); // Solo productos con precios
  }, [getProductos, getPrecioProducto]);
  
  // Filtrar por rentabilidad
  const productosFiltrados = useMemo(() => {
    let filtered = productosConRentabilidad;
    
    if (vistaActiva === 'rentables') {
      filtered = filtered.filter(p => p.esRentable && p.margenPorcentaje > 0);
    } else if (vistaActiva === 'perdidas') {
      filtered = filtered.filter(p => !p.esRentable || p.margenPorcentaje <= 0);
    }
    
    // Ordenar
    return [...filtered].sort((a, b) => {
      if (ordenamiento === 'margen') {
        return b.margenPorcentaje - a.margenPorcentaje;
      } else {
        return b.valorInventario - a.valorInventario;
      }
    });
  }, [productosConRentabilidad, vistaActiva, ordenamiento]);
  
  // Estadísticas generales
  const stats = useMemo(() => {
    const totalProductos = productosConRentabilidad.length;
    const productosRentables = productosConRentabilidad.filter(p => p.esRentable).length;
    const productosPerdida = totalProductos - productosRentables;
    
    const margenTotal = productosConRentabilidad.reduce((sum, p) => sum + p.margen * p.stockActual, 0);
    const valorInventarioTotal = productosConRentabilidad.reduce((sum, p) => sum + p.valorInventario, 0);
    const margenPromedio = totalProductos > 0 
      ? productosConRentabilidad.reduce((sum, p) => sum + p.margenPorcentaje, 0) / totalProductos
      : 0;
    
    const topRentable = [...productosConRentabilidad]
      .filter(p => p.esRentable)
      .sort((a, b) => b.margenPorcentaje - a.margenPorcentaje)[0];
    
    return {
      totalProductos,
      productosRentables,
      productosPerdida,
      margenTotal,
      valorInventarioTotal,
      margenPromedio,
      topRentable
    };
  }, [productosConRentabilidad]);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(value);
  };
  
  const formatPercentage = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Análisis de Rentabilidad
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Análisis de márgenes y rentabilidad por producto con datos reales
            </p>
          </div>
        </div>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Productos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalProductos}</p>
            </div>
            <Package className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg shadow-sm border border-green-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Productos Rentables</p>
              <p className="text-3xl font-bold text-green-700 mt-2">{stats.productosRentables}</p>
              <p className="text-xs text-green-600 mt-1">
                {stats.totalProductos > 0 ? ((stats.productosRentables / stats.totalProductos) * 100).toFixed(1) : 0}% del total
              </p>
            </div>
            <TrendingUp className="w-10 h-10 text-green-600" />
          </div>
        </div>
        
        <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-700 font-medium">Con Pérdida</p>
              <p className="text-3xl font-bold text-red-700 mt-2">{stats.productosPerdida}</p>
              <p className="text-xs text-red-600 mt-1">
                {stats.totalProductos > 0 ? ((stats.productosPerdida / stats.totalProductos) * 100).toFixed(1) : 0}% del total
              </p>
            </div>
            <TrendingDown className="w-10 h-10 text-red-600" />
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg shadow-sm border border-purple-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Margen Promedio</p>
              <p className="text-3xl font-bold text-purple-700 mt-2">
                {formatPercentage(stats.margenPromedio)}
              </p>
              <p className="text-xs text-purple-600 mt-1">
                Margen total: {formatCurrency(stats.margenTotal)}
              </p>
            </div>
            <DollarSign className="w-10 h-10 text-purple-600" />
          </div>
        </div>
      </div>
      
      {/* Top Rentable */}
      {stats.topRentable && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-8 h-8 text-green-700" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-green-700 font-medium">Producto Más Rentable</p>
              <p className="text-xl font-bold text-green-900 mt-1">{stats.topRentable.nombre}</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <span className="text-green-700">
                  Margen: <span className="font-bold">{formatPercentage(stats.topRentable.margenPorcentaje)}</span>
                </span>
                <span className="text-green-700">
                  Ganancia: <span className="font-bold">{formatCurrency(stats.topRentable.margen)}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Tabs y Filtros */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex gap-2">
            <button
              onClick={() => setVistaActiva('general')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                vistaActiva === 'general'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="w-4 h-4 inline-block mr-1" /> Todos ({stats.totalProductos})
            </button>
            <button
              onClick={() => setVistaActiva('rentables')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                vistaActiva === 'rentables'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <CheckCircle className="w-4 h-4 inline-block mr-1" /> Rentables ({stats.productosRentables})
            </button>
            <button
              onClick={() => setVistaActiva('perdidas')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                vistaActiva === 'perdidas'
                  ? 'bg-red-100 text-red-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <AlertTriangle className="w-4 h-4 inline-block mr-1" /> Con Pérdida ({stats.productosPerdida})
            </button>
          </div>
          
          <select
            value={ordenamiento}
            onChange={(e) => setOrdenamiento(e.target.value as 'margen' | 'valor')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="margen">Ordenar por Margen %</option>
            <option value="valor">Ordenar por Valor Inventario</option>
          </select>
        </div>
        
        {/* Tabla de Productos */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Costo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio Venta
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Margen $
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Margen %
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Inventario
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-lg">No hay productos en esta vista</p>
                  </td>
                </tr>
              ) : (
                productosFiltrados.slice(0, 50).map((producto) => (
                  <tr key={producto.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{producto.nombre}</div>
                      <div className="text-xs text-gray-500">ID: {producto.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{producto.categoria || '-'}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm text-gray-700">{formatCurrency(producto.precioCosto)}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-medium text-gray-900">
                        {formatCurrency(producto.precioVenta)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`text-sm font-semibold ${
                        producto.margen >= 0 ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {formatCurrency(producto.margen)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-bold ${
                        producto.margenPorcentaje >= 30
                          ? 'bg-green-100 text-green-800'
                          : producto.margenPorcentaje >= 10
                          ? 'bg-yellow-100 text-yellow-800'
                          : producto.margenPorcentaje > 0
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {formatPercentage(producto.margenPorcentaje)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm text-gray-700">{producto.stockActual}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-medium text-gray-900">
                        {formatCurrency(producto.valorInventario)}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {productosFiltrados.length > 50 && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Mostrando los primeros 50 de {productosFiltrados.length} productos. 
              Usa los filtros para ver más resultados específicos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
