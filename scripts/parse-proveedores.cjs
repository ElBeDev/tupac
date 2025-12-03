const fs = require('fs');
const path = require('path');

// Leer pedidos.txt
const pedidosPath = path.join(__dirname, '../Info/pedidos.txt');
const pedidosData = fs.readFileSync(pedidosPath, 'utf-8');

// Parsear líneas
const lineas = pedidosData.split('\n').filter(l => l.trim());

// Mapa de proveedores: codigo -> {nombre, telefono}
const proveedoresMap = new Map();

lineas.forEach(linea => {
  const columnas = linea.split('\t');
  
  // Columna 4 (índice 3): código de proveedor
  // Columna 14 (índice 13): nombre del contacto
  // Columna 15 (índice 14): teléfono
  if (columnas.length >= 15) {
    const codigo = columnas[3]?.trim();
    const nombre = columnas[13]?.trim();
    const telefono = columnas[14]?.trim();
    
    if (codigo && nombre && nombre !== '0' && nombre !== '') {
      if (!proveedoresMap.has(codigo) || nombre.length > (proveedoresMap.get(codigo).nombre?.length || 0)) {
        proveedoresMap.set(codigo, { nombre, telefono: telefono || '' });
      }
    }
  }
});

// Ordenar por código y mostrar
const proveedoresOrdenados = Array.from(proveedoresMap.entries())
  .sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

console.log('Total proveedores encontrados con nombre real:', proveedoresOrdenados.length);
console.log('\n--- PROVEEDORES REALES ---\n');
proveedoresOrdenados.forEach(([codigo, datos]) => {
  console.log(`${codigo}\t${datos.nombre}\t${datos.telefono}`);
});

// Guardar JSON para actualizar proveedores.ts
const proveedoresJson = {};
proveedoresOrdenados.forEach(([codigo, datos]) => {
  proveedoresJson[codigo] = datos;
});

fs.writeFileSync(
  path.join(__dirname, 'proveedores-reales.json'),
  JSON.stringify(proveedoresJson, null, 2)
);

console.log('\n✅ Archivo guardado: scripts/proveedores-reales.json');
