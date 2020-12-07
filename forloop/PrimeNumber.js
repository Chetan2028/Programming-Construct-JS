const readline = require('readline-sync');

let number = readline.questionInt("Enter a Number: ");

let flag = 1;

if(number == 0 || number == 1){
    console.log("Not a prime number");
}
else {
    for(let i=2 ; i<= (number / 2) ; i++){
        if(number%i == 0){
        flag = 0;
        break;
        }
    }
    if(flag == 1){
        console.log(number + " is a prime number");
    }
    else{
        console.log("Not a prime number");
    }
}
