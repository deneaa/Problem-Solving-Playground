/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    if (meetings.length === 0) return days;
    
    meetings.sort((a, b) => a[0] - b[0]);
    
    const merged = [meetings[0]];
    for (let i = 1; i < meetings.length; i++) {
        const current = meetings[i];
        const lastMerged = merged[merged.length - 1];
        
        if (current[0] <= lastMerged[1] + 1) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    let coveredDays = 0;
    for (const meeting of merged) {
        coveredDays += meeting[1] - meeting[0] + 1;
    }
    
    return days - coveredDays;
};

console.log(countDays(10, [[5,7],[1,3],[9,10]])); // Output: 2
console.log(countDays(5, [[2,4],[1,3]])); // Output: 1