/**
 * 
Problem 14: Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), 
it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.
 * 
 */

function longestCollatzSequence(limit) {
    let max_num_terms = 0;
    let number_of_max_terms = 0;

    for(let i = 1; i < limit; i+=2){ //Solo considero como candidatos a los números impares.
        let temp = numberOfTermsCollatzSequence(i);

        if(temp > max_num_terms){
            max_num_terms = temp;
            number_of_max_terms = i;
        }
    }

    return number_of_max_terms;
}

function numberOfTermsCollatzSequence(number){
    let counter = 0;

    while (number!=1) {
        if(number%2==0) number /= 2;
        
        else number = 3 * number + 1;
        
        counter++;
    }

    return counter;
}
  
console.log(longestCollatzSequence(14)); //9
console.log(longestCollatzSequence(5847)); //3711
console.log(longestCollatzSequence(46500)); //35655
console.log(longestCollatzSequence(54512)); //52527
console.log(longestCollatzSequence(100000)); //77031
console.log(longestCollatzSequence(1000000)); //837799