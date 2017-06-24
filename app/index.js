#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2), {
  string: 'name',
  string: 'file'
});
const file = require('./modules/file.js');
const test = require('./modules/test.js');

if(args.file) {
  //First call
  file.read(args.file)
    .then((contents) => {
      // Call to 2.txt
      return file.read(contents.toString().trim())
    })
    .then((newContent) => {
      // Call to 3.txt
      return file.read(newContent.toString().trim())
    })
    .then((thirdContent) => {
      // Prints 3.txt contents
      console.log(thirdContent.toString());
    })
    .catch((err) => {
      // Error handler
      console.error(err);
    });
}

if(args.name) {
  console.log('Hello ' + args.name);
}

test.log('asd');
