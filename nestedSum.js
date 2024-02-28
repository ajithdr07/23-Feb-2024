/**
 * Implement a function nestedSum that calculates the sum of all numbers
 * in a nested array, regardless of how deep the array is.
 */

function nestedSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    } else if (Array.isArray(arr[i])) {
      sum += nestedSum(arr[i]);
    }
  }
  return sum;
}

console.log(nestedSum([1, 2, [20, 40], 50, 60, [70, 80], 0, 1]));
