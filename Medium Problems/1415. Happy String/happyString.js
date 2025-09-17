var getHappyString = function(n, k) {
    const result = [];

    function backtrack(current) {
        if (current.length === n) {
            result.push(current);
            return;
        }

        for (let char of ['a', 'b', 'c']) {
            if (current.length === 0 || current[current.length - 1] !== char) {
                backtrack(current + char);
            }
        }
    }

    backtrack("");

    return k <= result.length ? result[k - 1] : "";
};
