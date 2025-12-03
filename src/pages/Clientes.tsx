import { useState, useMemo } from 'react';
import { Users, Search } from 'lucide-react';
import { useClienteStore } from '../store/clienteStore';
import { ClienteCard } from '../components/clientes/ClienteCard';
import { ClienteDetalle } from '../components/clientes/ClienteDetalle';
import { Input } from '../components/ui/input';
import type { Cliente } from '../types/cliente';

export default function Clientes() {
  const { clientes } = useClienteStore();
  const [busqueda, setBusqueda] = useState('');
  const [clienteDetalle, setClienteDetalle] = useState<Cliente | null>(null);

  const clientesFiltrados = useMemo(() => {
    if (!busqueda) return clientes;
    return clientes.filter(cliente =>
      cliente.razonSocial.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.id.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [clientes, busqueda]);

  const totalClientes = clientes.length;
  const totalComprado = clientes.reduce((sum, c) => sum + (c.totalComprado || 0), 0);

  const handleVerDetalle = (cliente: Cliente) => {
    setClienteDetalle(cliente);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="h-8 w-8 text-primary" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
          <p className="text-gray-500 mt-1">Códigos de clientes del CSV</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Clientes</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{totalClientes}</p>
            </div>
            <Users className="w-12 h-12 text-orange-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Comprado (CSV)</p>
              <p className="text-3xl font-bold text-orange-600 mt-1">${totalComprado.toLocaleString()}</p>
            </div>
            <Users className="w-12 h-12 text-orange-500 opacity-20" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar por código o nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientesFiltrados.map(cliente => (
          <ClienteCard
            key={cliente.id}
            cliente={cliente}
            onVerDetalle={handleVerDetalle}
          />
        ))}
      </div>

      {clientesFiltrados.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron clientes</h3>
          <p className="text-gray-600">
            {busqueda ? 'Intenta con otro término de búsqueda' : 'No hay clientes en el CSV'}
          </p>
        </div>
      )}

      {clienteDetalle && (
        <ClienteDetalle
          cliente={clienteDetalle}
          onCerrar={() => setClienteDetalle(null)}
        />
      )}
    </div>
  );
}
