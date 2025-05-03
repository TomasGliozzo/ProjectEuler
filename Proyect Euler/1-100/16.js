/**
 ***** Problem 16: Power digit sum *****
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 *  What is the sum of the digits of the number 2^exponent?
 */

function powerDigitSum(exponent) {
    const result = BigInt(2) ** BigInt(exponent);
    const sumOfDigits = result.
                            toString().
                            split('').
                            map(Number). //Convierte cada dígito a número
                            reduce((sum, number) => sum + number, 0); //Reduce la lista a un número sumando cada dígito de la lista y almacenandolo temp en sum (luego en sumOfDigits). 
    return sumOfDigits;
}
  
console.log(powerDigitSum(15)); //26
console.log(powerDigitSum(128)); //166
console.log(powerDigitSum(1000)); //1366
