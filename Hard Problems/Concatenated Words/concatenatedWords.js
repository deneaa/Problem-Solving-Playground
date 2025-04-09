var findAllConcatenatedWordsInADict = function(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
    
        words.splice(i, 1);
    
        if (canBeFormed(currentWord, words)) {
            result.push(currentWord);
        }
        words.splice(i, 0, currentWord);
    }
    function canBeFormed(word, wordList) {
        if (word === "") return true; 
    
        for (let w of wordList) {
            if (word.startsWith(w)) {
                let rest = word.slice(w.length);
                if (canBeFormed(rest, wordList)) {
                    return true;
                }
            }
        }
        return false;
    }
    return result;
};

console.log(findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"])); // ["catsdogcats","dogcatsdog","ratcatdogcat"]
console.log(findAllConcatenatedWordsInADict(["cat","dog","catdog"])); // ["catdog"]
console.log(findAllConcatenatedWordsInADict(["a","b","ab"])); // ["ab"]
console.log(findAllConcatenatedWordsInADict(["a","aa","aaa","aaaa","aaaaa","aaaaaa"])); // []
