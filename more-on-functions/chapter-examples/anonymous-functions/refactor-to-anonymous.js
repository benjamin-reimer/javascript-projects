let revFunc = function(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}
 function printMsg() {
  console.log('BOOM!!!');
}
let delayPrint = function(delay) {
    console.log("Wait for it...");
    setTimeout(printMsg,delay);
}
//delayPrint(10000);
//console.log(revFunc("LaunchCode"));


let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function(n) { return n/2});

//console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function(name){return name[0]});

console.log(firstInitials);