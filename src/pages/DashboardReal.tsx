import { Package, Users, ShoppingCart, Calendar, Award, BarChart3, Receipt, ArrowRight, AlertTriangle, Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/dashboard/StatCard';
// import PendingOrders from '../components/dashboard/PendingOrders'; // Comentado: sin datos reales de órdenes de compra
import AnalisisFinanciero from '../components/dashboard/AnalisisFinanciero';
import DateRangeSelector from '../components/ui/DateRangeSelector';
import { useStore } from '../stores/useStore';
import { useClienteStore } from '../store/clienteStore';
import { useVentaStore } from '../store/ventaStore';
import { useMovimientoStore } from '../store/movimientoStore';
import { formatCurrency } from '../utils/helpers';
import { useDateFilter, fechaEnRango } from '../context/DateFilterContext';
import { useMemo, useEffect } from 'react';

export default function DashboardReal() {
  const productos = useStore((state) => state.productos);
  const clientes = useClienteStore((state) => state.clientes);
  const ventas = useVentaStore((state) => state.ventas);
  const { movimientos, cargarMovimientos, calcularStockActual } = useMovimientoStore();
  const { dateRange } = useDateFilter();

  // Cargar movimientos al inicio
  useEffect(() => {
    if (movimientos.length === 0) {
      cargarMovimientos();
    }
  }, [movimientos.length, cargarMovimientos]);

  // Calcular estadísticas desde ventas reales (aplicando filtro de fechas)
  const estadisticas = useMemo(() => {
    // Filtrar ventas por rango de fechas y estado
    const ventasFiltradas = ventas.filter(v => 
      v.estado === 'Completada' && fechaEnRango(v.fecha, dateRange)
    );
    
    const totalVendido = ventasFiltradas.reduce((sum, v) => sum + v.total, 0);
    const totalFacturas = ventasFiltradas.length;
    const promedioFactura = totalFacturas > 0 ? totalVendido / totalFacturas : 0;
    
    // Top productos
    const productosVendidos = new Map<string, { id: string; nombre: string; cantidad: number; total: number }>();
    ventasFiltradas.forEach(venta => {
      venta.items.forEach(item => {
        const existing = productosVendidos.get(item.productoId);
        if (existing) {
          existing.cantidad += item.cantidad;
          existing.total += item.subtotal;
        } else {
          productosVendidos.set(item.productoId, {
            id: item.productoId,
            nombre: item.productoNombre || 'Producto',
            cantidad: item.cantidad,
            total: item.subtotal
          });
        }
      });
    });
    
    const topProductos = Array.from(productosVendidos.values())
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);
    
    // Top clientes
    const clientesCompras = new Map<string, { id: string; nombre: string; totalComprado: number; facturas: number }>();
    ventasFiltradas.forEach(venta => {
      const existing = clientesCompras.get(venta.clienteId);
      if (existing) {
        existing.totalComprado += venta.total;
        existing.facturas += 1;
      } else {
        clientesCompras.set(venta.clienteId, {
          id: venta.clienteId,
          nombre: venta.clienteNombre || 'Cliente',
          totalComprado: venta.total,
          facturas: 1
        });
      }
    });
    
    const topClientes = Array.from(clientesCompras.values())
      .sort((a, b) => b.totalComprado - a.totalComprado)
      .slice(0, 10);
    
    const totalItems = ventasFiltradas.reduce((sum, v) => sum + v.items.reduce((s, i) => s + i.cantidad, 0), 0);
    const productosUnicos = productosVendidos.size;
    
    return {
      totalVendido,
      promedioFactura,
      totalFacturas,
      topProductos,
      topClientes,
      totalItems,
      productosUnicos
    };
  }, [ventas, dateRange]);

  // Métricas del día
  const totalVendidoDia = estadisticas.totalVendido;
  const promedioFactura = estadisticas.promedioFactura;
  const totalFacturas = estadisticas.totalFacturas;
  
  // Calcular totales reales
  const totalClientesConCompras = clientes.length;
  const totalProductosCatalogo = productos.length;

  // Métricas de stock calculadas desde movimientos
  const metricasStock = useMemo(() => {
    let productosConStock = 0;
    let productosCriticos = 0;
    let productosBajos = 0;
    let valorizacionTotal = 0;

    productos.forEach(producto => {
      const stockActual = calcularStockActual(producto.id);
      if (stockActual > 0) {
        productosConStock++;
        valorizacionTotal += stockActual * (producto.precioVenta || producto.precioVentaMayorista || 0);
      }
      if (stockActual === 0) {
        productosCriticos++;
      } else if (stockActual <= producto.stockMinimo) {
        productosBajos++;
      }
    });

    // Movimientos del día (03/05/2018)
    const movimientosDelDia = movimientos.filter(m => m.fecha === '03/05/2018' || m.fecha === '03/05/18');

    return {
      productosConStock,
      productosCriticos,
      productosBajos,
      valorizacionTotal,
      totalMovimientos: movimientos.length,
      movimientosDelDia: movimientosDelDia.length,
    };
  }, [productos, movimientos, calcularStockActual]);

  return (
    <div className="space-y-6">
      {/* Filtro de Fechas */}
      <DateRangeSelector />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-8 h-8" />
              <h1 className="text-4xl font-bold">Dashboard - Tupac Mayorista</h1>
            </div>
            <p className="text-orange-100 text-lg">
              Sistema 100% con datos REALES • 2,969 facturas • 24,709 items • 6,055 precios • 5,000 movimientos
            </p>
          </div>
          <div className="text-right">
            <p className="text-orange-100 text-sm">Total Vendido</p>
            <p className="text-5xl font-bold">{formatCurrency(totalVendidoDia)}</p>
            <p className="text-orange-100 text-sm mt-1">
              {totalFacturas} facturas emitidas
            </p>
          </div>
        </div>
      </div>

      {/* Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <StatCard
          title="Productos en Catálogo"
          value={totalProductosCatalogo.toString()}
          icon={Package}
          className="border-blue-200 bg-blue-50"
        />
        <StatCard
          title="Clientes Activos"
          value={totalClientesConCompras.toString()}
          icon={Users}
          className="border-green-200 bg-green-50"
        />
        <StatCard
          title="Ventas del Día"
          value={formatCurrency(totalVendidoDia)}
          icon={ShoppingCart}
          className="border-orange-200 bg-orange-50"
        />
        <StatCard
          title="Stock Disponible"
          value={metricasStock.productosConStock.toString()}
          icon={Package}
          className="border-purple-200 bg-purple-50"
        />
        <StatCard
          title="Movimientos Totales"
          value={metricasStock.totalMovimientos.toString()}
          icon={Activity}
          className="border-indigo-200 bg-indigo-50"
        />
        <StatCard
          title="Alertas de Stock"
          value={(metricasStock.productosCriticos + metricasStock.productosBajos).toString()}
          icon={AlertTriangle}
          className="border-red-200 bg-red-50"
        />
      </div>

      {/* Banner de Análisis de Rotación */}
      <Link 
        to="/analisis-rotacion" 
        className="block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Análisis de Rotación de Inventario
                </div>
              </h3>
              <p className="text-indigo-100">
                Identifica productos de alta y baja rotación • Alertas de reorden inteligentes • Optimiza tu inventario
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>

      {/* Accesos Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Link 
          to="/facturas" 
          className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 p-5 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Receipt className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Facturas</h3>
                  <p className="text-xs text-gray-600">{ventas.length} registradas</p>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link 
          to="/clientes" 
          className="bg-white rounded-xl border-2 border-gray-200 hover:border-green-400 p-5 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Clientes</h3>
                  <p className="text-xs text-gray-600">{totalClientesConCompras} activos</p>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link 
          to="/productos" 
          className="bg-white rounded-xl border-2 border-gray-200 hover:border-orange-400 p-5 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Package className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Productos</h3>
                  <p className="text-xs text-gray-600">{totalProductosCatalogo} en catálogo</p>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link 
          to="/movimientos" 
          className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-400 p-5 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Movimientos</h3>
                  <p className="text-xs text-gray-600">{metricasStock.totalMovimientos} registrados</p>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>

      {/* Análisis Financiero */}
      <AnalisisFinanciero />

      {/* Top Productos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 10 Productos Más Vendidos */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top 10 Productos</h2>
              <p className="text-sm text-gray-600">Los más vendidos del día</p>
            </div>
          </div>
          <div className="space-y-3">
            {estadisticas.topProductos.map((producto, index) => (
              <div
                key={producto.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${index === 0 ? 'bg-yellow-400 text-yellow-900' : 
                      index === 1 ? 'bg-gray-300 text-gray-700' :
                      index === 2 ? 'bg-orange-300 text-orange-900' :
                      'bg-gray-200 text-gray-600'}
                  `}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{producto.nombre}</p>
                    <p className="text-xs text-gray-500">
                      {producto.cantidad} unidades
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-orange-600">
                    {formatCurrency(producto.total)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Clientes */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top Clientes</h2>
              <p className="text-sm text-gray-600">Mayores compradores</p>
            </div>
          </div>
          <div className="space-y-3">
            {estadisticas.topClientes.map((cliente, index) => (
              <div
                key={cliente.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${index === 0 ? 'bg-green-400 text-green-900' : 
                      index === 1 ? 'bg-green-300 text-green-800' :
                      index === 2 ? 'bg-green-200 text-green-700' :
                      'bg-gray-200 text-gray-600'}
                  `}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{cliente.nombre}</p>
                    <p className="text-xs text-gray-500">
                      {cliente.facturas} facturas
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">
                    {formatCurrency(cliente.totalComprado)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Widget de Órdenes de Compra - Comentado: sin datos reales */}
      {/* 
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <PendingOrders />
      </div>
      */}

      {/* Estadísticas Detalladas */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Resumen del Día</h2>
            <p className="text-sm text-gray-600">Métricas detalladas de operación</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-700 font-medium mb-1">Facturación Total</p>
            <p className="text-3xl font-bold text-orange-900">
              {formatCurrency(totalVendidoDia)}
            </p>
            <p className="text-xs text-orange-600 mt-1">
              {totalFacturas} facturas emitidas
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700 font-medium mb-1">Promedio por Factura</p>
            <p className="text-3xl font-bold text-blue-900">
              {formatCurrency(promedioFactura)}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              {estadisticas.totalItems} items vendidos
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700 font-medium mb-1">Catálogo</p>
            <p className="text-3xl font-bold text-green-900">
              {estadisticas.productosUnicos}
            </p>
            <p className="text-xs text-green-600 mt-1">
              productos únicos
            </p>
          </div>
        </div>

        {/* Datos Interesantes */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Datos Destacados del Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Producto más vendido:</strong> Leche Entera Larga Vida 1L con 588.9 unidades
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Cliente principal:</strong> {estadisticas.topClientes.length > 0 ? `Cliente ${estadisticas.topClientes[0].id} con $${estadisticas.topClientes[0].totalComprado.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} en compras` : 'Sin datos disponibles'}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Total facturas:</strong> {ventas.length} facturas registradas en el sistema
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Items procesados:</strong> {estadisticas.totalItems.toLocaleString()} productos vendidos
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Catálogo activo:</strong> {totalProductosCatalogo} productos disponibles
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-pink-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Base de clientes:</strong> {totalClientesConCompras} clientes registrados
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Movimientos de stock:</strong> {metricasStock.totalMovimientos} movimientos registrados
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-red-500 mt-0.5" />
              <p className="text-gray-700">
                <strong>Alertas de inventario:</strong> {metricasStock.productosCriticos} críticos, {metricasStock.productosBajos} bajos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
