function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > target){
        right = mid - 1;
      } 
      if (nums[mid] < target){
        left = mid + 1;
      } else {
        return mid;
      }
    }

    return -1;
};

console.log(search([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(search([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(search([1, 2, 3, 4, 5], 1)); // Output: 0
console.log(search([1, 2, 3, 4, 5], 5)); // Output: 4