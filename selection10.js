//Print day in word using switch case
let number = parseInt(process.argv[2]);
let result = "";
console.log("Number is " + number);
switch (number) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Invalid day";
}
console.log("Week day is " + result);
