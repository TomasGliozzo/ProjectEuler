/*
Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
    let i = 2;

    while (number % i == 0) { // Elimino primero todos los factores de 2
      number /= i;
    }
    if(number == 1) return 2; //Era sólo múltiplo de 2
  
    // Buscar factores impares desde 3 en adelante
    i = 3;
    while (i * i <= number) {
      if (number % i == 0) {
        number /= i;
      } else {
        i += 2; // Saltamos números pares
      }
    }
    return number; // Lo que queda es el mayor factor primo
  }
  
  console.log(largestPrimeFactor(9)); // 6857