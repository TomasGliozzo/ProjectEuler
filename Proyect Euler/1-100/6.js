function sumOfSquares(n){
    let sum = 0
    for(let i=1; i<=n; i++){
        sum += i*i
    }
    return sum
}
function squareOfSum(n){
    let sum = 0
    for(let i=1; i<=n; i++){
        sum += i
    }
    return sum*sum
}
function sumSquareDifference(n) {
    return squareOfSum(n) - sumOfSquares(n)
}
console.log(sumSquareDifference(10)); //2640
console.log(sumSquareDifference(20)); //41230
console.log(sumSquareDifference(100)); //25164150