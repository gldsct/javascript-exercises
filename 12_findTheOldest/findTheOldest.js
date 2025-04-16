const findTheOldest = function(people) {
    // people.sort((a, b) => {
    //     if (a.yearOfDeath === undefined) {
    //         a.yearOfDeath = (new Date()).getFullYear();
    //     }
    //     if (b.yearOfDeath === undefined) {
    //         b.yearOfDeath = (new Date()).getFullYear();
    //     }
    //     aAge = a.yearOfDeath - a.yearOfBirth;
    //     bAge = b.yearOfDeath - b.yearOfBirth;
    //     return (aAge - bAge);
    // });
    // return people[people.length - 1];

    return people.reduce((accumulator, item) => {
        if (accumulator.yearOfDeath === undefined) {
            accumulator.yearOfDeath = (new Date()).getFullYear();
        }
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = (new Date()).getFullYear();
        }
        previousAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
        nextAge = item.yearOfDeath - item.yearOfBirth;
        return nextAge > previousAge ? item : accumulator;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
