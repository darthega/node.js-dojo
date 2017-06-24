var fs = require('fs');

function read (arg) {
  console.log('');
  console.log('from file .js', arg);
  console.log('');
  return fs.readFileSync(arg);
}

module.exports.read = read;
