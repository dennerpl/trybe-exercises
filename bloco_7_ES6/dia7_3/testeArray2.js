const assert = require('assert');
const array = [1,2,3,4]
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 5), [1,2,3,4], "The result should be [1,2,3,4]")
assert.deepStrictEqual(myRemoveWithoutCopy(array, 3), array, "The parameter was not destroed")
assert.deepStrictEqual(myRemoveWithoutCopy([ 1, 2, 3, 4 ], 3), [ 1, 2, 4 ], "This function does not work")
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4], "the output should be [1,2,4]")
console.log(myRemoveWithoutCopy([1,2,3,4], 3))
