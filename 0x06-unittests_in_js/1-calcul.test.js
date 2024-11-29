const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("SUM: Sum of 2 numbers", () => {
  it("checking if number is round for 2 whole numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
  });

  it("checking if number is round for first float & second whole", () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
  });

  it("checking if number is round for first float & second whole", () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
  });

  it("checking if number is round for first whole & second float", () => {
    assert.strictEqual(calculateNumber('SUM', 3, 1.2), 4);
  });

  it("checking if number is round for first whole & second float", () => {
    assert.strictEqual(calculateNumber('SUM', 3, 1.5), 5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 3.1, 1.2), 4);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 3.5, 1.2), 5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 3.1, 1.5), 5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUM', 3.6, 1.8), 6);
  });
});

describe("SUBTRACT: Subtraction of b from a", () => {
  it("checking if number is round for 2 whole numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 8, 3), 5);
  });

  it("checking if number is round for first float & second whole", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.2, 3), 4);
  });

  it("checking if number is round for first float & second whole", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.5, 3), 5);
  });

  it("checking if number is round for first whole & second float", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 1.2), 4);
  });

  it("checking if number is round for first whole & second float", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 7, 1.5), 5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.1, 1.2), 4);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 1.2), 5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.1, 1.5), 5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.6, 1.8), 6);
  });
});

describe("DIVIDE: Division of 2 numbers", () => {
  it("checking if number is round for 2 whole numbers", () => {
    assert.strictEqual(Math.round(calculateNumber('DIVIDE', 8, 3)), 3);
  });

  it("checking if number is round for first float & second whole", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 12.2, 3), 4.0);
  });

  it("checking if number is round for first float & second whole", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 14.5, 3), 5.0);
  });

  it("checking if number is round for first whole & second float", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20, 5.2), 4.0);
  });

  it("checking if number is round for first whole & second float", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 1.5), 5.0);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.1, 1.2), 2.0);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.2), 5.0);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 7.1, 1.5), 3.5);
  });

  it("checking if number is round for 2 float numbers", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 7.6, 1.8), 4.0);
  });
});

