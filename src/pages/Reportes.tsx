import { useMemo, useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, BarChart3, PieChart as PieIcon, TrendingUp, Package, DollarSign, Users, ShoppingCart, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { useVentaStore } from '../store/ventaStore';
import { useClienteStore } from '../store/clienteStore';
import { useMovimientoStore } from '../store/movimientoStore';
import { useOrdenCompraStore } from '../store/ordenCompraStore';
import { useLoteStore } from '../store/loteStore';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { formatCurrency, getPrecioVenta } from '../utils/helpers';

export default function Reportes() {
  const { productos } = useStore();
  const ventas = useVentaStore((state) => state.ventas);
  const clientes = useClienteStore((state) => state.clientes);
  const { movimientos, cargarMovimientos, calcularStockActual } = useMovimientoStore();
  const { getOrdenesPendientes } = useOrdenCompraStore();
  const { lotes } = useLoteStore();

  // Cargar movimientos al inicio
  useEffect(() => {
    if (movimientos.length === 0) {
      cargarMovimientos();
    }
  }, [movimientos.length, cargarMovimientos]);

  // Productos con stock real calculado desde movimientos
  const productosConStockReal = useMemo(() => {
    return productos.map(producto => {
      const stockReal = calcularStockActual(producto.id);
      return {
        ...producto,
        stockActual: stockReal,
      };
    });
  }, [productos, calcularStockActual]);

  // ========== MÉTRICAS GLOBALES DEL SISTEMA ==========
  
  // Total de ventas y facturación
  const { totalVentas, totalFacturacion, promedioTicket } = useMemo(() => {
    const total = ventas.reduce((sum, v) => sum + v.total, 0);
    const promedio = ventas.length > 0 ? total / ventas.length : 0;
    return {
      totalVentas: ventas.length,
      totalFacturacion: total,
      promedioTicket: promedio,
    };
  }, [ventas]);

  // Valor total del inventario
  const valorInventario = useMemo(() => {
    return productosConStockReal.reduce((sum, p) => {
      const precioVenta = getPrecioVenta(p);
      return sum + (p.stockActual * precioVenta);
    }, 0);
  }, [productosConStockReal]);

  // Productos críticos y órdenes pendientes
  const { productosCriticos, productosSinStock, ordenesCompra } = useMemo(() => {
    const criticos = productosConStockReal.filter(p => p.stockActual < p.stockMinimo).length;
    const sinStock = productosConStockReal.filter(p => p.stockActual <= 0).length;
    const ordenesPendientes = getOrdenesPendientes();
    return {
      productosCriticos: criticos,
      productosSinStock: sinStock,
      ordenesCompra: ordenesPendientes.length,
    };
  }, [productosConStockReal, getOrdenesPendientes]);

  // Lotes próximos a vencer
  const lotesProximosVencer = useMemo(() => {
    return lotes.filter(l => l.estado === 'PROXIMO_VENCER').length;
  }, [lotes]);

  // Movimientos del sistema
  const { totalMovimientos, entradasTotal, salidasTotal } = useMemo(() => {
    const entradas = movimientos.filter(m => m.tipo === 'ENTRADA' || m.tipo === 'COMPRA').length;
    const salidas = movimientos.filter(m => m.tipo === 'SALIDA' || m.tipo === 'VENTA').length;
    return {
      totalMovimientos: movimientos.length,
      entradasTotal: entradas,
      salidasTotal: salidas,
    };
  }, [movimientos]);

  // Datos para el gráfico de stock por categoría (con stock real)
  const stockPorCategoria = useMemo(() => {
    const categoriaMap = new Map<string, { productos: number; stock: number; valor: number }>();
    
    productosConStockReal.forEach(p => {
      const categoria = p.categoria || 'Sin Categoría';
      const existing = categoriaMap.get(categoria);
      const precioVenta = getPrecioVenta(p);
      
      if (existing) {
        existing.productos += 1;
        existing.stock += p.stockActual;
        existing.valor += p.stockActual * precioVenta;
      } else {
        categoriaMap.set(categoria, {
          productos: 1,
          stock: p.stockActual,
          valor: p.stockActual * precioVenta,
        });
      }
    });

    return Array.from(categoriaMap.entries()).map(([nombre, data]) => ({
      nombre,
      ...data
    })).sort((a, b) => b.valor - a.valor);
  }, [productosConStockReal]);

  // Top productos por ventas
  const topProductosVendidos = useMemo(() => {
    const ventasPorProducto = new Map<string, { nombre: string; cantidad: number; valor: number }>();

    ventas.forEach(venta => {
      venta.items.forEach(item => {
        const producto = productos.find(p => p.id === item.productoId);
        const existing = ventasPorProducto.get(item.productoId);
        
        if (existing) {
          existing.cantidad += item.cantidad;
          existing.valor += item.subtotal;
        } else {
          ventasPorProducto.set(item.productoId, {
            nombre: producto?.nombre || `Producto ${item.productoId}`,
            cantidad: item.cantidad,
            valor: item.subtotal,
          });
        }
      });
    });

    return Array.from(ventasPorProducto.values())
      .sort((a, b) => b.valor - a.valor)
      .slice(0, 10);
  }, [ventas, productos]);

  // Productos con stock crítico o bajo (usando stock real)
  const productosAtencion = useMemo(() => {
    return productosConStockReal
      .filter(p => p.stockActual <= p.stockMinimo)
      .sort((a, b) => a.stockActual - b.stockActual)
      .slice(0, 20); // Mostrar top 20 en vez de 10 para ver más detalle
  }, [productosConStockReal]);

  // Ventas por cliente
  const ventasPorCliente = useMemo(() => {
    const ventasMap = new Map<string, { nombre: string; total: number; ventas: number }>();
    
    ventas.forEach(venta => {
      const cliente = clientes.find(c => c.id === venta.clienteId);
      const existing = ventasMap.get(venta.clienteId);
      
      if (existing) {
        existing.total += venta.total;
        existing.ventas += 1;
      } else {
        ventasMap.set(venta.clienteId, {
          nombre: cliente?.razonSocial || cliente?.nombre || `Cliente ${venta.clienteId}`,
          total: venta.total,
          ventas: 1,
        });
      }
    });

    return Array.from(ventasMap.values())
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);
  }, [ventas, clientes]);

  const COLORS = ['#f84e0d', '#fdc81e', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  const handleExportar = (reporte: string) => {
    alert(`Funcionalidad de exportación para "${reporte}" - En versión completa generará PDF`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reportes e Informes</h1>
        <p className="text-gray-600 mt-1">
          Panel de control completo del sistema • {movimientos.length} movimientos • {ventas.length} facturas
        </p>
      </div>

      {/* MÉTRICAS PRINCIPALES - KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Facturación Total */}
        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-orange-700">Facturación Total</p>
              <p className="text-3xl font-bold text-orange-900 mt-2">{formatCurrency(totalFacturacion)}</p>
              <p className="text-xs text-orange-600 mt-1">{totalVentas} facturas • Prom: {formatCurrency(promedioTicket)}</p>
            </div>
            <DollarSign className="w-10 h-10 text-orange-500 opacity-50" />
          </div>
        </Card>

        {/* Valor Inventario */}
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Valor Inventario</p>
              <p className="text-3xl font-bold text-green-900 mt-2">{formatCurrency(valorInventario)}</p>
              <p className="text-xs text-green-600 mt-1">{productos.length} productos en catálogo</p>
            </div>
            <Package className="w-10 h-10 text-green-500 opacity-50" />
          </div>
        </Card>

        {/* Productos Críticos */}
        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-red-700">Productos Críticos</p>
              <p className="text-3xl font-bold text-red-900 mt-2">{productosCriticos}</p>
              <p className="text-xs text-red-600 mt-1">{productosSinStock} sin stock • {ordenesCompra} órdenes pendientes</p>
            </div>
            <AlertTriangle className="w-10 h-10 text-red-500 opacity-50" />
          </div>
        </Card>

        {/* Clientes y Movimientos */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Sistema Activo</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">{clientes.length}</p>
              <p className="text-xs text-blue-600 mt-1">Clientes • {totalMovimientos} movimientos • {lotesProximosVencer} lotes x vencer</p>
            </div>
            <Users className="w-10 h-10 text-blue-500 opacity-50" />
          </div>
        </Card>
      </div>

      {/* RESUMEN OPERATIVO */}
      <Card className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen Operativo del Sistema</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="text-center p-3 bg-white rounded-lg">
            <ShoppingCart className="w-6 h-6 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{totalVentas}</p>
            <p className="text-xs text-gray-600">Facturas</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <Package className="w-6 h-6 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{productos.length}</p>
            <p className="text-xs text-gray-600">Productos</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <TrendingUp className="w-6 h-6 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{entradasTotal}</p>
            <p className="text-xs text-gray-600">Entradas</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <Download className="w-6 h-6 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{salidasTotal}</p>
            <p className="text-xs text-gray-600">Salidas</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <Clock className="w-6 h-6 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{ordenesCompra}</p>
            <p className="text-xs text-gray-600">Órdenes Compra</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <CheckCircle className="w-6 h-6 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{lotes.length}</p>
            <p className="text-xs text-gray-600">Lotes</p>
          </div>
        </div>
      </Card>

      {/* Reporte 1: Ventas por Cliente */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Ventas por Cliente</h2>
              <p className="text-sm text-gray-600">Top 10 clientes por monto total</p>
            </div>
          </div>
          <button
            onClick={() => handleExportar('Ventas por Cliente')}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ventasPorCliente}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Legend />
            <Bar dataKey="total" fill="#f84e0d" name="Total Ventas" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Reporte 2: Stock por Categoría */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <PieIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Stock por Categoría</h2>
                <p className="text-sm text-gray-600">Distribución del inventario</p>
              </div>
            </div>
            <button
              onClick={() => handleExportar('Stock por Categoría')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              PDF
            </button>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockPorCategoria}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="stock"
              >
                {stockPorCategoria.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4 space-y-2">
            {stockPorCategoria.map((cat, index) => (
              <div key={cat.nombre} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm font-medium">{cat.nombre}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{cat.stock} unidades</p>
                  <p className="text-xs text-gray-600">{formatCurrency(cat.valor)}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Tabla: Top 10 Productos Vendidos */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Top 10 Más Vendidos</h2>
                <p className="text-sm text-gray-600">Productos con más salidas</p>
              </div>
            </div>
            <button
              onClick={() => handleExportar('Top 10 Productos')}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              PDF
            </button>
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {topProductosVendidos.map((producto, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{producto.nombre}</p>
                  <p className="text-xs text-gray-600">{formatCurrency(producto.valor)}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-purple-600">{producto.cantidad}</p>
                  <p className="text-xs text-gray-600">vendidos</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Reporte 3: Productos que Requieren Atención */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Package className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Productos que Requieren Atención</h2>
              <p className="text-sm text-gray-600">
                {productosAtencion.length} productos con stock crítico o bajo del mínimo
              </p>
            </div>
          </div>
          <button
            onClick={() => handleExportar('Productos Críticos')}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Actual
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Mínimo
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor en Riesgo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productosAtencion.map((producto) => (
                <tr key={producto.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900">{producto.nombre}</p>
                      <p className="text-xs text-gray-500">{producto.marca}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-lg font-bold text-red-600">{producto.stockActual}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    {producto.stockMinimo}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Badge
                      className={`text-xs ${
                        producto.stockActual === 0
                          ? 'bg-red-100 text-red-800 border-red-200'
                          : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                      }`}
                    >
                      {producto.stockActual === 0 ? 'CRÍTICO' : 'BAJO'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {formatCurrency(producto.stockActual * getPrecioVenta(producto))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {productosAtencion.length === 0 && (
            <div className="text-center py-12 text-gray-500 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              No hay productos que requieran atención inmediata
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
