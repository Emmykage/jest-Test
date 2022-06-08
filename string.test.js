const string = require('./index');

test('string is less than 10', () => {
  expect(string('string')).toBe(6);
});

