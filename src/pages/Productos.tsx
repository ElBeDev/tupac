import { useState, useMemo } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { useToast } from '../components/ui/toast';
import { ProductCard } from '../components/productos/ProductCard';
import { ProductDetail } from '../components/productos/ProductDetail';
import { ProductForm } from '../components/productos/ProductForm';
import PreciosModal from '../components/productos/PreciosModal';
import { Input } from '../components/ui/input';
import { categorias } from '../data/categorias';
import type { Producto } from '../types';

export default function Productos() {
  const { productos, agregarProducto, actualizarProducto, lotes, movimientos } = useStore();
  const { showToast } = useToast();
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditar, setProductoEditar] = useState<Producto | null>(null);
  const [mostrarPrecios, setMostrarPrecios] = useState(false);
  const [productoPrecios, setProductoPrecios] = useState<Producto | null>(null);

  // Filtrar productos
  const productosFiltrados = useMemo(() => {
    return productos.filter(producto => {
      const matchBusqueda = busqueda === '' || 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.codigoBarras.includes(busqueda);
      
      const matchCategoria = categoriaFiltro === '' || producto.categoriaId === categoriaFiltro;
      
      return matchBusqueda && matchCategoria;
    });
  }, [productos, busqueda, categoriaFiltro]);

  const handleVerDetalle = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setMostrarDetalle(true);
  };

  const handleEditar = (producto: Producto) => {
    setProductoEditar(producto);
    setMostrarFormulario(true);
  };

  const handleVerPrecios = (producto: Producto) => {
    setProductoPrecios(producto);
    setMostrarPrecios(true);
  };

  const handleNuevoProducto = () => {
    setProductoEditar(null);
    setMostrarFormulario(true);
  };

  const handleGuardarProducto = (producto: Producto) => {
    if (productoEditar) {
      actualizarProducto(producto.id, producto);
      showToast('success', 'Producto actualizado', `${producto.nombre} ha sido actualizado correctamente`);
    } else {
      agregarProducto(producto);
      showToast('success', 'Producto creado', `${producto.nombre} ha sido agregado al inventario`);
    }
    setMostrarFormulario(false);
    setProductoEditar(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
          <p className="text-gray-600 mt-1">
            Gestión de productos del inventario
          </p>
        </div>
        <button
          onClick={handleNuevoProducto}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nuevo Producto
        </button>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar por nombre, marca o código de barras..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2 min-w-[200px]">
          <Filter className="text-gray-400 w-5 h-5" />
          <select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Todas las categorías</option>
            {categorias.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Total Productos</p>
          <p className="text-2xl font-bold text-gray-900">{productos.length}</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Resultados</p>
          <p className="text-2xl font-bold text-orange-600">{productosFiltrados.length}</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Categorías</p>
          <p className="text-2xl font-bold text-gray-900">{categorias.length}</p>
        </div>
      </div>

      {/* Grid de productos */}
      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map(producto => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onView={handleVerDetalle}
              onEdit={handleEditar}
              onViewPrecios={handleVerPrecios}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">
            {busqueda || categoriaFiltro 
              ? 'No se encontraron productos con los filtros aplicados'
              : 'No hay productos en el sistema'}
          </p>
        </div>
      )}

      {/* Modales */}
      <ProductDetail
        producto={productoSeleccionado}
        isOpen={mostrarDetalle}
        onClose={() => {
          setMostrarDetalle(false);
          setProductoSeleccionado(null);
        }}
        lotes={lotes}
        movimientos={movimientos}
      />

      <ProductForm
        producto={productoEditar}
        isOpen={mostrarFormulario}
        onClose={() => {
          setMostrarFormulario(false);
          setProductoEditar(null);
        }}
        onSave={handleGuardarProducto}
      />

      {productoPrecios && (
        <PreciosModal
          productoId={productoPrecios.id}
          productoNombre={productoPrecios.nombre}
          isOpen={mostrarPrecios}
          onClose={() => {
            setMostrarPrecios(false);
            setProductoPrecios(null);
          }}
        />
      )}
    </div>
  );
}
