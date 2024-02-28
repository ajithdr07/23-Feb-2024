/**
 * Implement your own bind function that replicates the functionality of JavaScript's native Function.prototype.bind.
 */

Function.prototype.myBind = function (obj, ...args) {
  if (typeof obj != "object") {
    console.log("myBind can only accept object type as 'this' context");
    return;
  }

  const fn = this;
  return function (...args2) {
    return fn.apply(obj, args.concat(args2));
  };
};

const obj = {
  firstname: "ajith",
  lastname: "dr",
};

function getName(...args) {
  return this.firstname + " " + this.lastname;
}

console.log(getName.myBind(obj)());
