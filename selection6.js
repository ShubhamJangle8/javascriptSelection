//Week Day based on number
let number = process.argv[2];
let day = "";
if(number == 1){
  day = "Monday";
}
else if(number == 2){
  day = "Tuesday";
}
else if(number == 3){
  day = "Wednesday";
}
else if(number == 4){
  day = "Thursday";
}
else if(number == 5){
  day = "Friday";
}
else if(number == 6){
  day = "Saturday";
}
else if(number == 7){
  day = "Sunday";
}
console.log("The week day according to input number is " + day);