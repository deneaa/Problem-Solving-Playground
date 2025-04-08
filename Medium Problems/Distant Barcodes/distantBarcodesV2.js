var rearrangeBarcodes = function (a) {
    let n = a.length;
    a.sort((a, b) => a - b);

    let an = [];

    let i, j;
    for (i = 0, j = n - 1; i <= j; ) {
        if (a[i] === an.at(-1)) break;
        an.push(a[i]);
        i++;

        if (i - 1 === j) break;

        if (a[j] === an.at(-1)) break;
        an.push(a[j]);
        j--;
    }
    for (let k = 0; i <= j; k += 2, i++) {
        an.splice(k, 0, a[i]);
    }

    return an;
};