import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type DatePreset = 'hoy' | 'semana' | 'mes' | 'año' | 'personalizado';

export interface DateRange {
  desde: string; // YYYY-MM-DD
  hasta: string; // YYYY-MM-DD
}

interface DateFilterContextType {
  preset: DatePreset;
  dateRange: DateRange;
  setPreset: (preset: DatePreset) => void;
  setCustomRange: (desde: string, hasta: string) => void;
  resetFilter: () => void;
}

const DateFilterContext = createContext<DateFilterContextType | undefined>(undefined);

// Función helper para calcular rangos de fechas
const calcularRango = (preset: DatePreset): DateRange => {
  const hoy = new Date();
  let desde: Date;
  let hasta: Date = hoy;

  switch (preset) {
    case 'hoy':
      desde = hoy;
      break;
    case 'semana':
      desde = new Date(hoy);
      desde.setDate(hoy.getDate() - 7);
      break;
    case 'mes':
      desde = new Date(hoy);
      desde.setMonth(hoy.getMonth() - 1);
      break;
    case 'año':
      desde = new Date(hoy);
      desde.setFullYear(hoy.getFullYear() - 1);
      break;
    default:
      // Para personalizado, mantener el rango actual
      return { desde: '', hasta: '' };
  }

  return {
    desde: desde.toISOString().split('T')[0],
    hasta: hasta.toISOString().split('T')[0],
  };
};

// Cargar preferencia guardada
const cargarPreferencia = () => {
  try {
    const saved = localStorage.getItem('dateFilterPreference');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error al cargar preferencia de filtro:', error);
  }
  return null;
};

// Guardar preferencia
const guardarPreferencia = (preset: DatePreset, dateRange: DateRange) => {
  try {
    localStorage.setItem(
      'dateFilterPreference',
      JSON.stringify({ preset, dateRange })
    );
  } catch (error) {
    console.error('Error al guardar preferencia de filtro:', error);
  }
};

interface DateFilterProviderProps {
  children: ReactNode;
}

export function DateFilterProvider({ children }: DateFilterProviderProps) {
  // Cargar preferencia guardada o usar 'mes' por defecto
  const preferencia = cargarPreferencia();
  const presetInicial = preferencia?.preset || 'mes';
  const rangoInicial = preferencia?.dateRange || calcularRango('mes');

  const [preset, setPresetState] = useState<DatePreset>(presetInicial);
  const [dateRange, setDateRange] = useState<DateRange>(rangoInicial);

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    guardarPreferencia(preset, dateRange);
  }, [preset, dateRange]);

  const setPreset = (nuevoPreset: DatePreset) => {
    setPresetState(nuevoPreset);
    if (nuevoPreset !== 'personalizado') {
      const nuevoRango = calcularRango(nuevoPreset);
      setDateRange(nuevoRango);
    }
  };

  const setCustomRange = (desde: string, hasta: string) => {
    setPresetState('personalizado');
    setDateRange({ desde, hasta });
  };

  const resetFilter = () => {
    setPresetState('mes');
    setDateRange(calcularRango('mes'));
  };

  return (
    <DateFilterContext.Provider
      value={{
        preset,
        dateRange,
        setPreset,
        setCustomRange,
        resetFilter,
      }}
    >
      {children}
    </DateFilterContext.Provider>
  );
}

export function useDateFilter() {
  const context = useContext(DateFilterContext);
  if (!context) {
    throw new Error('useDateFilter debe usarse dentro de DateFilterProvider');
  }
  return context;
}

// Función helper para verificar si una fecha está dentro del rango
export function fechaEnRango(fecha: string, rango: DateRange): boolean {
  if (!rango.desde || !rango.hasta) return true; // Si no hay filtro, incluir todo
  
  // Normalizar formato de fecha (DD/MM/YY o DD/MM/YYYY a YYYY-MM-DD)
  let fechaNormalizada = fecha;
  if (fecha.includes('/')) {
    const partes = fecha.split('/');
    if (partes.length === 3) {
      let [dia, mes, año] = partes;
      // Si el año es de 2 dígitos, convertir a 4
      if (año.length === 2) {
        año = parseInt(año) > 50 ? `19${año}` : `20${año}`;
      }
      fechaNormalizada = `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    }
  }
  
  return fechaNormalizada >= rango.desde && fechaNormalizada <= rango.hasta;
}
