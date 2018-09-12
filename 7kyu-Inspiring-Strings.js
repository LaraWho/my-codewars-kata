        // Instructions
    //---------------------------//

// When given a string of space separated words, 
// return the word with the longest length. 
// If there are multiple words with the longest length, 
// return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

        // My Solution
    //---------------------------//


// Clarify the Question


// Sample Data
longestWord('a b c d e fgh') 
longestWord('one two three') 
longestWord('red blue grey') 

// Sample Solutions
'a b c d e fgh' = "fgh" 
'one two three' = "three" 
'red blue grey' = "grey" 

// Pseudo Code


// Actual Code
function longestWord(stringOfWords){
    stringOfWords = stringOfWords.split(" ");
      let comparison = "";
      for(let i = 0; i < stringOfWords.length; i++) {
        if(stringOfWords[i].length >= comparison.length) {
          comparison = stringOfWords[i];
        }
      }
      return comparison;
    }
