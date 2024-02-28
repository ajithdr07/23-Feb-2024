/**
 * Write a throttle function that ensures a given function
 * is only called at most once in a specified time period.
 */

function throttle(fn, delay) {
  let startTime = 0;
  return function (...args) {
    const curTime = new Date().getTime();
    if (curTime - startTime > delay) {
      fn(...args);
      startTime = curTime;
    }
  };
}

const add = (x, y) => {
  console.log(x + y);
};

const throttledFn = throttle(add, 1000);

setTimeout(() => throttledFn(1, 2), 0);
setTimeout(() => throttledFn(3, 4), 100);
setTimeout(() => throttledFn(5, 6), 200);
setTimeout(() => throttledFn(7, 6), 300);
setTimeout(() => throttledFn(8, 9), 1000);
setTimeout(() => throttledFn(8, 9), 1030);
setTimeout(() => throttledFn(8, 9), 1300);
setTimeout(() => throttledFn(10, 10), 2000);
