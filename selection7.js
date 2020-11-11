//Print in words unit, tens, hundreds according to inputs
let num = process.argv[2];
let result = "";
if (num == 1) {
    result = "unit";
}
else if (num == 10) {
    result = "tens";
}
else if (num == 100) {
    result = "hundreds";
}
else if (num == 1000) {
    result = "thousands";
}
else if (num == 10000) {
    result = "ten thousands";
}
else if (num == 100000) {
    result = "hundreds of thousands";
}
else if (num == 1000000) {
    result = "million";
}
else if (num == 10000000) {
    result = "tens of million";
}
else if (num == 100000000) {
    result = "hundreds of million";
}
console.log(result);