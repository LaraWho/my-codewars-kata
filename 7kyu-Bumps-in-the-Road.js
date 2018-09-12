        // Instructions
    //---------------------------//

// Your car is old, it breaks easily. 
// The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! 
// Given a string showing either flat road ("_") or bumps ("n"), 
// work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".


        // My Solution
    //---------------------------//

// Clarify the Question
// Count the 'n' characters in a string, and return a success or failure string depending on the result.


// Sample Data
    ("n")
    ("_nnnnnnn_n__n______nn__nn_nnn")
    ("______n___n_")

// Sample Solutions
// "n" =  "Woohoo!"
// "_nnnnnnn_n__n______nn__nn_nnn" = "Car Dead"
// "______n___n_" = "Woohoo!"


// Pseudo Code
// Set an empty array to a variable.
// Split the string into an array, so each character has its own index and is its own string.
// Use the array protoype method '.forEach' to loop over every element.
// Check if each item in the array is equal to 'n'.
// If it is equal then add it to the empty array I declared.
// Check whether there are less than 15 items in the array, and return the desired string depending.

// Actual Code
function bump(x){
    let ns = []
    x.split('').forEach((el) => {
    if(el === 'n') {
    ns.push('n')
   }
    })
    return ns.length <= 15 ? "Woohoo!" : "Car Dead"
    
    }
