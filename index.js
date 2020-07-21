const assert = require('assert');
const fs = require('fs');

fs.mkdirSync('_site');
fs.copyFileSync('index.html', '_site/index.html');
console.log('MY ENV VAR: ' + process.env.MY_ENV_VAR);
console.log('Hello World!');
console.log({ TEST_UEV: process.env.TEST_UEV });
assert.strictEqual(process.env.TEST_UEV, 'hello uev world!');