const fs = require('fs');

function countLines(fileName, mockFunc) {
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      mockFunc(null);
    } else {
      const numberOfLines = data.split('\n').length - 1;
      console.log(numberOfLines);
      mockFunc(numberOfLines);
    }
  });
}
module.exports = countLines;
