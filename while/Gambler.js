const readline = require('readline-sync');

let stake = 100;
let bet = 1;
let goal = 200;
let betCount = 0;
let winCount = 0;
let lossCount = 0;
let updatedMoney = stake;

while(updatedMoney > 0 && updatedMoney < goal){
    var betting = Math.floor(Math.random() * 10) % 2;
    betCount++;
    if(betting == 0){
        updatedMoney = updatedMoney - bet;
        lossCount++;
    }
    else{
        updatedMoney = updatedMoney+bet;
        winCount++;
    }
}

console.log("Amount left : " + updatedMoney);
console.log("Total wins : " + winCount);
console.log("Total loss : " + lossCount);