import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer archivos disponibles
const productosDir = path.join(__dirname, '..', 'public', 'productos');
const files = fs.readdirSync(productosDir);

console.log('📁 Imágenes disponibles en /public/productos:\n');
files.forEach(file => {
  console.log(`   ✓ ${file}`);
});

// Leer archivo de productos y extraer las rutas
const productosPath = path.join(__dirname, '..', 'src', 'data', 'productos.ts');
const content = fs.readFileSync(productosPath, 'utf-8');

const imageUrls = content.match(/imagenUrl: '\/productos\/([^']+)'/g);
const usedImages = imageUrls.map(match => {
  const fileName = match.match(/\/productos\/([^']+)'/)[1];
  return fileName;
});

console.log(`\n📊 Total de imágenes en disco: ${files.length}`);
console.log(`📊 Total de imágenes referenciadas: ${usedImages.length}\n`);

// Verificar cuáles no existen
const missing = usedImages.filter(img => !files.includes(img));

if (missing.length > 0) {
  console.log('❌ Imágenes referenciadas pero NO encontradas:\n');
  missing.forEach(img => {
    console.log(`   ✗ ${img}`);
  });
} else {
  console.log('✅ ¡Todas las imágenes referenciadas existen en disco!');
}

// Mostrar archivos no usados
const unused = files.filter(file => !usedImages.includes(file));
if (unused.length > 0) {
  console.log(`\n⚠️  Archivos en disco pero NO referenciados (${unused.length}):\n`);
  unused.forEach(file => {
    console.log(`   • ${file}`);
  });
}

console.log('\n✨ Verificación completada!');
