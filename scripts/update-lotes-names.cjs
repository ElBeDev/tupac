#!/usr/bin/env node
/**
 * Script para actualizar los nombres de productos en lotes-reales.ts
 * Lee productos desde productos.ts y actualiza los lotes con nombres reales
 */

const fs = require('fs');
const path = require('path');

// Leer productos
const productosPath = path.join(__dirname, '../src/data/productos.ts');
const productosContent = fs.readFileSync(productosPath, 'utf-8');

// Extraer productos usando regex - formato JSON con comillas dobles
const productoMatches = productosContent.matchAll(/"id":\s*"(\d+)",[\s\S]*?"nombre":\s*"([^"]+)"/g);
const productosMap = new Map();

for (const match of productoMatches) {
  const [, id, nombre] = match;
  productosMap.set(id, nombre);
}

console.log(`✓ ${productosMap.size} productos cargados`);

// Leer lotes-reales.ts
const lotesPath = path.join(__dirname, '../src/data/lotes-reales.ts');
let lotesContent = fs.readFileSync(lotesPath, 'utf-8');

// Reemplazar nombres de productos
let actualizados = 0;
let noEncontrados = 0;
const idsNoEncontrados = new Set();

lotesContent = lotesContent.replace(
  /productoId:\s*'(\d+)',\s*\n\s*productoNombre:\s*'Producto \d+'/g,
  (match, productoId) => {
    const nombre = productosMap.get(productoId);
    if (nombre) {
      actualizados++;
      // Escapar comillas simples en el nombre
      const nombreEscapado = nombre.replace(/'/g, "\\'");
      return `productoId: '${productoId}',\n    productoNombre: '${nombreEscapado}'`;
    } else {
      noEncontrados++;
      idsNoEncontrados.add(productoId);
      return match; // Dejar como está
    }
  }
);

// Escribir archivo actualizado
fs.writeFileSync(lotesPath, lotesContent, 'utf-8');

console.log(`\n✓ Nombres de productos actualizados:`);
console.log(`  • ${actualizados} lotes actualizados con nombres reales`);
console.log(`  • ${noEncontrados} lotes sin nombre (producto no encontrado)`);

if (idsNoEncontrados.size > 0) {
  console.log(`\n⚠ Productos no encontrados: ${Array.from(idsNoEncontrados).join(', ')}`);
}

console.log('\n✓ Archivo src/data/lotes-reales.ts actualizado');
