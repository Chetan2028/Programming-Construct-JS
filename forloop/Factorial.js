const readInput = require('readline-sync');

let number = readInput.questionInt("Enter number : ");

let result = 1;

for(let i=1; i<= number ; i++){
    result = result * i;
}

console.log("Factorial of a " + number + " is : " + result);