const Calculator = require ('./index.js')

describe("calculator", () =>{
  test('asum of 3 and 10',Calculator.add(3,7)).toBe(10)
})