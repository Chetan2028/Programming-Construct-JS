const readline = require('readline-sync');

let number = readline.questionInt("Enter a number : ");

let primeFactorArray = new Array();

function getPrimeFactors(number){
    for(let i=2 ; i<number ;i++){
        while(number % i == 0){
            primeFactorArray.push(i);
            number = number/i;
        }
    }
   if(number > 2){
        primeFactorArray.push(number);
    }
}

getPrimeFactors(number);

console.log(primeFactorArray);