var rearrangeBarcodes = function(barcodes) {
    let map = new Map();
    for (const number of barcodes) {
        if (!map.has(number)) {
            map.set(number, 1);
        } else {
            map.set(number, map.get(number) + 1);
        }
    }

    let result = [];
    for (let [key, freq] of map.entries()) {
        result.push({ value: key, freq: freq });
    }
    result.sort((a, b) => b.freq - a.freq);
    let output = [];

    while (result.length >= 2) {
        let first = result.shift();
        let second = result.shift();
    
        output.push(first.value);
        output.push(second.value);
    
        first.freq--;
        second.freq--;
    
        if (first.freq > 0) result.push(first);
        if (second.freq > 0) result.push(second);
    
        result.sort((a, b) => b.freq - a.freq);
    }
    
    if (result.length === 1) {
        output.push(result[0].value);
    }
    
    return output;
};

console.log(rearrangeBarcodes([1,1,1,2,2,3])); // [1,2,1,2,1,3]
console.log(rearrangeBarcodes([1,1,1,1,2,2,3,3])); // [1,2,1,2,1,3,1]
console.log(rearrangeBarcodes([1,1,1,2,2,2])); // [1,2,1,2,1,2]
console.log(rearrangeBarcodes([1,2,3,4,5,6])); // [1,2,3,4,5,6]
console.log(rearrangeBarcodes([1,2,3,3,5,3,3])); // [1,2,3,4,5,6,7]
