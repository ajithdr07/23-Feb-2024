/**
 * Implement a function calcLetters that calculates and returns the sum of all repeated characters in an strings.
 * Ex: input  => "Apple"
 * output => {"A":1, "e":1, "l":1, "p":2}
 */

function calcLetters(str) {
  const obj = {};
  for (const ch of str) {
    if (obj[ch]) {
      obj[ch]++;
    } else {
      obj[ch] = 1;
    }
  }
  return obj;
}

console.log(calcLetters("Apple"));
console.log(calcLetters("Banana"));
