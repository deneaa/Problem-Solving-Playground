var shiftingLetters = function(s, shifts) {
    let newArray = s.split(""); 
    let index = 0;
    while (shifts.length > 0) {
        let totalSum = shifts.reduce((sum, item) => sum + item, 0) % 26; 
        
        let charCode = s.charCodeAt(index) + totalSum;
        if (charCode > 122) charCode -= 26; 
        
        newArray[index] = String.fromCharCode(charCode); 
        shifts.shift(); 
        index++;
    }

    return newArray.join("");
};

console.log(shiftingLetters("bad", [10, 20, 30])); // "jyh"
console.log(shiftingLetters("abc", [3, 5, 9])); // "rpl"
console.log(shiftingLetters("x", [1])); // "y"
console.log(shiftingLetters("y", [1])); // "z"
console.log(shiftingLetters("z", [1])); // "a"
console.log(shiftingLetters("a", [1])); // "b"
