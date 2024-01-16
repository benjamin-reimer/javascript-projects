//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel = '';
let numAstronauts = '';
let altitude = 0;
let i = 0;


const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  startingFuel = input.question('Please enter starting fuel.');
    startingFuel = Number(startingFuel);

  while (startingFuel < 5000 || startingFuel > 30000 || isNaN(startingFuel)) {
    startingFuel = input.question('Enter valid fuel level.');
    startingFuel = Number(startingFuel);
    
  }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  numAstronauts = input.question('Please enter number of astronauts.');
    numAstronauts = Number(numAstronauts);

  while (numAstronauts > 7 || numAstronauts <= 0) {
    numAstronauts = input.question('Please enter valid number of astronauts. Seven max.');
    numAstronauts = Number(numAstronauts);
    
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.


while (startingFuel > 0) {
  if (startingFuel - (100 * numAstronauts) <= 0) {
    startingFuel = 0;
    console.log('Fuel empty!!!')
  }else {
  startingFuel -= (100*numAstronauts);
  altitude += (50); 
  }
    


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km. You have ${startingFuel} units of fuel left.`);
if (altitude>= 2000) {
  console.log('Orbit achieved!')
}

}
if (altitude< 2000) {
  console.log('Failed to reach orbit');

}