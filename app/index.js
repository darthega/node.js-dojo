#!/usr/bin/env node

var args = require('minimist')(process.argv.slice(2), {
  string: 'name',
  string: 'file'
});
var file = require('./modules/file.js');
var test = require('./modules/test.js');

var contents = file.read(args.file);

console.log('Hello ' + args.name);
console.log(contents.toString());
test.log('asd');
