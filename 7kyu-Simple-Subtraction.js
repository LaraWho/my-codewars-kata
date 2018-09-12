        // Instructions
    //---------------------------//

// In this Kata you will be given two positive integers, 
// a and b, and your task will be to apply the following operations:

// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a to a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b to b - 2*a, and repeat step (i). Otherwise, return [a,b].
// For example, for a = 22 and b = 5: 
// solve(22,5) == [0,1] because [22,5] -> [12,5] -> [2,5] -> [2,1] -> [0,1]
// solve(100000000000,3) = [4,3]


        // My Solution
    //---------------------------//


// Clarify the Question


// Sample Data
    solve(6,19),[6,7]
    solve(2,1),[0,1]
    solve(22,5),[0,1]
    solve(2,10),[2,2]

// Sample Solutions
    (6,19) = [6,7]
    (2,1) = [0,1]
    (22,5) = [0,1]
    (2,10) = [2,2]

// Pseudo Code


// Actual Code
function solve(a,b){
    while(a && b) {
    
      if (a >= b * 2)
          a %= 2 * b;
      else if (b >= a * 2)
          b %= 2 * a;
      else
          break;
          
      }
    return [a,b]
  }
