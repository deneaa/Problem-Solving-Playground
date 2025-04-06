var tupleSameProduct = function(nums) {
    let productCount = new Map(), result = 0;

    for (let i = 0; i < nums.length; i++)
        for (let j = i+1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            result += 8 * (productCount.get(product) || 0);
            productCount.set(product, (productCount.get(product) || 0) + 1);
        }

    return result;
};
// Example usage:
console.log(tupleSameProduct([2, 3, 4, 6]));  // Output: 8
console.log(tupleSameProduct([1, 1, 1, 1]));  // Output: 24
