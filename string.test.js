const string = require('./index');

it('string is less than 10', () => {
  expect(string('string')).toBe(6);
});

