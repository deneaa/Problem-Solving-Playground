var addSpaces = function(s, spaces) {
    let result = [];
    let lastIndex = 0;

    for (let space of spaces) {
        result.push(s.substring(lastIndex, space));
        lastIndex = space;
    }

    result.push(s.substring(lastIndex));
    return result.join(" ");
};