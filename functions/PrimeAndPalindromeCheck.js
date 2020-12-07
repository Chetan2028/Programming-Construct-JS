const readline = require('readline-sync');

let num = readline.questionInt("Enter the number to check for palindrome and prime : ");

//Check for prime
function isPrime(num){
    let flag = true;
    if(num == 0 || num == 1){
        return false;
    }
    else{
        for(let index = 2 ; index <= (num/2) ; index++){
            if(num % index == 0){
                flag = false;
            }
        }
        return flag;
    }
}

//Check for Palindrome
function isPalindrome(num){
    let remainder = 0;
    let final = 0;
    let temp = num;

    while(num > 0){
        remainder = num % 10;
        num = Math.floor(num / 10);
        final = final * 10 + remainder;
    }
    if(final == temp){
       return true;
    }
    else{
        return false;
    }
}

//Check for both palindrome and prime
if(isPalindrome(num)){
    if(isPrime(num)){
        console.log(num + " is both prime and palindrome");
    }
    else{
        console.log(num + " is palindrome but not prime");
    }
}
else{
    console.log(num + " is not palindrome");
}

