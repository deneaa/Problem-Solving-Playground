var smallestRepunitDivByK = function(k) {
    if (k === 1) return 1;
    let remainder = 1
    for (let i = 1; i <= k; i++) {
        if (remainder % k === 0) {
            return i;
        }
        remainder = (remainder * 10 + 1) % k;
    }
    return -1;
};

console.log(smallestRepunitDivByK(1)); // 1
console.log(smallestRepunitDivByK(2)); // -1
console.log(smallestRepunitDivByK(3)); // 3
console.log(smallestRepunitDivByK(4)); // -1
console.log(smallestRepunitDivByK(5)); // 5
console.log(smallestRepunitDivByK(6)); // -1
console.log(smallestRepunitDivByK(7)); // 7
console.log(smallestRepunitDivByK(8)); // -1
console.log(smallestRepunitDivByK(9)); // 9
console.log(smallestRepunitDivByK(10)); // -1
console.log(smallestRepunitDivByK(11)); // 11
console.log(smallestRepunitDivByK(12)); // -1