function returnSum(numberPassedAsString) {
  const numberArray = numberPassedAsString.split(' ');
  const sum = numberArray.reduce((total, number) => Number(total) + Number(number));
  return sum;
}
module.exports = returnSum;
