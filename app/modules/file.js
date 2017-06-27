const fs = require('fs');

const read = (arg) => {
  console.log('');
  console.log('Reading from file .js', arg);
  console.log('');

  const promise = new Promise((resolve, reject) => {
    let stream = fs.createReadStream(arg);
    let contents = '';

    stream.on('data', (chunk) => {
      console.log('Chunk size = ' + chunk.length);
      contents += chunk;
    });

    stream.on('end', () => {
      console.log('Finished loading.');

      setTimeout(() => {
        resolve(contents);
      }, 1234);
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });

  return promise;
}

module.exports.read = read;
