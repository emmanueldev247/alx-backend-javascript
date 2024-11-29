const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe("Sum of 2 numbers", () => {
  it("should return 5 when 2.3 and 3 are passed", () => {
      assert.strictEqual(calculateNumber(2.3, 3), 5);
  });

  it("should return 5 when 1.2 and 3.7 are passed", () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return 6 when 1.5 and 3.7 are passed", () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
