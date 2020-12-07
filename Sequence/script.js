// 1 => Using random function to get single digit
let randomNum = Math.floor(Math.random() * 10);
console.log("Single Digit Random Number: "+randomNum+"\n");

// 2=> Using random function to get single digit between 1 to 6
let diceRandom = Math.floor(Math.random() * 6) + 1;
console.log("Single Digit Random Dice Number: " + diceRandom+"\n");

// 3=> To find sum of two dice number
let diceRandomNumOne = Math.floor(Math.random() * 6) + 1;
console.log("Number: "+diceRandomNumOne);
let diceRandomNumTwo = Math.floor(Math.random() * 6) + 1;
console.log("Number:"+diceRandomNumTwo);
console.log("Sum of Two Dice Random Number: "+(diceRandomNumOne + diceRandomNumTwo) +"\n");

// 4=> Generating 5 random two digit numbers and find their sum and average values
let sumOfValues = 0;
for (let i = 0; i < 5; i++) 
{
	let randomNum = Math.floor(Math.random() * 90 + 10);
	console.log("Numbers: " + randomNum);
	sumOfValues += randomNum;
}
console.log("Sum of values: " + sumOfValues);
console.log("Average of values: " + (sumOfValues / 5) + "\n");

// 5 => Unit conversions
// 1ft = 12 in then 42 in = ? ft
let inches = 42;
let feet = inches/12;
console.log("Converting inches into feet :"+feet+"\n");

// Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let breadth = 40;
let areaOfPlot = length * breadth * 0.3048;
console.log("Area of One Plot: "+areaOfPlot+"\n");

// Calculate area of 25 such plots in acres
let areaOfOnePlot = areaOfPlot * 25;
console.log(("Area of 25 plot: "+areaOfOnePlot/43560));