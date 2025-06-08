var putMarbles = function(weights, k) {
    let n = weights.length;
    let allSums = [];
    
    for (let i = 0; i < n - 1; i++) {
        allSums.push(weights[i] + weights[i + 1]);
    }
    
    allSums.sort((a, b) => a - b);
    
    let minimal = 0;
    let maximal = 0;
    
    for (let i = 0; i < k - 1; i++) {
        minimal += allSums[i];
        maximal += allSums[allSums.length - 1 - i];
    }
    
    return maximal - minimal;
};
