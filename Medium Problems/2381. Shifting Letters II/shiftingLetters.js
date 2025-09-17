/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let chars = s.split('');
    shifts.forEach((pattern) => {
        if (pattern[2] === 1){
            for (let i = pattern[0]; i <= pattern[1]; i++) {
                let code = chars[i].charCodeAt(0);
                code = (code - 97 + 1) % 26 + 97;
                chars[i] = String.fromCharCode(code);
            }
        }
        
        if (pattern[2] === 0){
            for (let i = pattern[0]; i <= pattern[1]; i++){
                let code = chars[i].charCodeAt(0);
                code = (code - 97 - 1) % 26 + 97;
                chars[i] = String.fromCharCode(code);
            }
        }
    })
    
    return chars.join('');

};

console.log(shiftingLetters("abc", [[0, 1, 0], [1, 2, 1], [0, 2, 1]]))