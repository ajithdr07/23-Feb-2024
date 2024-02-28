/**
 * Create a function mergeIntervals that merges all overlapping intervals in an array of interval pairs.
 */

function mergeIntervals(arr) {
  if (arr.length == 0) return [];
  const temp = arr.sort((a, b) => a[0] - b[0]);
  return temp.reduce(
    (acc, cur) => {
      const n = acc.length;
      if (acc[n - 1][1] >= cur[0]) {
        acc[n - 1][0] = Math.min(acc[n - 1][0], cur[0]);
        acc[n - 1][1] = Math.max(acc[n - 1][1], cur[1]);
      } else {
        acc.push(cur);
      }
      return acc;
    },
    [[temp[0][0], temp[0][1]]]
  );
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 4],
    [6, 8],
    [9, 10],
  ])
);

console.log(
  mergeIntervals([
    [6, 8],
    [1, 9],
    [2, 4],
    [4, 7],
  ])
);

console.log(
  mergeIntervals([
    [9, 12],
    [3, 7],
    [1, 4],
    [14, 17],
  ])
);

console.log(
  mergeIntervals([
    [1, 6],
    [6, 9],
  ])
);

console.log(
  mergeIntervals([
    [8, 10],
    [2, 4],
    [1, 3],
    [5, 9],
  ])
);
