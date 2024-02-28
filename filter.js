/**
 * Write a custom filter function that mimics the behavior of the native Array.prototype.filter method.
 */

Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const greaterThanTwo = (item) => item > 2;

const filteredArr = [10, 0, -2, -3, 1, 6, 5].myFilter(greaterThanTwo);
console.log(filteredArr);
