const readline = require('readline-sync');

let num = readline.questionInt("Enter the number to check for palindrome :  ");

function isPlaindrome(num){
    let remainder = 0;
    let final = 0;
    let temp = num;

    while(num > 0){
        remainder = num % 10;
        num = Math.floor(num / 10);
        final = final * 10 + remainder;
    }
    if(final == temp){
        console.log(temp + " is palindrome");
    }
    else{
        console.log(temp  + "  is not palindrome");
    }
}

isPlaindrome(num);