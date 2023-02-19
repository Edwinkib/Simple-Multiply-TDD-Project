// eslint-disable-next-line max-len
// Import the 'assert' module from the Node.js standard library and the 'multiply' function from the '../multiply' module
const { assert } = require('chai');
const { describe, it } = require('mocha');
const multiply = require('../multiply');

// Define a 'describe' block to group related tests together and give them a name
describe('multiply', () => {
  // Define an 'it' block that contains a single test case
  it('should multiply 1 by 1', () => {
    // eslint-disable-next-line max-len
    // Use 'assert.equal' to check if the result of calling 'multiply' with the arguments '1' and '1' is equal to '1'
    assert.equal(multiply(1, 1), 1);
  });

  it('should multiply 2 by 2', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('should multiply 3 by 3', () => {
    assert.equal(multiply(3, 3), 9);
  });

  it('should multiply 4 by 4', () => {
    assert.equal(multiply(4, 4), 16);
  });

  it('should multiply 23 by 45', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
