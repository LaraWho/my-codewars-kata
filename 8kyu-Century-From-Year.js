        // Instructions
    //---------------------------//

// Task : Given a year, return the century it is in.

// The first century spans from the year 1 
// up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.



        // My Solution
    //---------------------------//

// Clarify the Question
// Take a year, 4 digits, and return a century, 2 digits.


// Sample Data
century(1705), 18, 'Testing for year 1705'
century(1900), 19, 'Testing for year 1900'
century(1601), 17, 'Testing for year 1601'
century(2000), 20, 'Testing for year 2000'
century(89), 1, 'Testing for year 89'

// Sample Solutions
// centuryFromYear(1705) - divide 1705 by 100 (17.05) and return the integer greater than or equal (18)
// centuryFromYear(1900) - divide 1900 by 100 (19) and return the integer greater than or equal (19)
// centuryFromYear(1601) - divide 1601 by 100 (16.01) and return the integer greater than or equal (17)
// centuryFromYear(2000) - divide 2000 by 100 (20) and return the integer greater than or equal (20)


// Pseudo Code
// Divide the year by 100 to get a smaller number, 
// and then round that to the greater number to remove the decimals.

// Actual Code
century = year => Math.ceil(year/100);
