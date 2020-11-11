//Unit conversion by switch
let num = parseInt(process.argv[2]);
let choice = parseInt(process.argv[3]);
let inches,meter,feet = 0
switch(choice){
    case 1:
        inches = num * 12;
        console.log(num + " feet in inches is " + inches);
        break;
    case 2:
        meter = num * 0.3048;
        console.log(num + " feet in meters is " + meter);
        break;
    case 3:
        feet = (num / 12);    
        console.log(num + " inches in feet is " + feet);
        break;
    case 4:
        feet = (num/0.3048);
        console.log(num + " meters in feet is " + feet);
        break;
    default:
        console.log("Invalid choice");
        break;            
}