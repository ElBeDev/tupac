const fs = require('fs');
const path = require('path');

// REGLA #1: SOLO DATOS REALES DEL CSV - NO INVENTAR NADA
console.log('🔍 Parseando precios desde CSV reales...\n');

// Leer archivo dprecio.txt
const dprecioPath = path.join(__dirname, '../Info/dprecio.txt');
const dprecioContent = fs.readFileSync(dprecioPath, 'utf-8');
const dprecioLines = dprecioContent.trim().split('\n');

console.log(`📄 dprecio.txt: ${dprecioLines.length} registros encontrados`);

// Estructura de dprecio.txt según inspección:
// [0] producto_id
// [1] lista (0 = default)
// [2] tipo_precio (1 = principal)
// [3] fecha_vigencia
// [4] hora_vigencia
// [5] ? (vacío)
// [6] ? (vacío)
// [7] precio
// [8] usuario
// [9] fecha_carga
// [10] hora_carga
// [11] origen (pedidos, etc.)
// [12] ? 
// [13] observaciones

const precios = [];
const preciosPorProducto = new Map(); // Para agrupar por producto

dprecioLines.forEach((line, index) => {
  const cols = line.split('\t');
  
  const productoId = cols[0]?.trim();
  const lista = cols[1]?.trim() || '0';
  const tipoPrecio = cols[2]?.trim() || '1';
  const fechaVigencia = cols[3]?.trim() || '';
  const horaVigencia = cols[4]?.trim() || '';
  const precioStr = cols[7]?.trim() || '0';
  const usuario = cols[8]?.trim() || '';
  const fechaCarga = cols[9]?.trim() || '';
  const horaCarga = cols[10]?.trim() || '';
  const origen = cols[11]?.trim() || '';
  
  // Validar que tengamos al menos producto_id y precio
  if (!productoId || precioStr === '0') {
    return; // Saltar registros inválidos
  }
  
  const precio = parseFloat(precioStr);
  if (isNaN(precio)) {
    return;
  }
  
  const precioObj = {
    productoId,
    lista: parseInt(lista) || 0,
    tipoPrecio: parseInt(tipoPrecio) || 1,
    fechaVigencia,
    horaVigencia,
    precio,
    usuario,
    fechaCarga,
    horaCarga,
    origen
  };
  
  precios.push(precioObj);
  
  // Agrupar por producto para tener historial
  if (!preciosPorProducto.has(productoId)) {
    preciosPorProducto.set(productoId, []);
  }
  preciosPorProducto.get(productoId).push(precioObj);
});

console.log(`✅ Parseados ${precios.length} precios válidos`);
console.log(`📦 ${preciosPorProducto.size} productos únicos con precios\n`);

// Ordenar precios por fecha (más reciente primero)
precios.sort((a, b) => {
  const fechaA = a.fechaVigencia || a.fechaCarga;
  const fechaB = b.fechaVigencia || b.fechaCarga;
  return fechaB.localeCompare(fechaA);
});

// Generar estadísticas
const preciosPorLista = {};
precios.forEach(p => {
  preciosPorLista[p.lista] = (preciosPorLista[p.lista] || 0) + 1;
});

console.log('📊 Estadísticas de precios:');
console.log(`   - Precios totales: ${precios.length}`);
console.log(`   - Productos con precios: ${preciosPorProducto.size}`);
console.log(`   - Distribución por lista:`);
Object.entries(preciosPorLista).forEach(([lista, count]) => {
  console.log(`     • Lista ${lista}: ${count} precios`);
});

// Calcular precio promedio, mínimo y máximo
const preciosValidos = precios.map(p => p.precio).filter(p => p > 0);
const precioMin = Math.min(...preciosValidos);
const precioMax = Math.max(...preciosValidos);
const precioPromedio = preciosValidos.reduce((a, b) => a + b, 0) / preciosValidos.length;

console.log(`   - Precio mínimo: $${precioMin.toFixed(2)}`);
console.log(`   - Precio máximo: $${precioMax.toFixed(2)}`);
console.log(`   - Precio promedio: $${precioPromedio.toFixed(2)}\n`);

// Generar archivo TypeScript
const outputPath = path.join(__dirname, '../src/data/precios.ts');

let tsContent = `// ⚠️ ARCHIVO GENERADO AUTOMÁTICAMENTE - NO EDITAR MANUALMENTE
// Generado desde: Info/dprecio.txt
// Fecha: ${new Date().toLocaleString('es-AR')}
// Total de precios: ${precios.length}
// REGLA: SOLO DATOS REALES DEL CSV - NO SE INVENTÓ NINGÚN DATO

import { PrecioProducto } from '../types/precio';

export const precios: PrecioProducto[] = ${JSON.stringify(precios, null, 2)};

// Índice por producto para búsqueda rápida
export const preciosPorProductoId = new Map<string, PrecioProducto[]>(
  ${JSON.stringify([...preciosPorProducto.entries()], null, 2)}
);

// Función helper para obtener precio actual de un producto
export function getPrecioActual(productoId: string, lista: number = 0): number | null {
  const preciosProducto = preciosPorProductoId.get(productoId);
  if (!preciosProducto || preciosProducto.length === 0) {
    return null;
  }
  
  // Buscar precio de la lista específica, más reciente primero
  const precioDeLista = preciosProducto
    .filter(p => p.lista === lista)
    .sort((a, b) => {
      const fechaA = a.fechaVigencia || a.fechaCarga;
      const fechaB = b.fechaVigencia || b.fechaCarga;
      return fechaB.localeCompare(fechaA);
    })[0];
  
  if (precioDeLista) {
    return precioDeLista.precio;
  }
  
  // Si no hay precio de esa lista, buscar en lista 0 (default)
  if (lista !== 0) {
    return getPrecioActual(productoId, 0);
  }
  
  return null;
}

// Estadísticas
export const estadisticasPrecios = {
  totalPrecios: ${precios.length},
  productosConPrecios: ${preciosPorProducto.size},
  precioMinimo: ${precioMin.toFixed(2)},
  precioMaximo: ${precioMax.toFixed(2)},
  precioPromedio: ${precioPromedio.toFixed(2)},
  preciosPorLista: ${JSON.stringify(preciosPorLista, null, 2)}
};
`;

fs.writeFileSync(outputPath, tsContent, 'utf-8');

console.log(`✅ Archivo generado exitosamente: ${outputPath}`);
console.log(`📝 Tamaño: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB\n`);

console.log('✨ Parseo completado con éxito!\n');
console.log('⚠️ IMPORTANTE: Script respeta regla de SOLO DATOS REALES');
console.log('   - NO se inventaron datos');
console.log('   - NO se agregaron campos inexistentes en CSV');
console.log('   - Campos vacíos se mantienen vacíos\n');
