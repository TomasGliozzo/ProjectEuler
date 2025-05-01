/**
 ***** Problem 15: Lattice paths *****
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 *  Image of a diagram of 2 by 2 grids showing all the routes (6) to the bottom right corner
 *  How many such routes are there through a given gridSize?
 *  Resolución: Usar la combinatoria de coeficientes binomiales (n + k / n) = (n+k)!/[(n-k)! . k!]
 */

function latticePaths(gridSize) {

    return factor(gridSize*2)/(factor(gridSize)**2);
  }

function factor(number){
    let factor = 1;
    for (let i = 1; i <= number; i++) {
        factor *= i;
    }
    return factor;
}


console.log(latticePaths(4)); //70
console.log(latticePaths(9)); //48620
console.log(latticePaths(20)); //137846528820