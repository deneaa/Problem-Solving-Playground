var findTargetSumWays = function(nums, target) {
    let sum_all = nums.reduce((acc, currentValue) => acc + currentValue, 0);
    if ((sum_all + target) % 2 !== 0 || Math.abs(target) > sum_all) return 0;
    
    let positive = (sum_all + target) / 2;

    let dp = new Array(positive + 1).fill(0);
    dp[0] = 1;
    for (let num of nums) {
        for (let i = positive; i >= num; i--) {
            dp[i] += dp[i - num];
        }
    }

    return dp[positive];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // Output: 5
console.log(findTargetSumWays([1], 1)); // Output: 1
console.log(findTargetSumWays([1], 2)); // Output: 0
console.log(findTargetSumWays([1, 0], 1)); // Output: 2
console.log(findTargetSumWays([1, 0], 2)); // Output: 0
