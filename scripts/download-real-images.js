import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs de imágenes REALES de productos argentinos
const productImages = {
  // Almacén - URLs de productos reales
  'aceite-cocinero.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_765482-MLA52665337301_112022-F.webp',
  'arroz-gallo.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_861139-MLA46516169634_062021-F.webp',
  'fideos-matarazzo.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_647779-MLA46128926625_052021-F.webp',
  'yerba-taraguí.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_984265-MLA74003869091_012024-F.webp',
  'azucar-ledesma.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_868208-MLA47437251569_092021-F.webp',
  'harina-pureza.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_893246-MLA45917637046_052021-F.webp',
  'sal-celusal.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_774985-MLA47420651653_092021-F.webp',
  'cafe-la-virginia.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_799628-MLA53421802588_012023-F.webp',
  
  // Bebidas - Productos reales
  'coca-cola.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_699701-MLA74670988620_022024-F.webp',
  'quilmes.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_872992-MLA74434669473_022024-F.webp',
  'agua-villa-sur.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_870534-MLA47438437877_092021-F.webp',
  'fanta.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_765149-MLA54050226772_022023-F.webp',
  'brahma.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_838069-MLA74434777841_022024-F.webp',
  'jugo-baggio.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_983736-MLA74474069382_022024-F.webp',
  'vino-toro.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_696483-MLA47009044949_082021-F.webp',
  'paso-toros.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_610825-MLA54017742046_022023-F.webp',
  
  // Lácteos
  'leche-serenisima.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_667819-MLA54091054009_022023-F.webp',
  'yogur-sancor.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_832966-MLA75282423464_032024-F.webp',
  'queso-cremoso.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_721486-MLA54111874051_022023-F.webp',
  'dulce-leche.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_694356-MLA49093325989_022022-F.webp',
  'manteca-sancor.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_997226-MLA46489683633_062021-F.webp',
  'queso-rallado.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_911019-MLA48134558956_112021-F.webp',
  
  // Limpieza
  'detergente-magistral.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_830656-MLA54071881113_022023-F.webp',
  'lavandina-ayudin.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_887260-MLA47437173617_092021-F.webp',
  'papel-higienol.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_644949-MLA47420595873_092021-F.webp',
  'jabon-skip.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_691496-MLA54060874082_022023-F.webp',
  'suavizante-vivere.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_778856-MLA47437265073_092021-F.webp',
  'esponja-virulana.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_821095-MLA47420717137_092021-F.webp',
  
  // Perfumería
  'champu-sedal.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_947086-MLA54050370520_022023-F.webp',
  'jabon-dove.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_656876-MLA47431689097_092021-F.webp',
  'crema-colgate.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_986566-MLA47431817007_092021-F.webp',
  'desodorante-rexona.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_619146-MLA54104925431_022023-F.webp',
  
  // Golosinas
  'alfajor-jorgito.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_904896-MLA47437393609_092021-F.webp',
  'oreo.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_908369-MLA47437541913_092021-F.webp',
  'chocolate-milka.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_858496-MLA47437393617_092021-F.webp',
  'papas-lays.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_897906-MLA47437425145_092021-F.webp',
  
  // Congelados
  'pizza-sibarita.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_740725-MLA46510169594_062021-F.webp',
  'hamburguesas-paty.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_832925-MLA47420717141_092021-F.webp',
  'papas-mccain.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_891606-MLA46142661074_052021-F.webp',
  'helado-frigor.jpg': 'https://http2.mlstatic.com/D_NQ_NP_2X_994296-MLA47437393615_092021-F.webp',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    };
    
    protocol.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed: ${response.statusCode}`));
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

  console.log('📥 Descargando imágenes REALES de productos argentinos...\n');

  let downloaded = 0;
  let failed = 0;
  const failedProducts = [];

  for (const [name, url] of Object.entries(productImages)) {
    const filepath = path.join(publicDir, name);
    
    try {
      console.log(`⏳ Descargando: ${name}...`);
      await downloadImage(url, filepath);
      console.log(`✅ OK: ${name}`);
      downloaded++;
      // Pequeña pausa para no sobrecargar el servidor
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`❌ Error: ${name}`);
      failedProducts.push(name);
      failed++;
    }
  }

  console.log(`\n📊 Resumen:`);
  console.log(`✅ Descargadas: ${downloaded}`);
  console.log(`❌ Fallidas: ${failed}`);
  
  if (failedProducts.length > 0) {
    console.log(`\n⚠️  Productos que fallaron:`);
    failedProducts.forEach(p => console.log(`   - ${p}`));
  }
  
  console.log(`\n🎉 ¡Proceso completado!`);
};

downloadAll().catch(console.error);
