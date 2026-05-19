
const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://images.unsplash.com/photo-1490481651871-ab68624d5517?w=1920&q=80', name: 'banner_1.jpg' },
  { url: 'https://images.unsplash.com/photo-1516826435551-36a8a09e4575?w=1920&q=80', name: 'banner_2.jpg' },
  { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80', name: 'banner_3.jpg' },
  { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1920&q=80', name: 'banner_4.jpg' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80', name: 'banner_5.jpg' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
};

async function main() {
  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    try {
      await download(img.url, path.join(__dirname, img.name));
      console.log(`Finished ${img.name}`);
    } catch (e) {
      console.error(`Failed ${img.name}: ${e}`);
    }
  }
}

main();
