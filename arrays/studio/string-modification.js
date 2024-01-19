const input = require('readline-sync');
let str = "LaunchCode";


let numLetters = input.question('How many letters would you like to relocate? ');

if (numLetters > str.length || numLetters <= 0) {
    numLetters = 3;
}
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let slicedString = str.slice(0,numLetters);
let secondSlice =  str.slice(numLetters,10);
let finalString = secondSlice + slicedString;


//console.log(`The word 'LaunchCode' becomes '${finalString} in speudo Pig Latin.`);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

console.log(finalString);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
