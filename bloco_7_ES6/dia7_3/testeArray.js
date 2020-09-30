const { AssertionError } = require('assert');
const assert = require('assert');
const array = [1,2,3,4]
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4], "The result should be [1,2,3,4]")
assert.deepStrictEqual(myRemove(array, 3), array, "The parameter was not destroed")
assert.deepStrictEqual(myRemove([ 1, 2, 3, 4 ], 3), [ 1, 2, 4 ], "This function does not work")
assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4], "the output should be [1,2,4]")
console.log(myRemove([1,2,3,4], 3))