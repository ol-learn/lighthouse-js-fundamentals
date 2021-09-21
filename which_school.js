/**
 * The logic should help learners decide which school they should attend. 
 * 
 * @example
 * // returns "Elementary School"
 * whichSchool(5);
 * 
 * @example
 * // returns "Secondary School"
 * whichSchool(13);
 * 
 * @example
 * // returns "Lighthouse Labs"
 * whichSchool(19);
 * 
 * @param {Number} age 
 * @returns {String} Returns one of the following strings, based on the value of age:
 *   Elementary School if age is below 13
 *   Secondary School if age is between 13 and 18 (both inclusive)
 *   Lighthouse Labs in all other cases.
 * 
 */
 const whichSchool  = function (age) {
  if (!age) {
    return null;
  }
  if (age < 13) {
    return "Elementary School";
  } else if (age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log(whichSchool(5));

function test() {
  const arrTest = [5, 13, 18, 14, 19, 0, null, undefined]
  for (let i = 0; i < arrTest.length; i++) {
    console.log(String(arrTest[i]) + " " + whichSchool(arrTest[i]));
  }
}
test();
