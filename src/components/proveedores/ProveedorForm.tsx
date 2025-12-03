import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import type { Proveedor } from '../../types/proveedor';

interface ProveedorFormProps {
  proveedor: Proveedor | null;
  onGuardar: (proveedor: Proveedor) => void;
  onCancelar: () => void;
}

export function ProveedorForm({ proveedor, onGuardar, onCancelar }: ProveedorFormProps) {
  const [formData, setFormData] = useState<Partial<Proveedor>>({
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
    categorias: [],
    calificacion: 3,
    diasPago: 30,
    saldoDeuda: 0,
    limiteCredito: 0,
    activo: true,
    notas: '',
  });

  useEffect(() => {
    if (proveedor) {
      setFormData(proveedor);
    }
  }, [proveedor]);

  const handleChange = (field: keyof Proveedor, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const proveedorCompleto: Proveedor = {
      id: proveedor?.id || `prov-${Date.now()}`,
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
      categorias: formData.categorias || [],
      calificacion: formData.calificacion || 3,
      diasPago: formData.diasPago || 30,
      saldoDeuda: formData.saldoDeuda || 0,
      limiteCredito: formData.limiteCredito || 0,
      activo: formData.activo !== undefined ? formData.activo : true,
      notas: formData.notas || '',
      fechaAlta: proveedor?.fechaAlta || new Date().toISOString().split('T')[0],
    };

    onGuardar(proveedorCompleto);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {proveedor ? 'Editar Proveedor' : 'Nuevo Proveedor'}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre / Razón Social *
              </label>
              <Input
                value={formData.nombre}
                onChange={(e) => handleChange('nombre', e.target.value)}
                required
                placeholder="Ej: Arcor S.A."
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
                placeholder="Calle, número, ciudad"
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
                placeholder="contacto@proveedor.com"
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
                Calificación (1-5)
              </label>
              <select
                value={formData.calificacion}
                onChange={(e) => handleChange('calificacion', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value={1}>⭐ 1 estrella</option>
                <option value={2}>⭐⭐ 2 estrellas</option>
                <option value={3}>⭐⭐⭐ 3 estrellas</option>
                <option value={4}>⭐⭐⭐⭐ 4 estrellas</option>
                <option value={5}>⭐⭐⭐⭐⭐ 5 estrellas</option>
              </select>
            </div>
          </div>

          {/* Información comercial */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Comercial</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  Días de Pago Promedio
                </label>
                <Input
                  type="number"
                  value={formData.diasPago}
                  onChange={(e) => handleChange('diasPago', parseInt(e.target.value) || 30)}
                  min={0}
                  placeholder="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Saldo Deuda ($)
                </label>
                <Input
                  type="number"
                  value={formData.saldoDeuda}
                  onChange={(e) => handleChange('saldoDeuda', parseFloat(e.target.value) || 0)}
                  min={0}
                  placeholder="0"
                />
              </div>
            </div>
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
              {proveedor ? 'Actualizar' : 'Crear'} Proveedor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
