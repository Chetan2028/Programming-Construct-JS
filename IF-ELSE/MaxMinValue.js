//Generate 5 random 3 digit values

let firstNumber = Math.floor(Math.random() * 899) + 100;
let secondNumber = Math.floor(Math.random() * 899) + 100;
let thirdNumber = Math.floor(Math.random() * 899) + 100;
let fourthNumber = Math.floor(Math.random() * 899) + 100;
let fifthNumber = Math.floor(Math.random() * 899) + 100;

console.log("FirstNumber : " + firstNumber + "\tSecondNumber : " + secondNumber + "\tThirdNumber : " +
 thirdNumber +"\tFourthNumber : " + fourthNumber + "\tFifthNumber : " + fifthNumber);

//Check for Maximum Number
if(firstNumber >= secondNumber && firstNumber >= thirdNumber && firstNumber >= fourthNumber && firstNumber >= fifthNumber){
    console.log("Maximum Number : " + firstNumber);
}
else if(secondNumber >= firstNumber && secondNumber >= thirdNumber && secondNumber >= fourthNumber && secondNumber >= fifthNumber){
    console.log("Maximum Number : " + secondNumber);
}
else if(thirdNumber >= firstNumber && thirdNumber >= secondNumber && thirdNumber >= fourthNumber && thirdNumber >= fifthNumber){
    console.log("Maximum Number : " + thirdNumber);
}
else if(fourthNumber >= firstNumber && fourthNumber >= secondNumber &&fourthNumber >= thirdNumber && fourthNumber >= fifthNumber){
    console.log("Maximum Number : " + fourthNumber);
}
else {
    console.log("Maximum Number : " + fifthNumber);
}

//Check for Minimum Number

if(firstNumber <= secondNumber && firstNumber <= thirdNumber && firstNumber <= fourthNumber && firstNumber <= fifthNumber){
    console.log("Minimum Number : " + firstNumber);
}
else if(secondNumber <= firstNumber && secondNumber <= thirdNumber && secondNumber <= fourthNumber && secondNumber <= fifthNumber){
    console.log("Minimum Number : " + secondNumber);
}
else if(thirdNumber <= firstNumber && thirdNumber <= secondNumber && thirdNumber <= fourthNumber && thirdNumber <= fifthNumber){
    console.log("Minimum Number : " + thirdNumber);
}
else if(fourthNumber <= firstNumber && fourthNumber <= secondNumber &&fourthNumber <= thirdNumber && fourthNumber <= fifthNumber){
    console.log("Minimum Number : " + fourthNumber);
}
else {
    console.log("Minimum Number : " + fifthNumber);
}

