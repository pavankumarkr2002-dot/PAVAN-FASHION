const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix CSS bugs causing images to "fall down" or squish
// Fix match-card fixed height causing info overflow
html = html.replace('.match-card { width: 280px; height: 420px;', '.match-card { width: 280px;');

// Fix innerCls forcing height 100% on img area which breaks aspect ratio
html = html.replace("let innerCls = reveal ? '' : 'style=\"height:100%\"';", "let innerCls = '';");

// Fix .ac-left height lock
html = html.replace('.ac-left { width: 50%; height: 80vh;', '.ac-left { width: 50%; min-height: 80vh;');

// Fix .man-ed-row-4 and row-5 flex heights
html = html.replace('.man-ed-row-4 { display: flex; gap: 2px; height: 88vh; }', '.man-ed-row-4 { display: flex; gap: 2px; min-height: 88vh; }');
html = html.replace('.man-ed-row-5 { display: flex; gap: 2px; height: 80vh; }', '.man-ed-row-5 { display: flex; gap: 2px; min-height: 80vh; }');

// 2. Curated pool of Unsplash IDs specifically for men's luxury fashion to fix repetitions
const menFashionIds = [
  '1480455624323-e5622312217c', '1492288163659-3fb7218683e3', '1517849845537-4d257902454a', 
  '1484515991647-c5760fce5c70', '1488161628813-04466f87258b', '1494790108377-be9c29b29330', 
  '1503342394128-c104d54dba01', '1504593811416-9b17ce28c83a', '1534528741775-53994a69daeb',
  '1506629082955-511b1aa562c8', '1479064551461-d6ef1a182046', '1489980557514-251d615c1e7f',
  '1515569055883-93d3958ccde4', '1506152983158-b4a74a01c721', '1512404558509-563d7620eb60',
  '1507003211169-0a1dd7228f2d', '1482558450165-8b17c76891eb', '1500649297666-419198db8610',
  '1487222477894-8943e31ef7b2', '1499939667732-c67d1ce57530', '1504198453319-5ce911bafc45',
  '1513373516560-64abdf22ba71', '1516257984-b1b4d707412e', '1519238263530-99bdd11df2ea',
  '1507679799987-c73779587ccf', '1617127365659-c47fa864d8bc', '1552374196-1ab2a1c593e8',
  '1584370848010-d7fe6bc767ec', '1519085360753-af0119f7cbe7', '1617396900799-f4ec2b43c7d3',
  '1603217192987-e5e5b0c5e40a', '1556821840-3a63f15732ce', '1576566588028-4147f3842f27',
  '1583744946564-b52ac1c389c8', '1509942774463-acf339cf87d5', '1542272604-787c3835535d',
  '1473966968600-fa801b869a1a', '1560343090-f0409e92791a', '1604176354204-9268737828e4',
  '1591047139829-d91aecb6caea', '1523381210434-271e8be1f52b', '1594938298603-c8148c4b4c7c',
  '1571945192237-8d80d6f04736', '1600185365483-26d7a4cc7519', '1542291026-7eec264c27ff'
];

// Shuffle array
for (let i = menFashionIds.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [menFashionIds[i], menFashionIds[j]] = [menFashionIds[j], menFashionIds[i]];
}

// Split the HTML to only modify the MAN page and the JS arrays for MAN products
let htmlParts = html.split('<div id="page-man" class="page">');
if (htmlParts.length === 2) {
  let homePart = htmlParts[0];
  let manPart = htmlParts[1];
  
  let idIndex = 0;
  
  // Replace photo IDs in the MAN part and products
  manPart = manPart.replace(/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)/g, (match, p1) => {
    // Return a new ID
    let newId = menFashionIds[idIndex % menFashionIds.length];
    idIndex++;
    return `images.unsplash.com/photo-${newId}`;
  });
  
  html = homePart + '<div id="page-man" class="page">' + manPart;
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed CSS bugs and replaced repeated images');
