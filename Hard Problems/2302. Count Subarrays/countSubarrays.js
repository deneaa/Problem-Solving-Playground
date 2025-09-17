var countSubarrays = function(nums, k) {
    let left = 0, sum = 0, count = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum * (right - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }
        count += (right - left + 1);
    }
    return count;
};
