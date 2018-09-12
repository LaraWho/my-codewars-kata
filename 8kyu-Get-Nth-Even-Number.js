        // Instructions
    //---------------------------//

// nthEven(1) //=> 0, the first even number is 0
// nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

// nthEven(100) //=> 198
// nthEven(1298734) //=> 2597466

// The input will not be 0.

        // My Solution
    //---------------------------//


// Clarify the Question


// Sample Data
nthEven(1)
nthEven(2)
nthEven(3)
nthEven(100)
nthEven(1298734)

// Sample Solutions
(1), 0, "Wrong Value!"
(2), 2, "Wrong Value!"
(3), 4, "Wrong Value!"
(100), 198, "Wrong Value!"
(1298734), 2597466, "Wrong Value!"

// Pseudo Code


// Actual Code
nthEven = n => 2 * n - 2;