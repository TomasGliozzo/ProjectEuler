/**
 ***** Problem 67: Maximum path sum II *****
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 * That is, 3 + 7 + 4 + 9 = 23.

 * Find the maximum total from top to bottom in numTriangle, a 2D array defined in the background containing a triangle with one-hundred rows.

 * Note: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 
    altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. 
    There is an efficient algorithm to solve it. ;o)
 */
import fetch from 'node-fetch';
import { maximumPathSumI } from './18.js';

function maximumPathSumII(triangle){
    return maximumPathSumI(triangle);
}

//***EXTRA PARA LEER EL TRIANGULO 100x100 DE URL***
async function fetchAndFormatTriangle(url) { //Lee el triángulo desde la URL y lo convierte en una matriz de números con el formato adecuado.
    const response = await fetch(url);
    const text = await response.text();

    // Convertir el texto en una matriz de números y rellenar con ceros
    return text
        .trim()
        .split('\n')
        .map(line => {
            const row = line.split(' ').map(Number);
            while (row.length < 100) row.push(0); // Rellenar con ceros
            return row;
        });
}

(async () => {
    const url = 'https://projecteuler.net/resources/documents/0067_triangle.txt';
    const triangle = await fetchAndFormatTriangle(url);

    console.log(maximumPathSumII(triangle)); //7273
})();

