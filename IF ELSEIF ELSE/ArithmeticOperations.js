//defining module for taking input from user
const readInput = require('readline-sync');
//getting the inputs from the user
let inputOne= readInput.questionInt("Enter first Number : ")
let inputTwo= readInput.questionInt("Enter second Number : ")
let inputThree= readInput.questionInt("Enter third Number : ")
//calculating different results from different formulas
resultOne= inputOne+inputTwo*inputThree;
resultTwo= inputThree+inputOne/inputTwo;
resultThree= inputOne%inputTwo+inputThree;
resultFour= inputOne*inputTwo+inputThree;
//calculating max and min 
let maxFromResult= Math.max(resultOne,resultTwo,resultThree,resultFour);
let minFromResult= Math.min(resultOne,resultTwo,resultThree,resultFour);
//prinitng result
console.log("Max result from forumlas "+maxFromResult);
console.log("Min result from formulas "+minFromResult);
