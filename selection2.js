//whether between two dates
let day = 20;
let monthInWords = 'April';
let month = 0;
if (monthInWords == 'June') {
    month = 5;
}
else if (monthInWords == 'May') {
    month = 4;
}
else if (monthInWords == 'April') {
    month = 3;
}
else if (monthInWords == 'March') {
    month = 2;
}
let start = new Date(2020, 02, 20);
let end = new Date(2020, 05, 20);
let myDate = new Date(2020, month, day);
let isPresent = false;
if (myDate.getTime() <= end.getTime() && myDate.getTime() >= start.getTime()) {
    isPresent = true;
}
//Returns true if the date is present
console.log(isPresent); 