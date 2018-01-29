const verify = require('./verify');
const callbackFunc = require('./readdir.js');

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
  test('should return false for invalid arguments passed to the funciton', () => {
    expect(verify() && verify()).toBe(false);
  });
  test('should return false for invalid arguments passed to the funciton', () => {
    expect(verify(123) && verify('js')).toBe(false);
  });
});
describe('function callbackFunc', () => {
  test('should call console.log with error', () => {
    console.log = jest.fn(console.log);
    callbackFunc('error');
    expect(console.log).toHaveBeenCalledWith('error');
  });
  test('should call console.log with filename', () => {
    console.log = jest.fn(console.log);
    callbackFunc(false, ['file.js']);
    expect(console.log).toHaveBeenCalledWith('file.js');
  });
  test('should call console.log with filenames', () => {
    console.log = jest.fn(console.log);
    callbackFunc(false, ['file1.js', 'file2.js']);
    expect(console.log.mock.calls).toContainEqual(['file1.js']);
    expect(console.log.mock.calls).toContainEqual(['file2.js']);
  });
});
