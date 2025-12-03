import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DateFilterProvider } from './context/DateFilterContext'

// LIMPIEZA FORZADA DE TODO EL LOCALSTORAGE
// Eliminar después de confirmar que funciona
console.log('🧹 LIMPIANDO TODO EL LOCALSTORAGE...');
localStorage.clear();
console.log('✅ localStorage limpiado - Datos reales se cargarán ahora');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DateFilterProvider>
      <App />
    </DateFilterProvider>
  </StrictMode>,
)
