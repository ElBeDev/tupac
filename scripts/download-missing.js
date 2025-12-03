import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs alternativas para los productos que fallaron
const missingProducts = {
  'yerba-taraguí.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKvQC7rU_vbMO8YpOZFx7JLkZu-qZ3gIBPQ&s',
  'harina-pureza.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQxNQYHm3d6LhJQ3xkDLTZ_5hXYZ6WjZ5Rw&s',
  'cafe-la-virginia.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCQwHXkKlOFD_gQy8jQZN7cZNy-qXZYJYpQ&s',
  'coca-cola.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXZGpQjxMzZHQM_YzRZYwZXQgQyZQZFZGzQ&s',
  'quilmes.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZXQZYGzQXZQZXZQZXZQZXZQZXZQZXZQZXQ&s',
  'fanta.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQZXZQZXZQZXZQZXZQZXZQZXZQZXZQZXZXQ&s',
  'paso-toros.jpg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXZQZXZQZXZQZXZQZXZQZXZQZXZQZXZXZXQ&s',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, (response) => {
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
    }).on('error', reject);
  });
};

const publicDir = path.join(__dirname, '..', 'public', 'productos');

console.log('📥 Descargando productos faltantes desde Google Images...\n');

(async () => {
  for (const [name, url] of Object.entries(missingProducts)) {
    try {
      const filepath = path.join(publicDir, name);
      await downloadImage(url, filepath);
      console.log(`✅ ${name}`);
      await new Promise(r => setTimeout(r, 200));
    } catch (error) {
      console.log(`❌ ${name}`);
    }
  }
  console.log('\n✨ ¡Completado!');
})();
