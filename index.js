const fs = require('fs');
fs.copyFileSync('index.html', '_site/index.html');
console.log('Hello World!');