// Declare and assign the variables below
let shuttleName = 'Determination';
let speedMPH = 17500;
let distanceToMarsKM = 225000000;
let distanceToMoonKM = 384400;
let milesPerKM = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);

// Calculate a space mission below
let milesToMars = distanceToMarsKM * milesPerKM;
let hoursToReachMars = milesToMars/speedMPH;
let daysToReachMars = hoursToReachMars/24;
  
// Print the results of the space mission calculations below
console.log(shuttleName + ' will take ' + daysToReachMars + ' days to reach Mars.')
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKM * milesPerKM;
let hoursToReachMoon = milesToMoon / speedMPH;
let daysToReachMoon = hoursToReachMoon / 24;

// Print the results of the trip to the moon below

console.log(shuttleName + ' will take ' + daysToReachMoon + ' days to reach the Moon.');


