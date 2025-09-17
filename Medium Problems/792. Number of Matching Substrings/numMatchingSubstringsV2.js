var numMatchingSubseq = function(s, words) {
    let count = 0;
    let cache = new Map();

    for (let word of words) {
        if (cache.has(word)) {
            if (cache.get(word)) count++;
            continue;
        }

        let i = 0;
        for (let char of s) {
            if (char === word[i]) i++;
            if (i === word.length) break;
        }

        let isSubseq = i === word.length;
        cache.set(word, isSubseq);
        if (isSubseq) count++;
    }

    return count;
};
