import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer archivos CSV
const factuPath = path.join(__dirname, '../Info/factu03052018.csv');
const moviFacPath = path.join(__dirname, '../Info/movi_fac03052018.csv');
const cmovPath = path.join(__dirname, '../Info/cmovsto03052018.csv');
const dmovPath = path.join(__dirname, '../Info/dmovsto03052018.csv');

const factuData = fs.readFileSync(factuPath, 'utf-8');
const moviFacData = fs.readFileSync(moviFacPath, 'utf-8');
const cmovData = fs.readFileSync(cmovPath, 'utf-8');
const dmovData = fs.readFileSync(dmovPath, 'utf-8');

// Parsear facturas (cabecera)
const facturas = factuData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  return {
    sucursal: cols[0],
    tipo: cols[1],
    subtipo: cols[2],
    numero: cols[3],
    fecha: cols[4],
    cliente: cols[5],
    total: parseFloat(cols[58]) || 0,
    totalIVA: parseFloat(cols[52]) || 0,
    nombreCliente: cols[74] || 'Cliente',
    items: parseInt(cols[62]) || 0
  };
});

// Parsear movimientos de facturas (detalle)
const movimientos = moviFacData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  return {
    sucursal: cols[0],
    tipo: cols[1],
    subtipo: cols[2],
    factura: cols[3],
    articulo: cols[4],
    item: cols[5],
    devolucion: cols[6],
    precio: parseFloat(cols[7]) || 0,
    costo: parseFloat(cols[8]) || 0,
    cantidad: parseFloat(cols[9]) || 0,
    unidad: cols[10],
    scan: parseInt(cols[15]) || 0,
    familia: cols[43],
    departamento: cols[44],
    seccion: cols[45],
    grupo: cols[46],
    proveedor: cols[53],
    cliente: cols[54]
  };
});

// Parsear movimientos de stock (detalle)
const stockMovs = dmovData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  return {
    articulo: cols[5],
    unidad: cols[6],
    cantidad: parseFloat(cols[7]) || 0,
    precio: parseFloat(cols[8]) || 0,
    fecha: cols[13],
    estado: cols[4]
  };
});

// Análisis de productos
const productosMap = new Map();
movimientos.forEach(mov => {
  const artId = mov.articulo;
  if (!productosMap.has(artId)) {
    productosMap.set(artId, {
      id: artId,
      ventas: 0,
      cantidadVendida: 0,
      precioPromedio: 0,
      precios: [],
      costoPromedio: 0,
      costos: [],
      unidades: new Set(),
      familias: new Set(),
      departamentos: new Set(),
      proveedores: new Set(),
      clientes: new Set()
    });
  }
  
  const prod = productosMap.get(artId);
  prod.ventas++;
  prod.cantidadVendida += mov.cantidad;
  if (mov.precio > 0) prod.precios.push(mov.precio);
  if (mov.costo > 0) prod.costos.push(mov.costo);
  if (mov.unidad) prod.unidades.add(mov.unidad);
  if (mov.familia) prod.familias.add(mov.familia);
  if (mov.departamento) prod.departamentos.add(mov.departamento);
  if (mov.proveedor) prod.proveedores.add(mov.proveedor);
  if (mov.cliente) prod.clientes.add(mov.cliente);
});

// Calcular promedios
productosMap.forEach(prod => {
  if (prod.precios.length > 0) {
    prod.precioPromedio = prod.precios.reduce((a, b) => a + b, 0) / prod.precios.length;
  }
  if (prod.costos.length > 0) {
    prod.costoPromedio = prod.costos.reduce((a, b) => a + b, 0) / prod.costos.length;
  }
  prod.unidades = Array.from(prod.unidades);
  prod.familias = Array.from(prod.familias);
  prod.departamentos = Array.from(prod.departamentos);
  prod.proveedores = Array.from(prod.proveedores);
  prod.clientes = Array.from(prod.clientes);
  
  // Limpiar arrays temporales
  delete prod.precios;
  delete prod.costos;
});

// Análisis de clientes
const clientesMap = new Map();
facturas.forEach(fac => {
  const cliId = fac.cliente;
  if (!clientesMap.has(cliId)) {
    clientesMap.set(cliId, {
      id: cliId,
      nombre: fac.nombreCliente,
      facturas: 0,
      totalComprado: 0,
      items: 0
    });
  }
  
  const cli = clientesMap.get(cliId);
  cli.facturas++;
  cli.totalComprado += fac.total;
  cli.items += fac.items;
});

// Análisis de proveedores
const proveedoresSet = new Set();
movimientos.forEach(mov => {
  if (mov.proveedor && mov.proveedor !== '0') {
    proveedoresSet.add(mov.proveedor);
  }
});

// Estadísticas generales
const stats = {
  totalProductos: productosMap.size,
  totalClientes: clientesMap.size,
  totalProveedores: proveedoresSet.size,
  totalFacturas: facturas.length,
  totalMovimientos: movimientos.length,
  ventaTotal: facturas.reduce((sum, f) => sum + f.total, 0),
  promedioFactura: facturas.reduce((sum, f) => sum + f.total, 0) / facturas.length,
  productosTop: Array.from(productosMap.values())
    .sort((a, b) => b.ventas - a.ventas)
    .slice(0, 20),
  clientesTop: Array.from(clientesMap.values())
    .sort((a, b) => b.totalComprado - a.totalComprado)
    .slice(0, 20)
};

// Unidades únicas
const unidadesSet = new Set();
movimientos.forEach(mov => {
  if (mov.unidad) unidadesSet.add(mov.unidad);
});
stats.unidades = Array.from(unidadesSet);

// Familias únicas
const familiasSet = new Set();
movimientos.forEach(mov => {
  if (mov.familia && mov.familia !== '0') familiasSet.add(mov.familia);
});
stats.familias = Array.from(familiasSet);

// Departamentos únicos
const departamentosSet = new Set();
movimientos.forEach(mov => {
  if (mov.departamento && mov.departamento !== '0') departamentosSet.add(mov.departamento);
});
stats.departamentos = Array.from(departamentosSet);

console.log('\n========================================');
console.log('ANÁLISIS DE DATOS REALES - TUPAC');
console.log('========================================\n');

console.log('📊 ESTADÍSTICAS GENERALES:');
console.log(`   Total Productos: ${stats.totalProductos}`);
console.log(`   Total Clientes: ${stats.totalClientes}`);
console.log(`   Total Proveedores: ${stats.totalProveedores}`);
console.log(`   Total Facturas: ${stats.totalFacturas}`);
console.log(`   Total Movimientos: ${stats.totalMovimientos}`);
console.log(`   Venta Total: $${stats.ventaTotal.toFixed(2)}`);
console.log(`   Promedio por Factura: $${stats.promedioFactura.toFixed(2)}`);

console.log('\n🏷️  UNIDADES DE MEDIDA:');
console.log(`   ${stats.unidades.join(', ')}`);

console.log('\n📦 FAMILIAS DE PRODUCTOS:');
console.log(`   ${stats.familias.length} familias encontradas`);

console.log('\n🏢 DEPARTAMENTOS:');
console.log(`   ${stats.departamentos.length} departamentos encontrados`);

console.log('\n🔥 TOP 20 PRODUCTOS MÁS VENDIDOS:');
stats.productosTop.forEach((prod, idx) => {
  console.log(`   ${idx + 1}. Artículo ${prod.id}: ${prod.ventas} ventas, ${prod.cantidadVendida.toFixed(2)} ${prod.unidades[0] || 'u'}, $${prod.precioPromedio.toFixed(2)} avg`);
});

console.log('\n👥 TOP 20 CLIENTES:');
stats.clientesTop.forEach((cli, idx) => {
  console.log(`   ${idx + 1}. ${cli.nombre} (${cli.id}): ${cli.facturas} facturas, $${cli.totalComprado.toFixed(2)} total`);
});

console.log('\n========================================\n');

// Guardar resumen en JSON
const resumenPath = path.join(__dirname, '../Info/resumen-analisis.json');
fs.writeFileSync(resumenPath, JSON.stringify({
  stats,
  productos: Array.from(productosMap.values()).slice(0, 100),
  clientes: Array.from(clientesMap.values()).slice(0, 50),
  proveedores: Array.from(proveedoresSet)
}, null, 2));

console.log(`✅ Resumen guardado en: ${resumenPath}\n`);
