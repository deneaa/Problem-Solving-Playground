/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = 0;
    let startingPoint = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i] >= nums[i + 1]) {
            let actualSum = nums.slice(startingPoint, i + 1);
            actualSum = actualSum.reduce((acc, curr) => acc + curr, 0);
            if (actualSum > maxSum) {
                maxSum = actualSum;
            }
            startingPoint = i + 1;
        }
    }
    return maxSum;
};

console.log(maxAscendingSum([10,20,30,5,10,50]));   // 65
console.log(maxAscendingSum([10,20,30,40,50]));     // 150
console.log(maxAscendingSum([12,17,15,13,10,11,12])); // 33

