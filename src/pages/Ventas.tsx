import { useState, useMemo } from 'react';
import { ShoppingCart, Plus, Search, Receipt, DollarSign, Package } from 'lucide-react';
import { useVentaStore } from '../store/ventaStore';
import { useClienteStore } from '../store/clienteStore';
import { useStore } from '../stores/useStore';
import { useToast } from '../components/ui/toast';
import { ClienteSelector } from '../components/ventas/ClienteSelector';
import { CarritoItem } from '../components/ventas/CarritoItem';
import { MetodoPagoSelector } from '../components/ventas/MetodoPagoSelector';
import { ResumenVenta } from '../components/ventas/ResumenVenta';
import { Input } from '../components/ui/input';
import type { MetodoPago, TipoFactura } from '../types/venta';
import type { Producto } from '../types';

export default function Ventas() {
  const { 
    carrito, 
    clienteSeleccionado,
    descuentoGlobal,
    agregarAlCarrito,
    removerDelCarrito,
    actualizarCantidadCarrito,
    actualizarDescuentoItem,
    seleccionarCliente,
    setDescuentoGlobal,
    getSubtotalCarrito,
    getIVA,
    getTotalCarrito,
    finalizarVenta,
    limpiarCarrito,
    getVentasDelDia,
    getTotalVentasDia,
  } = useVentaStore();
  
  const { productos } = useStore();
  const { getClienteById } = useClienteStore();
  const { showToast } = useToast();

  const [busquedaProducto, setBusquedaProducto] = useState('');
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('Efectivo');
  const [tipoFactura, setTipoFactura] = useState<TipoFactura>('B');
  const [observaciones, setObservaciones] = useState('');

  const clienteActual = clienteSeleccionado ? getClienteById(clienteSeleccionado) : null;
  const creditoDisponible = clienteActual ? clienteActual.limiteCredito - (clienteActual.saldoDeuda || clienteActual.saldoActual || 0) : 0;

  // Filtrar productos disponibles
  const productosDisponibles = useMemo(() => {
    return productos
      .filter((p) => p.stockActual > 0)
      .filter((p) => {
        if (!busquedaProducto) return true;
        const busqueda = busquedaProducto.toLowerCase();
        return (
          p.nombre.toLowerCase().includes(busqueda) ||
          p.codigoBarras.includes(busqueda) ||
          p.marca.toLowerCase().includes(busqueda)
        );
      })
      .slice(0, 10); // Limitar a 10 resultados
  }, [productos, busquedaProducto]);

  // Calcular totales
  const subtotal = getSubtotalCarrito();
  const { iva21, iva105 } = getIVA();
  const total = getTotalCarrito();

  // Estadísticas del día
  const ventasDelDia = getVentasDelDia();
  const totalVentasDia = getTotalVentasDia();

  const handleAgregarProducto = (producto: Producto) => {
    if (producto.stockActual <= 0) {
      showToast('error', 'Sin stock', `${producto.nombre} no tiene stock disponible`);
      return;
    }

    agregarAlCarrito({
      producto: {
        id: producto.id,
        nombre: producto.nombre,
        codigoBarras: producto.codigoBarras,
        precioVenta: producto.precioVenta || producto.precioVentaMayorista || 0,
        stockActual: producto.stockActual,
        alicuotaIva: (producto.alicuotaIva as 0 | 21 | 10.5) || 21, // Por defecto IVA 21%
        imagenUrl: producto.imagen || producto.imagenUrl || '',
      },
      cantidad: 1,
      descuento: clienteActual?.descuento || 0,
    });

    showToast('success', 'Producto agregado', `${producto.nombre} agregado al carrito`);
    setBusquedaProducto('');
  };

  const handleFinalizarVenta = async () => {
    if (carrito.length === 0) {
      showToast('error', 'Carrito vacío', 'Agrega productos antes de finalizar la venta');
      return;
    }

    // Validar stock
    for (const item of carrito) {
      if (item.cantidad > item.producto.stockActual) {
        showToast('error', 'Stock insuficiente', `${item.producto.nombre} no tiene suficiente stock`);
        return;
      }
    }

    // Validar crédito si es cuenta corriente
    if (metodoPago === 'Cuenta Corriente') {
      if (!clienteSeleccionado) {
        showToast('error', 'Cliente requerido', 'Selecciona un cliente para venta en cuenta corriente');
        return;
      }
      if (total > creditoDisponible) {
        showToast('error', 'Crédito insuficiente', `El cliente solo tiene $${creditoDisponible.toLocaleString()} de crédito disponible`);
        return;
      }
    }

    const ventaId = finalizarVenta(metodoPago, tipoFactura, observaciones);

    if (ventaId) {
      showToast('success', 'Venta realizada', `Venta registrada exitosamente. Total: $${total.toLocaleString()}`);
      setObservaciones('');
      setBusquedaProducto('');
    } else {
      showToast('error', 'Error', 'No se pudo completar la venta');
    }
  };

  const handleCancelarVenta = () => {
    if (carrito.length > 0) {
      limpiarCarrito();
      showToast('info', 'Venta cancelada', 'El carrito ha sido vaciado');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Punto de Venta</h1>
          <p className="text-gray-500 mt-1">Sistema POS para ventas mayoristas</p>
        </div>
      </div>

      {/* Estadísticas del día */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ventas del Día</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{ventasDelDia.length}</p>
            </div>
            <Receipt className="w-12 h-12 text-orange-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Facturado Hoy</p>
              <p className="text-3xl font-bold text-green-600 mt-1">${(totalVentasDia / 1000).toFixed(0)}k</p>
            </div>
            <DollarSign className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Items en Carrito</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">{carrito.length}</p>
            </div>
            <Package className="w-12 h-12 text-purple-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Layout principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna izquierda: Productos */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selector de cliente */}
          <ClienteSelector
            clienteSeleccionado={clienteSeleccionado}
            onSeleccionar={seleccionarCliente}
          />

          {/* Búsqueda de productos */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-5 h-5 text-gray-400" />
              <h2 className="font-semibold text-gray-900">Buscar Productos</h2>
            </div>
            
            <Input
              type="text"
              placeholder="Buscar por nombre, código de barras o categoría..."
              value={busquedaProducto}
              onChange={(e) => setBusquedaProducto(e.target.value)}
              className="mb-4"
            />

            {busquedaProducto && (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {productosDisponibles.length > 0 ? (
                  productosDisponibles.map((producto) => (
                    <button
                      key={producto.id}
                      onClick={() => handleAgregarProducto(producto)}
                      className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-left"
                    >
                      <div className="w-12 h-12 bg-white rounded border border-gray-200 flex-shrink-0 overflow-hidden">
                        {producto.imagenUrl ? (
                          <img src={producto.imagenUrl} alt={producto.nombre} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Package className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{producto.nombre}</p>
                        <p className="text-sm text-gray-500">{producto.codigoBarras}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-semibold text-orange-600">${(producto.precioVenta || producto.precioVentaMayorista || 0).toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Stock: {producto.stockActual}</p>
                      </div>
                      <Plus className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    </button>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-4">No se encontraron productos</p>
                )}
              </div>
            )}
          </div>

          {/* Carrito */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Carrito de Compra</h2>
              {carrito.length > 0 && (
                <button
                  onClick={handleCancelarVenta}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Vaciar carrito
                </button>
              )}
            </div>

            {carrito.length > 0 ? (
              <div className="space-y-3">
                {carrito.map((item) => (
                  <CarritoItem
                    key={item.producto.id}
                    item={item}
                    onActualizarCantidad={actualizarCantidadCarrito}
                    onActualizarDescuento={actualizarDescuentoItem}
                    onRemover={removerDelCarrito}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>El carrito está vacío</p>
                <p className="text-sm mt-2">Busca y agrega productos para comenzar</p>
              </div>
            )}
          </div>
        </div>

        {/* Columna derecha: Resumen y pago */}
        <div className="space-y-6">
          {/* Resumen */}
          <ResumenVenta
            subtotal={subtotal}
            descuentoGlobal={descuentoGlobal}
            iva21={iva21}
            iva105={iva105}
            total={total}
            onDescuentoGlobalChange={setDescuentoGlobal}
          />

          {/* Tipo de factura */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Tipo de Factura
            </label>
            <div className="flex gap-2">
              {(['A', 'B', 'C'] as TipoFactura[]).map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => setTipoFactura(tipo)}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 font-semibold transition-all ${
                    tipoFactura === tipo
                      ? 'border-orange-500 bg-orange-50 text-orange-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tipo}
                </button>
              ))}
            </div>
          </div>

          {/* Método de pago */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <MetodoPagoSelector
              metodoPago={metodoPago}
              onSeleccionar={setMetodoPago}
              creditoDisponible={clienteSeleccionado ? creditoDisponible : undefined}
            />
          </div>

          {/* Observaciones */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Observaciones (Opcional)
            </label>
            <textarea
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              placeholder="Agregar notas sobre la venta..."
              className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={3}
            />
          </div>

          {/* Botón finalizar */}
          <button
            onClick={handleFinalizarVenta}
            disabled={carrito.length === 0}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Receipt className="w-6 h-6" />
            FINALIZAR VENTA
            {total > 0 && (
              <span className="ml-2 bg-green-500 px-3 py-1 rounded-full">
                ${total.toLocaleString()}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
