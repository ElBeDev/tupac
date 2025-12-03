import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Warehouse,
  BarChart3,
  Menu,
  X,
  PackageSearch,
  Users,
  ShoppingCart,
  Receipt,
  Activity,
  Calendar,
  Bell,
  TrendingUp,
  DollarSign,
  ClipboardList,
} from 'lucide-react';
import { cn } from '../../utils/helpers';

type MenuItem = {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

type MenuItemOrSection = MenuItem | MenuSection;

const menuItems: MenuItemOrSection[] = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { 
    section: 'Análisis',
    items: [
      { to: '/analisis-rentabilidad', icon: DollarSign, label: 'Rentabilidad' },
      { to: '/analisis-rotacion', icon: TrendingUp, label: 'Rotación' },
      { to: '/reportes', icon: BarChart3, label: 'Reportes' },
    ]
  },
  { 
    section: 'Inventario',
    items: [
      { to: '/productos', icon: Package, label: 'Productos' },
      { to: '/inventario', icon: Warehouse, label: 'Stock' },
      { to: '/movimientos', icon: Activity, label: 'Movimientos' },
      { to: '/lotes', icon: Calendar, label: 'Lotes' },
      { to: '/alertas', icon: Bell, label: 'Alertas' },
    ]
  },
  { 
    section: 'Compras',
    items: [
      { to: '/proveedores', icon: PackageSearch, label: 'Proveedores' },
    ]
  },
  { 
    section: 'Ventas',
    items: [
      { to: '/clientes', icon: Users, label: 'Clientes' },
      { to: '/ordenes-compra', icon: ClipboardList, label: 'Pedidos' },
      { to: '/facturas', icon: Receipt, label: 'Facturas' },
      { to: '/ventas', icon: ShoppingCart, label: 'Punto de Venta' },
    ]
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón hamburguesa para móvil */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay para cerrar en móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'bg-gray-900 text-white w-64 fixed left-0 top-0 bottom-0 z-40',
          'transform transition-transform duration-300 ease-in-out',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <img 
                src="/LogoTupacconsombra.png" 
                alt="Tupac Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Tupac</h1>
              <p className="text-xs text-gray-400">Supermercado Mayorista</p>
            </div>
          </div>
        </div>

        <nav className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              // Si es un item simple (Dashboard)
              if ('to' in item) {
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        )
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  </li>
                );
              }

              // Si es una sección con items
              return (
                <li key={index}>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4">
                    {item.section}
                  </div>
                  <ul className="space-y-1">
                    {item.items.map((subItem) => (
                      <li key={subItem.to}>
                        <NavLink
                          to={subItem.to}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors',
                              isActive
                                ? 'bg-primary text-white'
                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            )
                          }
                        >
                          <subItem.icon className="h-5 w-5" />
                          <span className="font-medium">{subItem.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="text-xs text-gray-400 text-center">
            <p>Villa José León Suárez</p>
            <p className="mt-1">Buenos Aires, Argentina</p>
          </div>
        </div>
      </aside>
    </>
  );
}
