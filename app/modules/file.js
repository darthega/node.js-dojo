const fs = require('fs');

const read = (arg) => {
  console.log('');
  console.log('Reading from file .js', arg);
  console.log('');

  const promise = new Promise((resolve, reject) => {
    fs.readFile(arg, (err, contents) => {
      if(err) {
        reject(err);
      } else {
        setTimeout(() => {
          resolve(contents);
        }, 1234);
      }
    });
  });

  return promise;
}

module.exports.read = read;
