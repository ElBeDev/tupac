import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs directas de imágenes de productos argentinos REALES de alta calidad
const productosArgentinos = {
  // ALMACÉN
  'aceite-cocinero.jpg': 'https://www.carrefour.com.ar/media/catalog/product/7/7/7790040111301_01.jpg',
  'arroz-gallo.jpg': 'https://www.carrefour.com.ar/media/catalog/product/7/7/7790040222302_02_1.jpg',
  'fideos-matarazzo.jpg': 'https://www.carrefour.com.ar/media/catalog/product/7/7/7790040333303_03.jpg',
  'yerba-taraguí.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/745090/Yerba-Mate-Con-Palo-Taragui-1-Kg-1-250439.jpg',
  'azucar-ledesma.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/195843/Azucar-Ledesma-Paquete-1kg-1-12997.jpg',
  'harina-pureza.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/177009/Harina-0000-Pureza-1kg-1-5328.jpg',
  'sal-celusal.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/423686/Sal-Fina-Celusal-500-Gr-1-40845.jpg',
  'cafe-la-virginia.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776234/Cafe-Molido-La-Virginia-250-Gr-1-869178.jpg',
  
  // BEBIDAS
  'coca-cola.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/741906/Gaseosa-Coca-Cola-Sabor-Original-2-25-L-1-978.jpg',
  'quilmes.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/775971/Cerveza-Quilmes-Clasica-Botella-1-L-1-872606.jpg',
  'agua-villa-sur.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/779406/Agua-Mineral-Villa-Del-Sur-Sin-Gas-2-L-1-983204.jpg',
  'fanta.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/760046/Gaseosa-Fanta-Naranja-2-25-L-1-869966.jpg',
  'brahma.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776149/Cerveza-Brahma-Chopp-Retornable-1-L-1-872651.jpg',
  'jugo-baggio.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776392/Jugo-Baggio-Naranja-1-L-1-249935.jpg',
  'vino-toro.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776586/Vino-Toro-Viejo-Tinto-750-Ml-1-864088.jpg',
  'paso-toros.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/759775/Agua-Tonica-Paso-De-Los-Toros-Pomelo-1-5-L-1-10824.jpg',
  
  // LÁCTEOS
  'leche-serenisima.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776813/Leche-Entera-La-Serenisima-1-L-1-869383.jpg',
  'yogur-sancor.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777062/Yogur-Descremado-Sancor-Natural-190-Gr-1-869510.jpg',
  'queso-cremoso.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/779963/Queso-Cremoso-La-Paulina-Port-Salut-1-Kg-1-869658.jpg',
  'dulce-leche.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776829/Dulce-De-Leche-Ilolay-Repostero-400-Gr-1-869395.jpg',
  'manteca-sancor.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777069/Manteca-Sancor-Pan-200-Gr-1-869511.jpg',
  'queso-rallado.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776933/Queso-Rallado-Milkaut-40-Gr-1-869444.jpg',
  
  // LIMPIEZA
  'detergente-magistral.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777289/Detergente-Magistral-Limon-750-Ml-1-869638.jpg',
  'lavandina-ayudin.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777224/Lavandina-Ayudin-Original-2-L-1-869611.jpg',
  'papel-higienol.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/780224/Papel-Higienico-Higienol-Mega-Hoja-Simple-X-4-U-1-869732.jpg',
  'jabon-skip.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777360/Jabon-En-Polvo-Skip-800-Gr-1-869676.jpg',
  'suavizante-vivere.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777415/Suavizante-Vivere-Clasico-500-Ml-1-869704.jpg',
  'esponja-virulana.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777245/Esponja-De-Lana-De-Acero-Virulana-Pack-3-Un-1-869621.jpg',
  
  // PERFUMERÍA
  'champu-sedal.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/780386/Shampoo-Sedal-Liso-Perfecto-340-Ml-1-870008.jpg',
  'jabon-dove.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777180/Jabon-En-Barra-Dove-Original-90-Gr-1-869589.jpg',
  'crema-colgate.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/777110/Crema-Dental-Colgate-Triple-Accion-70-Gr-1-869533.jpg',
  'desodorante-rexona.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/780397/Desodorante-Aerosol-Rexona-Men-V8-150-Ml-1-870015.jpg',
  
  // GOLOSINAS
  'alfajor-jorgito.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776687/Alfajor-Jorgito-Negro-X-6-U-1-869344.jpg',
  'oreo.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776919/Galletitas-Oreo-Original-118-Gr-1-869432.jpg',
  'chocolate-milka.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776904/Chocolate-Milka-Oreo-100-Gr-1-869421.jpg',
  'papas-lays.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776877/Papas-Fritas-Lays-Clasicas-160-Gr-1-869406.jpg',
  
  // CONGELADOS
  'pizza-sibarita.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/780086/Pizza-Sibarita-Muzzarella-430-Gr-1-869713.jpg',
  'hamburguesas-paty.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776975/Hamburguesas-Paty-X-4-U-1-869466.jpg',
  'papas-mccain.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776876/Papas-Noisette-Mccain-1-Kg-1-869405.jpg',
  'helado-frigor.jpg': 'https://jumboargentina.vtexassets.com/arquivos/ids/776762/Helado-Frigor-Limon-1-L-1-869360.jpg',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'es-AR,es;q=0.9',
        'Referer': 'https://www.jumbo.com.ar/'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307) {
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

const downloadAll = async () => {
  console.log('📥 Descargando 40 productos argentinos de Jumbo/Carrefour...\n');
  
  let ok = 0;
  let fail = 0;
  const failed = [];

  for (const [filename, url] of Object.entries(productosArgentinos)) {
    const filepath = path.join(publicDir, filename);
    
    try {
      console.log(`⏳ ${filename.padEnd(30)}`, '...');
      await downloadImage(url, filepath);
      console.log(`✅ ${filename.padEnd(30)} OK`);
      ok++;
      await new Promise(r => setTimeout(r, 400));
    } catch (error) {
      console.log(`❌ ${filename.padEnd(30)} FALLO`);
      failed.push(filename);
      fail++;
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 Resumen: ${ok}/${ok+fail} exitosas | ${fail} fallidas`);
  if (failed.length > 0) {
    console.log(`\n⚠️  Fallidas: ${failed.join(', ')}`);
  }
  console.log(`${'='.repeat(50)}`);
};

downloadAll();
