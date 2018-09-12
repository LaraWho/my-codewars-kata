        // Instructions
    //---------------------------//

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. 
// The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. 
// The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

        // My Solution
    //---------------------------//

// Clarify the Question
// Count the amount of full stops in a string, 
// if it's more than three return a string of "Escaped!", 
// if it's less, return the string "Caught!"


// Sample Data
    catMouse('C....m')
    catMouse('C..m')
    catMouse('C.....m')

// Sample Solutions
    'C....m' = "Escaped!"
    'C..m' = "Caught!"
    'C.....m' = "Escaped!"

// Pseudo Code
// Use an if/else statement
// Can use regular expressions to match the characters,
// or count the length of the whole string

// Actual Code
// if/else statement, with regex
function catMouse(x){
    if(x.match(/\.{4,}/)) {
      return 'Escaped!' 
      } else {
    return 'Caught!'
    }
  }

// consolidating into a ternary statement, with regex
  function catMouse(x){
    return x.match(/\.{4,}/) ? 'Escaped!' : 'Caught!'
  }

// counting the length of the whole string
  function catMouse(x){
    return x.length > 5 ? "Escaped!" : "Caught!"
  }

