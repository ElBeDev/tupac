import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeo correcto basado en los archivos descargados
const corrections = {
  'cafe-virginia.jpg': 'cafe-la-virginia.jpg',
  'agua-villa.jpg': 'agua-villa-sur.jpg',
  'brahma-pack.jpg': 'brahma.jpg',
  'baggio.jpg': 'jugo-baggio.jpg',
  'queso-paulina.jpg': 'queso-cremoso.jpg',
  'dove.jpg': 'jabon-dove.svg',
  'sedal.jpg': 'champu-sedal.jpg',
  'colgate.jpg': 'crema-colgate.jpg',
  'rexona.jpg': 'desodorante-rexona.jpg',
  'jorgito.jpg': 'alfajor-jorgito.jpg',
  'milka.jpg': 'chocolate-milka.jpg',
  'lays.jpg': 'papas-lays.jpg',
  'sibarita.jpg': 'pizza-sibarita.jpg',
  'paty.jpg': 'hamburguesas-paty.jpg',
  'mccain.jpg': 'papas-mccain.jpg',
  'frigor.jpg': 'helado-frigor.jpg',
  'magistral.jpg': 'detergente-magistral.jpg',
  'ayudin.jpg': 'lavandina-ayudin.jpg',
  'higienol.jpg': 'papel-higienol.jpg',
  'skip.jpg': 'jabon-skip.jpg',
  'vivere.jpg': 'suavizante-vivere.svg',
  'virulana.jpg': 'esponja-virulana.jpg',
};

const productosPath = path.join(__dirname, '..', 'src', 'data', 'productos.ts');
let content = fs.readFileSync(productosPath, 'utf-8');

console.log('🔧 Corrigiendo rutas de imágenes...\n');

let totalChanges = 0;

Object.entries(corrections).forEach(([wrong, correct]) => {
  const regex = new RegExp(wrong.replace('.', '\\.'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, correct);
    console.log(`✅ ${wrong} → ${correct} (${matches.length} cambios)`);
    totalChanges += matches.length;
  }
});

fs.writeFileSync(productosPath, content);

console.log(`\n✨ Total de correcciones: ${totalChanges}`);
console.log('📝 Archivo actualizado exitosamente!');
