var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];     
        fast = nums[nums[fast]];
    } while (slow !== fast);

    let pointer = nums[0]; 
    while (pointer !== slow) {
        pointer = nums[pointer]; 
        slow = nums[slow]; 
    }

    return slow; 
};


console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([1, 1])); // 1
console.log(findDuplicate([1, 1, 2])); // 1
console.log(findDuplicate([2, 2, 2])); // 2
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // undefined
