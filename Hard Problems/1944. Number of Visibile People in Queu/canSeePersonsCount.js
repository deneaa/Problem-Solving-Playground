/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    let result = [];

    for (let index = 0; index < heights.length; index++) {
        let element = heights[index];
        let count = 0;
        let max = 0;

        for (let i = index + 1; i < heights.length; i++) {
            if (heights[i] > max) {
                count++;
                max = heights[i];
            }

            if (heights[i] >= element) {
                break;
            }
        }

        result.push(count);
    }

    return result;
};



console.log(canSeePersonsCount([10,6,8,5,11,9])); // [3,1,2,1,1,0]
console.log(canSeePersonsCount([5, 1, 2, 2, 1, 10]));     // [4, 1, 1, 1, 0]
console.log(canSeePersonsCount([1,5,3,6,7,8])); // [5, 1, 1, 1, 0, 0]
console.log(canSeePersonsCount([1,2,3,4,5])); // [4, 0, 0, 0, 0]
