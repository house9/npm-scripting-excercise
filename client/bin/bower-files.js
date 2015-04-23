// https://www.npmjs.com/package/main-bower-files
var mainBowerFiles = require('main-bower-files');
var files = mainBowerFiles();

files.forEach(function (value, index) {
  console.log(value);
});

// console.log(files.join(' '));
