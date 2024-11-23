// The commented code below is my original solution.

// const leapYears = function(year) {
//     if (year % 4 === 0) {
//         if (year % 100 !== 0) {
//             return true;
//         }
//         else {
//             if (year % 400 === 0) {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }
//     }
//     else {
//         return false;
//     }
// };

// The unedited code below is my solution after referring to the official solution and documentation.

const leapYears = function(year) {
    const isDivisibleByFour = (year % 4) === 0;
    const isDivisibleByHundred = (year % 100) === 0;
    const isDivisibleByFourHundred = (year % 400) === 0;

    if (isDivisibleByFour && !isDivisibleByHundred) return true;
    else if (isDivisibleByFourHundred) return true;
    else return false;
}

// Do not edit below this line
module.exports = leapYears;

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
