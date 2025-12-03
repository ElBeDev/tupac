import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import type { Producto } from '../../types';
import { categorias } from '../../data/categorias';

interface ProductFormProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (producto: Producto) => void;
}

export function ProductForm({ producto, isOpen, onClose, onSave }: ProductFormProps) {
  const [formData, setFormData] = useState<Partial<Producto>>({
    codigoBarras: '',
    nombre: '',
    descripcion: '',
    categoriaId: '',
    marca: '',
    unidadMedida: 'UNIDAD',
    precioCosto: 0,
    precioVentaMinorista: 0,
    precioVentaMayorista: 0,
    stockActual: 0,
    stockMinimo: 0,
    stockMaximo: 0,
    ubicacionDeposito: '',
    imagenUrl: '',
    perecedero: false,
  });

  useEffect(() => {
    if (producto) {
      setFormData(producto);
    } else {
      setFormData({
        codigoBarras: '',
        nombre: '',
        descripcion: '',
        categoriaId: '',
        marca: '',
        unidadMedida: 'UNIDAD',
        precioCosto: 0,
        precioVentaMinorista: 0,
        precioVentaMayorista: 0,
        stockActual: 0,
        stockMinimo: 0,
        stockMaximo: 0,
        ubicacionDeposito: '',
        imagenUrl: '',
        perecedero: false,
      });
    }
  }, [producto, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productoGuardar: Producto = {
      id: producto?.id || `PROD-${Date.now()}`,
      codigoBarras: formData.codigoBarras || '',
      nombre: formData.nombre || '',
      descripcion: formData.descripcion || '',
      categoriaId: formData.categoriaId || '',
      marca: formData.marca || '',
      unidadMedida: formData.unidadMedida || 'UNIDAD',
      precioCosto: Number(formData.precioCosto) || 0,
      precioVentaMinorista: Number(formData.precioVentaMinorista) || 0,
      precioVentaMayorista: Number(formData.precioVentaMayorista) || 0,
      stockActual: Number(formData.stockActual) || 0,
      stockMinimo: Number(formData.stockMinimo) || 0,
      stockMaximo: Number(formData.stockMaximo) || 0,
      ubicacionDeposito: formData.ubicacionDeposito || '',
      imagenUrl: formData.imagenUrl || '',
      perecedero: formData.perecedero || false,
    };

    onSave(productoGuardar);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent onClose={onClose} className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{producto ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Producto *
            </label>
            <Input
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder="Ej: Aceite Cocinero 1.5L"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Código de Barras *
            </label>
            <Input
              value={formData.codigoBarras}
              onChange={(e) => setFormData({ ...formData, codigoBarras: e.target.value })}
              placeholder="7790001234567"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Marca *
            </label>
            <Input
              value={formData.marca}
              onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
              placeholder="Ej: Cocinero"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoría *
            </label>
            <select
              value={formData.categoriaId}
              onChange={(e) => setFormData({ ...formData, categoriaId: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            >
              <option value="">Seleccionar...</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Unidad de Medida
            </label>
            <select
              value={formData.unidadMedida}
              onChange={(e) => setFormData({ ...formData, unidadMedida: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="UNIDAD">Unidad</option>
              <option value="CAJA">Caja</option>
              <option value="PACK">Pack</option>
              <option value="KG">Kilogramo</option>
              <option value="LITRO">Litro</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              placeholder="Descripción detallada del producto"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio Costo ($) *
            </label>
            <Input
              type="number"
              step="0.01"
              value={formData.precioCosto}
              onChange={(e) => setFormData({ ...formData, precioCosto: parseFloat(e.target.value) })}
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio Venta Minorista ($) *
            </label>
            <Input
              type="number"
              step="0.01"
              value={formData.precioVentaMinorista}
              onChange={(e) => setFormData({ ...formData, precioVentaMinorista: parseFloat(e.target.value) })}
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio Venta Mayorista ($) *
            </label>
            <Input
              type="number"
              step="0.01"
              value={formData.precioVentaMayorista}
              onChange={(e) => setFormData({ ...formData, precioVentaMayorista: parseFloat(e.target.value) })}
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Actual *
            </label>
            <Input
              type="number"
              value={formData.stockActual}
              onChange={(e) => setFormData({ ...formData, stockActual: parseInt(e.target.value) })}
              placeholder="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Mínimo *
            </label>
            <Input
              type="number"
              value={formData.stockMinimo}
              onChange={(e) => setFormData({ ...formData, stockMinimo: parseInt(e.target.value) })}
              placeholder="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Máximo *
            </label>
            <Input
              type="number"
              value={formData.stockMaximo}
              onChange={(e) => setFormData({ ...formData, stockMaximo: parseInt(e.target.value) })}
              placeholder="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ubicación en Depósito
            </label>
            <Input
              value={formData.ubicacionDeposito}
              onChange={(e) => setFormData({ ...formData, ubicacionDeposito: e.target.value })}
              placeholder="Ej: Estante A-3"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL de Imagen
            </label>
            <Input
              value={formData.imagenUrl}
              onChange={(e) => setFormData({ ...formData, imagenUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div className="col-span-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.perecedero}
                onChange={(e) => setFormData({ ...formData, perecedero: e.target.checked })}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Producto Perecedero (requiere control de lotes y vencimientos)
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition-colors"
          >
            {producto ? 'Actualizar' : 'Crear'} Producto
          </button>
        </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
