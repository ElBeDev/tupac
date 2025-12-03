import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/ui/toast';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import DashboardReal from './pages/DashboardReal';
import Productos from './pages/Productos';
import Inventario from './pages/Inventario';
import Movimientos from './pages/Movimientos';
import Lotes from './pages/Lotes';
import Proveedores from './pages/Proveedores';
import Clientes from './pages/Clientes';
import Facturas from './pages/Facturas';
import Ventas from './pages/Ventas';
import PedidosClientes from './pages/PedidosClientes';
import Reportes from './pages/Reportes';
import Alertas from './pages/Alertas';
import AnalisisRotacion from './pages/AnalisisRotacion';
import AnalisisRentabilidad from './pages/AnalisisRentabilidad';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardReal />} />
            <Route path="analisis-rentabilidad" element={<AnalisisRentabilidad />} />
            <Route path="analisis-rotacion" element={<AnalisisRotacion />} />
            <Route path="productos" element={<Productos />} />
            <Route path="inventario" element={<Inventario />} />
            <Route path="movimientos" element={<Movimientos />} />
            <Route path="lotes" element={<Lotes />} />
            <Route path="alertas" element={<Alertas />} />
            <Route path="proveedores" element={<Proveedores />} />
            <Route path="ordenes-compra" element={<PedidosClientes />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="facturas" element={<Facturas />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="reportes" element={<Reportes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
