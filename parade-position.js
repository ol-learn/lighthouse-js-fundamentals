/**
 * For this challenge you'll have to implement a function called finalPosition(moves), 
 * which will calculate the position of the parade based on an array of directional moves. 
 * The parade will move on an X-Y grid.
 * 
 * Your function will receive an array of moves, which are strings that say either north, 
 * south, west, or east, these represent the parade moving in a particular direction 
 * by a single space on the grid. By looking at the path that the parade moves in, 
 * your function should calculate and then return an array representing the position 
 * of the parade after completing all of the moves. The first element of the array 
 * should be the X position, and the second element of the array should be the Y position. 
 * The parade begins at [0,0]. 
 *  
 * @param {*} moves 
 * @returns 
 */
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    console.log(move);
    if ('north' === move) {
      y++;
    } else if ('south' === move) {
      y--;
    } else if ('east' === move) {
      x++;
    } else if ('west' === move) {
      x--;
    }
  }
  console.log([x,y]);
  return [x,y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
