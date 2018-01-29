const lineCount = require('./file.js');
const verify = require('./verify.js');

describe('function linecount', () => {
  test('should return linecount', () => {
    const result = lineCount('/Users/sahilbalodi/Desktop/node/inputoutput/file.js');
    expect(result).toBe(10);
  });
  test('should return linecount', () => {
    const result = lineCount('/Users/sahilbalodi/Desktop/node/inputoutput/testfile');
    expect(result).toBe(10);
  });
});
describe('function typeof', () => {
  test('should return number', () => {
    const result = lineCount('/Users/sahilbalodi/Desktop/node/inputoutput/testfile');
    expect(typeof (result)).toBe('number');
  });
  test('should return number', () => {
    const result = lineCount('/Users/sahilbalodi/Desktop/node/inputoutput/filetest.js');
    expect(typeof (result)).toBe('number');
  });
});
describe('function verify', () => {
  test('should return true if string is input', () => {
    expect(verify('/Users/sahilbalodi/Desktop/node/inputoutput/testfile')).toBe(true);
  });
  test('should return false if string is not input', () => {
    expect(verify(0)).toBe(false);
  });
  test('should return false if string is empty ', () => {
    expect(verify('')).toBe(false);
  });
  test('should return false if input is empty ', () => {
    expect(verify()).toBe(false);
  });
});
