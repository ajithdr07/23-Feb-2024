/**
 * Implement a function intersection that finds the intersection of two arrays,
 * returning an array with elements that appear in both.
 */

function intersection(arr1, arr2) {
  const obj1 = {},
    obj2 = {},
    result = [];

  arr1.forEach((ele) => {
    obj1[ele] = ele;
  });

  arr2.forEach((ele) => {
    obj2[ele] = ele;
  });

  for (const key in obj1) {
    if (obj2[key] != undefined) {
      result.push(obj1[key]);
    }
  }
  return result;
}

console.log(intersection([2, 1, 3, 4], [2, 3, 5, 7]));
