var continuousSubarrays = function(nums) {
    let result = 0;
    let start = 0;
    let maxDeque = []; 
    let minDeque = []; 

    for (let end = 0; end < nums.length; end++) {
        while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= nums[end]) {
            maxDeque.pop();
        }
        maxDeque.push(end);

        while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= nums[end]) {
            minDeque.pop();
        }
        minDeque.push(end);

        while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
            start++;
            if (maxDeque[0] < start) maxDeque.shift();
            if (minDeque[0] < start) minDeque.shift();
        }

        result += (end - start + 1);
    }

    return result;
}
