import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs directas de imágenes de productos argentinos desde búsquedas de Google
const productImages = {
  // Almacén
  'aceite-cocinero.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430099/aceite-mezcla-cocinero-900cc_640x640.jpg',
  'arroz-gallo.jpg': 'https://carrefourar.vtexassets.com/arquivos/ids/188488/7790070330017_02.jpg',
  'fideos-matarazzo.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430535/fideos-secos-matarazzo-500g_640x640.jpg',
  'yerba-taraguí.jpg': 'https://arcordesa.vteximg.com.br/arquivos/ids/158304/Yerba-Taragui-Con-Palo-1-Kg-1-25058.jpg',
  'azucar-ledesma.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430011/azucar-comun-ledesma-1kg_640x640.jpg',
  'harina-pureza.jpg': 'https://supermercadosdia.vteximg.com.br/arquivos/ids/155614/Harina-0000-Pureza-1-Kg-_1.jpg',
  'sal-celusal.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430087/sal-fina-celusal-500g_640x640.jpg',
  'cafe-la-virginia.jpg': 'https://carrefourar.vtexassets.com/arquivos/ids/177779/7790040148901_02.jpg',
  
  // Bebidas
  'coca-cola.jpg': 'https://www.cocacolaep.com/wp-content/uploads/2021/06/Coca-Cola-2.25L.png',
  'quilmes.jpg': 'https://www.quilmes.com.ar/wp-content/uploads/2021/03/quilmes-clasica-1lt.png',
  'agua-villa-sur.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430201/agua-sin-gas-villa-del-sur-2l_640x640.jpg',
  'fanta.jpg': 'https://www.cocacolaep.com/wp-content/uploads/2021/06/Fanta-Naranja-2.25L.png',
  'brahma.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/7790743024018/cerveza-brahma-lata-473ml-x-6-un_640x640.jpg',
  'jugo-baggio.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430299/jugo-de-naranja-baggio-1l_640x640.jpg',
  'vino-toro.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430567/vino-tinto-toro-750ml_640x640.jpg',
  'paso-toros.jpg': 'https://carrefourar.vtexassets.com/arquivos/ids/177821/7790895645112_02.jpg',
  
  // Lácteos
  'leche-serenisima.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430333/leche-entera-la-serenisima-1l_640x640.jpg',
  'yogur-sancor.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430377/yogur-entero-sancor-1kg_640x640.jpg',
  'queso-cremoso.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430421/queso-cremoso-la-paulina-500g_640x640.jpg',
  'dulce-leche.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430455/dulce-de-leche-ilolay-400g_640x640.jpg',
  'manteca-sancor.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430389/manteca-sancor-200g_640x640.jpg',
  'queso-rallado.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430433/queso-rallado-milkaut-40g_640x640.jpg',
  
  // Limpieza
  'detergente-magistral.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430677/detergente-magistral-750ml_640x640.jpg',
  'lavandina-ayudin.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430699/lavandina-ayudin-2l_640x640.jpg',
  'papel-higienol.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430711/papel-higienico-higienol-x4_640x640.jpg',
  'jabon-skip.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430723/jabon-polvo-skip-800g_640x640.jpg',
  'suavizante-vivere.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430735/suavizante-vivere-500ml_640x640.jpg',
  'esponja-virulana.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430747/esponja-virulana-pack-x3_640x640.jpg',
  
  // Perfumería
  'champu-sedal.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430799/champu-sedal-340ml_640x640.jpg',
  'jabon-dove.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430811/jabon-dove-90g_640x640.jpg',
  'crema-colgate.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430823/crema-dental-colgate-70g_640x640.jpg',
  'desodorante-rexona.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430835/desodorante-rexona-150ml_640x640.jpg',
  
  // Golosinas
  'alfajor-jorgito.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430887/alfajor-jorgito-pack-x6_640x640.jpg',
  'oreo.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430899/galletitas-oreo-118g_640x640.jpg',
  'chocolate-milka.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430911/chocolate-milka-100g_640x640.jpg',
  'papas-lays.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430923/papas-fritas-lays-160g_640x640.jpg',
  
  // Congelados
  'pizza-sibarita.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430975/pizza-muzzarella-sibarita-430g_640x640.jpg',
  'hamburguesas-paty.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430987/hamburguesas-paty-x4_640x640.jpg',
  'papas-mccain.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1430999/papas-mccain-1kg_640x640.jpg',
  'helado-frigor.jpg': 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/1431011/helado-frigor-1l_640x640.jpg',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'es-AR,es;q=0.9',
        'Referer': 'https://www.google.com/'
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
        reject(new Error(`Status ${response.statusCode}`));
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
  
  console.log('📥 Descargando imágenes de productos desde Coto y Carrefour...\n');

  let downloaded = 0;
  let failed = 0;
  const failedProducts = [];

  for (const [name, url] of Object.entries(productImages)) {
    const filepath = path.join(publicDir, name);
    
    try {
      console.log(`⏳ ${name}...`);
      await downloadImage(url, filepath);
      console.log(`✅ ${name}`);
      downloaded++;
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      console.error(`❌ ${name} - ${error.message}`);
      failedProducts.push(name);
      failed++;
    }
  }

  console.log(`\n📊 Resultado:`);
  console.log(`✅ Descargadas: ${downloaded}/40`);
  console.log(`❌ Fallidas: ${failed}/40`);
  
  if (failedProducts.length > 0) {
    console.log(`\n⚠️  No descargadas:`);
    failedProducts.forEach(p => console.log(`   - ${p}`));
  }
  
  console.log(`\n✨ ¡Listo!`);
};

downloadAll().catch(console.error);
