import { useState, useMemo, useEffect } from 'react';
import { Bell, AlertTriangle, Filter, CheckCircle, Archive } from 'lucide-react';
import { useAlertaStore } from '../store/alertaStore';
import { useToast } from '../components/ui/toast';
import { AlertCard } from '../components/alertas/AlertCard';

type FiltroTipo = 'TODAS' | 'STOCK_CRITICO' | 'STOCK_BAJO' | 'VENCIMIENTO_PROXIMO' | 'VENCIDO';
type FiltroPrioridad = 'TODAS' | 'CRITICA' | 'ALTA' | 'MEDIA' | 'BAJA';
type FiltroEstado = 'TODAS' | 'NO_LEIDAS' | 'LEIDAS';

export default function Alertas() {
  const { alertas, generarAlertas, marcarAlertaLeida, marcarTodasLeidas: marcarTodasLeidasStore } = useAlertaStore();
  const { showToast } = useToast();
  const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>('TODAS');
  const [filtroPrioridad, setFiltroPrioridad] = useState<FiltroPrioridad>('TODAS');
  const [filtroEstado, setFiltroEstado] = useState<FiltroEstado>('NO_LEIDAS');

  // Generar alertas al cargar - SIEMPRE regenerar para tener datos actualizados
  useEffect(() => {
    console.log('🔔 Generando alertas...');
    generarAlertas();
  }, [generarAlertas]);

  // Filtrar alertas
  const alertasFiltradas = useMemo(() => {
    return alertas.filter(alerta => {
      // Filtro por tipo
      if (filtroTipo !== 'TODAS' && alerta.tipo !== filtroTipo) return false;
      
      // Filtro por prioridad
      if (filtroPrioridad !== 'TODAS' && alerta.nivelPrioridad !== filtroPrioridad) return false;
      
      // Filtro por estado
      if (filtroEstado === 'NO_LEIDAS' && alerta.leida) return false;
      if (filtroEstado === 'LEIDAS' && !alerta.leida) return false;
      
      return true;
    }).sort((a, b) => {
      // Ordenar por prioridad y fecha
      const prioridades = { CRITICA: 4, ALTA: 3, MEDIA: 2, BAJA: 1 };
      const diffPrioridad = prioridades[b.nivelPrioridad] - prioridades[a.nivelPrioridad];
      if (diffPrioridad !== 0) return diffPrioridad;
      
      return new Date(b.fechaAlerta).getTime() - new Date(a.fechaAlerta).getTime();
    });
  }, [alertas, filtroTipo, filtroPrioridad, filtroEstado]);

  // Estadísticas
  const stats = useMemo(() => {
    const total = alertas.length;
    const noLeidas = alertas.filter(a => !a.leida).length;
    const criticas = alertas.filter(a => a.nivelPrioridad === 'CRITICA' && !a.leida).length;
    const stockCritico = alertas.filter(a => a.tipo === 'STOCK_CRITICO' && !a.leida).length;
    const vencimientos = alertas.filter(a => (a.tipo === 'VENCIMIENTO_PROXIMO' || a.tipo === 'VENCIDO') && !a.leida).length;

    return { total, noLeidas, criticas, stockCritico, vencimientos };
  }, [alertas]);

  const marcarTodasLeidas = () => {
    const alertasPorMarcar = alertasFiltradas.filter(a => !a.leida);
    if (alertasPorMarcar.length > 0) {
      marcarTodasLeidasStore();
      showToast('success', 'Alertas marcadas', `${alertasPorMarcar.length} alertas marcadas como leídas`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Alertas</h1>
          <p className="text-gray-600 mt-1">
            Notificaciones y avisos importantes del sistema
          </p>
        </div>
        <button
          onClick={marcarTodasLeidas}
          disabled={alertasFiltradas.filter(a => !a.leida).length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
        >
          <CheckCircle className="w-5 h-5" />
          Marcar todas como leídas
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Alertas</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <Bell className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">No Leídas</p>
              <p className="text-2xl font-bold text-orange-600">{stats.noLeidas}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Bell className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Críticas</p>
              <p className="text-2xl font-bold text-red-600">{stats.criticas}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stock Crítico</p>
              <p className="text-2xl font-bold text-red-600">{stats.stockCritico}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Archive className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Vencimientos</p>
              <p className="text-2xl font-bold text-orange-600">{stats.vencimientos}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Filtro por estado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estado
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setFiltroEstado('TODAS')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filtroEstado === 'TODAS'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setFiltroEstado('NO_LEIDAS')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filtroEstado === 'NO_LEIDAS'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                No leídas
              </button>
              <button
                onClick={() => setFiltroEstado('LEIDAS')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filtroEstado === 'LEIDAS'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Leídas
              </button>
            </div>
          </div>

          {/* Filtro por tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Alerta
            </label>
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value as FiltroTipo)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="TODAS">Todas</option>
              <option value="STOCK_CRITICO">Stock Crítico</option>
              <option value="STOCK_BAJO">Stock Bajo</option>
              <option value="VENCIMIENTO_PROXIMO">Vencimiento Próximo</option>
              <option value="VENCIDO">Vencido</option>
            </select>
          </div>

          {/* Filtro por prioridad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prioridad
            </label>
            <select
              value={filtroPrioridad}
              onChange={(e) => setFiltroPrioridad(e.target.value as FiltroPrioridad)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="TODAS">Todas</option>
              <option value="CRITICA">Crítica</option>
              <option value="ALTA">Alta</option>
              <option value="MEDIA">Media</option>
              <option value="BAJA">Baja</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Alertas ({alertasFiltradas.length})
          </h2>
        </div>

        {alertasFiltradas.length > 0 ? (
          <div className="space-y-3">
            {alertasFiltradas.map(alerta => (
              <AlertCard
                key={alerta.id}
                alerta={alerta}
                onMarcarLeida={marcarAlertaLeida}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {filtroEstado === 'NO_LEIDAS' 
                ? '¡Excelente! No hay alertas pendientes' 
                : 'No hay alertas con los filtros seleccionados'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
