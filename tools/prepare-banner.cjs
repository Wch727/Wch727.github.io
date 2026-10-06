const sharp = require('sharp');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
sharp(path.join(root, 'assets/after-rain.png')).resize({width:1920,withoutEnlargement:true}).webp({quality:86}).toFile(path.join(root,'public/assets/after-rain.webp')).then(info=>console.log(info));
