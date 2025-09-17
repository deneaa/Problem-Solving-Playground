function goodTriplets(nums1, nums2) {
    const n = nums1.length;
    const pos = new Array(n);
    for (let i = 0; i < n; i++) {
        pos[nums2[i]] = i;
    }

    const mapped = nums1.map(x => pos[x]);
    const tree = new Array(n + 2).fill(0);

    function update(i, val) {
        i += 1;
        while (i <= n + 1) {
            tree[i] += val;
            i += (i & -i);
        }
    }

    function query(i) {
        i += 1;
        let sum = 0;
        while (i > 0) {
            sum += tree[i];
            i -= (i & -i);
        }
        return sum;
    }

    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        left[i] = query(mapped[i] - 1);
        update(mapped[i], 1);
    }

    tree.fill(0);

    for (let i = n - 1; i >= 0; i--) {
        right[i] = query(n - 1) - query(mapped[i]);
        update(mapped[i], 1);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += left[i] * right[i];
    }

    return result;
}
