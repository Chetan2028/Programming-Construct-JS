//Check for date exist between 20 March and 20 June , if exists print true , else false

const readInput = require('readline-sync');

let date = readInput.questionInt("Enter date : ");
let month = readInput.questionInt("Enter month in number : ");

if((month == 3 && date >= 20 ) || (month == 4 && date <= 30) || (month == 5 && date <=31) || (month == 6 && date <= 20)){
    console.log("True");
}
else if((date < 1 || date > 31 || month < 1 || month > 12)){
    console.log("Invalid Input");
}
else{
    console.log("False");
}