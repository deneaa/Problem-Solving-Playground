/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > pivot) {
            result[right--] = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            result[left++] = nums[i];
        }
    }

    while (left <= right) {
        result[left++] = pivot;
    }

    return result;
};

