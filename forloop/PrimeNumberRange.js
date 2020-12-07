const readline = require('readline-sync');

let start = readline.questionInt("Enter a start number : ");

let end = readline.questionInt("Enter a end number: ");
for (let i = start; i <= end; i++) {
    let flag =1;
    for (let j = 2; j <= i / 2; j++) {
        if ((i % j) == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log(i+" ");
    }
}