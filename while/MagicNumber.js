
const readline = require('readline-sync');

console.log("Think of Number (1-100)");

let start = 1;
let end = 100;
console.log("Based on conditions press 'y' or 'n' ");

while(true){
    //Check if the middle number is magic number
    let number = Math.floor((start + end) / 2);
	var option = readline.question("is number == " + number + "  : ");
	option = option.toLowerCase();
	if (option == "y") {
		console.log("number is: " + number);
		break;
	}
	option = readline.question("is number >  " + number + " ");
	if (option == "y") {
		start = number + 1;
	} else {
		end = number - 1;
	}
}