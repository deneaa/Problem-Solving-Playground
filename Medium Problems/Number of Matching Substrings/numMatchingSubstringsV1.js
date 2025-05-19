var numMatchingSubseq = function(s, words) {
    let count = 0;

    words.forEach(word => {
        let i = 0;
        for (let char of s) {
            if (char === word[i]) {
                i++;
            }
            if (i === word.length) break;
        }
        if (i === word.length) {
            count++;
        }
    });

    return count;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"])); // output: 3
