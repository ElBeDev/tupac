import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createBetterPlaceholder = (name, category, bgColor, textColor = '#ffffff') => {
  const svg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${adjustBrightness(bgColor, -20)};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#grad-${name})"/>
    <rect x="30" y="30" width="340" height="340" fill="none" stroke="${textColor}" stroke-width="2" opacity="0.3" rx="10"/>
    <text x="200" y="180" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="${textColor}" text-anchor="middle">
      ${name.split(' ').slice(0, 2).join(' ')}
    </text>
    <text x="200" y="220" font-family="Arial, sans-serif" font-size="20" fill="${textColor}" text-anchor="middle" opacity="0.8">
      ${category}
    </text>
    <circle cx="200" cy="280" r="40" fill="none" stroke="${textColor}" stroke-width="3" opacity="0.2"/>
    <path d="M 180 280 L 200 300 L 230 260" stroke="${textColor}" stroke-width="4" fill="none" opacity="0.3"/>
  </svg>`;
  
  return svg;
};

function adjustBrightness(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1).toUpperCase();
}

const publicDir = path.join(__dirname, '..', 'public', 'productos');

const products = [
  // Almacén
  { file: 'yerba-taraguí.svg', name: 'Yerba Taragüi', category: 'Almacén', color: '#2d5016' },
  { file: 'harina-pureza.svg', name: 'Harina Pureza', category: 'Almacén', color: '#8b7355' },
  { file: 'sal-celusal.svg', name: 'Sal Celusal', category: 'Almacén', color: '#94a3b8', textColor: '#1e293b' },
  { file: 'cafe-la-virginia.jpg', name: 'Café La Virginia', category: 'Almacén', color: '#3e2723' },
  
  // Bebidas
  { file: 'agua-villa-sur.jpg', name: 'Agua Villa Sur', category: 'Bebidas', color: '#0ea5e9' },
  { file: 'brahma.jpg', name: 'Brahma Pack x6', category: 'Bebidas', color: '#dc2626' },
  { file: 'jugo-baggio.jpg', name: 'Jugo Baggio', category: 'Bebidas', color: '#f97316' },
  
  // Lácteos
  { file: 'queso-cremoso.jpg', name: 'Queso Cremoso', category: 'Lácteos', color: '#fbbf24' },
  { file: 'dulce-leche.svg', name: 'Dulce de Leche', category: 'Lácteos', color: '#a0522d' },
  
  // Limpieza
  { file: 'detergente-magistral.jpg', name: 'Detergente', category: 'Limpieza', color: '#06b6d4' },
  { file: 'lavandina-ayudin.jpg', name: 'Lavandina Ayudín', category: 'Limpieza', color: '#8b5cf6' },
  { file: 'papel-higienol.jpg', name: 'Papel Higienol', category: 'Limpieza', color: '#ec4899' },
  { file: 'jabon-skip.jpg', name: 'Jabón Skip', category: 'Limpieza', color: '#3b82f6' },
  { file: 'suavizante-vivere.svg', name: 'Suavizante', category: 'Limpieza', color: '#4169e1' },
  { file: 'esponja-virulana.jpg', name: 'Esponja', category: 'Limpieza', color: '#10b981' },
  
  // Perfumería
  { file: 'champu-sedal.jpg', name: 'Champú Sedal', category: 'Perfumería', color: '#be185d' },
  { file: 'jabon-dove.svg', name: 'Jabón Dove', category: 'Perfumería', color: '#87ceeb' },
  { file: 'crema-colgate.jpg', name: 'Crema Colgate', category: 'Perfumería', color: '#dc2626' },
  { file: 'desodorante-rexona.jpg', name: 'Desodorante', category: 'Perfumería', color: '#059669' },
  
  // Golosinas
  { file: 'alfajor-jorgito.jpg', name: 'Alfajor Jorgito', category: 'Golosinas', color: '#7c2d12' },
  { file: 'chocolate-milka.jpg', name: 'Chocolate Milka', category: 'Golosinas', color: '#7c3aed' },
  { file: 'papas-lays.jpg', name: 'Papas Lays', category: 'Golosinas', color: '#eab308' },
  
  // Congelados
  { file: 'pizza-sibarita.jpg', name: 'Pizza Sibarita', category: 'Congelados', color: '#dc2626' },
  { file: 'hamburguesas-paty.jpg', name: 'Hamburguesas', category: 'Congelados', color: '#7c2d12' },
  { file: 'papas-mccain.jpg', name: 'Papas McCain', category: 'Congelados', color: '#f59e0b' },
  { file: 'helado-frigor.jpg', name: 'Helado Frigor', category: 'Congelados', color: '#06b6d4' },
];

console.log('🎨 Creando placeholders SVG mejorados...\n');

let created = 0;
let skipped = 0;

products.forEach(({ file, name, category, color, textColor }) => {
  if (file.endsWith('.svg')) {
    const filepath = path.join(publicDir, file);
    const svg = createBetterPlaceholder(name, category, color, textColor);
    fs.writeFileSync(filepath, svg);
    console.log(`✅ Creado: ${file}`);
    created++;
  } else {
    // Verificar si existe, si no crear placeholder
    const filepath = path.join(publicDir, file);
    if (!fs.existsSync(filepath)) {
      const svgFile = file.replace('.jpg', '.svg');
      const svgPath = path.join(publicDir, svgFile);
      const svg = createBetterPlaceholder(name, category, color, textColor);
      fs.writeFileSync(svgPath, svg);
      console.log(`⚠️  No existe ${file}, creado ${svgFile} como placeholder`);
      created++;
    } else {
      skipped++;
    }
  }
});

console.log(`\n📊 Resumen:`);
console.log(`✅ Creados/Actualizados: ${created}`);
console.log(`⏭️  Ya existentes: ${skipped}`);
console.log(`\n✨ ¡Placeholders mejorados creados!`);
