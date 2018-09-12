        // Instructions
    //---------------------------//

// You were camping with your friends far away from home, 
// but when it's time to go back, you realize that your fuel 
// is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. 

// Considering these factors, write a function 
// that tells you if it is possible to get to the pump or not. 

// Function should return true if it is possible and false if not.

        // My Solution
    //---------------------------//

// Clarify the Question
// Calculate the possibility of making it to the nearest fuel pump
// given the amount of fuel left and how much the car consumes.
// Return a boolean.


// Sample Data
    zeroFuel(50, 25, 2)
    zeroFuel(100, 50, 1)
    zeroFuel(200, 45, 4)

// Sample Solutions
// (50, 25, 2) = 50 miles to pump, 25 mpg, 2 gallons fuel. 
// 50 is equal to 25 x 2 so will return true.

// (100, 50, 1) = 100 miles to pump, 50 mpg, 1 gallon fuel. 
// 100 is not equal or less than 50 x 1 so will return false.

// (200, 45, 4) = 200 miles, 45 mpg, 4 gallons fuel.
// 200 is more than 45 x 4 so will return false.

// Pseudo Code
// Need to make sure there is more fuel and miles per gallon
// than there are miles to the nearest pump. So will have to compare 
// distance to mpg multiplied by the fuel left.
// Return true or false depending on the result.

// Actual Code
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft ? true : false;
  };