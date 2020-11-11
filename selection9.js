//number in word using switch case
let number = parseInt(process.argv[2]);
let numberInWord = "";
switch(number){
  case 0:
    numberInWord = "zero";
    break;
  case 1:
    numberInWord = "one";
    break;
  case 2:
    numberInWord = "two";
    break;
  case 3:
    numberInWord = "three";
    break;
  case 4:
    numberInWord = "four";
    break;
  case 5:
    numberInWord = "five";
    break;
  case 6:
    numberInWord = "six";
    break;
  case 7:
    numberInWord = "seven";
    break;
  case 8:
    numberInWord = "eight";
    break;
  case 9:
    numberInWord = "nine";
    break;
  default:
    console.log("Invalid number");
}
console.log("Number " + number + " in word is " + numberInWord);
