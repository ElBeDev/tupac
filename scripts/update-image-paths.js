import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageMap = {
  'yerba-taragui.jpg': 'yerba-taraguí.svg',
  'harina-pureza.jpg': 'harina-pureza.svg',
  'sal-celusal.jpg': 'sal-celusal.svg',
  'dulce-leche.jpg': 'dulce-leche.svg',
  'suavizante-vivere.jpg': 'suavizante-vivere.svg',
  'jabon-dove.jpg': 'jabon-dove.svg',
};

const productosPath = path.join(__dirname, '..', 'src', 'data', 'productos.ts');
let content = fs.readFileSync(productosPath, 'utf-8');

console.log('🔄 Actualizando rutas de imágenes...\n');

Object.entries(imageMap).forEach(([oldName, newName]) => {
  const count = (content.match(new RegExp(oldName, 'g')) || []).length;
  content = content.replace(new RegExp(oldName, 'g'), newName);
  console.log(`✅ Reemplazado ${oldName} -> ${newName} (${count} ocurrencias)`);
});

fs.writeFileSync(productosPath, content);

console.log('\n✨ ¡Rutas actualizadas exitosamente!');
