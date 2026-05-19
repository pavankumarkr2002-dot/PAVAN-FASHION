const fs = require('fs');
const https = require('https');

const banners = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85', // Woman Drop
  'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1920&q=85', // Man Origins
  'https://images.unsplash.com/photo-1519233073511-d6a62295d291?w=1920&q=85', // Kids New In
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=85', // Woman Summer
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=85', // Man Linen
  'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=1920&q=85', // Kids Play
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85', // Woman Occasion
  'https://images.unsplash.com/photo-1507679799987-c7377ec486b8?w=1920&q=85', // Man Suiting
  'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1920&q=85', // Kids School
  'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1920&q=85', // Woman Access
  'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1920&q=85', // Man Shoes
  'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1920&q=85'  // Brand Origins
];

async function download(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const path = filename;
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on('finish', () => {
        filePath.close();
        console.log('Downloaded: ' + filename);
        resolve();
      });
    }).on('error', (err) => {
      console.error('Error downloading ' + filename, err);
      reject(err);
    });
  });
}

async function run() {
  for(let i=0; i<banners.length; i++) {
    await download(banners[i], `home_banner_${i+1}.jpg`);
  }
  console.log('All home banners downloaded.');
}

run();
