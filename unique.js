/**
 * Write a function unique that returns a new array with only the unique elements from the original array.
 */

function unique(arr) {
  const obj = {};
  const result = [];
  arr.forEach((element, index) => {
    if (obj[element] == undefined) {
      obj[element] = { count: 1, index };
    } else {
      obj[element].count++;
    }
  });

  for (const key in obj) {
    if (obj[key].count == 1) {
      result.push(arr[obj[key].index]);
    }
  }

  return result;
}

console.log(
  unique([1, 2, 3, 1, 2, 4, 5, 10, 12, 11, 1, 17, 20, 21, 22, 10, 20])
);
