import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productosPath = path.join(__dirname, '..', 'src', 'data', 'productos.ts');
let content = fs.readFileSync(productosPath, 'utf-8');

console.log('🔄 Actualizando extensiones de imágenes a .jpg...\n');

// Cambiar todos los SVG a JPG
const changes = {
  'yerba-taraguí.svg': 'yerba-taraguí.jpg',
  'harina-pureza.svg': 'harina-pureza.jpg',
  'sal-celusal.svg': 'sal-celusal.jpg',
  'dulce-leche.svg': 'dulce-leche.jpg',
  'suavizante-vivere.svg': 'suavizante-vivere.jpg',
  'jabon-dove.svg': 'jabon-dove.jpg',
};

let totalChanges = 0;

Object.entries(changes).forEach(([old, newName]) => {
  const regex = new RegExp(old.replace('.', '\\.'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, newName);
    console.log(`✅ ${old} → ${newName}`);
    totalChanges++;
  }
});

fs.writeFileSync(productosPath, content);

console.log(`\n✨ Total actualizado: ${totalChanges} referencias`);
console.log('📝 ¡Archivo productos.ts actualizado!');
