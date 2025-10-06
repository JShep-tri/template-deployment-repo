import { sayHello } from '../src/index';

describe('sayHello function', () => {
  it('should return a greeting for the given name', () => {
    expect(sayHello('World')).toBe('Hello, World!');
    expect(sayHello('Dev')).toBe('Hello, Dev!');
  });
});
