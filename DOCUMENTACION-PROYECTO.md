# 📦 Sistema de Gestión de Inventario - Tupac Supermayorista

**Proyecto desplegado en**: https://tupac-478123.uc.r.appspot.com

---

## 🎯 Descripción General

Sistema completo de gestión de inventario, ventas, clientes, proveedores y reportes para mayorista. Desarrollado con **React + TypeScript + Vite**, usando datos reales importados desde archivos CSV históricos.

### Características Principales
- ✅ 473 productos reales en catálogo
- ✅ 376 movimientos de inventario (entradas/salidas)
- ✅ 360 facturas históricas
- ✅ 87 lotes con control de vencimientos
- ✅ 12 clientes reales con historial
- ✅ Generación automática de órdenes de compra
- ✅ Dashboard con reportes en tiempo real
- ✅ Persistencia local con localStorage

---

## 🗂️ Estructura del Proyecto

```
tupacsupermayorista/
├── src/
│   ├── components/          # Componentes React organizados por feature
│   │   ├── alertas/        # AlertCard
│   │   ├── clientes/       # ClienteCard, ClienteDetalle, ClienteForm
│   │   ├── dashboard/      # StatCard, StockChart, AlertsList, VencimientosTable
│   │   ├── inventario/     # EntradaForm, SalidaForm, StockTable
│   │   ├── layout/         # Header, Sidebar, Layout
│   │   ├── ordenes/        # OrdenCompraCard, OrdenCompraDetalle, OrdenCompraForm, RecepcionForm
│   │   ├── productos/      # ProductCard, ProductDetail, ProductForm, ProductList
│   │   ├── proveedores/    # ProveedorCard, ProveedorDetalle, ProveedorForm
│   │   ├── reportes/       # (componentes de reportes)
│   │   ├── ui/             # Button, Input, Modal, etc.
│   │   └── ventas/         # VentaCard, VentaDetalle, VentaForm, ClienteSelector, ProductoSelector
│   │
│   ├── data/               # Datos reales cargados
│   │   ├── productos.ts    # 473 productos del CSV
│   │   ├── movimientos.ts  # 376 movimientos reales (cmovsto + dmovsto)
│   │   ├── ventas-iniciales.ts  # 360 facturas del CSV
│   │   ├── clientes.ts     # 12 clientes reales
│   │   ├── lotes.ts        # 87 lotes con vencimientos
│   │   ├── proveedores.ts  # Proveedores
│   │   ├── categorias.ts   # Categorías de productos
│   │   └── alertas.ts      # Sistema de alertas
│   │
│   ├── pages/              # Páginas principales de la app
│   │   ├── Login.tsx       # Página de login
│   │   ├── Dashboard.tsx   # Dashboard principal
│   │   ├── DashboardReal.tsx  # Dashboard con datos reales
│   │   ├── Productos.tsx   # Gestión de productos
│   │   ├── Inventario.tsx  # Control de inventario
│   │   ├── Movimientos.tsx # Historial de movimientos
│   │   ├── Lotes.tsx       # Gestión de lotes
│   │   ├── Ventas.tsx      # Registro de ventas
│   │   ├── Clientes.tsx    # Gestión de clientes
│   │   ├── Proveedores.tsx # Gestión de proveedores
│   │   ├── OrdenesCompra.tsx  # Órdenes de compra automatizadas
│   │   ├── Alertas.tsx     # Centro de alertas
│   │   └── Reportes.tsx    # Dashboard de reportes completo
│   │
│   ├── store/              # Estado global con Zustand
│   │   ├── ordenCompraStore.ts  # Store de órdenes de compra
│   │   ├── ventaStore.ts        # Store de ventas
│   │   ├── clienteStore.ts      # Store de clientes
│   │   └── proveedorStore.ts    # Store de proveedores
│   │
│   ├── stores/
│   │   └── useStore.ts     # Store principal (productos, inventario)
│   │
│   ├── types/              # TypeScript interfaces
│   │   ├── index.ts        # Producto, Movimiento, Lote, Alerta, etc.
│   │   ├── venta.ts        # Venta, ItemVenta, EstadoVenta
│   │   ├── cliente.ts      # Cliente, CategoriaCliente
│   │   ├── proveedor.ts    # Proveedor
│   │   └── ordenCompra.ts  # OrdenCompra, ItemOrdenCompra
│   │
│   ├── utils/
│   │   └── helpers.ts      # Funciones auxiliares (formateo, fechas)
│   │
│   ├── App.tsx             # Componente principal con routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globales
│
├── Info/                   # CSV originales (NO se suben a producción)
│   ├── factu03052018.csv   # 360 facturas
│   ├── cmovsto03052018.csv # Movimientos (cabecera)
│   ├── dmovsto03052018.csv # Movimientos (detalle)
│   └── movi_fac03052018.csv
│
├── scripts/                # Scripts Node.js para procesar datos
│   ├── parse-real-data.js  # Parser principal de CSV a JSON
│   └── (otros scripts de imágenes y procesamiento)
│
├── dist/                   # Build de producción
│   ├── index.html
│   ├── assets/             # JS y CSS compilados
│   └── productos/          # Imágenes de productos
│
├── app.yaml               # Configuración Google App Engine
├── .gcloudignore         # Archivos a ignorar en deployment
├── deploy.sh             # Script automatizado de deployment
├── package.json          # Dependencias y scripts
└── vite.config.ts        # Configuración de Vite
```

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router v6** - Routing SPA
- **TailwindCSS** - Estilos utility-first
- **Zustand** - State management
- **Recharts** - Gráficos y visualizaciones
- **Lucide React** - Iconos

### Backend/Data
- **Node.js** - Para scripts de procesamiento
- **CSV parsing** - Datos históricos reales

### Deployment
- **Google App Engine** - Hosting (Standard Environment)
- **Python 3.12 runtime** - Para servir archivos estáticos
- **HTTPS** - Forzado en todas las rutas

---

## 📋 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `Login.tsx` | Página de inicio de sesión |
| `/dashboard` | `Dashboard.tsx` | Dashboard principal con KPIs |
| `/dashboard-real` | `DashboardReal.tsx` | Dashboard con datos reales del CSV |
| `/productos` | `Productos.tsx` | Catálogo de 473 productos |
| `/inventario` | `Inventario.tsx` | Control de stock y movimientos |
| `/movimientos` | `Movimientos.tsx` | Historial de 376 movimientos |
| `/lotes` | `Lotes.tsx` | 87 lotes con fechas de vencimiento |
| `/ventas` | `Ventas.tsx` | Registro y gestión de ventas |
| `/clientes` | `Clientes.tsx` | 12 clientes con historial de compras |
| `/proveedores` | `Proveedores.tsx` | Gestión de proveedores |
| `/ordenes-compra` | `OrdenesCompra.tsx` | Órdenes automatizadas según stock |
| `/alertas` | `Alertas.tsx` | Stock bajo, vencimientos, críticos |
| `/reportes` | `Reportes.tsx` | Dashboard completo con métricas |

---

## 📊 Datos del Sistema

### Productos (473 totales)
**Archivo**: `src/data/productos.ts`  
**Origen**: CSV histórico  
**Campos principales**:
- `codigo`, `codigoBarras`, `nombre`, `descripcion`
- `categoria`, `marca`, `familia`, `departamento`
- `unidad`, `unidadMedida`
- `precioCompra`, `precioCosto`, `precioVenta`
- `stockActual`, `stockMinimo`, `stockMaximo`
- `proveedor`, `ubicacion`, `imagen`

### Movimientos (376 totales)
**Archivo**: `src/data/movimientos.ts`  
**Origen**: `cmovsto03052018.csv` + `dmovsto03052018.csv`  
**Tipos**:
- `ENTRADA`: Compras y recepciones
- `SALIDA`: Ventas y despachos
- `VENTA`: Ventas directas
- `COMPRA`: Compras a proveedores
- `AJUSTE`: Ajustes de inventario
- `DEVOLUCION`: Devoluciones

**Campos**:
- `id`, `tipo`, `fecha`, `hora`
- `numeroComprobante`, `tipoComprobante`
- `entidad` (cliente o proveedor)
- `items[]`: array de productos con cantidad y precio
- `totalCantidad`, `totalValor`

### Facturas/Ventas (360 totales)
**Archivo**: `src/data/ventas-iniciales.ts`  
**Origen**: `factu03052018.csv`  
**Campos**:
- `id`, `numeroFactura`, `fecha`, `hora`
- `clienteId`, `clienteNombre`
- `items[]`: productos vendidos
- `subtotal`, `descuento`, `iva`, `total`
- `metodoPago`, `estado`

### Lotes (87 totales)
**Archivo**: `src/data/lotes.ts`  
**Generados**: A partir de movimientos con fecha de vencimiento  
**Estados**:
- `ACTIVO`: Lote en uso
- `PROXIMO_VENCER`: Menos de 30 días
- `VENCIDO`: Ya venció
- `RETIRADO`: Dado de baja

### Clientes (12 reales)
**Archivo**: `src/data/clientes.ts`  
**Origen**: Códigos únicos del CSV de facturas  
**Categorías**:
- `VIP`: Clientes frecuentes
- `Regular`: Clientes normales
- `Nuevo`: Primera compra
- `Moroso`: Con deuda pendiente

---

## 🔧 Comandos Principales

### Desarrollo
```bash
npm install              # Instalar dependencias
npm run dev             # Servidor desarrollo (http://localhost:5173)
npm run build           # Build de producción
npm run preview         # Preview del build
```

### Deployment
```bash
./deploy.sh             # Deployment completo automatizado
npm run deploy          # Build + deploy a App Engine
npm run deploy:quick    # Deploy sin rebuild
npm run logs            # Ver logs de App Engine
npm run open            # Abrir app en browser
```

### Google Cloud
```bash
gcloud app deploy --project=tupac-478123
gcloud app browse --project=tupac-478123
gcloud app logs tail -s default --project=tupac-478123
gcloud app versions list --project=tupac-478123
```

---

## 🗄️ State Management

### Stores (Zustand)

#### 1. **useStore** (Principal)
**Archivo**: `src/stores/useStore.ts`  
**Responsabilidades**:
- Productos (CRUD)
- Movimientos de inventario
- Stock en tiempo real
- Alertas
- Lotes

**Métodos clave**:
- `calcularStockActual(productoId)` - Stock real = base + movimientos
- `agregarMovimiento()` - Registrar entrada/salida
- `actualizarProducto()` - Editar producto
- `generarAlertas()` - Crear alertas automáticas

#### 2. **ventaStore**
**Archivo**: `src/store/ventaStore.ts`  
- Gestión de ventas
- 360 ventas iniciales del CSV
- CRUD de ventas
- Persistencia en localStorage

#### 3. **clienteStore**
**Archivo**: `src/store/clienteStore.ts`  
- 12 clientes reales
- Historial de compras por cliente
- Límites de crédito y saldo de deuda

#### 4. **proveedorStore**
**Archivo**: `src/store/proveedorStore.ts`  
- Gestión de proveedores
- Productos por proveedor

#### 5. **ordenCompraStore**
**Archivo**: `src/store/ordenCompraStore.ts`  
- Órdenes de compra automatizadas
- `generarOrdenesAutomaticas()` - Crea órdenes según stock crítico
- Prevención de duplicados
- Estados: Borrador, Confirmada, Enviada, Recibida, Cancelada

---

## 🎨 Componentes Destacados

### Dashboard (`Reportes.tsx`)
Dashboard completo con todas las métricas del sistema:

**KPI Cards (4)**:
1. **Facturación Total**: Suma de todas las ventas
2. **Valor del Inventario**: Stock * precio de todos los productos
3. **Productos Críticos**: Cantidad bajo stock mínimo
4. **Sistema Activo**: Última actualización

**Resumen Operativo (6 métricas)**:
- Total Facturas
- Total Productos
- Total Entradas
- Total Salidas
- Órdenes Pendientes
- Lotes Activos

### Órdenes de Compra Automatizadas (`OrdenesCompra.tsx`)

**Información de Identificación de Cada Orden**:
- **Número de Orden**: Formato `OC-000001` (auto-incremental)
- **Fecha de Creación**: Timestamp completo con hora
- **Creada por**: Usuario que generó la orden
- **Proveedor**: Nombre del proveedor asociado
- **Estado**: Borrador, Enviada, Confirmada, Recibida Parcial, Recibida Completa, Cancelada
- **Fecha de Orden**: Día que se creó el pedido
- **Fecha de Entrega Estimada**: Calculada según días de pago del proveedor
- **Fecha de Envío**: Cuando se marcó como enviada (opcional)
- **Fecha de Recepción**: Cuando se recibió la mercadería (opcional)
- **Indicador Auto**: Si fue generada automáticamente por stock bajo

**Visualización en Card**:
- Número de orden en grande y bold
- Badge de "🤖 Auto" si fue generada automáticamente
- Proveedor en texto destacado
- Creador y timestamp de creación en texto pequeño
- Grid con 4 datos clave: Fecha de Orden, Entrega Estimada, Productos, Total
- Badges de fechas de envío y recepción (📤/📥)
- Barra de progreso de recepción con porcentaje
- Observaciones en texto pequeño

**Visualización en Detalle**:
- Header con gradiente naranja
- Número de orden + estado + badge de auto-generación
- Proveedor, creador y fecha/hora completa de creación
- Grid con información clave (fecha, entrega, productos, total)
- Sección especial para fechas de envío y recepción (día de la semana completo)
- Tabla completa de items con cantidades solicitadas vs recibidas
- Totales (subtotal, IVA, total)
- Observaciones completas

**Función**: `generarOrdenesAutomaticas()`
- Calcula stock real de cada producto
- Identifica productos críticos (stock < mínimo)
- Agrupa por proveedor
- Calcula cantidad a pedir (hasta stock máximo)
- Previene duplicados (verifica órdenes pendientes)
- Genera observaciones automáticas con nivel de criticidad
- Asigna número de orden único
- Registra creador ("Sistema Automático")
- Calcula fecha de entrega estimada
- Indicadores visuales:
  - 🔴 **URGENTE**: Stock = 0
  - 🟠 **CRÍTICO**: Stock < 30% del mínimo
  - 🟡 **BAJO**: Stock < mínimo
  - 🔵 **✓ ORDEN PENDIENTE**: Ya tiene orden

### Cálculo de Stock Real
**Archivo**: `src/store/movimientoStore.ts`  
**Función**: `calcularStockActual(productoId)`

```typescript
// 1. Obtiene stock base del producto
let stock = producto.stockActual || 0;

// 2. Aplica movimientos
movimientos
  .filter(m => m.productoId === productoId)
  .forEach(m => {
    if (m.tipo === 'ENTRADA') stock += m.cantidad;
    if (m.tipo === 'SALIDA') stock -= m.cantidad;
  });

return stock;
```

---

## 📁 Archivos de Configuración

### `app.yaml`
Configuración de Google App Engine:
```yaml
runtime: python312
instance_class: F1

handlers:
  - url: /assets
    static_dir: dist/assets
    secure: always
    expiration: "30d"
    
  - url: /(.+)
    static_files: dist/\1
    upload: dist/(.*)
    secure: always
    
  - url: /.*
    static_files: dist/index.html
    upload: dist/index.html
    secure: always

automatic_scaling:
  min_idle_instances: 0
  max_idle_instances: 1
```

### `.gcloudignore`
Archivos excluidos del deployment:
- `node_modules/`, `src/`, `public/`, `scripts/`
- `Info/` (CSV históricos)
- Archivos de configuración de desarrollo
- Documentación `.md`

### `package.json` - Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "deploy": "npm run build && gcloud app deploy --quiet --project=tupac-478123",
    "deploy:quick": "gcloud app deploy --quiet --project=tupac-478123",
    "logs": "gcloud app logs tail -s default --project=tupac-478123",
    "open": "gcloud app browse --project=tupac-478123"
  }
}
```

---

## 🔐 Deployment en Google Cloud

### Información del Proyecto
- **Project ID**: `tupac-478123`
- **Project Number**: `725736977470`
- **Región**: `us-central`
- **URL**: https://tupac-478123.uc.r.appspot.com

### Proceso de Deployment
1. **Build local**: `npm run build` → Genera `dist/`
2. **Upload**: Solo se sube `dist/` + `app.yaml`
3. **Deploy**: `gcloud app deploy`
4. **Tamaño**: ~5.8MB total
   - 1.8MB JS (gzip: 336KB)
   - 38KB CSS (gzip: 7KB)
   - Imágenes de productos

### Características del Deploy
- ✅ SPA routing (todas las rutas → `index.html`)
- ✅ HTTPS forzado
- ✅ Cache de assets: 30 días
- ✅ Escalado automático: 0-1 instancias
- ✅ Python 3.12 runtime (solo archivos estáticos)

---

## 🗃️ Persistencia de Datos

### localStorage Keys
```javascript
// Stores principales
'productos-storage'        // Lista de productos
'movimientos-storage'      // Historial de movimientos
'lotes-storage'           // Lotes con vencimientos
'alertas-storage'         // Alertas generadas

// Stores adicionales
'ventas-store'            // Ventas registradas
'clientes-store'          // Clientes y su data
'proveedores-store'       // Proveedores
'ordenes-compra-store'    // Órdenes de compra
```

### Inicialización
Al cargar la app por primera vez:
1. Carga 473 productos desde `src/data/productos.ts`
2. Carga 376 movimientos desde `src/data/movimientos.ts`
3. Carga 360 ventas desde `src/data/ventas-iniciales.ts`
4. Carga 87 lotes desde `src/data/lotes.ts`
5. Carga 12 clientes desde `src/data/clientes.ts`
6. Guarda todo en localStorage
7. En recargas subsecuentes usa localStorage

---

## 📈 Estadísticas del Sistema

### Productos
- **Total**: 473 productos
- **Categorías**: Lácteos, Embutidos, Bebidas, Panadería, etc.
- **Con imágenes**: ~40 productos tienen fotos reales

### Movimientos
- **Total**: 376 movimientos
- **Entradas**: ~188 movimientos
- **Salidas**: ~188 movimientos
- **Período**: Mayo 2018 (datos históricos)

### Ventas
- **Total facturas**: 360
- **Período**: Mayo 2018
- **Clientes únicos**: 12
- **Facturación total**: Calculada en reportes

### Lotes
- **Total**: 87 lotes
- **Activos**: Varía según fecha actual
- **Próximos a vencer**: < 30 días
- **Productos perecederos**: Lácteos, embutidos

---

## 🛠️ Mantenimiento y Desarrollo

### Agregar un nuevo producto
1. Ir a `/productos`
2. Click en "Nuevo Producto"
3. Llenar formulario
4. Se guarda en `useStore` → localStorage

### Registrar entrada/salida
1. Ir a `/inventario`
2. Click en "Nueva Entrada" o "Nueva Salida"
3. Seleccionar producto, cantidad, lote (si aplica)
4. Se actualiza stock automáticamente

### Generar órdenes de compra
1. Ir a `/ordenes-compra`
2. Click en "Generar Órdenes Automáticas"
3. Sistema analiza stock crítico
4. Crea órdenes por proveedor
5. Previene duplicados

### Ver reportes completos
1. Ir a `/reportes`
2. Dashboard con:
   - KPIs principales
   - Resumen operativo
   - Todo calculado en tiempo real

---

## 🐛 Resolución de Problemas

### El stock no se actualiza
- Verificar que `calcularStockActual()` esté sumando/restando correctamente
- Revisar que los movimientos tengan `productoId` correcto
- Chequear localStorage para ver datos guardados

### Las órdenes se duplican
- `generarOrdenesAutomaticas()` verifica órdenes existentes
- Solo crea órdenes si no existe una pendiente/confirmada/enviada
- Borrar órdenes canceladas si es necesario

### Deployment falla
- Verificar que `npm run build` funcione localmente
- Revisar que `.gcloudignore` no excluya `dist/`
- Confirmar que `app.yaml` tenga runtime correcto
- Ver logs: `npm run logs`

### Datos no persisten
- Verificar que localStorage esté habilitado
- Chequear console para errores de localStorage
- Limpiar localStorage y recargar si hay corrupción

---

## 📝 Notas Importantes

### Datos Reales vs Mock
✅ **TODO el sistema usa datos REALES** del CSV histórico:
- ❌ NO hay datos mock en producción
- ✅ 473 productos reales
- ✅ 376 movimientos reales
- ✅ 360 facturas reales
- ✅ 12 clientes reales

### Cálculos en Tiempo Real
Todos los reportes calculan valores en tiempo real:
- Stock actual = base + entradas - salidas
- Facturación = suma de ventas completadas
- Productos críticos = stock < stockMinimo
- Valor inventario = sum(stock * precio)

### Próximos Pasos Sugeridos
1. ⭐ Integrar backend real (API REST)
2. 🔐 Autenticación con usuarios reales
3. 📧 Notificaciones por email para alertas
4. 📱 App móvil (React Native)
5. 🤖 Machine Learning para predicción de demanda
6. 📊 Reportes en PDF exportables
7. 🔄 Sincronización multi-dispositivo

---

## 👤 Créditos

**Desarrollado para**: Tupac Supermayorista  
**Datos**: CSV históricos Mayo 2018  
**Tecnología**: React + TypeScript + Vite + Zustand  
**Hosting**: Google App Engine  
**Fecha**: Noviembre 2025

---

## 📞 Soporte

Para issues o mejoras, revisar:
- Logs de App Engine: https://console.cloud.google.com/logs
- Build logs: https://console.cloud.google.com/cloud-build
- App Engine dashboard: https://console.cloud.google.com/appengine

**Proyecto en producción**: https://tupac-478123.uc.r.appspot.com

---

*Última actualización: Noviembre 13, 2025*
