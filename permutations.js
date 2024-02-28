/**
 * Write a function permute that returns all possible permutations of the elements in an array.
 */

function permutations(arr) {
  if (arr.length == 0) return [];

  const result = [],
    vis = Array(arr.length).fill(false),
    temp = [];

  function permut(arr, vis, temp, index) {
    if (index == arr.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!vis[i]) {
        temp.push(arr[i]);
        vis[i] = true;
        permut(arr, vis, temp, index + 1);
        vis[i] = false;
        temp.pop();
      }
    }
  }
  permut(arr, vis, temp, 0);
  return result;
}

console.log(permutations([1, 2, 3]));
