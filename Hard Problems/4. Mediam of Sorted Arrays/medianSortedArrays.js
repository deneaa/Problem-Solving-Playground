var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2]
    arr.sort((a, b) => a - b);
    let n = arr.length;

    if(n % 2 === 0){
        let idx = Math.floor(n / 2);
        return (arr[idx -1] + arr[idx]) / 2 ;
    }

    if(arr.length % 2 !== 0){
        let idx = Math.floor(n / 2);
        return arr[idx];
    }
};