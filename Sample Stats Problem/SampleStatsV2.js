function sampleStats(count) {
    let minimum = -1, maximum = -1;
    let totalSum = 0, totalCount = 0;
    let mode = 0, modeCount = 0;
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            if (minimum === -1) minimum = i; 
            maximum = i;
            
            totalSum += i * count[i]
            totalCount += count[i]; 
            
            if (count[i] > modeCount) {
                modeCount = count[i];
                mode = i;
            }
        }
    }

    let mean = totalSum / totalCount;

    let median;
    let mid1 = Math.floor((totalCount - 1) / 2);
    let mid2 = Math.ceil((totalCount - 1) / 2);
    let countSoFar = 0;
    let median1 = null, median2 = null;

    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            countSoFar += count[i];

            if (median1 === null && countSoFar > mid1) median1 = i;
            if (median2 === null && countSoFar > mid2) median2 = i;
            
            if (median1 !== null && median2 !== null) break;
        }
    }

    median = (median1 + median2) / 2;

    return [minimum, maximum, mean, median, mode];
}

let count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
console.log(sampleStats(count));
