/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const wordSet = new Set(words);
    const memo = new Map();

    const canForm = (word) => {
        if (memo.has(word)) return memo.get(word);
        for (let i = 1; i < word.length; i++) {
            const prefix = word.slice(0, i);
            const suffix = word.slice(i);
            if (wordSet.has(prefix) && (wordSet.has(suffix) || canForm(suffix))) {
                memo.set(word, true);
                return true;
            }
        }
        memo.set(word, false);
        return false;
    };

    return words.filter(word => word.length > 0 && canForm(word));
};