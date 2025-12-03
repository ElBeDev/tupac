import { useState, useMemo, useEffect } from 'react';
import { Package, Calendar, AlertTriangle, Filter } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { useLoteStore } from '../store/loteStore';
import { Badge } from '../components/ui/badge';
import { formatDate, getDiasHastaVencimiento } from '../utils/helpers';
import { categorias } from '../data/categorias';

export default function Lotes() {
  const { productos } = useStore();
  const { lotes, cargarLotes } = useLoteStore();
  const [filtroUrgencia, setFiltroUrgencia] = useState<'TODOS' | 'HOY' | '3_DIAS' | '7_DIAS' | '15_DIAS'>('TODOS');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  // Cargar lotes al inicio
  useEffect(() => {
    if (lotes.length === 0) {
      cargarLotes();
    }
  }, [lotes.length, cargarLotes]);

  // Filtrar lotes
  const lotesFiltrados = useMemo(() => {
    return lotes.filter(lote => {
      // Solo lotes activos
      if (lote.estado !== 'ACTIVO') return false;

      const diasVencimiento = getDiasHastaVencimiento(lote.fechaVencimiento);
      
      // Filtro por urgencia
      if (filtroUrgencia !== 'TODOS') {
        if (filtroUrgencia === 'HOY' && diasVencimiento !== 0) return false;
        if (filtroUrgencia === '3_DIAS' && (diasVencimiento < 0 || diasVencimiento > 3)) return false;
        if (filtroUrgencia === '7_DIAS' && (diasVencimiento < 0 || diasVencimiento > 7)) return false;
        if (filtroUrgencia === '15_DIAS' && (diasVencimiento < 0 || diasVencimiento > 15)) return false;
      }

      // Filtro por categoría del producto
      if (categoriaFiltro) {
        const producto = productos.find(p => p.id === lote.productoId);
        if (!producto || producto.categoriaId !== categoriaFiltro) return false;
      }

      return true;
    }).sort((a, b) => {
      // Ordenar por fecha de vencimiento (más próximos primero)
      return new Date(a.fechaVencimiento).getTime() - new Date(b.fechaVencimiento).getTime();
    });
  }, [lotes, filtroUrgencia, categoriaFiltro, productos]);

  // Estadísticas
  const stats = useMemo(() => {
    const lotesActivos = lotes.filter(l => l.estado === 'ACTIVO');
    const totalLotes = lotesActivos.length;
    const vencenHoy = lotesActivos.filter(l => getDiasHastaVencimiento(l.fechaVencimiento) === 0).length;
    const vencen3Dias = lotesActivos.filter(l => {
      const dias = getDiasHastaVencimiento(l.fechaVencimiento);
      return dias >= 0 && dias <= 3;
    }).length;
    const vencen7Dias = lotesActivos.filter(l => {
      const dias = getDiasHastaVencimiento(l.fechaVencimiento);
      return dias >= 0 && dias <= 7;
    }).length;
    const vencen15Dias = lotesActivos.filter(l => {
      const dias = getDiasHastaVencimiento(l.fechaVencimiento);
      return dias >= 0 && dias <= 15;
    }).length;

    return { totalLotes, vencenHoy, vencen3Dias, vencen7Dias, vencen15Dias };
  }, [lotes]);

  const getUrgenciaColor = (dias: number) => {
    if (dias < 0) return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
    if (dias === 0) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' };
    if (dias <= 3) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' };
    if (dias <= 7) return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' };
    if (dias <= 15) return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
    return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Lotes y Vencimientos</h1>
        <p className="text-gray-600 mt-1">
          Control de lotes y fechas de vencimiento • {lotes.length} lotes con vencimiento desde CSV
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Lotes</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalLotes}</p>
            </div>
            <Package className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Vencen Hoy</p>
              <p className="text-2xl font-bold text-red-600">{stats.vencenHoy}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">≤ 3 Días</p>
              <p className="text-2xl font-bold text-red-600">{stats.vencen3Dias}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">≤ 7 Días</p>
              <p className="text-2xl font-bold text-orange-600">{stats.vencen7Dias}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">≤ 15 Días</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.vencen15Dias}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Filtros:</span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setFiltroUrgencia('TODOS')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtroUrgencia === 'TODOS'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFiltroUrgencia('HOY')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtroUrgencia === 'HOY'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hoy ({stats.vencenHoy})
            </button>
            <button
              onClick={() => setFiltroUrgencia('3_DIAS')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtroUrgencia === '3_DIAS'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ≤ 3 días ({stats.vencen3Dias})
            </button>
            <button
              onClick={() => setFiltroUrgencia('7_DIAS')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtroUrgencia === '7_DIAS'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ≤ 7 días ({stats.vencen7Dias})
            </button>
            <button
              onClick={() => setFiltroUrgencia('15_DIAS')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtroUrgencia === '15_DIAS'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ≤ 15 días ({stats.vencen15Dias})
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
      </div>

      {/* Tabla de lotes */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Número de Lote
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Ingreso
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Vencimiento
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Días Restantes
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Actual
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {lotesFiltrados.map((lote) => {
                const diasVencimiento = getDiasHastaVencimiento(lote.fechaVencimiento);
                const colorUrgencia = getUrgenciaColor(diasVencimiento);
                const producto = productos.find(p => p.id === lote.productoId);

                return (
                  <tr key={lote.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{lote.productoNombre}</p>
                        {producto && (
                          <p className="text-xs text-gray-500">{producto.marca}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-mono text-sm font-semibold">{lote.numeroLote}</span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {formatDate(lote.fechaIngreso)}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {formatDate(lote.fechaVencimiento)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${colorUrgencia.bg} ${colorUrgencia.text} ${colorUrgencia.border}`}>
                        {diasVencimiento < 0 ? 'Vencido' : diasVencimiento === 0 ? 'HOY' : `${diasVencimiento} días`}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div>
                        <p className="text-lg font-bold">{lote.cantidadActual}</p>
                        <p className="text-xs text-gray-500">de {lote.cantidadInicial}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant="secondary" className="text-xs">
                        {lote.estado}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {lotesFiltrados.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No hay lotes con los filtros aplicados
          </div>
        )}
      </div>
    </div>
  );
}
