/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (
                        Math.abs(arr[j] - arr[k]) <= b &&
                        Math.abs(arr[i] - arr[k]) <= c
                    ) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};


console.log(countGoodTriplets([3,0,1,1,9,7], 7,2,3)); // 4
console.log(countGoodTriplets([1,1,2,2,3], 0,0,1)); // 0
console.log(countGoodTriplets([1,2,3], 0,0,1)); // 0
console.log(countGoodTriplets([1,2,3], 0,0,1)); // 0
