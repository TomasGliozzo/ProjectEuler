/**
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
 */
/* Recursive Solution (doestn't work for n = 1000)
function specialPythagoreanTriplet(n) {
   
    return isPythagoreanTriplet(1, 2, n);
}
function isPythagoreanTriplet(a,b,n){
    let c = n - a - b;
    //console.log(a,b,c)
    if (b >= c) {
        if(a >= n / 3){
            return null;
        }
        return isPythagoreanTriplet(a + 1, a + 2, n);
    }
    if (a*a + b*b === c*c) {
        return a * b * c;
    }
    
    return isPythagoreanTriplet(a, b + 1, n)        
  
}
//console.log(specialPythagoreanTriplet(24));
//console.log(specialPythagoreanTriplet(120));
console.log(specialPythagoreanTriplet(1000));
*/

function specialPythagoreanTriplet(n){
    for(let a = 1; a < n / 3; a++){
        for(let b = a + 1; b < n / 2; b++){
            let c = n - a - b;
            if(a * a + b * b === c * c){
                return a * b * c;
            }
        }
    }
    return null;
}
console.log(specialPythagoreanTriplet(24));
console.log(specialPythagoreanTriplet(120));
console.log(specialPythagoreanTriplet(1000));