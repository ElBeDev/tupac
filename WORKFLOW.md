# Sistema de Inventario - Tupac Supermercado Mayorista

## Información de la Empresa

**Nombre:** Tupac Supermercado Mayorista  
**Dirección:** C. 87 6741, B1655 Villa José León Suárez, Provincia de Buenos Aires, Argentina  
**Tipo:** Supermercado Mayorista (Cash & Carry)

---

## Resumen Ejecutivo

Sistema integral de gestión de inventario diseñado específicamente para operaciones mayoristas en Argentina. El sistema permitirá control total sobre entradas, salidas, alertas de stock, gestión de vencimientos, reportes detallados y seguimiento de operaciones en tiempo real.

---

## Categorías de Productos (Mercado Argentino)

### 1. Almacén y Despensa
- Aceites (girasol, oliva, mezcla)
- Harinas (0000, 000, integral, leudante)
- Arroz (largo fino, doble carolina, integral)
- Fideos secos (todas las variedades)
- Legumbres (lentejas, porotos, garbanzos)
- Azúcar (común, impalpable)
- Sal fina y gruesa
- Yerba mate (con y sin palo)
- Café (molido, instantáneo, en grano)
- Té y saquitos
- Enlatados (tomate, arvejas, choclo, atún)
- Conservas
- Condimentos y especias

### 2. Bebidas
- Gaseosas (Coca-Cola, Pepsi, líneas locales)
- Aguas (mineral, saborizada)
- Jugos concentrados y listos
- Cervezas (Quilmes, Brahma, Stella, Andes)
- Vinos (tintos, blancos, rosados)
- Aperitivos
- Energizantes

### 3. Lácteos y Refrigerados
- Leche (entera, descremada, larga vida)
- Yogures
- Quesos (cremoso, rallado, untable, de máquina)
- Manteca
- Margarina
- Dulce de leche
- Fiambres y embutidos

### 4. Panificación y Congelados
- Pan fresco y envasado
- Facturas y productos de panadería
- Pizzas congeladas
- Hamburguesas y milanesas congeladas
- Papas congeladas
- Helados (palitos, potes, postres helados)
- Verduras congeladas

### 5. Limpieza e Higiene
- Detergentes
- Lavandina
- Suavizantes
- Jabones
- Papel higiénico
- Servilletas
- Bolsas de residuo
- Desinfectantes
- Productos de limpieza (pisos, baños, vidrios)

### 6. Perfumería y Cuidado Personal
- Champú y acondicionador
- Jabones de tocador
- Cremas dentales
- Cepillos de dientes
- Desodorantes
- Papel tissue
- Toallas femeninas
- Pañales

### 7. Golosinas y Snacks
- Alfajores (Jorgito, Terrabusi, Havanna)
- Galletitas dulces y saladas
- Chocolates (Milka, Cadbury, Águila)
- Caramelos y chupetines
- Papas fritas y snacks
- Frutos secos
- Barras de cereal

---

## Arquitectura del Sistema

### Stack Tecnológico

**Frontend:**
- React 18 con TypeScript
- Vite como build tool
- TailwindCSS para estilos
- shadcn/ui para componentes
- React Router para navegación
- Zustand para gestión de estado
- React Query para data fetching
- Recharts para gráficos y reportes

**Backend:**
- Node.js con Express
- TypeScript
- PostgreSQL como base de datos principal
- Prisma ORM
- JWT para autenticación
- Zod para validación de datos

**Adicionales:**
- Docker para containerización
- Nginx como reverse proxy (producción)

---

## Estructura del Proyecto

```
tupacsupermayorista/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                 # Componentes base (shadcn/ui)
│   │   │   ├── layout/             # Header, Sidebar, Footer
│   │   │   ├── productos/          # Gestión de productos
│   │   │   ├── inventario/         # Control de inventario
│   │   │   ├── movimientos/        # Entradas/Salidas
│   │   │   ├── alertas/            # Sistema de alertas
│   │   │   ├── reportes/           # Gráficos y reportes
│   │   │   └── dashboard/          # Panel principal
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── types/
│   │   ├── utils/
│   │   └── lib/
│   ├── public/
│   │   └── images/
│   │       └── productos/          # Imágenes de productos
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── types/
│   │   ├── utils/
│   │   └── prisma/
│   │       └── schema.prisma
│   └── package.json
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Modelo de Datos

### Entidades Principales

#### Productos
```
- id
- codigo_barras (EAN-13)
- nombre
- descripcion
- categoria_id
- marca
- proveedor_id
- unidad_medida (unidad, kg, litro, pack, etc.)
- precio_costo
- precio_venta_minorista
- precio_venta_mayorista
- stock_actual
- stock_minimo
- stock_maximo
- ubicacion_deposito
- imagen_url
- perecedero (boolean)
- fecha_creacion
- fecha_actualizacion
```

#### Categorías
```
- id
- nombre
- descripcion
- categoria_padre_id (subcategorías)
- icono
- orden
```

#### Movimientos de Inventario
```
- id
- tipo (ENTRADA, SALIDA, AJUSTE, DEVOLUCION)
- producto_id
- cantidad
- precio_unitario
- lote_numero
- fecha_vencimiento
- motivo
- usuario_id
- proveedor_id (para entradas)
- cliente_id (para salidas)
- documento_referencia
- observaciones
- fecha_movimiento
- fecha_creacion
```

#### Lotes
```
- id
- producto_id
- numero_lote
- fecha_ingreso
- fecha_vencimiento
- cantidad_inicial
- cantidad_actual
- proveedor_id
- costo_unitario
- estado (ACTIVO, VENCIDO, RETIRADO)
```

#### Alertas
```
- id
- tipo (STOCK_BAJO, VENCIMIENTO_PROXIMO, VENCIDO, STOCK_CRITICO)
- producto_id
- lote_id
- nivel_prioridad (BAJA, MEDIA, ALTA, CRITICA)
- mensaje
- leida (boolean)
- fecha_alerta
- fecha_leida
- usuario_asignado_id
```

#### Proveedores
```
- id
- nombre
- razon_social
- cuit
- direccion
- telefono
- email
- contacto_nombre
- condiciones_pago
- dias_entrega
- activo
```

#### Usuarios
```
- id
- username
- email
- password_hash
- nombre_completo
- rol (ADMIN, GERENTE, OPERARIO, CONSULTA)
- activo
- ultimo_acceso
- fecha_creacion
```

---

## Funcionalidades Principales

### 1. Dashboard Principal
- Resumen de stock total por categoría
- Productos con stock crítico (debajo del mínimo)
- Alertas pendientes (cantidad por tipo)
- Gráfico de movimientos del mes
- Valor total del inventario
- Productos próximos a vencer (30 días)
- Top 10 productos más vendidos
- Top 10 productos con menos rotación

### 2. Gestión de Productos
- Listado completo con búsqueda y filtros
- Búsqueda por código de barras
- Crear/Editar/Eliminar productos
- Importación masiva (CSV/Excel)
- Gestión de imágenes
- Historial de cambios de precio
- Categorización jerárquica
- Asignación de ubicación en depósito

### 3. Control de Inventario
- Vista de stock actual por producto
- Stock por lote y fecha de vencimiento
- Kardex de movimientos por producto
- Valorización de inventario (FIFO, LIFO, Promedio)
- Reporte de productos inactivos
- Ajustes de inventario (mermas, roturas)

### 4. Entradas de Mercadería
- Registro de compras/recepciones
- Asociación con proveedor
- Registro de número de lote
- Fecha de vencimiento
- Costo unitario
- Generación de remitos
- Actualización automática de stock

### 5. Salidas de Mercadería
- Registro de ventas mayoristas
- Ventas minoristas
- Devoluciones
- Transferencias entre depósitos
- Descuento automático de stock
- Método FIFO automático (lo primero que vence, sale primero)

### 6. Sistema de Alertas
- Stock bajo mínimo (configurable por producto)
- Stock crítico (0 unidades)
- Productos próximos a vencer (15, 7, 3 días)
- Productos vencidos
- Alertas personalizadas
- Notificaciones en tiempo real
- Panel de alertas con priorización
- Historial de alertas

### 7. Gestión de Lotes y Vencimientos
- Seguimiento de lotes por producto
- Control de fechas de vencimiento
- Rotación FIFO automática
- Reporte de productos a vencer por período
- Gestión de productos vencidos (baja/destrucción)
- Alertas escalonadas de vencimiento

### 8. Reportes y Análisis
- Reporte de movimientos por período
- Reporte de ventas por categoría/producto
- Análisis de rotación de inventario
- Productos de baja rotación
- Valorización de stock
- Comparativas mensuales
- Exportación a PDF/Excel
- Gráficos interactivos

### 9. Gestión de Proveedores
- Listado de proveedores
- Historial de compras por proveedor
- Productos por proveedor
- Evaluación de proveedores (tiempos, precios)
- Datos de contacto y condiciones

### 10. Auditoría y Trazabilidad
- Registro de todos los movimientos
- Quién, cuándo, qué (log de cambios)
- Historial de ajustes
- Registro de usuarios y accesos
- Backup automático de datos

---

## Flujo de Operaciones

### Flujo de Entrada de Mercadería
1. Se recibe mercadería del proveedor
2. Operario registra entrada en el sistema
3. Escaneo de código de barras o búsqueda manual
4. Ingreso de cantidad, lote, fecha de vencimiento
5. Registro de costo unitario
6. Sistema actualiza stock automáticamente
7. Si el producto está debajo del stock mínimo y ahora lo supera, se cierra alerta
8. Se genera comprobante/remito de entrada

### Flujo de Salida de Mercadería
1. Cliente realiza pedido/compra
2. Operario registra venta en el sistema
3. Escaneo de productos vendidos
4. Sistema aplica FIFO (descuenta del lote más antiguo primero)
5. Actualización automática de stock
6. Si el stock baja del mínimo, se genera alerta
7. Se genera comprobante de salida/factura

### Flujo de Alertas
1. Sistema ejecuta verificaciones automáticas (cada 6 horas)
2. Detecta condiciones: stock bajo, vencimientos próximos
3. Genera alerta con nivel de prioridad
4. Notifica a usuarios según rol
5. Usuario revisa y toma acción
6. Usuario marca alerta como resuelta
7. Sistema registra la resolución

### Flujo de Reporte
1. Usuario selecciona tipo de reporte
2. Define período y filtros
3. Sistema procesa datos
4. Genera visualización (tablas/gráficos)
5. Opción de exportar (PDF/Excel)
6. Sistema guarda historial de reportes generados

---

## Niveles de Acceso

### ADMIN (Administrador)
- Acceso completo al sistema
- Gestión de usuarios
- Configuración del sistema
- Todos los reportes
- Auditoría completa

### GERENTE
- Gestión de productos
- Entradas y salidas
- Ajustes de inventario
- Reportes completos
- Gestión de proveedores
- Ver alertas y resolverlas

### OPERARIO
- Registro de entradas
- Registro de salidas
- Consulta de stock
- Ver alertas
- Reportes básicos

### CONSULTA
- Solo lectura
- Consulta de stock
- Reportes básicos
- No puede modificar datos

---

## Interfaz y Diseño

### Paleta de Colores Sugerida
- **Principal:** #1e40af (azul profesional)
- **Secundario:** #059669 (verde para éxitos/stock OK)
- **Advertencia:** #ea580c (naranja para alertas medias)
- **Peligro:** #dc2626 (rojo para crítico/vencido)
- **Neutro:** #64748b (grises para elementos secundarios)
- **Fondo:** #f8fafc (gris muy claro)

### Layout Principal
- Sidebar izquierdo con navegación
- Header superior con usuario, notificaciones, búsqueda rápida
- Área de contenido principal
- Diseño responsivo (móvil, tablet, desktop)

### Páginas Principales
1. Dashboard (vista general)
2. Productos (listado y gestión)
3. Inventario (control de stock)
4. Movimientos (entradas/salidas)
5. Lotes y Vencimientos
6. Alertas
7. Reportes
8. Proveedores
9. Configuración
10. Usuarios (solo admin)

---

## Fases de Implementación

### Fase 1: Fundación (Semanas 1-2)
- Configuración inicial del proyecto
- Setup de base de datos
- Estructura de carpetas
- Configuración de TypeScript, ESLint, Prettier
- Instalación de dependencias principales
- Docker setup

### Fase 2: Backend Core (Semanas 3-4)
- Modelo de datos en Prisma
- Migraciones de base de datos
- API de autenticación (JWT)
- CRUD de productos
- CRUD de categorías
- CRUD de proveedores
- API de movimientos

### Fase 3: Frontend Base (Semanas 5-6)
- Setup de React + Vite + TypeScript
- Configuración de TailwindCSS + shadcn/ui
- Sistema de routing
- Layout principal (Header, Sidebar)
- Sistema de autenticación (login/logout)
- Gestión de estado con Zustand

### Fase 4: Módulo de Productos (Semana 7)
- Listado de productos
- Formulario crear/editar producto
- Búsqueda y filtros
- Upload de imágenes
- Vista detalle de producto

### Fase 5: Módulo de Inventario (Semana 8)
- Vista de stock actual
- Registro de entradas
- Registro de salidas
- Ajustes de inventario
- Integración con productos

### Fase 6: Sistema de Lotes (Semana 9)
- Gestión de lotes
- Control de vencimientos
- FIFO automático
- Vista de lotes por producto

### Fase 7: Sistema de Alertas (Semana 10)
- Motor de alertas backend
- Panel de alertas frontend
- Notificaciones en tiempo real
- Configuración de umbrales

### Fase 8: Dashboard y Reportes (Semana 11)
- Dashboard con KPIs
- Gráficos con Recharts
- Generación de reportes
- Exportación PDF/Excel

### Fase 9: Funcionalidades Avanzadas (Semana 12)
- Auditoría completa
- Historial de cambios
- Búsqueda por código de barras
- Importación masiva de productos

### Fase 10: Testing y Deploy (Semana 13)
- Testing unitario y de integración
- Optimización de performance
- Configuración de producción
- Deploy en servidor
- Documentación de usuario

---

## Requisitos Técnicos

### Servidor
- CPU: 4 cores mínimo
- RAM: 8GB mínimo (16GB recomendado)
- Almacenamiento: 100GB SSD
- Sistema Operativo: Ubuntu 22.04 LTS / Docker

### Base de Datos
- PostgreSQL 15+
- Backup automático diario
- Replicación recomendada para producción

### Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Seguridad

- Autenticación con JWT
- Passwords hasheados con bcrypt
- Validación de datos en backend con Zod
- Sanitización de inputs
- HTTPS obligatorio en producción
- CORS configurado apropiadamente
- Rate limiting en API
- Logs de acceso y auditoría
- Backups encriptados

---

## Mantenimiento

### Tareas Automáticas
- Verificación de alertas cada 6 horas
- Backup de base de datos diario (3:00 AM)
- Limpieza de logs antiguos (mensuales)
- Actualización de stock crítico

### Tareas Manuales
- Revisión de productos vencidos (semanal)
- Análisis de productos de baja rotación (mensual)
- Auditoría de inventario física (trimestral)
- Actualización de precios (según necesidad)

---

## Entregables

1. Código fuente completo (Frontend + Backend)
2. Base de datos con schema
3. Documentación técnica
4. Manual de usuario
5. Manual de instalación y deploy
6. Imágenes de productos de ejemplo
7. Datos de prueba (seed data)
8. Scripts de backup y mantenimiento

---

## Presupuesto Estimado de Horas

- Setup y configuración: 20 horas
- Backend API: 80 horas
- Frontend: 100 horas
- Sistema de alertas: 15 horas
- Reportes: 20 horas
- Testing: 25 horas
- Deploy y documentación: 15 horas
- **Total: ~275 horas**

---

## Próximos Pasos

1. Revisar y aprobar este workflow
2. Crear repositorio Git
3. Setup inicial del proyecto
4. Comenzar con Fase 1: Fundación
5. Desarrollo iterativo por fases
6. Testing continuo
7. Deploy a producción

---

## Notas Adicionales

- El sistema será multiusuario con control de acceso
- Todas las operaciones críticas quedan registradas para auditoría
- El diseño será clean y profesional, enfocado en usabilidad
- Se priorizará la velocidad en operaciones frecuentes (entradas/salidas)
- Los reportes serán exportables para integración con sistemas contables
- Se incluirán productos de ejemplo con imágenes reales de marcas argentinas

---

**Fecha de creación:** 10 de Noviembre de 2025  
**Versión:** 1.0  
**Estado:** Pendiente de aprobación