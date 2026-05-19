const https = require('https');

const ids = [
'1515372039744-b8f02a3ae446', '1434389677669-e08b4cac3105', '1542272604-787c3835535d', '1473966968600-fa801b869a1a', '1591047139829-d91aecb6caea', '1523381210434-271e8be1f52b', '1576566588028-4147f3842f27', '1583744946564-b52ac1c389c8', '1490481651871-ab68de25d43d', '1564257631407-4deb1f99d992', '1552902865-b72c031ac5ea', '1506629082955-511b1aa562c8', '1556821840-3a63f15732ce', '1509942774463-acf339cf87d5', '1507679799987-c73779587ccf', '1617127365659-c47fa864d8bc', '1441986300917-64674bd600d8', '1479936343636-73cdc5aae0c3', '1517841905240-472988babdf9', '1529139574466-a303027c1d8b', '1516257984-b1b4d707412e', '1519238263530-99bdd11df2ea', '1552374196-1ab2a1c593e8', '1584370848010-d7fe6bc767ec', '1519085360753-af0119f7cbe7', '1617396900799-f4ec2b43c7d3', '1603217192987-e5e5b0c5e40a', '1560343090-f0409e92791a', '1604176354204-9268737828e4', '1594938298603-c8148c4b4c7c', '1571945192237-8d80d6f04736', '1600185365483-26d7a4cc7519', '1542291026-7eec264c27ff'
];

async function check() {
  const valid = [];
  for (let id of ids) {
    const url = `https://images.unsplash.com/photo-${id}?w=400&h=533&fit=crop`;
    await new Promise(resolve => {
      https.get(url, (res) => {
        if(res.statusCode === 200 || res.statusCode === 302) {
          valid.push(id);
        }
        resolve();
      }).on('error', () => {
        resolve();
      });
    });
  }
  console.log(JSON.stringify(valid));
}
check();
