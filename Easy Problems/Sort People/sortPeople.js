var sortPeople = function(names, heights) {
    let resultNames = [];
    let resultHeights = [];

    while (names.length > 0) {
        let maxHeight = heights[0];
        let index = 0;
        
        for (let i = 1; i < names.length; i++) {
            if (heights[i] > maxHeight) {
                maxHeight = heights[i];
                index = i;
            }
        }
        
        resultNames.push(names[index]);
        resultHeights.push(heights[index]);
        
        names.splice(index, 1);
        heights.splice(index, 1);
    }

    return resultNames;
};

console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // ["Mary", "Emma", "John"]
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150])); // ["Bob", "Bob", "Alice"]
