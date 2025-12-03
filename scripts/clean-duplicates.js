import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productosPath = path.join(__dirname, '..', 'src', 'data', 'productos.ts');
let content = fs.readFileSync(productosPath, 'utf-8');

console.log('🧹 Limpiando duplicados...\n');

// Limpiar todos los duplicados
const fixes = {
  'jugo-jugo-baggio.jpg': 'jugo-baggio.jpg',
  'detergente-detergente-magistral.jpg': 'detergente-magistral.jpg',
  'lavandina-lavandina-ayudin.jpg': 'lavandina-ayudin.jpg',
  'papel-papel-higienol.jpg': 'papel-higienol.jpg',
  'jabon-jabon-skip.jpg': 'jabon-skip.jpg',
  'esponja-esponja-virulana.jpg': 'esponja-virulana.jpg',
  'champu-champu-sedal.jpg': 'champu-sedal.jpg',
  'crema-crema-colgate.jpg': 'crema-colgate.jpg',
  'desodorante-desodorante-rexona.jpg': 'desodorante-rexona.jpg',
  'alfajor-alfajor-jorgito.jpg': 'alfajor-jorgito.jpg',
  'chocolate-chocolate-milka.jpg': 'chocolate-milka.jpg',
  'papas-papas-lays.jpg': 'papas-lays.jpg',
  'pizza-pizza-pizza-sibarita.jpg': 'pizza-sibarita.jpg',
  'hamburguesas-hamburguesas-paty.jpg': 'hamburguesas-paty.jpg',
  'papas-papas-mccain.jpg': 'papas-mccain.jpg',
  'helado-helado-frigor.jpg': 'helado-frigor.jpg',
};

let totalFixes = 0;

Object.entries(fixes).forEach(([wrong, correct]) => {
  const regex = new RegExp(wrong.replace('.', '\\.'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, correct);
    console.log(`✅ ${wrong} → ${correct}`);
    totalFixes++;
  }
});

fs.writeFileSync(productosPath, content);

console.log(`\n✨ Total corregido: ${totalFixes} nombres`);
console.log('🎉 ¡Archivo limpiado exitosamente!');
