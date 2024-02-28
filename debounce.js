/**
 * Create a debounce function that limits the execution of a function call and
 * waits for a certain amount of time before running it again.
 */

function debounce(fn, limit) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, limit);
  };
}

const add = (x, y) => {
  console.log(x + y);
};

const debouncedAddFn = debounce(add, 1000);

debouncedAddFn(1, 2);
debouncedAddFn(3, 4);
debouncedAddFn(5, 6);
debouncedAddFn(7, 8);
