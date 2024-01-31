let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {
      return (Math.floor(Math.random() * 11))
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {
      return (Math.floor(Math.random() * 11))
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {
      return (Math.floor(Math.random() * 11))
   }
};

let spaceDog = {
   name: "Leroy",
   species: "Beagle",
   mass: 11,
   age: 5,
   move: function () {
      return (Math.floor(Math.random() * 11))
   }
};

let tardie = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {
      return (Math.floor(Math.random() * 11))
   }
};
//Adding new property to each animal. ID number between 1-10. No duplicates.
superChimpOne["astronautID"] = Math.ceil(Math.random() * 10);
if (superChimpOne["astronautID"] !== salamander["astornautID"]) {
   salamander["astronautID"] = Math.ceil(Math.random() * 10);
}  
if(superChimpTwo["astronautID"] !== superChimpOne["astronautID"] && superChimpTwo["astronautID"] !== salamander["astronautID"]) {
   superChimpTwo["astronautID"] = Math.ceil(Math.random() * 10);
}
spaceDog["astronautID"] = Math.ceil(Math.random() * 10);
while(spaceDog["astronautID"] === superChimpTwo["astronautID"] || spaceDog["astronautID"] === superChimpOne["astronautID"] || spaceDog["astronautID"] === salamander["astronautID"]) {
   spaceDog["astronautID"] = Math.ceil(Math.random() * 10);
}
tardie["astronautID"] = Math.ceil(Math.random() * 10);
while(tardie["astronautID"] === superChimpTwo["astronautID"] || spaceDog["astronautID"] === superChimpOne["astronautID"] || spaceDog["astronautID"] === salamander["astronautID"] || tardie["astronautID"] === spaceDog["astronautID"]) {
   tardie["astronautID"] = Math.ceil(Math.random() * 10);
}

//Storing animal objects in array.

let spaceAnimals =[]
spaceAnimals.push(superChimpOne,salamander,superChimpTwo,spaceDog,tardie);

let crewReport =  (animal) => {
   return `${animal["name"]} is a ${animal["species"]}. They are ${animal["age"]} years old and ${animal["mass"]} kilograms. Their ID is ${animal["astronautID"]}.`;
}

function fitnessTest(arr) {
   let results = []
for (let i = 0; i < arr.length; i++) {
   let numSteps = 0;
   let numTurns = 0;
   while(numSteps < 20) {
      numSteps += arr[i].move();
      numTurns ++;
   }
   results.push(`${arr[i].name} took ${numTurns} turns to take 20 steps.`);
}
return results;
}


console.log(spaceAnimals);
console.log(fitnessTest(spaceAnimals));


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!