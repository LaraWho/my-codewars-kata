        // Instructions
    //---------------------------//

// Implement a method that accepts 3 integer values, a, b, c. 
// The method should return true if a triangle can be built with the 
// sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


        // My Solution
    //---------------------------//

// Clarify the Question
// Determine if three side lengths can make a triangle. 


// Sample Data
    isTriangle(1,2,2)
    isTriangle(7,2,2)
    isTriangle(-1,2,2)
    isTriangle(-1,-2,2)
    isTriangle(4,5,2)
    isTriangle(0,5,2)
    isTriangle(0,0,0)

// Sample Solutions
// (isTriangle(1,2,2), true)
// 1 + 2 = 3 and is greater than 2
// 1 + 2 = 3 and is greater than 2
// 2 + 2 = 4 and is greater than 1
    (1,2,2), true
    (7,2,2), false
    (-1,2,2), false
    (-1,-2,2), false
    (4,5,2), true
    (0,5,2), false
    (0,0,0), false

// Pseudo Code
// Add together two sides at a time, a total of three times,
// comparing them each time to the third side which is not in the addition.
// A boolean will be the result.


// Actual Code
function isTriangle(a,b,c) {
    return a + b > c && a + c > b && b + c > a ? true : false;
 }

 // Below I reformatted my code to an ES6 arrow function. 
 // I also removed the ternary because by default this statement will return a boolean, 
 // which is the desired output.
 isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a;
