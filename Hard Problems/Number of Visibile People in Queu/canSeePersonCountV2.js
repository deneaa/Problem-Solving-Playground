var canSeePersonsCount = function(heights) {
    let result = new Array(heights.length).fill(0);
    let stack = []; 
    for (let i = heights.length - 1; i >= 0; i--) {
        let count = 0;
        
        while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
            stack.pop(); 
            count++;
        }
        
        if (stack.length > 0) {
            count++; 
        }
        
        result[i] = count; 
        stack.push(i); 
    }

    return result;
};
