const readInput = require('readline-sync');

let number = readInput.questionInt("Enter the power : ");

for(let i=1 ; i<=number ; i++){
    console.log(" 2 ^ " + i + " = " + (2**i));
}