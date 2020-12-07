let repeatedDigitsArray = new Array();

for(let i=1 ; i<= 100 ; i++){
    if(i % 11 ==0){
        repeatedDigitsArray.push(i);
    }
}

console.log(repeatedDigitsArray);