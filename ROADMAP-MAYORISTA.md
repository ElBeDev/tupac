# 🚀 ROADMAP - Sistema de Almacén Mayorista

**Fecha de inicio:** 18 de Noviembre, 2025  
**Proyecto:** Tupac Supermayorista - Sistema de Gestión ERP

---

## 📊 ESTADO ACTUAL DEL SISTEMA

### ✅ Datos Reales Cargados (100%)
- **2,913 Ventas/Facturas** - Procesadas desde FORUM ERP
- **1,356 Productos** - Catálogo completo con códigos de barras
- **771 Clientes** - Base de datos completa
- **92 Pedidos** - Órdenes de compra con items
- **3,311 Movimientos** - Historial de inventario
- **98 Lotes** - Control de vencimientos
- **1,044 Alertas** - Sistema de notificaciones

### ✅ Módulos Operativos
- Dashboard principal (`DashboardReal.tsx`)
- Productos, Inventario, Movimientos, Lotes
- Ventas, Facturas, Clientes, Proveedores
- Órdenes de Compra, Alertas, Reportes

---

## 🎯 FASE 1: OPTIMIZACIÓN DEL DASHBOARD (Semana 1-2)

### Prioridad: ALTA 🔴

#### 1.1 Métricas Críticas de Mayoreo
- [x] **Rotación de Inventario** ✅ **COMPLETADO - 18/11/2025**
  - ✅ Calcular días promedio de stock basado en movimientos reales
  - ✅ Identificar productos de rápido/lento movimiento (< 15 días = rápido, > 45 días = lento)
  - ✅ Productos sin movimiento con stock
  - ✅ Página completa: `/analisis-rotacion`
  - ✅ Banner en dashboard principal
  - **Archivos creados:**
    - `src/utils/rotationAnalyzer.ts` - Lógica de cálculo
    - `src/components/dashboard/InventoryRotation.tsx` - Visualización
    - `src/pages/AnalisisRotacion.tsx` - Página completa
  - **Datos usados:** 3,311 movimientos reales + 1,356 productos

- [x] **Stock Crítico & Reorden** ✅ **COMPLETADO - 18/11/2025**
  - ✅ Alertas de stock crítico (< 5 unidades)
  - ✅ Alertas de reorden urgente (< 7 días de stock)
  - ✅ Alertas de stock bajo (5-10 unidades)
  - ✅ Cálculo de cantidad sugerida para reorden (30 días de cobertura)
  - ✅ Inversión total estimada para reabastecimiento
  - **Archivo:** `src/components/dashboard/StockAlerts.tsx`
  - **Integrado en:** `/analisis-rotacion` (pestaña de alertas)

- [x] **Valor de Inventario por Categoría** ✅ **COMPLETADO - 18/11/2025**
  - ✅ Desglose por categorías con datos reales
  - ✅ Gráfica de distribución de valor con barras de progreso
  - ✅ Top 5 categorías más valiosas con rankings
  - ✅ Tabla completa con todas las categorías
  - **Archivo creado:** `src/components/dashboard/InventoryByCategory.tsx`
  - **Integrado en:** `/analisis-rotacion` (pestaña "Valor por Categoría")
  - **Datos usados:** 1,356 productos con precios y stock real

#### 1.2 Widget de Pedidos Pendientes
- [x] **Monitor de Órdenes** ✅ **COMPLETADO - 18/11/2025**
  - ✅ 92 pedidos reales cargados desde `pedidos.txt`
  - ✅ Widget de pedidos pendientes integrado en dashboard
  - ✅ Resumen por estados: Confirmada, Enviada, Recibida, Cancelada
  - ✅ Tiempo promedio de procesamiento
  - ✅ Top 10 productos más solicitados
  - ✅ Valor total de órdenes pendientes
  - ✅ Lista de últimas 10 órdenes pendientes
  - **Archivo creado:** `src/components/dashboard/PendingOrders.tsx`
  - **Integrado en:** `DashboardReal.tsx`
  - **Datos:** Usa `useOrdenCompraStore` con 92 pedidos reales

#### 1.3 Filtros Temporales
- [x] **Selector de Rango de Fechas** ✅ **COMPLETADO - 18/11/2025**
  - ✅ Presets: Hoy / Semana / Mes / Año
  - ✅ Selector de rango personalizado
  - ✅ Aplicado a todas las métricas del dashboard
  - ✅ Preferencia guardada en localStorage
  - ✅ Función helper para verificar fechas en rango (soporta DD/MM/YY y DD/MM/YYYY)
  - **Archivos creados:**
    - `src/context/DateFilterContext.tsx` - Context provider con estado global
    - `src/components/ui/DateRangeSelector.tsx` - Componente UI del selector
  - **Integrado en:** `DashboardReal.tsx` - Todas las estadísticas filtradas por fecha
  - **Datos:** Filtra ventas, movimientos y métricas según rango seleccionado

---

## ✅ FASE 1 COMPLETADA - 18/11/2025

### 🎉 Resumen de Logros:
- ✅ **1.1 Métricas Críticas de Mayoreo** (3/3 completadas)
  - Rotación de Inventario
  - Stock Crítico & Reorden
  - Valor de Inventario por Categoría
- ✅ **1.2 Widget de Pedidos Pendientes** (1/1 completada)
- ✅ **1.3 Filtros Temporales** (1/1 completada)

### 📦 Archivos Creados en FASE 1:
1. `src/utils/rotationAnalyzer.ts` - Análisis de rotación
2. `src/components/dashboard/InventoryRotation.tsx` - Vista de rotación
3. `src/components/dashboard/StockAlerts.tsx` - Alertas de stock
4. `src/components/dashboard/InventoryByCategory.tsx` - Valor por categoría
5. `src/components/dashboard/PendingOrders.tsx` - Monitor de órdenes
6. `src/components/ui/DateRangeSelector.tsx` - Selector de fechas
7. `src/context/DateFilterContext.tsx` - Estado global de filtros
8. `src/pages/AnalisisRotacion.tsx` - Página completa de análisis

### 🎯 Próximos Pasos:
- Continuar con **FASE 2: Gestión de Crédito y Cobranza**

---

## 📊 RESUMEN DE DATOS REALES DISPONIBLES

### ✅ Datos Cargados y Verificados:
- **3,311 Movimientos** - Archivo: `src/data/movimientos.ts` (03/11/2025)
- **2,913 Ventas** - Archivo: `src/data/ventas-iniciales.ts`
- **1,356 Productos** - Con precios, stock, categorías
- **771 Clientes** - Base completa
- **92 Pedidos** - Con detalles de items
- **98 Lotes** - Control de vencimientos

### 🎯 Funcionalidades Implementadas con Datos Reales:
1. ✅ **Análisis de Rotación** - Usa movimientos reales para calcular:
   - Promedio de venta diaria por producto
   - Días de stock disponible
   - Categorización automática (rápido/normal/lento/sin-movimiento)

2. ✅ **Alertas de Stock** - Basadas en datos reales:
   - Stock crítico (< 5 unidades): calculado de productos reales
   - Reorden urgente (< 7 días): basado en rotación real
   - Cantidad sugerida: calculada según ventas históricas

3. ✅ **Dashboard Principal** - Métricas del día con ventas reales

---

## 💳 FASE 2: GESTIÓN DE CRÉDITO Y COBRANZA (Semana 3-4)

### Prioridad: ALTA 🔴

#### 2.1 Panel de Control de Crédito
- [ ] **Widget de Crédito**
  - Clientes cerca del límite (>80%)
  - Cartera vencida
  - Pagos pendientes por fecha
  - Total por cobrar
  - **Componente:** `src/components/dashboard/CreditControl.tsx`
  - **Store:** `src/store/creditoStore.ts` (crear)

#### 2.2 Extensión del Módulo de Clientes
- [ ] **Agregar Campos de Crédito**
  - Límite de crédito
  - Crédito disponible
  - Días de crédito
  - Historial de pagos
  - **Archivo:** `src/types/cliente.ts`
  - **Store:** `src/store/clienteStore.ts`

#### 2.3 Alertas de Cobranza
- [ ] **Sistema de Notificaciones**
  - Facturas por vencer (3 días antes)
  - Facturas vencidas
  - Clientes morosos
  - **Componente:** `src/components/alertas/CobranzaAlerts.tsx`

---

## 📦 FASE 3: GESTIÓN DE PROVEEDORES (Semana 5-6)

### Prioridad: MEDIA 🟡

#### 3.1 Panel de Proveedores
- [ ] **Dashboard de Proveedores**
  - Desempeño: entregas a tiempo
  - Productos por proveedor
  - Órdenes pendientes de recibir
  - Mejores precios comparativos
  - **Componente:** `src/components/dashboard/SupplierPerformance.tsx`

#### 3.2 Análisis de Compras
- [ ] **Métricas de Compras**
  - Total comprado por proveedor
  - Productos más comprados
  - Frecuencia de pedidos
  - Tiempo promedio de entrega
  - **Archivo:** `src/pages/Proveedores.tsx` (extender)

#### 3.3 Sugerencias de Reorden
- [ ] **Sistema Inteligente de Compras**
  - Calcular punto de reorden por producto
  - Cantidad sugerida basada en rotación
  - Proveedor recomendado (mejor precio/servicio)
  - Generar orden de compra automática
  - **Componente:** `src/components/proveedores/ReorderSuggestions.tsx`
  - **Algoritmo:** `src/utils/reorderCalculator.ts`

---

## 📊 FASE 4: ANÁLISIS Y REPORTERÍA (Semana 7-8)

### Prioridad: MEDIA 🟡

#### 4.1 Análisis de Rentabilidad
- [ ] **Dashboard de Rentabilidad**
  - Margen por categoría
  - Productos más/menos rentables
  - Descuentos otorgados vs objetivo
  - ROI por producto
  - **Componente:** `src/components/reportes/ProfitabilityAnalysis.tsx`

#### 4.2 Gráficas Interactivas
- [ ] **Visualizaciones Avanzadas**
  - Evolución de ventas (Chart.js o Recharts)
  - Inventario histórico
  - Comparativo mes actual vs anterior
  - Tendencias de productos
  - **Librería:** Instalar `recharts` o `chart.js`
  - **Componente:** `src/components/reportes/InteractiveCharts.tsx`

#### 4.3 Exportación de Datos
- [ ] **Exportar a Excel**
  - Todos los reportes exportables
  - Formato personalizado
  - Incluir gráficas
  - **Librería:** `xlsx` o `exceljs`
  - **Utilidad:** `src/utils/excelExporter.ts`

---

## ⚠️ FASE 5: ALERTAS INTELIGENTES (Semana 9-10)

### Prioridad: MEDIA 🟡

#### 5.1 Sistema de Alertas Avanzado
- [ ] **Tipos de Alertas**
  - Stock bajo (basado en rotación)
  - Productos sin movimiento (60+ días)
  - Lotes próximos a vencer (usar los 98 lotes)
  - Precios desactualizados
  - Crédito excedido
  - **Archivo:** `src/data/alertas.ts` (extender)

#### 5.2 Notificaciones Push
- [ ] **Sistema de Notificaciones**
  - Notificaciones en tiempo real
  - Badge con contador
  - Prioridad por tipo de alerta
  - **Componente:** `src/components/layout/NotificationCenter.tsx`

#### 5.3 Configuración de Alertas
- [ ] **Panel de Configuración**
  - Personalizar umbrales
  - Activar/desactivar alertas
  - Frecuencia de notificaciones
  - **Página:** `src/pages/ConfiguracionAlertas.tsx`

---

## 🔍 FASE 6: BÚSQUEDA Y NAVEGACIÓN (Semana 11)

### Prioridad: BAJA 🟢

#### 6.1 Búsqueda Global
- [ ] **Buscador Universal**
  - Buscar productos por nombre/código/barras
  - Buscar clientes por nombre/RFC
  - Buscar facturas por número
  - Resultados en tiempo real
  - **Componente:** `src/components/layout/GlobalSearch.tsx`

#### 6.2 Filtros Avanzados
- [ ] **Filtros por Módulo**
  - Productos: categoría, precio, stock
  - Clientes: tipo, crédito, ubicación
  - Ventas: fecha, cliente, monto
  - **Componente:** `src/components/ui/AdvancedFilters.tsx`

---

## 📱 FASE 7: OPTIMIZACIÓN Y UX (Semana 12)

### Prioridad: BAJA 🟢

#### 7.1 Responsive Design
- [ ] **Adaptación Móvil**
  - Dashboard responsive
  - Navegación móvil optimizada
  - Tablas scrollables en móvil

#### 7.2 Performance
- [ ] **Optimizaciones**
  - Lazy loading de componentes
  - Virtualización de listas largas
  - Caché de datos frecuentes
  - **Librería:** `react-window` para tablas

#### 7.3 Accesibilidad
- [ ] **Mejoras de A11y**
  - Navegación por teclado
  - Screen reader friendly
  - Contraste de colores WCAG AA

---

## 🛠️ TECNOLOGÍAS A INTEGRAR

### Nuevas Dependencias
```bash
# Gráficas
npm install recharts

# Exportación Excel
npm install xlsx

# Fechas
npm install date-fns

# Virtualización (opcional)
npm install react-window

# Notificaciones (opcional)
npm install react-hot-toast
```

---

## 📋 ESTRUCTURA DE ARCHIVOS SUGERIDA

```
src/
├── components/
│   ├── dashboard/
│   │   ├── InventoryRotation.tsx          [FASE 1]
│   │   ├── StockAlerts.tsx                [FASE 1]
│   │   ├── InventoryByCategory.tsx        [FASE 1]
│   │   ├── PendingOrders.tsx              [FASE 1]
│   │   ├── CreditControl.tsx              [FASE 2]
│   │   └── SupplierPerformance.tsx        [FASE 3]
│   ├── reportes/
│   │   ├── ProfitabilityAnalysis.tsx      [FASE 4]
│   │   └── InteractiveCharts.tsx          [FASE 4]
│   ├── proveedores/
│   │   └── ReorderSuggestions.tsx         [FASE 3]
│   ├── alertas/
│   │   └── CobranzaAlerts.tsx             [FASE 2]
│   ├── ui/
│   │   ├── DateRangeSelector.tsx          [FASE 1]
│   │   └── AdvancedFilters.tsx            [FASE 6]
│   └── layout/
│       ├── GlobalSearch.tsx               [FASE 6]
│       └── NotificationCenter.tsx         [FASE 5]
├── store/
│   ├── reordenStore.ts                    [FASE 1]
│   └── creditoStore.ts                    [FASE 2]
├── utils/
│   ├── reorderCalculator.ts               [FASE 3]
│   ├── excelExporter.ts                   [FASE 4]
│   └── rotationAnalyzer.ts                [FASE 1]
└── context/
    └── DateFilterContext.tsx              [FASE 1]
```

---

## 🎯 MÉTRICAS DE ÉXITO

### KPIs del Proyecto
- ✅ **Cobertura de Datos:** 100% (Completado)
- 🎯 **Tiempo de Respuesta:** < 2 segundos por consulta
- 🎯 **Precisión de Alertas:** > 95% relevantes
- 🎯 **Adopción de Usuario:** Dashboard como página principal
- 🎯 **Reducción de Stock Muerto:** Identificar 100% productos sin movimiento

---

## 📝 NOTAS DE IMPLEMENTACIÓN

### Consideraciones Técnicas
1. **Usar los stores existentes:** No duplicar lógica
2. **Mantener tipado estricto:** TypeScript al 100%
3. **Componentizar todo:** Reutilizar componentes
4. **Testing:** Agregar tests para lógica crítica
5. **Documentar:** Comentarios en código complejo

### Priorización Sugerida
1. **FASE 1** - Dashboard es lo más visible
2. **FASE 2** - Crédito es crítico para mayoristas
3. **FASE 3** - Proveedores para eficiencia operativa
4. **FASE 4** - Reportes para decisiones estratégicas
5. **FASE 5** - Alertas para prevención
6. **FASE 6-7** - Optimizaciones finales

---

## 🚀 QUICK START - FASE 1

### Para empezar HOY:

```bash
# 1. Crear componente de rotación de inventario
touch src/components/dashboard/InventoryRotation.tsx

# 2. Crear utilidad de análisis
touch src/utils/rotationAnalyzer.ts

# 3. Crear store de reorden
touch src/store/reordenStore.ts

# 4. Modificar DashboardReal para incluir nuevo widget
# Editar: src/pages/DashboardReal.tsx
```

### Ejemplo de implementación rápida:

**`rotationAnalyzer.ts`:**
```typescript
export const calcularRotacion = (movimientos, producto) => {
  // Filtrar movimientos de salida del producto
  // Calcular promedio diario de salidas
  // Calcular días de stock disponible
  return diasDeStock;
};
```

**`InventoryRotation.tsx`:**
```typescript
export const InventoryRotation = () => {
  const movimientos = useMovimientoStore(s => s.movimientos);
  const productos = useStore(s => s.productos);
  
  // Calcular top 10 productos de rápido movimiento
  // Calcular productos de lento movimiento
  // Mostrar en cards
};
```

---

## ✅ CHECKLIST DE PROGRESO

Copiar este checklist en un documento separado para tracking:

```
FASE 1: DASHBOARD
[ ] 1.1 Rotación de inventario
[ ] 1.2 Stock crítico
[ ] 1.3 Valor por categoría
[ ] 1.4 Widget de pedidos
[ ] 1.5 Filtros temporales

FASE 2: CRÉDITO
[ ] 2.1 Panel de crédito
[ ] 2.2 Extensión clientes
[ ] 2.3 Alertas de cobranza

FASE 3: PROVEEDORES
[ ] 3.1 Dashboard proveedores
[ ] 3.2 Análisis de compras
[ ] 3.3 Sugerencias de reorden

FASE 4: REPORTERÍA
[ ] 4.1 Análisis de rentabilidad
[ ] 4.2 Gráficas interactivas
[ ] 4.3 Exportación a Excel

FASE 5: ALERTAS
[ ] 5.1 Sistema avanzado
[ ] 5.2 Notificaciones push
[ ] 5.3 Configuración

FASE 6: BÚSQUEDA
[ ] 6.1 Búsqueda global
[ ] 6.2 Filtros avanzados

FASE 7: OPTIMIZACIÓN
[ ] 7.1 Responsive design
[ ] 7.2 Performance
[ ] 7.3 Accesibilidad
```

---

**¿Por dónde empezamos?** 🚀

Recomiendo iniciar con **FASE 1.1** - Rotación de Inventario, ya que:
- Es la métrica MÁS crítica para mayoristas
- Usa datos que YA tenemos (movimientos)
- Impacto visual inmediato en el dashboard
- Base para las demás funcionalidades

