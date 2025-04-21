/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
    let [maxElement, maxCount] = getMaximumFrequency(nums);
    let leftMaxCount = 0;
    let totalMaxCount = maxCount;
    let n = nums.length;
  
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] === maxElement) {
        leftMaxCount++;
      }
  
      let rightMaxCount = totalMaxCount - leftMaxCount;
  
      if (leftMaxCount * 2 > i + 1 && rightMaxCount * 2 > n - i - 1) {
        return i;
      }
    }
    return -1;
  
    function getMaximumFrequency(array) {
      let map = new Map();
      array.forEach((element) => {
        if (map.has(element)) {
          map.set(element, map.get(element) + 1);
        } else {
          map.set(element, 1);
        }
      });
  
      let maxElement = null;
      let maxCount = 0;
  
      map.forEach((count, element) => {
        if (count > maxCount) {
          maxCount = count;
          maxElement = element;
        }
      });
      return [maxElement, maxCount];
    }
  };
  
  console.log(minimumIndex([1, 2, 2, 2])); // Output: 2
  console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])); // Output: 4
  console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2])); // Output: -1
  console.log(minimumIndex([6, 5, 4, 3, 2, 1])); // Output: -1
  