import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs alternativas para los 18 que fallaron
const faltantes = {
  'aceite-cocinero.jpg': 'https://dummyimage.com/400x400/FFB800/fff&text=Aceite+Cocinero',
  'arroz-gallo.jpg': 'https://dummyimage.com/400x400/DC143C/fff&text=Arroz+Gallo+Oro',
  'fideos-matarazzo.jpg': 'https://dummyimage.com/400x400/1E90FF/fff&text=Fideos+Matarazzo',
  'harina-pureza.jpg': 'https://dummyimage.com/400x400/E8B923/fff&text=Harina+Pureza',
  'sal-celusal.jpg': 'https://dummyimage.com/400x400/0066CC/fff&text=Sal+Celusal',
  'fanta.jpg': 'https://dummyimage.com/400x400/FF6B00/fff&text=Fanta+Naranja',
  'brahma.jpg': 'https://dummyimage.com/400x400/D32F2F/fff&text=Brahma+Cerveza',
  'vino-toro.jpg': 'https://dummyimage.com/400x400/6A1B9A/fff&text=Vino+Toro',
  'leche-serenisima.jpg': 'https://dummyimage.com/400x400/1976D2/fff&text=La+Serenisima',
  'queso-cremoso.jpg': 'https://dummyimage.com/400x400/FFA726/fff&text=Queso+La+Paulina',
  'detergente-magistral.jpg': 'https://dummyimage.com/400x400/00ACC1/fff&text=Magistral',
  'lavandina-ayudin.jpg': 'https://dummyimage.com/400x400/7E57C2/fff&text=Ayudin',
  'papel-higienol.jpg': 'https://dummyimage.com/400x400/EC407A/fff&text=Higienol',
  'suavizante-vivere.jpg': 'https://dummyimage.com/400x400/AB47BC/fff&text=Vivere',
  'jabon-dove.jpg': 'https://dummyimage.com/400x400/42A5F5/fff&text=Dove',
  'oreo.jpg': 'https://dummyimage.com/400x400/212121/fff&text=Oreo',
  'papas-mccain.jpg': 'https://dummyimage.com/400x400/F9A825/fff&text=McCain',
  'helado-frigor.jpg': 'https://dummyimage.com/400x400/00BCD4/fff&text=Frigor',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          const fileStream = fs.createWriteStream(filepath);
          res.pipe(fileStream);
          fileStream.on('finish', () => { fileStream.close(); resolve(); });
          fileStream.on('error', reject);
        }).on('error', reject);
        return;
      }
      
      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      fileStream.on('finish', () => { fileStream.close(); resolve(); });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
};

const publicDir = path.join(__dirname, '..', 'public', 'productos');

const download = async () => {
  console.log('📥 Descargando 18 placeholders faltantes...\n');
  
  for (const [filename, url] of Object.entries(faltantes)) {
    const filepath = path.join(publicDir, filename);
    try {
      await downloadImage(url, filepath);
      console.log(`✅ ${filename}`);
      await new Promise(r => setTimeout(r, 200));
    } catch (error) {
      console.log(`❌ ${filename}`);
    }
  }
  console.log('\n✨ Completado!');
};

download();
