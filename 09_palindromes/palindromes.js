const palindromes = function (str) {
    // str = str.replaceAll(" ", "")
    // .replaceAll("'", "")
    // .replaceAll(".", "")
    // .replaceAll(",", "")
    // .replaceAll("!", "");
    // let arr = str.split("");
    // arr.reverse();
    // return (str.toLowerCase() === arr.join("").toLowerCase());

    let cleanCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanedString = str
    .toLowerCase()
    .split("")
    .filter((item) => (cleanCharacters.includes(item)))
    .join("");

    let reversedString = cleanedString.split("").reverse().join("");

    return (cleanedString === reversedString);
};

// Do not edit below this line
module.exports = palindromes;
