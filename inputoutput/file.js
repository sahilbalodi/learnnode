const fs = require('fs');

function countLines(fileName) {
  const fileObject = fs.readFileSync(fileName);
  const fileContent = fileObject.toString();
  const numberOfLines = fileContent.split('\n').length - 1;
  return numberOfLines;
}
module.exports = countLines;
