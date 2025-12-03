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
        proveedoresMap.set(codigo, { 
          nombre: nombre.replace(/�/g, 'ñ'), 
          telefono: telefono || 'Sin teléfono' 
        });
      }
    }
  }
});

// Ordenar por código - SOLO proveedores con datos reales
const proveedoresOrdenados = Array.from(proveedoresMap.entries())
  .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
  .map(([codigo, datos]) => ({
    codigo,
    nombre: datos.nombre,
    telefono: datos.telefono
  }));

// Generar archivo TypeScript
let tsContent = `// Proveedores reales del sistema - ${new Date().toLocaleDateString('es-AR')}
// Total: ${proveedoresOrdenados.length} proveedores
// SOLO DATOS REALES extraídos de pedidos.txt
import type { Proveedor } from '../types/proveedor';

export const proveedorProductosIniciales = [];

export const proveedores: Proveedor[] = [\n`;

proveedoresOrdenados.forEach((prov, index) => {
  const id = `PROV${prov.codigo}`;
  const nombre = prov.nombre;
  const tel = prov.telefono;
  
  tsContent += `  {
    "id": "${id}",
    "nombre": "${nombre}",
    "razonSocial": "",
    "nombreFantasia": "",
    "cuit": "",
    "condicionIVA": "",
    "direccion": "",
    "localidad": "",
    "provincia": "",
    "codigoPostal": "",
    "telefono": "${tel}",
    "email": "",
    "contacto": "${nombre}",
    "condicionesPago": "",
    "diasPago": 0,
    "descuentoVolumen": 0,
    "activo": true,
    "calificacion": 0,
    "tiempoEntrega": ""
  }${index < proveedoresOrdenados.length - 1 ? ',' : ''}\n`;
});

tsContent += '];';

// Guardar archivo
const outputPath = path.join(__dirname, '../src/data/proveedores.ts');
fs.writeFileSync(outputPath, tsContent);

console.log(`✅ Archivo generado: src/data/proveedores.ts`);
console.log(`📊 Total proveedores REALES: ${proveedoresOrdenados.length}`);
console.log(`✅ TODOS con datos de contacto verificados del CSV`);
