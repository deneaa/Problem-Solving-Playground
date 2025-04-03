var resultsArray = function(nums, k) {
    let ans = [];
    
    let i = 0, n = nums.length, consecutiveSize = 1;
    
    if (n == 1) return nums;

    while (i < n) {
        if (nums[i] - 1 == nums[i - 1]) {
            consecutiveSize += 1;
        } else {
            consecutiveSize = 1;
        }
        
        if (i >= k - 1) {
            if (consecutiveSize >= k) {
                ans.push(nums[i]);
            } else {
                ans.push(-1);
            }
        }
        i++;
    }
    return ans;
};
