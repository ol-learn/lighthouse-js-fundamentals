/**
 * The function, carPassing(cars, speed), takes in an array of car objects, 
 * and the speed of a car as it passes the sensor.
 * 
 * This function should create a new object with a property called speed, 
 * and another property called time and add it to the cars array. 
 * We can retrieve the current time, for setting the time property, 
 * by using the Date.now() function, which is built into JavaScript!
 * @param {*} cars 
 * @param {*} speed 
 */
const carPassing = function (cars, speed) {
  // Your code in here ...
  let time = Date.now();
  cars.push({ time: time, speed: speed });
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)
console.log(cars);