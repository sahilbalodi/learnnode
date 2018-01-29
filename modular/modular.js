const fs = require('fs');
const path = require('path');
const callbackFunc = require('./readdir.js');

const listOfFiles = [];
function filesInDir(dirname, extension, callback) {
  fs.readdir(dirname, (error, files) => {
    if (error) { callback(error); return error; }
    for (let i = 0; i < files.length; i += 1) {
      if (path.extname(files[i]) === `.${extension}`) {
        listOfFiles.push(files[i]);
      }
    }
    callback(null, listOfFiles);
    return listOfFiles;
  });
}
