import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs de imágenes de productos argentinos (de fuentes públicas)
const productImages = {
  // Almacén
  'aceite-cocinero': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
  'arroz-gallo': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
  'fideos-matarazzo': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop',
  'yerba-taraguí': 'https://images.unsplash.com/photo-1602032761127-6a9174815fbd?w=400&h=400&fit=crop',
  'azucar-ledesma': 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=400&h=400&fit=crop',
  'harina-pureza': 'https://images.unsplash.com/photo-1628564404944-0f2e8a5f2f8a?w=400&h=400&fit=crop',
  'sal-celusal': 'https://images.unsplash.com/photo-1598101479935-39a4e65f1398?w=400&h=400&fit=crop',
  'cafe-la-virginia': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
  
  // Bebidas
  'coca-cola': 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop',
  'quilmes': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
  'agua-villa-sur': 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop',
  'fanta': 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=400&fit=crop',
  'brahma': 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=400&fit=crop',
  'jugo-baggio': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
  'vino-toro': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
  'paso-toros': 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=400&fit=crop',
  
  // Lácteos
  'leche-serenisima': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
  'yogur-sancor': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
  'queso-cremoso': 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop',
  'dulce-leche': 'https://images.unsplash.com/photo-1571904405284-5afb1c73a4e8?w=400&h=400&fit=crop',
  'manteca-sancor': 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
  'queso-rallado': 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=400&fit=crop',
  
  // Limpieza
  'detergente-magistral': 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop',
  'lavandina-ayudin': 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop',
  'papel-higienol': 'https://images.unsplash.com/photo-1584556326561-c8746083993b?w=400&h=400&fit=crop',
  'jabon-skip': 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
  'suavizante-vivere': 'https://images.unsplash.com/photo-1602874801006-93d9d7e85f77?w=400&h=400&fit=crop',
  'esponja-virulana': 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400&h=400&fit=crop',
  
  // Perfumería
  'champu-sedal': 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
  'jabon-dove': 'https://images.unsplash.com/photo-1585933646597-63a863c7077f?w=400&h=400&fit=crop',
  'crema-colgate': 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop',
  'desodorante-rexona': 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop',
  
  // Golosinas
  'alfajor-jorgito': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
  'oreo': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
  'chocolate-milka': 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
  'papas-lays': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop',
  
  // Congelados
  'pizza-sibarita': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
  'hamburguesas-paty': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
  'papas-mccain': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop',
  'helado-frigor': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
};

const downloadAll = async () => {
  const publicDir = path.join(__dirname, '..', 'public', 'productos');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('📥 Descargando imágenes de productos...\n');

  let downloaded = 0;
  let failed = 0;

  for (const [name, url] of Object.entries(productImages)) {
    const filepath = path.join(publicDir, `${name}.jpg`);
    
    try {
      console.log(`⏳ Descargando: ${name}...`);
      await downloadImage(url, filepath);
      console.log(`✅ Descargado: ${name}`);
      downloaded++;
    } catch (error) {
      console.error(`❌ Error descargando ${name}:`, error.message);
      failed++;
    }
  }

  console.log(`\n📊 Resumen:`);
  console.log(`✅ Descargadas: ${downloaded}`);
  console.log(`❌ Fallidas: ${failed}`);
  console.log(`\n🎉 ¡Proceso completado!`);
};

downloadAll().catch(console.error);
