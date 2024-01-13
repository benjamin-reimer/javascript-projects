//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(`${language.slice(0,1)}${language.slice(4,5)}`);
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language[0] + language[4]);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviatioin for \'JavaScript' is \'${language[0]+language[4]}'`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace('v','w') + language.slice(0,1) + language.toUpperCase());

//Part Three section Two
console.log(language);

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let titleCase = notTitleCase.replace('t', (notTitleCase[0].toUpperCase()))  
console.log(notTitleCase);

titleCase = titleCase.replace('c', (notTitleCase[6].toUpperCase()))
console.log(titleCase);