var resultsArray = function(nums, k) {
    let newArray = [];
    let arrays = [];
    
    if (nums.length < k) {
        arrays.push(nums); 
        return arrays;
    }

    for (let i = 0; i <= nums.length - k; i++) {
        arrays.push(nums.slice(i, i + k));
    }

    arrays.forEach((arr) => {
        let isConsecutive = true;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + 1) {
                isConsecutive = false;
                break;
            }
        }

        if (isConsecutive) {
            newArray.push(Math.max(...arr));
        } else {
            newArray.push(-1);
        }
    });

    return newArray;
};

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)); // [3, 4, -1, -1, -1]
console.log(resultsArray([2, 2, 2, 2, 2], 4)); // [-1, -1, -1]
console.log(resultsArray([1, 2, 3, 4, 5], 5)); // [5]
console.log(resultsArray([1, 2, 3, 4, 5], 6)); // []
console.log(resultsArray([1, 2, 3, 4, 5], 0)); // [1, 2, 3, 4, 5]
