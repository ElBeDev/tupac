import { ArrowLeft, BarChart3, AlertTriangle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import InventoryRotation from '../components/dashboard/InventoryRotation';
import StockAlerts from '../components/dashboard/StockAlerts';
import InventoryByCategory from '../components/dashboard/InventoryByCategory';
import { useState } from 'react';

export default function AnalisisRotacion() {
  const [vistaActiva, setVistaActiva] = useState<'rotacion' | 'alertas' | 'categorias'>('rotacion');

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
              Análisis de Rotación de Inventario
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Gestión inteligente del inventario basada en datos reales de movimientos
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setVistaActiva('rotacion')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              vistaActiva === 'rotacion'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BarChart3 className="w-4 h-4 inline-block mr-1" /> Análisis de Rotación
          </button>
          <button
            onClick={() => setVistaActiva('alertas')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              vistaActiva === 'alertas'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <AlertTriangle className="w-4 h-4 inline-block mr-1" /> Alertas de Stock
          </button>
          <button
            onClick={() => setVistaActiva('categorias')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              vistaActiva === 'categorias'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <DollarSign className="w-4 h-4 inline-block mr-1" /> Valor por Categoría
          </button>
        </div>

        <div className="p-6">
          {vistaActiva === 'rotacion' && <InventoryRotation />}
          {vistaActiva === 'alertas' && <StockAlerts />}
          {vistaActiva === 'categorias' && <InventoryByCategory />}
        </div>
      </div>
    </div>
  );
}
