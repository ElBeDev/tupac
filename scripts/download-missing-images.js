import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs directas de imágenes PNG/JPG de productos argentinos (fondo blanco, calidad)
const realProductImages = {
  // Faltan estas
  'cafe-la-virginia.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/222857/Caf_-La-Virginia-Molido-Tradicional-250-Gr-1-113.jpg',
  'coca-cola.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/257949/Gaseosa-Coca-Cola-Sabor-Original-2-25-Lt-1-869945.jpg',
  'quilmes.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/241313/Cerveza-Quilmes-Clasica-1-L-1-30078.jpg',
  'fanta.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/257961/Gaseosa-Fanta-Naranja-2-25-Lt-1-869966.jpg',
  'paso-toros.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/167491/Agua-Tonica-Paso-De-Los-Toros-Pomelo-1-5-L-1-10824.jpg',
  'harina-pureza.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/169331/Harina-0000-Pureza-1-Kg-1-18071.jpg',
  'yerba-taraguí.jpg': 'https://ardiaprod.vtexassets.com/arquivos/ids/243088/Yerba-Mate-Taragui-Con-Palo-1-Kg-1-36730.jpg',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.google.com/'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
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

const publicDir = path.join(__dirname, '..', 'public', 'productos');

const downloadMissing = async () => {
  console.log('📥 Descargando imágenes faltantes...\n');
  
  let ok = 0;
  let fail = 0;

  for (const [filename, url] of Object.entries(realProductImages)) {
    const filepath = path.join(publicDir, filename);
    
    try {
      console.log(`⏳ ${filename}...`);
      await downloadImage(url, filepath);
      console.log(`✅ ${filename}`);
      ok++;
      await new Promise(r => setTimeout(r, 300));
    } catch (error) {
      console.log(`❌ ${filename}: ${error.message}`);
      fail++;
    }
  }

  console.log(`\n📊 Resultado: ✅ ${ok} | ❌ ${fail}`);
};

downloadMissing();
