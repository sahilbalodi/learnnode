const verify = require('./verify.js');
const countLines = require('./asyncfile.js');
// test for function verify
describe('function verify', () => {
  test('should return null for undefined fileName', () => {
    expect(verify() === null).toBe(true);
  });
  test('should return true for valid fileName', () => {
    expect(verify('./testfile') === true).toBe(true);
  });
  test('should return true for valid fileName', () => {
    expect(verify('../helloworld/helloworld.js') === true).toBe(true);
  });
  test('should return null input is not a string', () => {
    expect(verify(1, 2, 3) === null).toBe(true);
  });
  test('should return null for empty fileName', () => {
    expect(verify('') === null).toBe(true);
  });
});
describe('function linecount', () => {
  test('should return linecount in the fileName', (done) => {
    const mockFunc = jest.fn((data) => {
      console.log(data);
      expect(data).toBe(7);
      done();
    });
    countLines('/Users/sahilbalodi/Desktop/node/asyninputoutput/verify.js', mockFunc);
  });
  test('should return linecount in the fileName', (done) => {
    const mockFunc = jest.fn((data) => {
      console.log(data);
      expect(data).toBe(null);
      done();
    });
    countLines('/Users/sahilbalodi/Desktop/node/asyninputoutput/abc.js', mockFunc);
  });
});
