import { useState } from 'react';
import { X, Plus, Trash2, Search, Package } from 'lucide-react';
import { useProveedorStore } from '../../store/proveedorStore';
import { useStore } from '../../stores/useStore';
import type { OrdenCompra, ItemOrdenCompra } from '../../types/ordenCompra';
import type { Producto } from '../../types';

interface OrdenCompraFormProps {
  orden: OrdenCompra | null;
  onGuardar: (orden: Omit<OrdenCompra, 'id' | 'numeroOrden' | 'createdAt'>) => void;
  onCancelar: () => void;
}

export function OrdenCompraForm({ orden, onGuardar, onCancelar }: OrdenCompraFormProps) {
  const { proveedores, getProveedorById, getProveedorPrincipal } = useProveedorStore();
  const { productos } = useStore();

  const [proveedorId, setProveedorId] = useState(orden?.proveedorId || '');
  const [fechaEntrega, setFechaEntrega] = useState(orden?.fechaEntregaEstimada || '');
  const [observaciones, setObservaciones] = useState(orden?.observaciones || '');
  const [items, setItems] = useState<ItemOrdenCompra[]>(orden?.items || []);
  const [busquedaProducto, setBusquedaProducto] = useState('');
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);

  // Calcular totales
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  // Filtrar productos del proveedor
  const productosProveedor = productos.filter(p => {
    const provPrincipal = getProveedorPrincipal(p.id);
    return provPrincipal?.proveedorId === proveedorId;
  });

  const productosFiltrados = productosProveedor.filter(p => {
    if (!busquedaProducto) return true;
    const busqueda = busquedaProducto.toLowerCase();
    return (
      p.nombre.toLowerCase().includes(busqueda) ||
      p.codigoBarras.includes(busqueda)
    );
  });

  const handleAgregarItem = (producto: Producto) => {
    const yaExiste = items.find(i => i.productoId === producto.id);
    if (yaExiste) {
      setItems(items.map(i => 
        i.productoId === producto.id 
          ? { ...i, cantidadSolicitada: i.cantidadSolicitada + 1, subtotal: (i.cantidadSolicitada + 1) * i.precioUnitario }
          : i
      ));
    } else {
      const provPrincipal = getProveedorPrincipal(producto.id);
      const precio = provPrincipal?.precioCompra || producto.precioCosto;
      const cantidad = Math.max(producto.stockMinimo - producto.stockActual, 1);

      const nuevoItem: ItemOrdenCompra = {
        productoId: producto.id,
        productoNombre: producto.nombre,
        codigoBarras: producto.codigoBarras,
        cantidadSolicitada: cantidad,
        cantidadRecibida: 0,
        precioUnitario: precio || 0,
        subtotal: (precio || 0) * cantidad,
      };
      setItems([...items, nuevoItem]);
    }
    setBusquedaProducto('');
    setMostrarBusqueda(false);
  };

  const handleActualizarCantidad = (productoId: string, cantidad: number) => {
    setItems(items.map(i => 
      i.productoId === productoId 
        ? { ...i, cantidadSolicitada: cantidad, subtotal: cantidad * i.precioUnitario }
        : i
    ));
  };

  const handleActualizarPrecio = (productoId: string, precio: number) => {
    setItems(items.map(i => 
      i.productoId === productoId 
        ? { ...i, precioUnitario: precio, subtotal: i.cantidadSolicitada * precio }
        : i
    ));
  };

  const handleEliminarItem = (productoId: string) => {
    setItems(items.filter(i => i.productoId !== productoId));
  };

  const handleGuardar = () => {
    if (!proveedorId || items.length === 0) return;

    const proveedor = getProveedorById(proveedorId);
    if (!proveedor) return;

    const fechaHoy = new Date().toISOString().split('T')[0];
    const fechaEntregaFinal = fechaEntrega || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    onGuardar({
      proveedorId,
      proveedorNombre: proveedor.nombre,
      fecha: fechaHoy,
      fechaEntregaEstimada: fechaEntregaFinal,
      estado: 'Borrador',
      items,
      subtotal,
      iva,
      total,
      observaciones,
      generadaAutomaticamente: false,
      createdBy: 'Admin',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {orden ? 'Editar Orden de Compra' : 'Nueva Orden de Compra'}
          </h2>
          <button onClick={onCancelar} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Proveedor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Proveedor *
            </label>
            <select
              value={proveedorId}
              onChange={(e) => {
                setProveedorId(e.target.value);
                setItems([]);
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Seleccionar proveedor...</option>
              {proveedores.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.nombre} - {prov.ciudad}
                </option>
              ))}
            </select>
          </div>

          {/* Fecha de entrega */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha de Entrega Estimada
            </label>
            <input
              type="date"
              value={fechaEntrega}
              onChange={(e) => setFechaEntrega(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Items */}
          {proveedorId && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700">
                  Productos ({items.length})
                </label>
                <button
                  onClick={() => setMostrarBusqueda(!mostrarBusqueda)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Agregar Producto
                </button>
              </div>

              {/* Búsqueda de productos */}
              {mostrarBusqueda && (
                <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Buscar productos del proveedor..."
                      value={busquedaProducto}
                      onChange={(e) => setBusquedaProducto(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                      autoFocus
                    />
                  </div>
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {productosFiltrados.length > 0 ? (
                      productosFiltrados.slice(0, 10).map((producto) => (
                        <button
                          key={producto.id}
                          onClick={() => handleAgregarItem(producto)}
                          className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded text-left text-sm"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{producto.nombre}</p>
                            <p className="text-xs text-gray-500">Stock: {producto.stockActual} / Mínimo: {producto.stockMinimo}</p>
                          </div>
                          <span className="text-orange-600 font-semibold">${(producto.precioCosto || 0).toLocaleString()}</span>
                        </button>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        {productosProveedor.length === 0 
                          ? 'No hay productos vinculados a este proveedor'
                          : 'No se encontraron productos'}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Lista de items */}
              {items.length > 0 ? (
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.productoId} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{item.productoNombre}</p>
                        <p className="text-xs text-gray-500">{item.codigoBarras}</p>
                      </div>
                      <input
                        type="number"
                        value={item.cantidadSolicitada}
                        onChange={(e) => handleActualizarCantidad(item.productoId, parseInt(e.target.value) || 0)}
                        className="w-20 text-center border border-gray-300 rounded px-2 py-1 text-sm"
                        min="1"
                      />
                      <span className="text-xs text-gray-500">×</span>
                      <input
                        type="number"
                        value={item.precioUnitario}
                        onChange={(e) => handleActualizarPrecio(item.productoId, parseFloat(e.target.value) || 0)}
                        className="w-24 text-right border border-gray-300 rounded px-2 py-1 text-sm"
                        min="0"
                        step="0.01"
                      />
                      <span className="text-sm font-semibold text-gray-900 w-24 text-right">
                        ${item.subtotal.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleEliminarItem(item.productoId)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                  <Package className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p>No hay productos en esta orden</p>
                </div>
              )}
            </div>
          )}

          {/* Observaciones */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Observaciones
            </label>
            <textarea
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              rows={3}
              placeholder="Notas adicionales..."
            />
          </div>

          {/* Totales */}
          {items.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">IVA (21%)</span>
                <span className="font-medium">${iva.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                <span>TOTAL</span>
                <span className="text-orange-600">${total.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onCancelar}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            disabled={!proveedorId || items.length === 0}
            className="flex-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
          >
            {orden ? 'Actualizar Orden' : 'Crear Orden'}
          </button>
        </div>
      </div>
    </div>
  );
}
