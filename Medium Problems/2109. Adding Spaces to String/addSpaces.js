/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result = "";
    let index = 0;
    for (let i = 0; i < s.length; i++){
        if (i === spaces[index]){
            result+= ' ';
            index++;
        }
        result+= `${s[i]}`
    }
    return result;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15])); // Output: "Leetcode Helps Me Learn"
console.log(addSpaces("icodeinpython", [1,5,7,9])); // Output: "i code in py thon"
console.log(addSpaces("spacing", [0,1,2,3,4,5,6])); // Output: "s p a c i n g"
console.log(addSpaces("hello world", [0, 5])); // Output: " hello  world"
