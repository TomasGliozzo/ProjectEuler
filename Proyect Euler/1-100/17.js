/**
 * 
 ***** Problem 17: Number letter counts *****
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?
    * Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
        * contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
        * The use of "and" when writing out numbers is in compliance with British usage.
 * 
 */

 function numberLetterCounts(limit) {

    let numberOfLetters = lettersOfOneToLimitV2(limit);

    return numberOfLetters;
}

function lettersOfOneToLimitV2(limit){ //Funciona hasta 1000 inclusive.
    const units = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    const thousand = 'onethousand';
    let words = [];

    if(limit > 1000) limit = 1000;

    for(let i = 1; i <= limit; i++){
        if(i < 20){
            words.push(units[i]);
        }
        else if(i < 100){
            words.push(tens[Math.floor(i/10)-2] + units[i%10]);
        }
        else if(i < 1000){
            if(i%100==0){
                words.push(units[Math.floor(i/100)] + hundred);
            }
            else{
                words.push(units[Math.floor(i/100)] + hundred + 'and')

                if(i < (Math.floor(i/100))*100+20){
                    words.push(units[i%100]);
                }
                else{
                    words.push(tens[Math.floor((i%100)/10)-2] + units[i%10]);
                }
            }
        }
        else{
            words.push(thousand);
        }
    }
    return words.reduce((sum, number)=>(sum + number.length),0); 
}

  
 console.log(numberLetterCounts(5)); //19
 console.log(numberLetterCounts(150)); //1903
 console.log(numberLetterCounts(1000)); //21124


 /**
  * 
  function lettersOfOneToLimit(limit){
    const units = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    const thousand = 'onethousand';
    let counter = 0;

    for(let i = 1; i <= limit; i++){
        if(i < 20){
            counter += units[i].length;
        }
        else if(i < 100){
            counter += tens[Math.floor(i/10)-2].length + units[i%10].length;
        }
        else if(i < 1000){
            if(i%100==0){
                counter += units[Math.floor(i/100)].length + hundred.length
            }
            else{
                counter += units[Math.floor(i/100)].length + hundred.length + 'and'.length

                if(i < (Math.floor(i/100))*100+20){
                    counter += units[i%100].length;
                }
                else{
                    counter += tens[Math.floor((i%100)/10)-2].length + units[i%10].length;
                }
            }
        }
        else{
            counter += thousand.length;
        }
    }
    return counter; 
}
  */