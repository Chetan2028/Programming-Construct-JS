const readline = require('readline-sync');

let number = readline.questionInt("Enter a Number : ");

let result = 0;
for (let i = 1; i <= number; i++) {
	result =result + (1 / i);
}
console.log(result);