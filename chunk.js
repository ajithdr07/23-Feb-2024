/**
 * Write a function chunk that splits an array into subarrays of specified length.
 */

function chunk(arr, length) {
  if (length == 0) {
    return [];
  }
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + length));
    index = index + length;
  }
  return result;
}

console.log(chunk(["a", "b", "c", "d"], 0));
console.log(chunk(["a", "b", "c", "d"], 1));
console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk(["a", "b", "c", "d"], 3));
console.log(chunk(["a", "b", "c", "d"], 4));
console.log(chunk(["a", "b", "c", "d"], 5));
