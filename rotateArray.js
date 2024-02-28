/**
 * Implement a function rotateArray that rotates an array to the right by a given number of steps.
 */

function rotateArray(arr, steps = 0) {
  let n = arr.length;
  return arr.slice(n - steps).concat(arr.slice(0, n - steps));
}

console.log(rotateArray([10, 20, 1, 2, 34], 3));
