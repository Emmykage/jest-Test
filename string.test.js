const Calculator = require ('./index.js')

describe("calculator", () =>{
  test(Calculator,add(3,7)).toBe(10)
})