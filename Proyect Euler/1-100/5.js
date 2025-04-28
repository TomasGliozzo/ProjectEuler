/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/
function gcd(a,b){ //Euclidean Algorithm.
    while(b!=0){
        let c = a%b //Asigno a c el resto de la div entera
        a=b //a toma el antiguo valor de b
        b=c //b toma el valor del resto
    }
    return a
}
function lcm(a,b){ 
    return Math.abs(a*b)/gcd(a,b)
}
function smallestMultiple(n) {
    let lcmv = lcm(1,1)
    for(let i=2; i<=n; i++){
        lcmv = lcm(lcmv,i)
    }
    return lcmv
}
console.log(smallestMultiple(5))//60
console.log(smallestMultiple(7))//420
console.log(smallestMultiple(10))//2520
console.log(smallestMultiple(13))//360360
console.log(smallestMultiple(20))//232792560