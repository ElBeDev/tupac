import { useState, useMemo, useEffect } from 'react';
import { TrendingUp, TrendingDown, ShoppingCart, Package, Calendar, Filter, Search } from 'lucide-react';
import { useMovimientoStore } from '../store/movimientoStore';
import { Badge } from '../components/ui/badge';
import { formatCurrency } from '../utils/helpers';

export default function Movimientos() {
  const { movimientos, cargarMovimientos } = useMovimientoStore();
  const [filtroTipo, setFiltroTipo] = useState<'TODOS' | 'ENTRADA' | 'SALIDA' | 'VENTA' | 'COMPRA'>('TODOS');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    cargarMovimientos();
  }, [cargarMovimientos]);

  const movimientosFiltrados = useMemo(() => {
    return movimientos.filter(mov => {
      if (filtroTipo !== 'TODOS' && mov.tipo !== filtroTipo) return false;
      if (busqueda) {
        const searchLower = busqueda.toLowerCase();
        const matchComprobante = mov.numeroComprobante?.toLowerCase().includes(searchLower);
        const matchEntidad = mov.entidad?.toLowerCase().includes(searchLower);
        if (!matchComprobante && !matchEntidad) return false;
      }
      return true;
    }).sort((a, b) => {
      const fechaA = `${a.fecha} ${a.hora}`;
      const fechaB = `${b.fecha} ${b.hora}`;
      return fechaB.localeCompare(fechaA);
    });
  }, [movimientos, filtroTipo, busqueda]);

  const stats = useMemo(() => {
    const totalMovimientos = movimientos.length;
    const ventas = movimientos.filter(m => m.tipo === 'VENTA').length;
    const compras = movimientos.filter(m => m.tipo === 'COMPRA').length;
    const entradas = movimientos.filter(m => m.tipo === 'ENTRADA').length;
    const salidas = movimientos.filter(m => m.tipo === 'SALIDA').length;
    const valorVentas = movimientos.filter(m => m.tipo === 'VENTA').reduce((sum, m) => sum + (m.totalValor || 0), 0);
    const valorCompras = movimientos.filter(m => m.tipo === 'COMPRA').reduce((sum, m) => sum + (m.totalValor || 0), 0);
    return { totalMovimientos, ventas, compras, entradas, salidas, valorVentas, valorCompras };
  }, [movimientos]);

  const tipoConfig = {
    VENTA: { icon: ShoppingCart, color: 'bg-blue-100 text-blue-800', label: 'Venta' },
    COMPRA: { icon: Package, color: 'bg-green-100 text-green-800', label: 'Compra' },
    ENTRADA: { icon: TrendingUp, color: 'bg-green-100 text-green-800', label: 'Entrada' },
    SALIDA: { icon: TrendingDown, color: 'bg-red-100 text-red-800', label: 'Salida' },
    AJUSTE: { icon: Package, color: 'bg-orange-100 text-orange-800', label: 'Ajuste' },
    DEVOLUCION: { icon: Package, color: 'bg-orange-100 text-orange-800', label: 'Devolución' },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Movimientos de Inventario</h1>
        <p className="text-gray-600 mt-1">Historial completo de entradas, salidas, ventas y compras</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Movimientos</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalMovimientos}</p>
              <p className="text-xs text-gray-500 mt-1">03/05/2018</p>
            </div>
            <Calendar className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ventas</p>
              <p className="text-2xl font-bold text-blue-600">{stats.ventas}</p>
              <p className="text-xs text-gray-500 mt-1">{formatCurrency(stats.valorVentas)}</p>
            </div>
            <ShoppingCart className="w-10 h-10 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Compras</p>
              <p className="text-2xl font-bold text-green-600">{stats.compras}</p>
              <p className="text-xs text-gray-500 mt-1">{formatCurrency(stats.valorCompras)}</p>
            </div>
            <Package className="w-10 h-10 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Otros</p>
              <p className="text-2xl font-bold text-orange-600">{stats.entradas + stats.salidas}</p>
              <p className="text-xs text-gray-500 mt-1">Entradas/Salidas</p>
            </div>
            <TrendingUp className="w-10 h-10 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Filtros:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Movimiento</label>
            <div className="flex flex-wrap gap-2">
              {(['TODOS', 'VENTA', 'COMPRA', 'ENTRADA', 'SALIDA'] as const).map(tipo => (
                <button
                  key={tipo}
                  onClick={() => setFiltroTipo(tipo)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filtroTipo === tipo ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tipo === 'TODOS' ? 'Todos' : tipo.charAt(0) + tipo.slice(1).toLowerCase() + 's'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por comprobante, entidad..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Movimientos ({movimientosFiltrados.length})</h2>
        </div>

        {movimientosFiltrados.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {movimientosFiltrados.map(mov => {
              const config = tipoConfig[mov.tipo] || tipoConfig.SALIDA;
              const IconoTipo = config.icon;

              return (
                <div key={mov.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${config.color} flex items-center justify-center`}>
                      <IconoTipo className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={`text-xs ${config.color}`}>{config.label}</Badge>
                            <span className="text-sm font-medium text-gray-900">{mov.tipoComprobante} {mov.numeroComprobante}</span>
                          </div>
                          <p className="text-sm text-gray-600">{mov.entidad ? `Cliente/Proveedor: ${mov.entidad}` : 'Movimiento interno'}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{mov.items?.length || 0} items</p>
                          <p className="text-lg font-bold text-gray-900">{formatCurrency(mov.totalValor || 0)}</p>
                        </div>
                      </div>

                      <div className="mt-2 space-y-1">
                        {mov.items?.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex justify-between">
                            <span>{item.productoNombre || `Producto ${item.productoId}`}: {item.cantidad}</span>
                            <span>{formatCurrency(item.subtotal)}</span>
                          </div>
                        ))}
                        {(mov.items?.length || 0) > 3 && <div className="text-xs text-gray-500 italic">+ {(mov.items?.length || 0) - 3} items más</div>}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                        <span>{mov.fecha} {mov.hora}</span>
                        <span>•</span>
                        <span>Total: {(mov.totalCantidad || 0).toFixed(2)} unidades</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">No hay movimientos con los filtros aplicados</div>
        )}
      </div>
    </div>
  );
}
