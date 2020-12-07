const readline = require('readline-sync');

console.log("Enter your choice");
let choice = readline.questionInt("\n1.Convert Celcius to Farenheit \n2.Convert Farenheit to Celcius \n");

function CelciusToFarenheit(){
    let celcius = readline.questionInt("Enter the temperature in degree celcius : ");
    if(celcius >= 0 && celcius <= 100){
        let farenheit = (celcius * 9/5) + 32;
        console.log("Required temperature in Degree farenheit : " + farenheit);
    }
    else{
        console.log("Invalid temperature");
    }
}

function FarenheitToCelcius(){
     let degF = readline.questionInt("Enter the temp in farenheit : ");
     if(degF >= 32 && farenheit <= 212){
         let degC = (degF - 32) * 5/9;
         console.log("Reqd temperature : " + degC);
     }
     else{
         console.log("Invalid temperature");
     }
}

switch(choice){
    case 1:
        CelciusToFarenheit();
        break;
    case 2:
        FarenheitToCelcius();
        break;
    default:
        console.log("INvalid Choice");
        break;
}