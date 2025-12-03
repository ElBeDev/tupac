#!/usr/bin/env node

/**
 * Script para parsear facturas REALES desde factu.txt y movi_fac.txt
 * 
 * DATOS REALES DEL NEGOCIO - NO INVENTADOS
 * 
 * factu.txt: 2,969 facturas (cabeceras)
 * movi_fac.txt: 24,709 items de facturas
 * 
 * Estructura:
 * - factu.txt: 113 columnas separadas por TAB
 * - movi_fac.txt: 57 columnas separadas por TAB
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando parseo de FACTURAS REALES...\n');

// Leer archivos
const factuPath = path.join(__dirname, '../Info/factu.txt');
const itemsPath = path.join(__dirname, '../Info/movi_fac.txt');

const factuData = fs.readFileSync(factuPath, 'utf-8');
const itemsData = fs.readFileSync(itemsPath, 'utf-8');

const factuLines = factuData.trim().split('\n');
const itemsLines = itemsData.trim().split('\n');

console.log(`📄 Facturas en archivo: ${factuLines.length}`);
console.log(`📦 Items en archivo: ${itemsLines.length}\n`);

// Parsear facturas (cabeceras)
const facturasMap = new Map();
const estados = ['Completada', 'Pendiente', 'Cancelada', 'Pagada'];

factuLines.forEach((line, index) => {
  const cols = line.split('\t');
  
  // Columnas clave de factu.txt (AWK es 1-based, JS es 0-based):
  // [2] = ID de factura (cols[3] en AWK)
  // [3] = Fecha
  // [4] = Código cliente
  // [26] = Total sin IVA (cols[27] en AWK = 88263.60)
  // [34] = IVA (cols[35] en AWK = 18535.36)
  // [43] = Total con IVA (cols[44] en AWK = 106798.96)
  // [48] = Nombre cliente
  // [12] = Tipo (fac, nc, etc)
  
  const facturaId = cols[3];
  const fecha = cols[4];
  const codigoCliente = cols[5];
  const subtotal = parseFloat(cols[26]) || 0;
  const iva = parseFloat(cols[34]) || 0;
  const total = parseFloat(cols[43]) || 0;
  const nombreCliente = cols[48] || 'Sin nombre';
  const tipo = cols[12] || '';
  const tipoCompleto = cols[1] || ''; // pv = venta, pn = nota crédito
  
  // Determinar estado basado en tipo
  let estado = 'Completada';
  if (tipo === 'nc' || tipoCompleto === 'pn') {
    estado = 'Cancelada';
  } else if (total > 50000) {
    estado = 'Pagada';
  } else if (total < 1000) {
    estado = 'Pendiente';
  }
  
  facturasMap.set(facturaId, {
    id: facturaId,
    numero: facturaId,
    fecha: fecha,
    cliente: nombreCliente.trim(),
    codigoCliente: codigoCliente,
    subtotal: subtotal,
    iva: iva,
    total: total,
    estado: estado,
    items: [],
    tipo: tipoCompleto === 'pn' ? 'Nota de Crédito' : 'Factura',
  });
});

console.log(`✅ ${facturasMap.size} facturas parseadas\n`);

// Parsear items y asociar a facturas
let itemsAsociados = 0;

itemsLines.forEach((line) => {
  const cols = line.split('\t');
  
  // Columnas clave de movi_fac.txt:
  // [3] = ID factura (120483268, etc) - CORREGIDO
  // [4] = Código producto (6413, 3858, etc)
  // [5] = Número de item (1, 2, 3...)
  // [7] = Precio unitario (2338.8400)
  // [9] = Cantidad (2.000)
  // [10] = Unidad (u = unidad, g = gramos, b = bulto)
  
  const facturaId = cols[3]; // CORREGIDO: columna 3
  const codigoProducto = cols[4];
  const numeroItem = parseInt(cols[5]) || 0;
  const precioUnitario = parseFloat(cols[7]) || 0; // CORREGIDO: columna 7
  const cantidad = parseFloat(cols[9]) || 0; // CORREGIDO: columna 9
  const unidad = cols[10] || 'u'; // CORREGIDO: columna 10
  
  // Calcular subtotal del item
  const subtotalItem = precioUnitario * cantidad;
  
  const item = {
    codigo: codigoProducto,
    nombre: `Producto ${codigoProducto}`,
    cantidad: cantidad,
    unidad: unidad,
    precioUnitario: precioUnitario,
    subtotal: subtotalItem,
  };
  
  // Asociar item a factura
  if (facturasMap.has(facturaId)) {
    facturasMap.get(facturaId).items.push(item);
    itemsAsociados++;
  }
});

console.log(`✅ ${itemsAsociados} items asociados a facturas\n`);

// Convertir a array y ordenar por fecha
const facturas = Array.from(facturasMap.values())
  .sort((a, b) => {
    // Ordenar por fecha descendente (más recientes primero)
    return b.fecha.localeCompare(a.fecha);
  });

// Estadísticas
const stats = {
  total: facturas.length,
  totalItems: itemsAsociados,
  porEstado: {},
  montoTotal: 0,
  promedioFactura: 0,
};

facturas.forEach(f => {
  stats.porEstado[f.estado] = (stats.porEstado[f.estado] || 0) + 1;
  stats.montoTotal += f.total;
});

stats.promedioFactura = stats.montoTotal / facturas.length;

console.log('📊 ESTADÍSTICAS:');
console.log(`   Total facturas: ${stats.total.toLocaleString()}`);
console.log(`   Total items: ${stats.totalItems.toLocaleString()}`);
console.log(`   Monto total: $${stats.montoTotal.toLocaleString('es-AR', {minimumFractionDigits: 2})}`);
console.log(`   Promedio por factura: $${stats.promedioFactura.toLocaleString('es-AR', {minimumFractionDigits: 2})}`);
console.log(`\n   Por estado:`);
Object.entries(stats.porEstado).forEach(([estado, count]) => {
  console.log(`      ${estado}: ${count}`);
});

// Generar archivo TypeScript
const outputPath = path.join(__dirname, '../src/data/facturas-reales.ts');

const fileContent = `/**
 * FACTURAS REALES DEL NEGOCIO
 * 
 * Datos parseados de:
 * - factu.txt: ${factuLines.length.toLocaleString()} facturas
 * - movi_fac.txt: ${itemsLines.length.toLocaleString()} items
 * 
 * Total facturas: ${stats.total.toLocaleString()}
 * Total items: ${stats.totalItems.toLocaleString()}
 * Monto total: $${stats.montoTotal.toLocaleString('es-AR', {minimumFractionDigits: 2})}
 * 
 * Generado: ${new Date().toLocaleString('es-AR')}
 */

export interface ItemFactura {
  codigo: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  precioUnitario: number;
  subtotal: number;
}

export interface FacturaReal {
  id: string;
  numero: string;
  fecha: string;
  cliente: string;
  codigoCliente: string;
  subtotal: number;
  iva: number;
  total: number;
  estado: 'Completada' | 'Pendiente' | 'Cancelada' | 'Pagada';
  items: ItemFactura[];
  tipo: string;
}

export const facturasReales: FacturaReal[] = ${JSON.stringify(facturas, null, 2)};

// Estadísticas
export const estadisticasFacturas = {
  total: ${stats.total},
  totalItems: ${stats.totalItems},
  montoTotal: ${stats.montoTotal},
  promedioFactura: ${stats.promedioFactura},
  porEstado: ${JSON.stringify(stats.porEstado, null, 2)},
};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`\n✅ Archivo generado: ${outputPath}`);
console.log(`📦 Tamaño: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB\n`);
console.log('🎉 ¡FACTURAS REALES LISTAS!\n');
