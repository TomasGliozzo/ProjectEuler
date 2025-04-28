/**
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the nth prime number?
 */
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
function nthPrime(n){
    let prime_numbs = [2]
    let i = 3

    while(prime_numbs.length < n){
        if(i%2 != 0){ //Descarto los pares
            if(isPrime(i)){
                prime_numbs.push(i) //Agrego el elemento al final de la lista si es primo
            }
        }
        i++
    }
    return prime_numbs.pop(); //Devuelve el último primo de la lista (el mayor)
  }
  
  console.log(nthPrime(6)); //13
  console.log(nthPrime(10)); //29
  console.log(nthPrime(100)); //541
  console.log(nthPrime(1000)); //7919
  console.log(nthPrime(10001)); //104743
