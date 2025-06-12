var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const shiftAmount = new Array(n + 1).fill(0);

    shifts.forEach(([start, end, dir]) => {
        const val = dir === 1 ? 1 : -1;
        shiftAmount[start] += val;
        shiftAmount[end + 1] -= val;
    });

    for (let i = 1; i < n; i++) {
        shiftAmount[i] += shiftAmount[i - 1];
    }

    let chars = s.split('');
    for (let i = 0; i < n; i++) {
        let code = chars[i].charCodeAt(0) - 97;
        let shift = ((code + shiftAmount[i]) % 26 + 26) % 26;
        chars[i] = String.fromCharCode(shift + 97);
    }

    return chars.join('');
};

console.log(shiftingLetters("abc", [[0, 1, 0], [1, 2, 1], [0, 2, 1]])); // ➜ "ace"
