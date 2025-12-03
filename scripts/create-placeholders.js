import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createPlaceholder = (text, filepath, bgColor) => {
  // Crear un SVG simple como placeholder
  const svg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
      ${text}
    </text>
  </svg>`;
  
  fs.writeFileSync(filepath, svg);
};

const publicDir = path.join(__dirname, '..', 'public', 'productos');

const placeholders = [
  { name: 'yerba-taraguí', text: 'Yerba Taragüi', color: '#2d5016' },
  { name: 'harina-pureza', text: 'Harina Pureza', color: '#8b7355' },
  { name: 'sal-celusal', text: 'Sal Celusal', color: '#e0e0e0' },
  { name: 'dulce-leche', text: 'Dulce de Leche', color: '#a0522d' },
  { name: 'suavizante-vivere', text: 'Suavizante', color: '#4169e1' },
  { name: 'jabon-dove', text: 'Jabón Dove', color: '#87ceeb' },
];

console.log('🎨 Creando placeholders...\n');

placeholders.forEach(({ name, text, color }) => {
  const filepath = path.join(publicDir, `${name}.svg`);
  createPlaceholder(text, filepath, color);
  console.log(`✅ Creado: ${name}.svg`);
});

console.log('\n✨ ¡Placeholders creados exitosamente!');
