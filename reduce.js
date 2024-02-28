/**
 * Create your own version of the reduce method called myReduce that
 * mimics the behavior of the native Array.prototype.reduce.
 */

Array.prototype.myReduce = function (cb, initialValue) {
  let result, startIndex;
  if (initialValue != undefined) {
    result = initialValue;
    startIndex = 0;
  } else {
    result = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    result = cb(result, this[i], i, this);
  }

  return result;
};

const result1 = [1, 2, 3, 4, -2, -3].myReduce((acc, cur) => acc + cur);
const result2 = [1, 2, 3, 4, -2, -3].myReduce((acc, cur) => acc + cur, 10);
const users = [
  {
    firstname: "john",
    lastname: "doe",
  },
  {
    firstname: "david",
    lastname: "morrison",
  },
  {
    firstname: "kevin",
    lastname: "ryan",
  },
  {
    firstname: "don",
    lastname: "romer",
  },
  {
    firstname: "derek",
    lastname: "powell",
  },
  {
    firstname: "david",
    lastname: "russell",
  },
];

const result3 = users.myReduce((acc, cur) => {
  const { firstname: fn, lastname: ln } = cur;
  acc.push(
    `${fn[0].toUpperCase() + fn.slice(1)} ${ln[0].toUpperCase() + ln.slice(1)}`
  );
  return acc;
}, []);

console.log(result1);
console.log(result2);
console.log(result3);
