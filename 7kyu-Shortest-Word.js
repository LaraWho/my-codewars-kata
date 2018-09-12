        // Instructions
    //---------------------------//

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

        // My Solution
    //---------------------------//

// Clarify the Question

// Sample Data
    findShort("bitcoin take over the world maybe who knows perhaps")
    findShort("turns out random test cases are easier than writing out basic ones")


// Sample Solutions
    // "bitcoin take over the world maybe who knows perhaps" = shortest word is 3
    // "turns out random test cases are easier than writing out basic ones" = shortest word is 3

// Pseudo Code


// Actual Code
findShort = s => Math.min(...s.split(' ').map(e => e.length));
