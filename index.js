const fs = require('fs');

console.log('I will hang for an hour')
let wait = true;
setTimeout(() => wait = false, 60 * 60 * 1000);
while(wait) {}
fs.mkdirSync('_site');
fs.copyFileSync('index.html', '_site/index.html');
console.log('Hello World!');
