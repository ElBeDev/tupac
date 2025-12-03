const fs = require('fs');
const path = require('path');

// Leer JSON con proveedores reales
const proveedoresRealesPath = path.join(__dirname, 'proveedores-reales.json');
const proveedoresReales = JSON.parse(fs.readFileSync(proveedoresRealesPath, 'utf-8'));

// Leer proveedores.ts
const proveedoresPath = path.join(__dirname, '../src/data/proveedores.ts');
let proveedoresTs = fs.readFileSync(proveedoresPath, 'utf-8');

let updateCount = 0;
let notFoundCount = 0;

// Para cada proveedor real, actualizar en proveedores.ts
Object.entries(proveedoresReales).forEach(([codigo, datos]) => {
  const provId = `PROV${codigo}`;
  const nombreLimpio = datos.nombre.replace(/�/g, 'ñ');
  const telefonoLimpio = datos.telefono || 'Sin teléfono';
  
  // Buscar el bloque del proveedor (desde { hasta })
  const regexBlock = new RegExp(
    `\\{[^}]*"id":\\s*"${provId}"[^}]*\\}`,
    's'
  );
  
  const match = proveedoresTs.match(regexBlock);
  
  if (match) {
    let block = match[0];
    
    // Reemplazar nombre
    block = block.replace(/"nombre":\s*"[^"]+",/, `"nombre": "${nombreLimpio}",`);
    
    // Reemplazar razón social
    block = block.replace(/"razonSocial":\s*"[^"]+",/, `"razonSocial": "${nombreLimpio} S.A.",`);
    
    // Reemplazar nombre fantasía
    block = block.replace(/"nombreFantasia":\s*"[^"]+",/, `"nombreFantasia": "${nombreLimpio}",`);
    
    // Reemplazar teléfono
    block = block.replace(/"telefono":\s*"[^"]*",/, `"telefono": "${telefonoLimpio}",`);
    
    // Reemplazar contacto
    block = block.replace(/"contacto":\s*"[^"]+",/, `"contacto": "${nombreLimpio}",`);
    
    // Reemplazar el bloque completo
    proveedoresTs = proveedoresTs.replace(regexBlock, block);
    
    updateCount++;
    console.log(`✅ Actualizado: ${provId} -> ${nombreLimpio} (Tel: ${telefonoLimpio})`);
  } else {
    notFoundCount++;
    console.log(`⚠️  No encontrado en proveedores.ts: ${provId}`);
  }
});

// Guardar archivo actualizado
fs.writeFileSync(proveedoresPath, proveedoresTs);

console.log(`\n📊 Resumen:`);
console.log(`✅ Proveedores actualizados: ${updateCount}`);
console.log(`⚠️  Proveedores no encontrados: ${notFoundCount}`);
console.log(`\n✅ Archivo actualizado: src/data/proveedores.ts`);
