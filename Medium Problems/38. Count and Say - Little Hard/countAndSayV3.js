/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";

    for (let i = 2; i <= n; i++) {
        let next = "";
        let count = 1;
        let current = result[0];

        for (let j = 1; j < result.length; j++) {
            if (result[j] === current) {
                count++;
            } else {
                next += count.toString() + current;
                current = result[j];
                count = 1;
            }
        }

        next += count.toString() + current;
        result = next;
    }

    return result;
};