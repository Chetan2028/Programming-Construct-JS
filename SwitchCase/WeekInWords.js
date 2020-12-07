const readline = require('readline-sync');

let input = readline.questionInt("Enter week-day in number between (0 - 6): ");

switch (input) {
	case 0:
		console.log("Sunday");
		break;
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thrusday");
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Invalid Input!");
}
