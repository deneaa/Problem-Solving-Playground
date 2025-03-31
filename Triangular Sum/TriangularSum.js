var triangularSum = function(nums) {
    while (nums.length > 1){
        let newNums = new Array(nums.length - 1);
        for (let i = 0; i < newNums.length; i++){
                newNums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        nums = newNums;
    }

    return nums[0];
};

console.log(triangularSum([2,5,3,9,0])); // 0
console.log(triangularSum([1,2,3,4,5])); // 8
console.log(triangularSum([5])); // 5
console.log(triangularSum([0])); // 0
console.log(triangularSum([1,2])); // 1
console.log(triangularSum([1,2,3])); // 3
console.log(triangularSum([1,2,3,4])); // 4
