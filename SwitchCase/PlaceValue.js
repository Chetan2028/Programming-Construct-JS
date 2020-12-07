const readline = require('readline-sync');

let input = readline.questionInt("Enter a Number (1,10,100..) : ");

switch (input) {
    case 1:
        console.log("Unit ");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand ");
        break;
    case 100000:
        console.log("Hunderd Thousand");
        break;
    case 1000000:
        console.log("Million");
        break;
    case 10000000:
        console.log("Ten Million ");
        break;
    case 100000000:
        console.log("Hundered Million ");
        break;
    default:
        console.log("invalid input range");
        break;
}