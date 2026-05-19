const https = require('https');
const fs = require('fs');
const path = require('path');

const ids = [
  "1515372039744-b8f02a3ae446","1434389677669-e08b4cac3105","1542272604-787c3835535d",
  "1473966968600-fa801b869a1a","1591047139829-d91aecb6caea","1523381210434-271e8be1f52b",
  "1576566588028-4147f3842f27","1583744946564-b52ac1c389c8","1490481651871-ab68de25d43d",
  "1564257631407-4deb1f99d992","1552902865-b72c031ac5ea","1506629082955-511b1aa562c8",
  "1509942774463-acf339cf87d5","1507679799987-c73779587ccf","1617127365659-c47fa864d8bc",
  "1441986300917-64674bd600d8","1479936343636-73cdc5aae0c3","1517841905240-472988babdf9",
  "1529139574466-a303027c1d8b","1516257984-b1b4d707412e","1519238263530-99bdd11df2ea"
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download, status: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading local images...');
  for (let i = 0; i < ids.length; i++) {
    const url = `https://images.unsplash.com/photo-${ids[i]}?w=600&h=800&fit=crop`;
    const dest = path.join(__dirname, `man_img_${i+1}.jpg`);
    try {
      await downloadFile(url, dest);
      console.log(`Downloaded man_img_${i+1}.jpg`);
    } catch (e) {
      console.error(`Failed: ${dest} - ${e.message}`);
    }
  }

  // Update HTML
  let html = fs.readFileSync('index.html', 'utf8');
  let htmlParts = html.split('<div id="page-man" class="page">');
  if (htmlParts.length === 2) {
    let homePart = htmlParts[0];
    let manPart = htmlParts[1];
    
    let idIndex = 0;
    manPart = manPart.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?w=[0-9]+&h=[0-9]+&fit=crop(?:&auto=format&q=[0-9]+)?/g, (match) => {
      let newId = (idIndex % ids.length) + 1;
      idIndex++;
      return `man_img_${newId}.jpg`;
    });
    
    html = homePart + '<div id="page-man" class="page">' + manPart;
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Updated index.html to use local images!');
  }
}

run();
