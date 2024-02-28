/**
 * Write a function curry that takes a function and curried arguments and
 * returns a new function that can take the remaining arguments.
 */

function curry(fn, ...args) {
  return function (...args2) {
    const newArgs = args.concat(args2);
    if (newArgs.length >= fn.length) {
      return fn.apply(this, newArgs);
    } else {
      return curry.apply(this, [fn, ...newArgs]);
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

function mul(a, b, c, d) {
  return a * b * c * d;
}

const curriedSum = curry(sum);

console.log("sum(1)(2, 3) = ", curriedSum(1)(2, 3));
console.log("sum(1, 2, 3) = ", curriedSum(1, 2, 3));
console.log("sum(1)(4)(8) = ", curriedSum(1)(4)(8));
console.log("sum(1)(2)(4, 5) = ", curriedSum(1)(2)(4, 5));

console.log("-----------------------");

const curriedMul = curry(mul, 2);
console.log("curried with prefilled argument: 2");
console.log("mul(1,2,3) = ", curriedMul(1, 2, 3, 0));
console.log("mul(1)(0)(3) = ", curriedMul(1)(0)(2));
console.log("mul(11,10)(10) = ", curriedMul(11, 10)(10));
