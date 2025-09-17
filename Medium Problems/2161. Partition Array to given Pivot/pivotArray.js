/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let lower = [];
    let higher = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > pivot){
            higher.push(nums[i])
        } else if (nums[i] < pivot) {
            lower.push(nums[i]);
        } else {
            count++;
        }
    }
    let finalArray = [...lower];
    for (let i = 0; i < count; i++){
        finalArray.push(pivot);
    }
    return finalArray.concat(higher);
};

console.log(pivotArray([9,12,5,10,14,3,10], 10))
console.log(pivotArray([-3,4,3,2], 2))