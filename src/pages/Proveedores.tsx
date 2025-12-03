import { useState, useMemo } from 'react';
import { PackageSearch, Search, Star, TrendingUp, Users } from 'lucide-react';
import { useProveedorStore } from '../store/proveedorStore';
import { ProveedorCard } from '../components/proveedores/ProveedorCard';
import { ProveedorDetalle } from '../components/proveedores/ProveedorDetalle';
import { Input } from '../components/ui/input';
import type { Proveedor } from '../types/proveedor';

export default function Proveedores() {
  const { proveedores } = useProveedorStore();
  const [busqueda, setBusqueda] = useState('');
  const [proveedorDetalle, setProveedorDetalle] = useState<Proveedor | null>(null);

  // Filtrar proveedores
  const proveedoresFiltrados = useMemo(() => {
    if (busqueda === '') return proveedores;
    
    return proveedores.filter(proveedor =>
      proveedor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      proveedor.cuit.includes(busqueda) ||
      proveedor.contacto.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [proveedores, busqueda]);

  // Calcular estadísticas
  const totalProveedores = proveedores.length;
  const proveedoresConDeuda = proveedores.filter(p => (p.saldoDeuda || 0) > 0).length;
  const calificacionPromedio = proveedores.reduce((sum, p) => sum + p.calificacion, 0) / proveedores.length || 0;

  const handleVerDetalle = (proveedor: Proveedor) => {
    setProveedorDetalle(proveedor);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <PackageSearch className="h-8 w-8 text-primary" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Proveedores</h1>
          <p className="text-gray-500 mt-1">Códigos de proveedores del CSV</p>
        </div>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Proveedores</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{totalProveedores}</p>
            </div>
            <Users className="w-12 h-12 text-orange-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Con Deuda Pendiente</p>
              <p className="text-3xl font-bold text-red-600 mt-1">{proveedoresConDeuda}</p>
            </div>
            <TrendingUp className="w-12 h-12 text-red-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Calificación Promedio</p>
              <p className="text-3xl font-bold text-yellow-600 mt-1">{calificacionPromedio.toFixed(1)} ⭐</p>
            </div>
            <Star className="w-12 h-12 text-yellow-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Búsqueda */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar por nombre, CUIT o contacto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Listado de proveedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proveedoresFiltrados.map(proveedor => (
          <ProveedorCard
            key={proveedor.id}
            proveedor={proveedor}
            onVerDetalle={handleVerDetalle}
          />
        ))}
      </div>

      {proveedoresFiltrados.length === 0 && (
        <div className="text-center py-12">
          <PackageSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron proveedores</h3>
          <p className="text-gray-600">
            {busqueda ? 'Intenta con otro término de búsqueda' : 'No hay proveedores en el CSV'}
          </p>
        </div>
      )}

      {/* Modal de Detalle */}
      {proveedorDetalle && (
        <ProveedorDetalle
          proveedor={proveedorDetalle}
          onCerrar={() => setProveedorDetalle(null)}
        />
      )}
    </div>
  );
}
