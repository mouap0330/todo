/* Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.
*/

let testArray = ['one', 'two', 'three','four'];

function transformFirstAndLast(array) {
  let objectValue = {};
  let firstWord = array[0];

  objectValue[firstWord] = array[array.length-1];
  return objectValue;
};

console.log(transformFirstAndLast(testArray));
