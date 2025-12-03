import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createProductCard = (brandName, productName, color1, color2, category) => {
  const svg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${brandName.replace(/\s/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
    </defs>
    
    <!-- Fondo -->
    <rect width="400" height="400" fill="url(#grad-${brandName.replace(/\s/g, '')})"/>
    
    <!-- Contenedor del producto -->
    <rect x="50" y="80" width="300" height="240" fill="white" rx="15" filter="url(#shadow)"/>
    
    <!-- Marca (grande) -->
    <text x="200" y="160" font-family="Arial Black, sans-serif" font-size="42" font-weight="bold" 
          fill="${color1}" text-anchor="middle" letter-spacing="2">
      ${brandName.toUpperCase()}
    </text>
    
    <!-- Nombre del producto -->
    <text x="200" y="200" font-family="Arial, sans-serif" font-size="22" 
          fill="#1e293b" text-anchor="middle">
      ${productName}
    </text>
    
    <!-- Categoría -->
    <rect x="140" y="220" width="120" height="30" fill="${color1}" rx="15" opacity="0.2"/>
    <text x="200" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold"
          fill="${color1}" text-anchor="middle">
      ${category.toUpperCase()}
    </text>
    
    <!-- Decoración -->
    <circle cx="80" cy="340" r="25" fill="white" opacity="0.3"/>
    <circle cx="320" cy="340" r="25" fill="white" opacity="0.3"/>
    <rect x="150" y="330" width="100" height="3" fill="white" opacity="0.5" rx="2"/>
  </svg>`;
  
  return svg;
};

const publicDir = path.join(__dirname, '..', 'public', 'productos');

const products = [
  // Almacén
  { file: 'aceite-cocinero.jpg', brand: 'Cocinero', product: 'Aceite de Girasol 1.5L', color1: '#FFB800', color2: '#FF8C00', category: 'Almacén' },
  { file: 'arroz-gallo.jpg', brand: 'Gallo Oro', product: 'Arroz Largo Fino 1kg', color1: '#DC143C', color2: '#8B0000', category: 'Almacén' },
  { file: 'fideos-matarazzo.jpg', brand: 'Matarazzo', product: 'Fideos Moñitos 500g', color1: '#1E90FF', color2: '#0047AB', category: 'Almacén' },
  { file: 'yerba-taraguí.svg', brand: 'Taragüi', product: 'Yerba Mate Con Palo 1kg', color1: '#2d5016', color2: '#1a3009', category: 'Almacén' },
  { file: 'azucar-ledesma.jpg', brand: 'Ledesma', product: 'Azúcar Blanca 1kg', color1: '#00A651', color2: '#006B3D', category: 'Almacén' },
  { file: 'harina-pureza.svg', brand: 'Pureza', product: 'Harina 0000 1kg', color1: '#E8B923', color2: '#C99A1B', category: 'Almacén' },
  { file: 'sal-celusal.svg', brand: 'Celusal', product: 'Sal Fina 500g', color1: '#0066CC', color2: '#004C99', category: 'Almacén' },
  { file: 'cafe-la-virginia.jpg', brand: 'La Virginia', product: 'Café Molido 250g', color1: '#8B4513', color2: '#654321', category: 'Almacén' },
  
  // Bebidas
  { file: 'coca-cola.jpg', brand: 'Coca-Cola', product: 'Gaseosa 2.25L', color1: '#ED1C24', color2: '#B71C1C', category: 'Bebidas' },
  { file: 'quilmes.jpg', brand: 'Quilmes', product: 'Cerveza 1L', color1: '#003D7A', color2: '#002952', category: 'Bebidas' },
  { file: 'agua-villa-sur.jpg', brand: 'Villa del Sur', product: 'Agua Mineral 2L', color1: '#00BCD4', color2: '#0097A7', category: 'Bebidas' },
  { file: 'fanta.jpg', brand: 'Fanta', product: 'Naranja 2.25L', color1: '#FF6B00', color2: '#E65100', category: 'Bebidas' },
  { file: 'brahma.jpg', brand: 'Brahma', product: 'Cerveza Pack x6', color1: '#D32F2F', color2: '#B71C1C', category: 'Bebidas' },
  { file: 'jugo-baggio.jpg', brand: 'Baggio', product: 'Jugo Naranja 1L', color1: '#FF9800', color2: '#F57C00', category: 'Bebidas' },
  { file: 'vino-toro.jpg', brand: 'Toro', product: 'Vino Tinto 750ml', color1: '#6A1B9A', color2: '#4A148C', category: 'Bebidas' },
  { file: 'paso-toros.jpg', brand: 'Paso de los Toros', product: 'Pomelo 1.5L', color1: '#FF4081', color2: '#C51162', category: 'Bebidas' },
  
  // Lácteos
  { file: 'leche-serenisima.jpg', brand: 'La Serenísima', product: 'Leche Entera 1L', color1: '#1976D2', color2: '#0D47A1', category: 'Lácteos' },
  { file: 'yogur-sancor.jpg', brand: 'Sancor', product: 'Yogur Natural 1kg', color1: '#8BC34A', color2: '#689F38', category: 'Lácteos' },
  { file: 'queso-cremoso.jpg', brand: 'La Paulina', product: 'Queso Cremoso 500g', color1: '#FFA726', color2: '#F57C00', category: 'Lácteos' },
  { file: 'dulce-leche.svg', brand: 'Ilolay', product: 'Dulce de Leche 400g', color1: '#A0522D', color2: '#8B4513', category: 'Lácteos' },
  { file: 'manteca-sancor.jpg', brand: 'Sancor', product: 'Manteca 200g', color1: '#FFD54F', color2: '#FBC02D', category: 'Lácteos' },
  { file: 'queso-rallado.jpg', brand: 'Milkaut', product: 'Queso Rallado 40g', color1: '#FF6F00', color2: '#E65100', category: 'Lácteos' },
  
  // Limpieza
  { file: 'detergente-magistral.jpg', brand: 'Magistral', product: 'Detergente 750ml', color1: '#00ACC1', color2: '#00838F', category: 'Limpieza' },
  { file: 'lavandina-ayudin.jpg', brand: 'Ayudín', product: 'Lavandina 2L', color1: '#7E57C2', color2: '#5E35B1', category: 'Limpieza' },
  { file: 'papel-higienol.jpg', brand: 'Higienol', product: 'Papel Higiénico x4', color1: '#EC407A', color2: '#C2185B', category: 'Limpieza' },
  { file: 'jabon-skip.jpg', brand: 'Skip', product: 'Jabón en Polvo 800g', color1: '#1E88E5', color2: '#1565C0', category: 'Limpieza' },
  { file: 'suavizante-vivere.svg', brand: 'Vivere', product: 'Suavizante 500ml', color1: '#AB47BC', color2: '#8E24AA', category: 'Limpieza' },
  { file: 'esponja-virulana.jpg', brand: 'Virulana', product: 'Esponja Pack x3', color1: '#26A69A', color2: '#00897B', category: 'Limpieza' },
  
  // Perfumería
  { file: 'champu-sedal.jpg', brand: 'Sedal', product: 'Champú 340ml', color1: '#E91E63', color2: '#C2185B', category: 'Perfumería' },
  { file: 'jabon-dove.svg', brand: 'Dove', product: 'Jabón de Tocador 90g', color1: '#42A5F5', color2: '#1976D2', category: 'Perfumería' },
  { file: 'crema-colgate.jpg', brand: 'Colgate', product: 'Crema Dental 70g', color1: '#F44336', color2: '#C62828', category: 'Perfumería' },
  { file: 'desodorante-rexona.jpg', brand: 'Rexona', product: 'Desodorante 150ml', color1: '#00897B', color2: '#00695C', category: 'Perfumería' },
  
  // Golosinas
  { file: 'alfajor-jorgito.jpg', brand: 'Jorgito', product: 'Alfajores Pack x6', color1: '#5D4037', color2: '#3E2723', category: 'Golosinas' },
  { file: 'oreo.jpg', brand: 'Oreo', product: 'Galletitas 118g', color1: '#212121', color2: '#000000', category: 'Golosinas' },
  { file: 'chocolate-milka.jpg', brand: 'Milka', product: 'Chocolate 100g', color1: '#7E57C2', color2: '#5E35B1', category: 'Golosinas' },
  { file: 'papas-lays.jpg', brand: "Lay's", product: 'Papas Fritas 160g', color1: '#FDD835', color2: '#F9A825', category: 'Golosinas' },
  
  // Congelados
  { file: 'pizza-sibarita.jpg', brand: 'Sibarita', product: 'Pizza Muzzarella 430g', color1: '#D32F2F', color2: '#B71C1C', category: 'Congelados' },
  { file: 'hamburguesas-paty.jpg', brand: 'Paty', product: 'Hamburguesas x4', color1: '#6D4C41', color2: '#4E342E', category: 'Congelados' },
  { file: 'papas-mccain.jpg', brand: 'McCain', product: 'Papas Noisette 1kg', color1: '#F9A825', color2: '#F57F17', category: 'Congelados' },
  { file: 'helado-frigor.jpg', brand: 'Frigor', product: 'Helado 1L', color1: '#00BCD4', color2: '#0097A7', category: 'Congelados' },
];

console.log('🎨 Creando imágenes de productos profesionales...\n');

let created = 0;

products.forEach(({ file, brand, product, color1, color2, category }) => {
  const filepath = path.join(publicDir, file);
  const svg = createProductCard(brand, product, color1, color2, category);
  fs.writeFileSync(filepath, svg);
  console.log(`✅ ${brand} - ${product}`);
  created++;
});

console.log(`\n✨ Total creado: ${created} productos`);
console.log('🎉 ¡Todas las imágenes ahora muestran la marca y producto!');
