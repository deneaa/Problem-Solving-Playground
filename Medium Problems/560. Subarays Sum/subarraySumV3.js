var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let prefixSum = {0: 1}; 

    for (let num of nums) {
        sum += num;  

        if (prefixSum[sum - k]) {
            count += prefixSum[sum - k];  
        }

        prefixSum[sum] = (prefixSum[sum] || 0) + 1;
    }

    return count;
};