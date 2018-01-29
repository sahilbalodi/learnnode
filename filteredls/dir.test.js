const verify = require('./verify.js');

describe('function verify', () => {
  test('should return true for arguments passed to the funciton', () => {
    expect(verify('/Users/sahilbalodi/Desktop/node/filteredls') && verify('js')).toBe(true);
  });
  test('should return true for arguments passed to the funciton', () => {
    expect(verify('/Users/sahilbalodi/Desktop/node/filteredls') && verify('js')).toBe(true);
  });
  test('should return false for invalid arguments passed to the funciton', () => {
    expect(verify('/Users/sahilbalodi/Desktop/node/filteredls') && verify('')).toBe(false);
  });
  test('should return false for invalid arguments passed to the funciton', () => {
    expect(verify('') && verify('')).toBe(false);
  });
  test('should return false for invalid arguments passed to the funciton', () => {
    expect(verify('') && verify('js')).toBe(false);
  });
  test('should return false when no arguments passed to the funciton', () => {
    expect(verify() && verify()).toBe(false);
  });
  test('should return false when no arguments passed to the funciton', () => {
    expect(verify('') && verify()).toBe(false);
  });
  test('should return false when number  passed to the funciton', () => {
    expect(verify(123) && verify(234)).toBe(false);
  });
});
