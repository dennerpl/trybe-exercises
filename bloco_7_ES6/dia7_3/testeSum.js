const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(0, 0), 0, "0 plus 0 is 9");
assert.strictEqual(sum(4, 5), 9, "4 plus 5 is 9");
sum(4, "5")

