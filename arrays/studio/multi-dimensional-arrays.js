const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cab0 = food.split(',').sort();
let cab1 = equipment.split(',').sort();
let cab2 = pets.split(',').sort();
let cab3 = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];

cargoHold.push(cab0,cab1,cab2,cab3);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabSelection = input.question('Please select a cabinet. (0-3) ');
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
    if (cabSelection <= 3 && cabSelection > 0) {
    console.log(`Cabinet number ${cabSelection} contains ${cargoHold[cabSelection]}`)
    } else {
    console.log('ERROR INVALID SELECTION.')
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
