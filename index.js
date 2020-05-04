const fs = require('fs');
fs.mkdirSync('_site');
fs.copyFileSync('index.html', '_site/index.html');
console.log('Hello World!');