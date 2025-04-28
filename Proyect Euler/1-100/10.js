/**
 * 
 Problem 10: Summation of primes
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below n.
 */
function primeSummation(n) {
    let prime_numbs = [2]
    let i = 3

    while(i < n){
        if(i%2 != 0){ //Descarto los pares
            if(isPrime(i)){
                prime_numbs.push(i) //Agrego el elemento al final de la lista si es primo
            }
        }
        i++
    }
    return listSum(prime_numbs); //Devuelve la sumatoria de la lista de números primos
}

function isPrime(n){
    let nsqrt = Math.sqrt(n)
    let i = 2
    while (i<=nsqrt) {
        if(n%i == 0){
            return false
        }
        i++
    }
    return true
}

function listSum(list){
    let sum = 0
    for(let i = 0; i < list.length; i++){
        sum += list[i]
    }
    return sum
}
console.log(primeSummation(17)); //41
console.log(primeSummation(2001)); //277050
console.log(primeSummation(140759)); //873608362
console.log(primeSummation(2000000)); //142913828922