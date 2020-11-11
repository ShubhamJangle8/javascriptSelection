//Minimum And maximum of 4 operations
let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];
let operation1 = a + (b * c);
let operation2 = c + (a / b);
let operation3 = (a % b) + c;
let operation4 = (a * b) + c;
let max = 0;
let min = operation1;
let operationMax = 0;
let operationMin = 0;
let nums = [operation1, operation2, operation3, operation4];
for (var i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
        max = nums[i];
        operationMax = i;
    }
    if (min > nums[i]) {
        min = nums[i];
        operationMin = i;
    }
}
console.log("Maximum is " + max + " in Operation " + operationMax);
console.log("Minimum is " + min + " in Operation " + operationMin);
