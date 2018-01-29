function testForLengthAndEmpty(numberPassedAsString) {
  if (numberPassedAsString === undefined) {
    return null;
  } else if (numberPassedAsString.length === 0) {
    return null;
  }
  return true;
}
module.exports = testForLengthAndEmpty;
