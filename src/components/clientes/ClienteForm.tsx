import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import type { Cliente, CategoriaCliente } from '../../types/cliente';

interface ClienteFormProps {
  cliente: Cliente | null;
  onGuardar: (cliente: Cliente) => void;
  onCancelar: () => void;
}

export function ClienteForm({ cliente, onGuardar, onCancelar }: ClienteFormProps) {
  const [formData, setFormData] = useState<Partial<Cliente>>({
    nombre: '',
    razonSocial: '',
    cuit: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    codigoPostal: '',
    telefono: '',
    email: '',
    contacto: '',
    categoria: 'Regular',
    limiteCredito: 0,
    saldoDeuda: 0,
    diasCredito: 30,
    descuento: 0,
    listaPrecio: 'Mayorista',
    activo: true,
    notas: '',
  });

  useEffect(() => {
    if (cliente) {
      setFormData(cliente);
    }
  }, [cliente]);

  const handleChange = (field: keyof Cliente, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const clienteCompleto: Cliente = {
      id: cliente?.id || `cli-${Date.now()}`,
      nombre: formData.nombre || '',
      razonSocial: formData.razonSocial || formData.nombre || '',
      cuit: formData.cuit || '',
      direccion: formData.direccion || '',
      ciudad: formData.ciudad || '',
      provincia: formData.provincia || '',
      codigoPostal: formData.codigoPostal || '',
      telefono: formData.telefono || '',
      email: formData.email || '',
      contacto: formData.contacto || '',
      categoria: formData.categoria as CategoriaCliente || 'Regular',
      limiteCredito: formData.limiteCredito || 0,
      saldoDeuda: formData.saldoDeuda || 0,
      diasCredito: formData.diasCredito || 30,
      descuento: formData.descuento || 0,
      listaPrecio: formData.listaPrecio || 'Mayorista',
      activo: formData.activo !== undefined ? formData.activo : true,
      notas: formData.notas || '',
      fechaAlta: cliente?.fechaAlta || new Date().toISOString().split('T')[0],
      totalComprado: cliente?.totalComprado || 0,
    };

    onGuardar(clienteCompleto);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {cliente ? 'Editar Cliente' : 'Nuevo Cliente'}
          </h2>
          <button
            onClick={onCancelar}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Información básica */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Básica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre / Razón Social *
                </label>
                <Input
                  value={formData.nombre}
                  onChange={(e) => handleChange('nombre', e.target.value)}
                  required
                  placeholder="Ej: Almacén Don José"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CUIT *
                </label>
                <Input
                  value={formData.cuit}
                  onChange={(e) => handleChange('cuit', e.target.value)}
                  required
                  placeholder="20-12345678-9"
                  maxLength={13}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección
                </label>
                <Input
                  value={formData.direccion}
                  onChange={(e) => handleChange('direccion', e.target.value)}
                  placeholder="Calle y número"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad
                </label>
                <Input
                  value={formData.ciudad}
                  onChange={(e) => handleChange('ciudad', e.target.value)}
                  placeholder="Ciudad"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provincia
                </label>
                <Input
                  value={formData.provincia}
                  onChange={(e) => handleChange('provincia', e.target.value)}
                  placeholder="Provincia"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <Input
                  value={formData.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  placeholder="(011) 1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="contacto@cliente.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Persona de Contacto
                </label>
                <Input
                  value={formData.contacto}
                  onChange={(e) => handleChange('contacto', e.target.value)}
                  placeholder="Nombre del contacto"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <select
                  value={formData.categoria}
                  onChange={(e) => handleChange('categoria', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="VIP">VIP</option>
                  <option value="Regular">Regular</option>
                  <option value="Nuevo">Nuevo</option>
                  <option value="Moroso">Moroso</option>
                </select>
              </div>
            </div>
          </div>

          {/* Información comercial */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Comercial</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Límite de Crédito ($)
                </label>
                <Input
                  type="number"
                  value={formData.limiteCredito}
                  onChange={(e) => handleChange('limiteCredito', parseFloat(e.target.value) || 0)}
                  min={0}
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Días de Crédito
                </label>
                <Input
                  type="number"
                  value={formData.diasCredito}
                  onChange={(e) => handleChange('diasCredito', parseInt(e.target.value) || 30)}
                  min={0}
                  placeholder="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descuento General (%)
                </label>
                <Input
                  type="number"
                  value={formData.descuento}
                  onChange={(e) => handleChange('descuento', parseFloat(e.target.value) || 0)}
                  min={0}
                  max={100}
                  step={0.5}
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lista de Precios
                </label>
                <select
                  value={formData.listaPrecio}
                  onChange={(e) => handleChange('listaPrecio', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Mayorista">Mayorista</option>
                  <option value="Minorista">Minorista</option>
                  <option value="Distribuidor">Distribuidor</option>
                </select>
              </div>

              {cliente && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Saldo Deuda Actual ($)
                  </label>
                  <Input
                    type="number"
                    value={formData.saldoDeuda}
                    onChange={(e) => handleChange('saldoDeuda', parseFloat(e.target.value) || 0)}
                    min={0}
                    placeholder="0"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Notas */}
          <div className="border-t border-gray-200 pt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notas / Observaciones
            </label>
            <textarea
              value={formData.notas}
              onChange={(e) => handleChange('notas', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Información adicional sobre el cliente..."
            />
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancelar}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
            >
              {cliente ? 'Actualizar' : 'Crear'} Cliente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
