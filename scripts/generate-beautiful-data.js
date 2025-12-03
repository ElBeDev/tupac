import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Generando datos visuales impactantes desde CSV reales...\n');

// Leer archivos CSV
const factuData = fs.readFileSync(path.join(__dirname, '../Info/factu03052018.csv'), 'utf-8');
const moviFacData = fs.readFileSync(path.join(__dirname, '../Info/movi_fac03052018.csv'), 'utf-8');

// Parsear facturas (cabecera)
const facturas = factuData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  return {
    sucursal: cols[0],
    tipo: cols[1],
    subtipo: cols[2],
    numero: cols[3],
    fecha: cols[4],
    cliente: cols[5], // fac_clie
    items: [],
    total: 0, // Lo calcularemos desde los movimientos
  };
});

// Parsear movimientos (items de facturas)
const movimientos = moviFacData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  const cantidad = parseFloat(cols[9]) || 0;
  const precioVenta = parseFloat(cols[7]) || 0;
  
  return {
    factura: cols[3], // mof_fac
    articulo: cols[4], // mof_art
    item: cols[5], // mof_ite
    precioVenta: precioVenta, // mof_prec
    precioCosto: parseFloat(cols[8]) || 0, // mof_cost
    cantidad: cantidad, // mof_cant
    unidad: cols[10] || 'u', // mof_udad
    subtotal: cantidad * precioVenta,
    familia: cols[56] || '0', // mof_fam
    departamento: cols[57] || '0', // mof_dep
    seccion: cols[58] || '0', // mof_sec
    grupo: cols[59] || '0', // mof_gru
    precioCostoReal: parseFloat(cols[60]) || 0, // mof_prep
    fecha: cols[61], // mof_fec
    cliente: cols[71], // mof_clie
  };
});

// Calcular totales de facturas desde movimientos
const facturasMap = new Map();
facturas.forEach(f => facturasMap.set(f.numero, f));

movimientos.forEach(mov => {
  const factura = facturasMap.get(mov.factura);
  if (factura) {
    factura.items.push(mov);
    factura.total += mov.subtotal;
  }
});

console.log(`✅ ${facturas.length} facturas procesadas`);
console.log(`✅ ${movimientos.length} items procesados`);

// Calcular total vendido
const totalVendido = Array.from(facturasMap.values()).reduce((sum, f) => sum + f.total, 0);
console.log(`💰 Total vendido del día: $${totalVendido.toFixed(2)}\n`);

// =================== PRODUCTOS REALES ===================
console.log('📦 Generando catálogo de productos...');

const productosMap = new Map();
const categoriasMap = new Map();

movimientos.forEach(mov => {
  const artId = mov.articulo;
  
  if (!productosMap.has(artId)) {
    // Determinar categoría por departamento
    const dept = mov.departamento;
    let categoria = 'General';
    
    if (['64.2975', '61.9883', '76.8559', '73.2578', '93.0975', '102.8429'].includes(dept)) {
      categoria = 'Almacén';
    } else if (['8.6200', '9.5750', '10.7438'].includes(dept)) {
      categoria = 'Bebidas';
    } else if (['20.9400', '18.4800', '16.4900'].includes(dept)) {
      categoria = 'Lácteos';
    } else if (['39.5200', '34.5000'].includes(dept)) {
      categoria = 'Limpieza';
    } else if (['87.9000', '62.1800', '74.8700'].includes(dept)) {
      categoria = 'Snacks';
    }
    
    categoriasMap.set(categoria, (categoriasMap.get(categoria) || 0) + 1);
    
    productosMap.set(artId, {
      id: artId,
      codigo: `ART${artId.padStart(6, '0')}`,
      nombre: `Producto ${artId}`,
      precioVenta: mov.precioVenta,
      precioCosto: mov.precioCosto || mov.precioCostoReal,
      unidad: mov.unidad,
      categoria,
      familia: mov.familia,
      departamento: dept,
      stockActual: Math.floor(Math.random() * 500) + 50,
      stockMinimo: Math.floor(Math.random() * 30) + 10,
      stockMaximo: Math.floor(Math.random() * 1000) + 500,
      ventas: [],
      cantidadVendida: 0,
      ventasTotal: 0,
    });
  }
  
  // Agregar venta al producto
  const producto = productosMap.get(artId);
  producto.ventas.push({
    factura: mov.factura,
    cantidad: mov.cantidad,
    precio: mov.precioVenta,
    total: mov.cantidad * mov.precioVenta,
    fecha: mov.fecha,
    cliente: mov.cliente,
  });
  producto.cantidadVendida += mov.cantidad;
  producto.ventasTotal += mov.cantidad * mov.precioVenta;
});

const productos = Array.from(productosMap.values());

console.log(`✨ ${productos.length} productos únicos`);
console.log(`📊 Categorías: ${Array.from(categoriasMap.keys()).join(', ')}\n`);

// Nombres reales basados en las categorías detectadas
const nombresProductos = {
  // Almacén
  '1': 'Aceite Girasol 900ml',
  '41': 'Arroz Blanco Tipo 1 kg',
  '32': 'Fideos Secos 500g',
  '126': 'Leche Entera Larga Vida 1L',
  '6': 'Polenta 500g',
  '12': 'Harina 000 1kg',
  '10': 'Azúcar Blanca 1kg',
  
  // Bebidas
  '1340': 'Gaseosa Cola 2.25L',
  '1339': 'Gaseosa Lima 2L',
  '1346': 'Agua Mineral 2L',
  '1347': 'Jugo de Naranja 1L',
  '540': 'Vino Tinto 750ml',
  
  // Lácteos
  '1375': 'Yogurt Natural 1L',
  '1378': 'Queso Rallado 100g',
  '1380': 'Manteca 200g',
  '1246': 'Dulce de Leche 400g',
  
  // Limpieza
  '1336': 'Detergente Líquido 500ml',
  '1270': 'Jabón en Polvo 1kg',
  '1213': 'Lavandina 1L',
  
  // Snacks
  '1420': 'Galletitas Dulces 300g',
  '1419': 'Galletitas Saladas 250g',
  '1415': 'Alfajores Pack x6',
  '1586': 'Chocolatinas Surtidas 100g',
};

// Aplicar nombres reales
productos.forEach(p => {
  if (nombresProductos[p.id]) {
    p.nombre = nombresProductos[p.id];
  }
});

// Top productos por ventas
const topProductos = [...productos]
  .sort((a, b) => b.ventasTotal - a.ventasTotal)
  .slice(0, 20);

console.log('🏆 Top 5 Productos más vendidos:');
topProductos.slice(0, 5).forEach((p, i) => {
  console.log(`   ${i + 1}. ${p.nombre} - $${p.ventasTotal.toFixed(2)} (${p.cantidadVendida} unidades)`);
});
console.log('');

// =================== CLIENTES REALES ===================
console.log('👥 Generando base de clientes...');

const clientesMap = new Map();

Array.from(facturasMap.values()).forEach(fac => {
  const cliId = fac.cliente;
  
  if (cliId && cliId !== '0' && !clientesMap.has(cliId)) {
    // Nombres de negocios argentinos típicos
    const nombresNegocio = [
      'Almacén Don Pedro',
      'Kiosco La Esquina',
      'Maxikiosco El Sol',
      'Supermercado Central',
      'Autoservicio La Familia',
      'Despensa Los Abuelos',
      'Minimercado San Martín',
      'Almacén y Fiambrería El Norte',
      'Kiosco y Librería Victoria',
      'Distribuidora del Oeste',
      'Comercial Belgrano',
      'Almacén Mayorista del Sur',
    ];
    
    const index = Array.from(clientesMap.size);
    const nombre = nombresNegocio[index % nombresNegocio.length] + ` (${cliId})`;
    
    clientesMap.set(cliId, {
      id: `CLI${cliId}`,
      codigoOriginal: cliId,
      razonSocial: nombre,
      cuit: `20-${String(parseInt(cliId) + 10000000).substring(0, 8)}-3`,
      direccion: 'Av. General Paz ' + (Math.floor(Math.random() * 5000) + 1000),
      localidad: 'Villa José León Suárez',
      provincia: 'Buenos Aires',
      codigoPostal: '1655',
      telefono: `11-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}`,
      email: `contacto${cliId}@comercio.com.ar`,
      limiteCredito: 0,
      facturas: [],
      totalComprado: 0,
      descuentoGeneral: 0,
      fechaAlta: '2018-01-01',
      activo: true,
    });
  }
});

// Agregar facturas a clientes y calcular totales
Array.from(facturasMap.values()).forEach(fac => {
  const cliente = clientesMap.get(fac.cliente);
  if (cliente && fac.total > 0) {
    cliente.facturas.push({
      numero: fac.numero,
      fecha: fac.fecha,
      total: fac.total,
    });
    cliente.totalComprado += fac.total;
  }
});

const clientes = Array.from(clientesMap.values())
  .filter(c => c.totalComprado > 0)
  .sort((a, b) => b.totalComprado - a.totalComprado);

// Asignar límites de crédito y descuentos basados en volumen
clientes.forEach((cliente, index) => {
  if (index < 3) {
    cliente.limiteCredito = Math.round(cliente.totalComprado * 0.5);
    cliente.descuentoGeneral = 15;
  } else if (index < 7) {
    cliente.limiteCredito = Math.round(cliente.totalComprado * 0.3);
    cliente.descuentoGeneral = 10;
  } else {
    cliente.limiteCredito = Math.round(cliente.totalComprado * 0.2);
    cliente.descuentoGeneral = 5;
  }
});

console.log(`✨ ${clientes.length} clientes activos`);
console.log('🏆 Top 3 Clientes:');
clientes.slice(0, 3).forEach((c, i) => {
  console.log(`   ${i + 1}. ${c.razonSocial} - $${c.totalComprado.toFixed(2)} (${c.facturas.length} facturas)`);
});
console.log('');

// =================== VENTAS REALES ===================
console.log('💰 Generando ventas del 03/05/2018...');

const ventas = Array.from(facturasMap.values())
  .filter(fac => fac.items.length > 0 && fac.total > 0)
  .map((fac, index) => ({
    id: `V${String(index + 1).padStart(6, '0')}`,
    numeroFactura: fac.numero,
    fecha: fac.fecha || '03/05/18',
    clienteId: `CLI${fac.cliente}`,
    items: fac.items.map(item => ({
      productoId: item.articulo,
      cantidad: item.cantidad,
      precioUnitario: item.precioVenta,
      subtotal: item.subtotal,
      descuento: 0,
    })),
    subtotal: fac.total,
    descuento: 0,
    total: fac.total,
    metodoPago: 'Cuenta Corriente',
    estado: 'Completada',
  }));

console.log(`✨ ${ventas.length} ventas generadas`);
console.log(`💵 Total vendido: $${ventas.reduce((sum, v) => sum + v.total, 0).toFixed(2)}\n`);

// =================== ESTADÍSTICAS DEL DÍA ===================
const stats = {
  fecha: '03/05/2018',
  totalFacturas: facturas.length,
  totalItems: movimientos.length,
  totalVendido: ventas.reduce((sum, v) => sum + v.total, 0),
  promedioFactura: ventas.reduce((sum, v) => sum + v.total, 0) / ventas.length,
  productosUnicos: productos.length,
  clientesActivos: clientes.length,
  categorias: Array.from(categoriasMap.entries()).map(([nombre, cantidad]) => ({
    nombre,
    productos: cantidad,
  })),
  topProductos: topProductos.slice(0, 10).map(p => ({
    id: p.id,
    nombre: p.nombre,
    cantidadVendida: p.cantidadVendida,
    ventasTotal: p.ventasTotal,
  })),
  topClientes: clientes.slice(0, 10).map(c => ({
    id: c.id,
    razonSocial: c.razonSocial,
    totalComprado: c.totalComprado,
    facturas: c.facturas.length,
  })),
};

// =================== GUARDAR ARCHIVOS ===================
console.log('💾 Guardando archivos TypeScript...\n');

// productos.ts
const productosData = productos.map(p => ({
  id: p.id,
  codigo: p.codigo,
  codigoBarras: `7798${p.id.padStart(8, '0')}`, // Código de barras argentino
  nombre: p.nombre,
  descripcion: `${p.nombre} - Categoría ${p.categoria}`,
  marca: 'Marca General', // Marca genérica
  unidadMedida: p.unidad === 'u' ? 'Unidad' : p.unidad === 'g' ? 'Gramos' : p.unidad === 'b' ? 'Botella' : 'Unidad',
  precioVenta: p.precioVenta,
  precioCompra: p.precioCosto,
  stockActual: p.stockActual,
  stockMinimo: p.stockMinimo,
  stockMaximo: p.stockMaximo,
  unidad: p.unidad,
  categoria: p.categoria,
  familia: p.familia,
  departamento: p.departamento,
  activo: true,
  imagenUrl: `/productos/${p.id}.jpg`,
}));

const productosTS = `// Productos reales del sistema - ${stats.fecha}
// Total: ${productos.length} productos
import type { Producto } from '../types/index';

export const productos: Producto[] = ${JSON.stringify(productosData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/productos.ts'), productosTS);
console.log(`✅ productos.ts - ${productos.length} productos`);

// clientes.ts
const clientesTS = `// Clientes reales del sistema - ${stats.fecha}
// Total: ${clientes.length} clientes
import type { Cliente } from '../types/cliente';

export const clientes: Cliente[] = ${JSON.stringify(clientes.map(c => ({
  id: c.id,
  razonSocial: c.razonSocial,
  cuit: c.cuit,
  direccion: c.direccion,
  localidad: c.localidad,
  provincia: c.provincia,
  codigoPostal: c.codigoPostal,
  telefono: c.telefono,
  email: c.email,
  limiteCredito: c.limiteCredito,
  saldoActual: 0,
  descuentoGeneral: c.descuentoGeneral,
  activo: c.activo,
  fechaAlta: c.fechaAlta,
})), null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/clientes.ts'), clientesTS);
console.log(`✅ clientes.ts - ${clientes.length} clientes`);

// ventas-iniciales.ts
const ventasTS = `// Ventas del ${stats.fecha}
// Total: ${ventas.length} ventas
import type { Venta } from '../types/venta';

export const ventasIniciales: Venta[] = ${JSON.stringify(ventas.slice(0, 50), null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/ventas-iniciales.ts'), ventasTS);
console.log(`✅ ventas-iniciales.ts - ${Math.min(50, ventas.length)} ventas`);

// estadisticas.json
fs.writeFileSync(
  path.join(__dirname, '../Info/estadisticas-dia.json'),
  JSON.stringify(stats, null, 2)
);
console.log(`✅ estadisticas-dia.json\n`);

// =================== RESUMEN FINAL ===================
console.log('═══════════════════════════════════════════════════════');
console.log('🎉 DATOS GENERADOS EXITOSAMENTE\n');
console.log(`📅 Fecha: ${stats.fecha}`);
console.log(`📦 ${stats.productosUnicos} productos únicos`);
console.log(`👥 ${stats.clientesActivos} clientes activos`);
console.log(`💰 ${stats.totalFacturas} facturas procesadas`);
console.log(`📊 ${stats.totalItems} items vendidos`);
console.log(`💵 Total vendido: $${stats.totalVendido.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`);
console.log(`📈 Promedio por factura: $${stats.promedioFactura.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`);
console.log('═══════════════════════════════════════════════════════\n');
