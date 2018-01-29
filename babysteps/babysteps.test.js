const returnSum = require('./babystep.js');
const verify = require('./verify.js');
// test for output of function
describe('function returnSum', () => {
  test('should return sum', () => {
    expect(returnSum('1 2 3')).toBe(6);
  });
  test('should return sum', () => {
    expect(returnSum('0 0 0')).toBe(0);
  });
  test('should return sum', () => {
    expect(returnSum('5 6')).toBe(11);
  });
});
// check for each type of input to function
describe('function returnSum', () => {
  test('should return null for invalid input', () => {
    expect(verify('abcd')).toBe(null);
  });
  test('should return null for invalid input', () => {
    expect(verify('abcd 1 2 3 ')).toBe(null);
  });
  test('should return null for invalid input', () => {
    expect(verify('abcd dhf djf asd')).toBe(null);
  });
});

describe('function returnSum', () => {
  test('should return null for empty input', () => {
    expect(verify('')).toBe(null);
  });
  test('should return null for empty input', () => {
    expect(verify()).toBe(null);
  });
  test('should return null for invalid input', () => {
    expect(verify('')).toBe(null);
  });
});
