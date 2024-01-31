const { trace } = require("console");

function makeLine(size) {
  let Line = '';
for (let i = 1; i <= size; i++){
      Line += '#';
}
return Line; 
}


function makeSquare(size) {
   let Square = makeRectangle(size,size);

   return Square;
}

function makeRectangle(width, height) {
   let rectangle = '';

   for (let i = 0; i < height; i++) {
         rectangle = rectangle + '\n' + makeLine(width);
   }
   return rectangle;
}


function makeDownwardStair(height) {
   let stair = '';

   for (let i = 1; i <= height; i++) {
      stair = stair + ('\n' + makeLine(i));
   }
   return stair;
}

function makeSpaceLine(numSpaces, numChars) {
let spaces = '';
let chars = '';

for (let i = 0; i < numSpaces; i++) {
   spaces += '_';
}

for (let j = 0; j < numChars; j++) {
   chars += '#';
}
let line = spaces + chars + spaces;
return line;
}

function makeIsoscelesTriangle(height) {
   let triangle = '';
      for (let i = 0; i < height; i++ ) {
         triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
      }
      return triangle.slice(0,-1);
}

function makeDiamond(height) {
   let diamond = '';
   let triangle = '';
   let revTriangle = '';
   
      triangle = makeIsoscelesTriangle(height);
      revTriangle = reverseString(triangle);
      diamond = triangle + revTriangle;

   return diamond.slice(0,-1);
}

function reverseString(str) {
   revString = '';

   for(let i = 0; i < str.length; i++) {
      revString = str[i] + revString ;
   }
   return revString.slice(0,-1);
}
//console.log(makeLine(7));
//console.log(makeSquare(10));
//console.log(makeRectangle(4,10));
//console.log(makeDownwardStair(10));
//console.log(makeSpaceLine(5,5));
console.log(makeIsoscelesTriangle(10));
console.log(makeDiamond(6));



