import { useState, useMemo, useEffect } from 'react';
import { Package, TrendingUp, TrendingDown, Filter, DollarSign } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { useMovimientoStore } from '../store/movimientoStore';
import { useToast } from '../components/ui/toast';
import { StockTable } from '../components/inventario/StockTable';
import { EntradaForm } from '../components/inventario/EntradaForm';
import { SalidaForm } from '../components/inventario/SalidaForm';
import type { Producto, Movimiento, Lote } from '../types';
import { formatCurrency } from '../utils/helpers';
import { categorias } from '../data/categorias';

export default function Inventario() {
  const { productos, agregarMovimiento, agregarLote, user } = useStore();
  const { movimientos, cargarMovimientos, calcularStockActual } = useMovimientoStore();
  const { showToast } = useToast();
  const [filtroEstado, setFiltroEstado] = useState<'TODOS' | 'OK' | 'BAJO' | 'CRITICO'>('TODOS');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [productoEntrada, setProductoEntrada] = useState<Producto | null>(null);
  const [productoSalida, setProductoSalida] = useState<Producto | null>(null);

  // Cargar movimientos al inicio
  useEffect(() => {
    if (movimientos.length === 0) {
      cargarMovimientos();
    }
  }, [movimientos.length, cargarMovimientos]);

  // Calcular stock real desde movimientos para cada producto
  const productosConStockReal = useMemo(() => {
    return productos.map(producto => {
      const stockReal = calcularStockActual(producto.id);
      return {
        ...producto,
        stockActual: stockReal, // Reemplazar con stock calculado
        stockDesdeMovimientos: true,
      };
    });
  }, [productos, calcularStockActual]);

  // Filtrar productos con stock real
  const productosFiltrados = useMemo(() => {
    return productosConStockReal.filter(producto => {
      // Filtro por estado
      if (filtroEstado !== 'TODOS') {
        if (filtroEstado === 'CRITICO' && producto.stockActual > 0) return false;
        if (filtroEstado === 'BAJO' && (producto.stockActual === 0 || producto.stockActual > producto.stockMinimo)) return false;
        if (filtroEstado === 'OK' && producto.stockActual <= producto.stockMinimo) return false;
      }
      
      // Filtro por categoría
      if (categoriaFiltro && producto.categoriaId !== categoriaFiltro) return false;
      
      return true;
    });
  }, [productosConStockReal, filtroEstado, categoriaFiltro]);

  // Estadísticas con stock real calculado
  const stats = useMemo(() => {
    const totalProductos = productosConStockReal.length;
    const productosCriticos = productosConStockReal.filter(p => p.stockActual === 0).length;
    const productosBajos = productosConStockReal.filter(p => p.stockActual > 0 && p.stockActual <= p.stockMinimo).length;
    const productosOK = productosConStockReal.filter(p => p.stockActual > p.stockMinimo).length;
    const valorTotal = productosConStockReal.reduce((sum, p) => sum + (p.stockActual * (p.precioVenta || p.precioVentaMayorista || 0)), 0);

    return {
      totalProductos,
      productosCriticos,
      productosBajos,
      productosOK,
      valorTotal,
    };
  }, [productosConStockReal]);

  const handleGuardarEntrada = (movimiento: Movimiento) => {
    agregarMovimiento(movimiento);
    
    // Si es producto perecedero, crear lote
    if (movimiento.loteNumero && movimiento.fechaVencimiento && movimiento.productoId && movimiento.productoNombre && movimiento.fechaMovimiento && movimiento.cantidad) {
      const lote: Lote = {
        id: `LOTE-${Date.now()}`,
        productoId: movimiento.productoId,
        productoNombre: movimiento.productoNombre,
        numeroLote: movimiento.loteNumero,
        fechaIngreso: movimiento.fechaMovimiento,
        fechaVencimiento: movimiento.fechaVencimiento,
        cantidadInicial: movimiento.cantidad,
        cantidadActual: movimiento.cantidad,
        estado: 'ACTIVO',
      };
      agregarLote(lote);
    }
    
    showToast('success', 'Entrada registrada', `+${movimiento.cantidad} unidades de ${movimiento.productoNombre}`);
    setProductoEntrada(null);
  };

  const handleGuardarSalida = (movimiento: Movimiento) => {
    agregarMovimiento(movimiento);
    showToast('success', 'Salida registrada', `-${movimiento.cantidad} unidades de ${movimiento.productoNombre}`);
    setProductoSalida(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Control de Inventario</h1>
          <p className="text-gray-600 mt-1">
            Gestión de stock y movimientos • Stock calculado desde {movimientos.length} movimientos reales
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Productos</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProductos}</p>
            </div>
            <Package className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stock OK</p>
              <p className="text-2xl font-bold text-green-600">{stats.productosOK}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stock Bajo</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.productosBajos}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stock Crítico</p>
              <p className="text-2xl font-bold text-red-600">{stats.productosCriticos}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Package className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-lg shadow-sm text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-100">Valor Total</p>
              <p className="text-xl font-bold">{formatCurrency(stats.valorTotal)}</p>
            </div>
            <DollarSign className="w-10 h-10 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Filtros:</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFiltroEstado('TODOS')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtroEstado === 'TODOS'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Todos ({productosConStockReal.length})
          </button>
          <button
            onClick={() => setFiltroEstado('OK')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtroEstado === 'OK'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            OK ({stats.productosOK})
          </button>
          <button
            onClick={() => setFiltroEstado('BAJO')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtroEstado === 'BAJO'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Bajo ({stats.productosBajos})
          </button>
          <button
            onClick={() => setFiltroEstado('CRITICO')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtroEstado === 'CRITICO'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Crítico ({stats.productosCriticos})
          </button>
        </div>

        <div className="ml-auto min-w-[200px]">
          <select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
          >
            <option value="">Todas las categorías</option>
            {categorias.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabla de stock */}
      <StockTable
        productos={productosFiltrados}
        onEntrada={setProductoEntrada}
        onSalida={setProductoSalida}
      />

      {/* Modales */}
      <EntradaForm
        producto={productoEntrada}
        isOpen={!!productoEntrada}
        onClose={() => setProductoEntrada(null)}
        onGuardar={handleGuardarEntrada}
        usuario={user?.nombre || 'Sistema'}
      />

      <SalidaForm
        producto={productoSalida}
        isOpen={!!productoSalida}
        onClose={() => setProductoSalida(null)}
        onGuardar={handleGuardarSalida}
        usuario={user?.nombre || 'Sistema'}
      />
    </div>
  );
}
