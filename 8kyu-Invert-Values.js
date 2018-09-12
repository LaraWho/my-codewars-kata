        // Instructions
    //---------------------------//

// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

        // My Solution
    //---------------------------//

// Clarify the Question


// Sample Data
    invert([1,2,3,4,5])
    invert([1,-2,3,-4,5])
    invert([])
    invert([0])


// Sample Solutions
    // [1,2,3,4,5] = [-1,-2,-3,-4,-5]
    // [1,-2,3,-4,5] = [-1,2,-3,4,-5]
    // [] = []
    // [0] = [0]

// Pseudo Code


// Actual Code
function invert(array) {
    let invertedArray = []
    invertedArray = array.map(num => {
      return num === 0 ? num : num * -1
    })
     return invertedArray;
  }

  function invert(array) {
    return array.map(num => num === 0 ? num : num * -1);
 }
