let dieRollMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);

// a. To roll a die and find number between 1 to 6
let dieroll = Math.floor(Math.random() * 5) + 1; 

// b. repeat the die roll and find result eachtime --> c.store result in map
for(let i=0 ; i<10 ;i++){
    dieroll = Math.floor(Math.random() * 10) % 6 + 1;
    let count = dieRollMap.get(dieroll);
    dieRollMap.set(dieroll,++count);
}

console.log(dieRollMap);

for(let [key,value] of dieRollMap)
{
    if(value==Math.max(...dieRollMap.values()))
    console.log("Max occurence : "+key+" occured -> "+value+" times.");
    if(value==Math.min(...dieRollMap.values()))
    console.log("Min occurence: "+key+" occured -> "+value+" times.");
}