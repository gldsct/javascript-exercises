// Commented out below is the original code I wrote.

// const sumAll = function(firstNumber, secondNumber) {
//     let sum = 0;

//     if (firstNumber < 0 || secondNumber < 0) {
//         return "ERROR";
//     }

//     if (Math.floor(firstNumber) !== firstNumber || Math.floor(secondNumber) !== secondNumber) {
//         return "ERROR";
//     }

//     smallerNumber = (firstNumber < secondNumber) ? firstNumber : secondNumber;
//     largerNumber = (firstNumber > secondNumber) ? firstNumber : secondNumber;

//     for (let i = smallerNumber; i <= largerNumber; i++) {
//         sum += i;
//     }
//     return sum;
// };

// The new code, after consulting with official solution and documentation is:

const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }

    if (Number.isInteger(firstNumber) === false || Number.isInteger(secondNumber) === false) {
        return "ERROR";
    }

    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;