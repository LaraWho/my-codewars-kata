         // Instructions
    //---------------------------//

// Given an array of numbers (a list in groovy), 
//determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"

        // My Solution
    //---------------------------//

// Clarify the Question


// Sample DataoddOrEven([0]), 'even')
    oddOrEven([1]), 'odd'
    oddOrEven([]), 'even'
    oddOrEven([0, 1, 5]), 'even'
    oddOrEven([0, 1, 3]), 'even'
    oddOrEven([1023, 1, 2]), 'even'
    oddOrEven([0, -1, -5]), 'even'
    oddOrEven([0, -1, -3]), 'even'
    oddOrEven([-1023, 1, -2]), 'even'
    oddOrEven([0, 1, 2]), 'odd'
    oddOrEven([0, 1, 4]), 'odd'
    oddOrEven([1023, 1, 3]), 'odd'
    oddOrEven([0, -1, 2]), 'odd'
    oddOrEven([0, 1, -4]), 'odd'
    oddOrEven([-1023, -1, 3]), 'odd'

// Sample Solutions
    [1] = 'odd'
    //[] = 'even'
    [0, 1, 5] = 'even'
    [0, 1, 3] = 'even'
    [1023, 1, 2] = 'even'
    [0, -1, -5] = 'even'
    [0, -1, -3] = 'even'
    [-1023, 1, -2] = 'even'
    [0, 1, 2] = 'odd'
    [0, 1, 4] = 'odd'
    [1023, 1, 3] = 'odd'
    [0, -1, 2] = 'odd'
    [0, 1, -4] = 'odd'
    [-1023, -1, 3] = 'odd'

// Pseudo Code


// Actual Code
function oddOrEven(array) {
    const sum = array.reduce((a,b) => a + b, 0)
    if(sum % 2 === 0) {
    return 'even'
    } else {
    return 'odd'
    }
 }

 function oddOrEven(array) {
    return array.reduce((a,b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'; 
 }
