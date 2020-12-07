const readline = require('readline-sync');

let exponent = readline.questionInt("Enter a number : ");
let power = exponent;
let result = 1;
let base = 2;

while(exponent != 0){
result = result * 2;
exponent--;
}
console.log("2 ^ " + power + " = " + result);