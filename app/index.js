#!/usr/bin/env node

var args = require('minimist')(process.argv.slice(2), {
  string: 'name',
  string: 'file'
});
var file = require('./modules/file.js');
var test = require('./modules/test.js');

file.read(args.file, function(err, contents){
  if(err) {
    console.error(err);
  } else {
    console.log(contents.toString());
  }
});

console.log('Hello ' + args.name);
test.log('asd');
