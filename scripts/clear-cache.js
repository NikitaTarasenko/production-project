// path/fs
const rimraf = require('rimraf');

rimraf.sync('./node_modules/.cache');

console.log('CLEAR CACHE');
