#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2), {
  string: 'name',
  string: 'file'
});
const file = require('./modules/file.js');
const test = require('./modules/test.js');

if(args.file) {
  file.read(args.file)
    // Once promise resolves
    .then((contents) => {
      console.log(contents);
    })
    // Error handler
    .catch((err) => {
      console.error(err);
    });
}

if(args.name) {
  console.log('Hello ' + args.name);
}

test.log('asd');
