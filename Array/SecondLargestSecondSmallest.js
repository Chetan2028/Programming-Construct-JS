let arr = new Array();

for(let i=1 ; i<= 10 ;i++){
    let randomNumber = Math.floor(Math.random() * 899) + 100;
    arr.push(randomNumber);
}
console.log(arr);

let maximum = arr[0];
let minimum = arr[0];
let secondMax = 0 , secondMin = 0;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i] > maximum){
        secondMax = maximum;
        maximum = arr[i];
    }
    else if(arr[i] < minimum){
        secondMin = minimum;
        minimum = arr[i];
    }
}

console.log("Second Maximum : " + secondMax);
console.log("Second Minimum : " + secondMin);