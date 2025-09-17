var goodTriplets = function(nums1, nums2) {
    const n = nums1.length;
    let count = 0;

    const posInNums2 = new Map();
    for (let i = 0; i < n; i++) {
        posInNums2.set(nums2[i], i);
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const x = nums1[i];
                const y = nums1[j];
                const z = nums1[k];

                const p1 = posInNums2.get(x);
                const p2 = posInNums2.get(y);
                const p3 = posInNums2.get(z);

                if (p1 < p2 && p2 < p3) {
                    count++;
                }
            }
        }
    }

    return count;
};

console.log(goodTriplets([2,0,1,3], [0,1,2,3])); // 1
console.log(goodTriplets([1,2,3], [1,2,3]));     // 1
console.log(goodTriplets([1,2,3], [2,1,3]));     // 0
console.log(goodTriplets([1,2,3], [2,3,1]));     // 0
