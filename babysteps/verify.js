const testForLengthAndEmpty = require('./testfornoinputoremptystring.js');

function verify(numberPassedAsString) {
  if (testForLengthAndEmpty(numberPassedAsString) === null) { return null; }
  const numberArray = numberPassedAsString.split(' ');
  for (let i = 0; i < numberArray.length; i += 1) {
    if ((Number.isNaN((Number(numberArray[i]))))) {
      return null;
    }
  }
  return typeof (1);
}
module.exports = verify;
