// The commented code below is my original solution.

// const removeFromArray = function(arrayReceived) {
//     let arrayCopy = arrayReceived.map(x => x);
    
//     arrayReceived.forEach((item) => {
//         for (i = 1; i < arguments.length; i++) {
//             if (item === arguments[i]) {
//                 arrayCopy.splice(arrayCopy.indexOf(item), 1);
//             }
//         }
//     });
//     return arrayCopy;
// };

// The unedited code below is my solution after referring to the official solution and documentation.

const removeFromArray = function(array, ...args) {
    return array.filter(arrayItem => !args.includes(arrayItem));
}

// Do not edit below this line
module.exports = removeFromArray;
