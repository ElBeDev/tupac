import { Package, Edit, Eye, DollarSign } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Producto } from '../../types';
import { getEstadoStock, formatCurrency, getPrecioVenta, getPrecioCosto } from '../../utils/helpers';

interface ProductCardProps {
  producto: Producto;
  onView: (producto: Producto) => void;
  onEdit: (producto: Producto) => void;
  onViewPrecios?: (producto: Producto) => void;
}

export function ProductCard({ producto, onView, onEdit, onViewPrecios }: ProductCardProps) {
  const estadoStock = getEstadoStock(producto.stockActual, producto.stockMinimo);
  const precioVenta = getPrecioVenta(producto);
  const precioCosto = getPrecioCosto(producto);
  
  const estadoColors = {
    OK: 'bg-green-100 text-green-800 border-green-200',
    BAJO: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    CRITICO: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        {producto.imagenUrl ? (
          <img 
            src={producto.imagenUrl} 
            alt={producto.nombre}
            className="w-full h-full object-cover"
          />
        ) : (
          <Package className="w-16 h-16 text-gray-400" />
        )}
      </div>
      
      <div className="space-y-2">
        <div>
          <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
            {producto.nombre}
          </h3>
          <p className="text-xs text-gray-500">{producto.marca}</p>
          {producto.descripcion && producto.descripcion !== producto.nombre && (
            <p className="text-xs text-gray-600 line-clamp-1 mt-1">{producto.descripcion}</p>
          )}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">
            {producto.categoria || 'Genérica'}
          </Badge>
          {producto.unidadMedida && (
            <Badge variant="outline" className="text-xs">
              {producto.unidadMedida}
            </Badge>
          )}
          <span className={`text-xs px-2 py-1 rounded-full font-medium border ${estadoColors[estadoStock]}`}>
            {estadoStock}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1 text-xs border-t pt-2">
          <div>
            <p className="text-gray-500">Stock</p>
            <p className="font-semibold">{producto.stockActual}</p>
          </div>
          <div>
            <p className="text-gray-500">Mín</p>
            <p className="font-semibold">{producto.stockMinimo}</p>
          </div>
          <div>
            <p className="text-gray-500">Máx</p>
            <p className="font-semibold">{producto.stockMaximo}</p>
          </div>
        </div>

        <div className="pt-2 border-t space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Costo</span>
            <span className="font-semibold">{formatCurrency(precioCosto)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Precio Venta</span>
            <span className="text-base font-bold text-orange-600">
              {formatCurrency(precioVenta)}
            </span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onView(producto)}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Ver
          </button>
          <button
            onClick={() => onEdit(producto)}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Edit className="w-3.5 h-3.5" />
            Editar
          </button>
          {onViewPrecios && (
            <button
              onClick={() => onViewPrecios(producto)}
              className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              title="Ver precios"
            >
              <DollarSign className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}
