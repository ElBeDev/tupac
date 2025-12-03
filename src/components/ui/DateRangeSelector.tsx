import { Calendar, X } from 'lucide-react';
import { useDateFilter } from '../../context/DateFilterContext';
import type { DatePreset } from '../../context/DateFilterContext';

export default function DateRangeSelector() {
  const { preset, dateRange, setPreset, setCustomRange, resetFilter } = useDateFilter();

  const presetButtons: { value: DatePreset; label: string }[] = [
    { value: 'hoy', label: 'Hoy' },
    { value: 'semana', label: 'Última Semana' },
    { value: 'mes', label: 'Último Mes' },
    { value: 'año', label: 'Último Año' },
  ];

  const handleCustomDateChange = (campo: 'desde' | 'hasta', valor: string) => {
    if (campo === 'desde') {
      setCustomRange(valor, dateRange.hasta);
    } else {
      setCustomRange(dateRange.desde, valor);
    }
  };

  const formatearFecha = (fecha: string) => {
    if (!fecha) return '';
    const [año, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${año}`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-900">Filtro de Fechas</h3>
        </div>
        <button
          onClick={resetFilter}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          title="Restablecer filtro"
        >
          <X className="w-4 h-4" />
          Limpiar
        </button>
      </div>

      {/* Botones de Preset */}
      <div className="flex flex-wrap gap-2 mb-4">
        {presetButtons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setPreset(btn.value)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                preset === btn.value
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Selector Personalizado */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-600 mb-2">Rango Personalizado</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Desde</label>
            <input
              type="date"
              value={dateRange.desde}
              onChange={(e) => handleCustomDateChange('desde', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Hasta</label>
            <input
              type="date"
              value={dateRange.hasta}
              onChange={(e) => handleCustomDateChange('hasta', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Rango Activo */}
      {dateRange.desde && dateRange.hasta && (
        <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
          <p className="text-sm text-indigo-800">
            <span className="font-medium">Rango activo:</span>{' '}
            {formatearFecha(dateRange.desde)} - {formatearFecha(dateRange.hasta)}
          </p>
        </div>
      )}
    </div>
  );
}
