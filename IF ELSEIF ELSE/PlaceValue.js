const readInput = require('readline-sync');

let input = readInput.questionInt("Enter number to check for place value : ");

if(input == 1){
    console.log("Unit");
}
else if(input == 10){
    console.log("Tens");
}
else if(input == 100){
    console.log("Hundreds");
}
else if(input == 1000){
    console.log("Thousands");
}
else if(input == 10000){
    console.log("Ten Thousands");
}
else if(input == 100000){
    console.log("Hundred Thousand");
}
else if(input == 1000000){
    console.log("Millions");
}
else if(input == 10000000){
    console.log("Ten Million");
}
else if(input == 100000000){
    console.log("Hunderd Million");
}
else{
    console.log("Invalid Number");
}