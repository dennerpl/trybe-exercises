const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) =>  {
    let newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        let newItem = array[i].length;
        newArray.push(newItem);
    }
    return newArray;
};
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);