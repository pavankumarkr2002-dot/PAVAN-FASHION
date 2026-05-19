const https = require('https');

https.get('https://unsplash.com/s/photos/mens-fashion', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Extract unique IDs matching images.unsplash.com/photo-<id>
    const regex = /images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)/g;
    const ids = new Set();
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (match[1].length > 15) {
        ids.add(match[1]);
      }
    }
    console.log(Array.from(ids));
  });
}).on('error', err => console.log(err));
