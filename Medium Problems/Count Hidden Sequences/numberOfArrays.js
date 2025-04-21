/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
function numberOfArrays(differences, lower, upper) {
    let prefix = 0;
    let minPrefix = 0;
    let maxPrefix = 0;

    for (let diff of differences) {
        prefix += diff;
        minPrefix = Math.min(minPrefix, prefix);
        maxPrefix = Math.max(maxPrefix, prefix);
    }

    let minStart = lower - minPrefix;
    let maxStart = upper - maxPrefix;

    return Math.max(0, maxStart - minStart + 1);
}

console.log(numberOfArrays([1,-3,4], 1, 6)); // 2
console.log(numberOfArrays([3,-2,5], -4, 5)); // 4
console.log(numberOfArrays([-1,-1,-1], -2, 0)); // 0
console.log(numberOfArrays([1,-1,1], 0, 2)); // 2
