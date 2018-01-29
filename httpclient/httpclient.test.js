// const httpclient = require('./httpclient.js');
const verify = require('./verify.js');

describe('function verify', () => {
  test('should return true if input is string', () => {
    expect(verify('http://www.google.com')).toBe(true);
  });
  test('should return true if input is string', () => {
    expect(verify('http://www.facebook.com')).toBe(true);
  });
  test('should return false if input is empty string', () => {
    expect(verify('')).toBe(false);
  });
  test('should return false if input is empty', () => {
    expect(verify()).toBe(false);
  });
  test('should return false if input is not proper http request', () => {
    expect(verify('www.google.com')).toBe(false);
  });
  test('should return false if input is not proper http request', () => {
    expect(verify('http://www.mckinsey.com')).toBe(true);
  });
});
