let arr = new Array();

for(let i=1 ; i<= 10 ;i++){
    let randomNumber = Math.floor(Math.random() * 899) + 100;
    arr.push(randomNumber);
}
console.log(arr);

//Sorting the array using bubble sort
for(let i= 0; i<arr.length ;i++){

    for(let j=0 ; j<arr.length-1 ; j++){

        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log("Second Max : " + arr[8] + " Second Minimum : " + arr[1]);