function brokenCalculator(startValue, target){
    let operations = 0;

    while (startValue < target) {
        if (target % 2 === 0) {
            target /= 2;
        } else {
            target += 1;
        }
        operations++;
    }

    return operations + (startValue - target);
}

console.log(brokenCalculator(2, 3)); // 2
console.log(brokenCalculator(5, 8)); // 2  
console.log(brokenCalculator(3, 10)); // 3
console.log(brokenCalculator(1024, 1)); // 1023
console.log(brokenCalculator(1, 1000000000)); // 39
