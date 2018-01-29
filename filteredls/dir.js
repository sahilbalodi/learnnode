const fs = require('fs');
const path = require('path');

const listOfFiles = [];
function filesInDir(dirname, extension) {
  fs.readdir(dirname, (error, files) => {
    if (error) { console.log(error); return null; }
    for (let i = 0; i < files.length; i += 1) {
      if (path.extname(files[i]) === `.${extension}`) {
        listOfFiles.push(files[i]);
      }
    }
    return listOfFiles;
  });
}
module.exports = { filesInDirFunc: filesInDir, files: listOfFiles };
