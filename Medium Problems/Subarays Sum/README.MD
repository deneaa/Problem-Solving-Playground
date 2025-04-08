
# Subarray Sum Problem

This repository contains a solution to the **Subarray Sum** problem from LeetCode. The task is to find the total number of continuous subarrays whose sum equals a given integer `k`.

## Problem Description

Given an integer array `nums` and an integer `k`, your task is to return the number of contiguous subarrays whose sum equals `k`.

### Example

```javascript
console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1,2,3], 3)); // 2
console.log(subarraySum([1,2,3], 6)); // 1
console.log(subarraySum([1,2,3], 1)); // 0
```

### Explanation

- The subarrays in the examples are:
  - For `subarraySum([1, 1, 1], 2)`: the subarrays that sum to `2` are `[1, 1]` and `[1, 1]` (output: 2).
  - For `subarraySum([1, 2, 3], 3)`: the subarrays that sum to `3` are `[1, 2]` and `[3]` (output: 2).
  - For `subarraySum([1, 2, 3], 6)`: the subarray that sums to `6` is `[1, 2, 3]` (output: 1).
  - For `subarraySum([1, 2, 3], 1)`: there are no subarrays that sum to `1` (output: 0).

## Approach

The problem is solved using three different approaches:

### 1. **Brute Force Approach**

The brute force approach involves generating all subarrays and checking if their sum is equal to `k`.

```javascript
var subarraySum = function(nums, k) {
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
```

### 2. **Optimized Approach (Two Pointers)**

This approach uses two pointers to improve performance by dynamically calculating the sum of subarrays.

```javascript
var subarraySum = function(nums, k) {
    let count = 0;

    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            if (sum === k) count++;
        }
    }

    return count;
};
```

### 3. **Efficient Approach (Prefix Sum and HashMap)**

The final approach uses a prefix sum combined with a hashmap to track the frequency of sums encountered while iterating through the array. This significantly reduces time complexity.

```javascript
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum - k;

        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};
```

### Time Complexity:
- Brute Force: O(n^3) due to generating all subarrays.
- Optimized Two Pointers: O(n^2).
- Efficient Approach (Prefix Sum): O(n) for both time and space complexity.

## Links

- LeetCode Problem: [Tuple With Same Product](https://leetcode.com/problems/tuple-with-same-product/)
- Author GitHub: [Denea](https://github.com/deneaa)

