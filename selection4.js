//Toss time
const IS_HEAD = 0
let coin = Math.floor(Math.random() *10) % 2;
if(coin == IS_HEAD){
  console.log("Heads it is...");
}
else{
  console.log("Tails it is...");
}