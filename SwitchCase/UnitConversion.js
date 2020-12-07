const readline = require('readline-sync');

let num = readline.questionInt("Enter your choice for conversion: "+"\n"+ "1. Feet to inch " + "\n"+
 "2. Feet to meter "+ " \n"+ "3. Inch to feet"+ "\n"+ "4. Meter to feet\n");
switch (num) {
    case 1:
        let value = readline.questionInt("Enter Feet: ");
        console.log(value * 12 + " inches");
        break;
    case 2:
        let feet = readline.questionInt("Enter Feet: ");
        console.log(feet / 3.2808 + " meters");
        break;
    case 3:
        let Inch = readline.questionInt("Enter Inch: ");
        console.log(Inch / 12 + " feet");
        break;
    case 4:
        let meter = readline.questionInt("Enter Meter : ");
        console.log(meter * 3.28 + " feets");
        break;
    default:
        console.log("Invalid input");
        break;
}