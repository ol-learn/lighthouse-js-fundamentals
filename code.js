/**
 * isEven takes as its parameter a number and returns a Boolean value representing 
 * whether or not the number is even.
 * @param {*} num 
 * @returns Returns a Boolean value representing whether or not the number is even
 */
const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
