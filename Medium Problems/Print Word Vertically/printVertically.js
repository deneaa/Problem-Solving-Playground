function printVertically(s) {
    let words = s.split(" "); 
    let maxLen = Math.max(...words.map(word => word.length));  
    
    let result = [];
    for (let i = 0; i < maxLen; i++) {
        let row = words.map(word => word[i] || ' ').join(''); 
        result.push(row.replace(/\s+$/, '')); 
    }
    
    return result;
}
