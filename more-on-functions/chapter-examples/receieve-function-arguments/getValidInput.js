const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
function startsWithA(word) {
    return word[0] === 'A';
}
// TODO 2: write a validator 
// that ensures input is a vowel
let startsWithVowel = function(word) {
    if(word[0] === 'A' || word[0] === 'E' || word[0] === 'I' || word[0] === 'O' || word[0] === 'U' || word[0] === 'Y'){
      return true;
  } 
}
// Be sure to test your code!
console.log(getValidInput("enter a word starting with a vowel. ",startsWithVowel));
