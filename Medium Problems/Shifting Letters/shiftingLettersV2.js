var shiftingLetters = function(s, shifts) {
    let shiftSum = 0;
    let newArray = [];

    for (let i = shifts.length - 1; i >= 0; i--) {
        shiftSum = (shiftSum + shifts[i]) % 26; 
        let newCharCode = ((s.charCodeAt(i) - 97 + shiftSum) % 26) + 97;
        newArray[i] = String.fromCharCode(newCharCode);
    }

    return newArray.join('');
};

console.log(shiftingLetters("bad", [10, 20, 30])); // "jyh"
console.log(shiftingLetters("abc", [3, 5, 9])); // "rpl"
console.log(shiftingLetters("x", [1])); // "y"
console.log(shiftingLetters("y", [1])); // "z"
console.log(shiftingLetters("z", [1])); // "a"
console.log(shiftingLetters("a", [1])); // "b"
