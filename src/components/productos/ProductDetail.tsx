import { Package, Calendar, DollarSign, Tag, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import type { Producto, Lote, Movimiento } from '../../types';
import { formatCurrency, formatDate, getEstadoStock, getDiasHastaVencimiento, getPrecioVenta, getPrecioCosto } from '../../utils/helpers';

interface ProductDetailProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
  lotes: Lote[];
  movimientos: Movimiento[];
}

export function ProductDetail({ producto, isOpen, onClose, lotes, movimientos }: ProductDetailProps) {
  if (!producto) return null;

  const estadoStock = getEstadoStock(producto.stockActual, producto.stockMinimo);
  const lotesProducto = lotes.filter(l => l.productoId === producto.id);
  const movimientosProducto = movimientos.filter(m => m.productoId === producto.id).slice(0, 5);

  const estadoColors = {
    OK: 'bg-green-100 text-green-800',
    BAJO: 'bg-yellow-100 text-yellow-800',
    CRITICO: 'bg-red-100 text-red-800',
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent onClose={onClose} className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Detalle del Producto</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
        {/* Imagen y título */}
        <div className="flex gap-6">
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            {producto.imagenUrl ? (
              <img 
                src={producto.imagenUrl} 
                alt={producto.nombre}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Package className="w-24 h-24 text-gray-400" />
            )}
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{producto.nombre}</h2>
              <p className="text-gray-600">{producto.marca}</p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">{producto.categoriaId}</Badge>
              <Badge className={estadoColors[estadoStock]}>
                Stock {estadoStock}
              </Badge>
              {producto.perecedero && (
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Perecedero
                </Badge>
              )}
            </div>

            <p className="text-sm text-gray-600">{producto.descripcion}</p>
          </div>
        </div>

        {/* Información del producto */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-xs text-gray-600 mb-1">Código de Barras</p>
            <p className="font-mono font-semibold">{producto.codigoBarras}</p>
          </div>
          {producto.codigo && (
            <div>
              <p className="text-xs text-gray-600 mb-1">Código Interno</p>
              <p className="font-mono font-semibold">{producto.codigo}</p>
            </div>
          )}
          <div>
            <p className="text-xs text-gray-600 mb-1">Unidad de Medida</p>
            <p className="font-semibold">{producto.unidadMedida}</p>
          </div>
          {producto.familia && (
            <div>
              <p className="text-xs text-gray-600 mb-1">Familia</p>
              <p className="font-semibold">{producto.familia}</p>
            </div>
          )}
          {producto.departamento && (
            <div>
              <p className="text-xs text-gray-600 mb-1">Departamento</p>
              <p className="font-semibold">{producto.departamento}</p>
            </div>
          )}
          {producto.proveedor && (
            <div>
              <p className="text-xs text-gray-600 mb-1">Proveedor</p>
              <p className="font-semibold">{producto.proveedor}</p>
            </div>
          )}
          <div>
            <p className="text-xs text-gray-600 mb-1">Stock Actual</p>
            <p className="font-semibold text-lg">{producto.stockActual} unidades</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Stock Mínimo</p>
            <p className="font-semibold">{producto.stockMinimo}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Stock Máximo</p>
            <p className="font-semibold">{producto.stockMaximo}</p>
          </div>
        </div>

        {/* Precios */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Precios
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Costo</p>
              <p className="text-lg font-bold">{formatCurrency(getPrecioCosto(producto))}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Venta Minorista</p>
              <p className="text-lg font-bold text-orange-600">{formatCurrency(producto.precioVentaMinorista || getPrecioVenta(producto))}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Venta Mayorista</p>
              <p className="text-lg font-bold text-green-600">{formatCurrency(producto.precioVentaMayorista || getPrecioVenta(producto))}</p>
            </div>
          </div>
        </div>

        {/* Lotes */}
        {producto.perecedero && lotesProducto.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Lotes Activos ({lotesProducto.length})
            </h3>
            <div className="space-y-2">
              {lotesProducto.map(lote => {
                const diasVencimiento = getDiasHastaVencimiento(lote.fechaVencimiento);
                return (
                  <div key={lote.id} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{lote.numeroLote}</p>
                      <p className="text-sm text-gray-600">
                        Vence: {formatDate(lote.fechaVencimiento)}
                        {diasVencimiento !== null && (
                          <span className={`ml-2 ${diasVencimiento <= 3 ? 'text-red-600' : diasVencimiento <= 7 ? 'text-orange-600' : 'text-gray-600'}`}>
                            ({diasVencimiento} días)
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{lote.cantidadActual}</p>
                      <p className="text-xs text-gray-600">de {lote.cantidadInicial}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Últimos movimientos */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Últimos Movimientos
          </h3>
          <div className="space-y-2">
            {movimientosProducto.length > 0 ? (
              movimientosProducto.map(mov => (
                <div key={mov.id} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant={mov.tipo === 'ENTRADA' ? 'default' : 'secondary'}>
                        {mov.tipo}
                      </Badge>
                      <p className="text-sm font-semibold">{mov.motivo}</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {formatDate(mov.fechaMovimiento || '')} - {mov.usuario}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${mov.tipo === 'ENTRADA' ? 'text-green-600' : 'text-red-600'}`}>
                      {mov.tipo === 'ENTRADA' ? '+' : '-'}{mov.cantidad}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">No hay movimientos registrados</p>
            )}
          </div>
        </div>

        {/* Botón cerrar */}
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
