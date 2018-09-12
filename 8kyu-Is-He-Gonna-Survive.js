        // Instructions
    //---------------------------//

// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! 
// Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another 
// specific given number of dragons, will he survive?

// Return True if yes, False otherwise.

        // My Solution
    //---------------------------//

// Clarify the Question
// Bullets must be equal or more than the amount of dragons multiplied by 2

// Sample Data
hero(10, 5)
hero(7, 4)
hero(4, 5)
hero(100, 40)
hero(1500, 751)
hero(0, 1)

// Sample Solutions
// (10, 5), 10 is equal to 5 x 2 and returns true
// (7, 4), 7 is less than 4 x 2 and returns false
// (4, 5), 4 is less than 5 x 2 and returns false
// (100, 40), 100 is more than 40 x 2 and returns true
// (1500, 751), 1500 is less than 751 x 2 and returns false
// (0, 1), 0 is less than 1 x 2 and returns false

// Pseudo Code
// Use the greater than or equal to comparison operator, for bullets
// and dragons multiplied by 2.

// Actual Code
function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true : false;
    }
