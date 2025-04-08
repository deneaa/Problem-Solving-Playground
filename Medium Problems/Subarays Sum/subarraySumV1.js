var subarraySum = function(nums, k) {
    if (k === 1) {
        nums = nums.filter(number => number === k)
        return nums.length;
    }
    const subarrays = [];

    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            subarrays.push(nums.slice(start, end));
        }
    }
    let count = 0;

    subarrays.forEach((arr) => {
        if (arr.reduce((acc, currentValue) => acc + currentValue, 0) === k) count++;
    })

    return count;
};

console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1,2,3], 3)); // 2
console.log(subarraySum([1,2,3], 6)); // 1
console.log(subarraySum([1,2,3], 1)); // 0
