/* 
Finding Maximum and Minimum values
*/
var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers[i] = Math.floor((Math.random() * 1000));
    console.log("Number " + (i + 1) + " is " + numbers[i]);
}
var max = 0;
var min = numbers[0];
for (var i = 0; i < 5; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
    if (min > numbers[i]) {
        min = numbers[i];
    }
}
console.log("Maximum is : " + max);
console.log("Minimum is : " + min);