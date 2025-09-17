function generateSubsets(nums) {
    const result = [];

    function backtrack(start, path) {
        if (path.length > 0) result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]); 
            backtrack(i + 1, path); 
            path.pop();
        }
    }

    backtrack(0, []);
    result.sort((a, b) => a.length - b.length);
    
    let finalresult = 0;

    result.forEach((array) => {
        const max = Math.max(...array);
        const min = Math.min(...array);
        if (max - min <= 2) {
            finalresult++;
        }
    });

    return finalresult;
}

console.log(generateSubsets([5, 4, 2, 4]));
