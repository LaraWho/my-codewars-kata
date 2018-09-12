        // Instructions
    //---------------------------//

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), 

// Your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. 

// Your xor function should have the behaviour described above, 
// returning true if exactly one of the two expressions evaluate to true, false otherwise.

        // My Solution
    //---------------------------//

// Clarify the Question


// Sample Data
    xor(false, false), false, "false xor false === false"
    xor(true, false), true, "true xor false === true"
    xor(false, true), true, "false xor true === true"
    xor(true, true), false, "true xor true === false"
    xor(true, true), true, "'xor' is NOT identical to 'or'"

// Sample Solutions
    false, false = false, "false xor false === false"
    true, false = true, "true xor false === true"
    false, true = true, "false xor true === true"
    true, true = false, "true xor true === false"
    true, true = true, "'xor' is NOT identical to 'or'"

// Pseudo Code


// Actual Code
xor = (a, b) => a && b || !a && !b ? false : true;
