/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    let stack = [];

    for (let ch of s) {
        if (ch !== '*') {
            stack.push(ch);
        } else {
            let minChar = 'z';
            for (let c of stack) {
                if (c < minChar) {
                    minChar = c;
                }
            }

            for (let i = stack.length - 1; i >= 0; i--) {
                if (stack[i] === minChar) {
                    stack.splice(i, 1);
                    break;
                }
            }
        }
    }

    return stack.join('');
};


console.log(clearStars("leet**cod*e")); // "leetcode"
console.log(clearStars("erase*****")); // "erase"
console.log(clearStars("aaba*"));
console.log(clearStars("abs"));
 