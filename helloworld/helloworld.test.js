const hw = require('./helloworld');

describe('function helloworld', () => {
  test('should print helloworld', () => {
    console.log = jest.fn(console.log);
    hw('HELLO WORLD');
    expect(console.log).toHaveBeenCalledWith('HELLO WORLD');
  });
  test('doesnt print helloworld', () => {
    console.log = jest.fn(console.log);
    hw('hello');
    expect(console.log).not.toHaveBeenCalledWith('HELLO WORLD');
  });
  test('doesnt print helloworld', () => {
    console.log = jest.fn(console.log);
    hw(1);
    expect(console.log).not.toHaveBeenCalledWith('HELLO WORLD');
  }); test('doesnt print helloworld', () => {
    console.log = jest.fn(console.log);
    hw();
    expect(console.log).not.toHaveBeenCalledWith('HELLO WORLD');
  }); test('doesnt print helloworld', () => {
    console.log = jest.fn(console.log);
    hw('hello world');
    expect(console.log).not.toHaveBeenCalledWith('HELLO WORLD');
  });
});
