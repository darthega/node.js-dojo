var fs = require('fs');

function read (arg,cb) {
  console.log('');
  console.log('from file .js', arg);
  console.log('');

  return fs.readFile(arg, function(err, contents) {
    if (err) {
      cb(err);
    } else {
      setTimeout(function(){
        cb(undefined,contents);
      },1234);
    }
  });
}

module.exports.read = read;
