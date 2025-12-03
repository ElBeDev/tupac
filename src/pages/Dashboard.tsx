import { Package, DollarSign, Users, ShoppingCart, TrendingUp, Building2, Calendar, BarChart3 } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import { useStore } from '../stores/useStore';
import { useVentaStore } from '../store/ventaStore';
import { useClienteStore } from '../store/clienteStore';
import { useProveedorStore } from '../store/proveedorStore';
import { formatCurrency, getPrecioCosto, getNombreCliente } from '../utils/helpers';

export default function Dashboard() {
  const productos = useStore((state) => state.productos);

  // Stores de datos reales
  const ventas = useVentaStore((state) => state.ventas);
  const clientes = useClienteStore((state) => state.clientes);
  const proveedores = useProveedorStore((state) => state.proveedores);
  const getTotalDeudas = useClienteStore((state) => state.getTotalDeudas);

  // =================== MÉTRICAS DEL DÍA 03/05/2018 ===================
  
  // Total vendido en el día
  const totalVendidoDia = ventas.reduce((sum, v) => sum + v.total, 0);
  
  // Cantidad de productos únicos
  const totalProductos = productos.length; // 473 productos
  
  // Valor total del inventario
  const valorTotalInventario = productos.reduce(
    (sum, p) => sum + p.stockActual * getPrecioCosto(p),
    0
  );

  // Stock bajo
  const stockBajo = productos.filter(p => p.stockActual < p.stockMinimo).length;

  // Total de clientes activos
  const totalClientes = clientes.length; // 12 clientes
  
  // Deudas totales
  const totalDeudas = getTotalDeudas();

  // Proveedores
  const totalProveedores = proveedores.length; // 9 proveedores

  // Top 5 productos más vendidos del día
  const productosVendidos = new Map<string, { nombre: string; cantidad: number; total: number }>();
  
  ventas.forEach(venta => {
    venta.items.forEach(item => {
      const producto = productos.find(p => p.id === item.productoId);
      if (producto) {
        const existing = productosVendidos.get(item.productoId);
        if (existing) {
          existing.cantidad += item.cantidad;
          existing.total += item.subtotal;
        } else {
          productosVendidos.set(item.productoId, {
            nombre: producto.nombre,
            cantidad: item.cantidad,
            total: item.subtotal,
          });
        }
      }
    });
  });

  const topProductos = Array.from(productosVendidos.values())
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  // Top 5 clientes del día
  const clientesVentas = new Map<string, { nombre: string; total: number; facturas: number }>();
  
  ventas.forEach(venta => {
    const cliente = clientes.find(c => c.id === venta.clienteId);
    if (cliente) {
      const existing = clientesVentas.get(venta.clienteId);
      if (existing) {
        existing.total += venta.total;
        existing.facturas += 1;
      } else {
        clientesVentas.set(venta.clienteId, {
          nombre: getNombreCliente(cliente),
          total: venta.total,
          facturas: 1,
        });
      }
    }
  });

  const topClientes = Array.from(clientesVentas.values())
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header con fecha */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard - Tupac Supermayorista</h1>
            <p className="text-orange-100 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Datos reales del día: 03 de Mayo de 2018
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-orange-100">Total Vendido</p>
            <p className="text-4xl font-bold">{formatCurrency(totalVendidoDia)}</p>
            <p className="text-sm text-orange-100 mt-1">{ventas.length} facturas procesadas</p>
          </div>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Productos en Catálogo"
          value={totalProductos}
          icon={Package}
          className="border-blue-200 bg-blue-50"
        />
        <StatCard
          title="Valor Total Inventario"
          value={formatCurrency(valorTotalInventario)}
          icon={DollarSign}
          className="border-green-200 bg-green-50"
        />
        <StatCard
          title="Stock Bajo"
          value={stockBajo}
          icon={TrendingUp}
          className={stockBajo > 0 ? 'border-orange-200 bg-orange-50' : 'border-gray-200'}
        />
        <StatCard
          title="Facturas Hoy"
          value={ventas.length}
          icon={ShoppingCart}
          className="border-purple-200 bg-purple-50"
        />
      </div>

      {/* Métricas de clientes y proveedores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Clientes Activos"
          value={`${totalClientes} clientes`}
          icon={Users}
          className="border-indigo-200 bg-indigo-50"
        />
        <StatCard
          title="Cuentas por Cobrar"
          value={formatCurrency(totalDeudas)}
          icon={DollarSign}
          className={totalDeudas > 0 ? 'border-red-200 bg-red-50' : 'border-gray-200'}
        />
        <StatCard
          title="Proveedores"
          value={`${totalProveedores} proveedores`}
          icon={Building2}
          className="border-teal-200 bg-teal-50"
        />
      </div>

      {/* Top Productos y Clientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 5 Productos */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top 5 Productos</h2>
              <p className="text-sm text-gray-500">Más vendidos del día</p>
            </div>
          </div>
          <div className="space-y-3">
            {topProductos.map((prod, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{prod.nombre}</p>
                    <p className="text-xs text-gray-500">{prod.cantidad.toFixed(2)} unidades</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-orange-600">{formatCurrency(prod.total)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 Clientes */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top 5 Clientes</h2>
              <p className="text-sm text-gray-500">Mayores compradores del día</p>
            </div>
          </div>
          <div className="space-y-3">
            {topClientes.map((cli, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{cli.nombre}</p>
                    <p className="text-xs text-gray-500">{cli.facturas} facturas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">{formatCurrency(cli.total)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resumen estadístico */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen Estadístico</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
            <p className="text-3xl font-bold text-orange-600">{totalProductos}</p>
            <p className="text-sm text-gray-600 mt-1">Productos</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{totalClientes}</p>
            <p className="text-sm text-gray-600 mt-1">Clientes</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{ventas.length}</p>
            <p className="text-sm text-gray-600 mt-1">Ventas</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <p className="text-3xl font-bold text-purple-600">
              {formatCurrency(totalVendidoDia / ventas.length)}
            </p>
            <p className="text-sm text-gray-600 mt-1">Promedio/Factura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

