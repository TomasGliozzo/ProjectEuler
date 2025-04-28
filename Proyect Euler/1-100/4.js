/*
Problem 4: Largest palindrome product
A palindromic numer reads the same both ways. The largest palindrome made from the product of two 2-digits numbers is 9009 = 91 * 99.
Find the largest palindrome number made from the produt of two n-digit numbers.
*/

function largestPalindromeProduct(n){
    let n1 = (10 ** n) - 1;
    let n2 = (10 ** n) - 1;
    let max = 0;
    let producto = 0;

    while(n1 > 0){
        while(n2 > 0){ 
            producto = n1*n2;
            if(esPalindromo(producto)){
                if(producto > max){
                    max = producto;
                }
            }
            n2--;
        }
            n2 = (10 ** n) - 1;
            n1--;
            if(n1*n2 < max){ //compruebo el nro máx del siguiente ciclo completo para ver si vale la pena seguir.
                break;
            }
    }
    return max;
}

function esPalindromo(n1n2){
    let cadena = (n1n2).toString();
    return cadena == cadena.split("").reverse().join("");
}

console.log(largestPalindromeProduct(5))
