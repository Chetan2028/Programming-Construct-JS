let arr = [0,-1,-2,3,1,-5,2];

let size = arr.length;

for(let i=0 ;  i<size -2; i++){
    for(let j = i+1 ; j<size-1 ; j++){
        for(let k = j+1 ; k<size ; k++){
            if(arr[i] != arr[j] && arr[j] != arr[k] && arr[i] != arr[k]){
                if(arr[i] + arr[j] + arr[k] == 0){
                    console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                }
            }
        }
    }
}