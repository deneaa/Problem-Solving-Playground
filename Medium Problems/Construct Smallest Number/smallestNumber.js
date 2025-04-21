var smallestNumber = function(pattern) {
    let patternArray = pattern.split('');
    let res = "";
    let stack = [];
    let num = 1;
    for (let i = 0; i <= patternArray.length; i++){
        stack.push(num)
        if (patternArray[i] === 'I' || i === patternArray.length) {
            while (stack.length > 0) {
                res += stack.pop();
            }
        }
        num++;
    }
    return res;
};

console.log(smallestNumber("IIIDIDDD")); // Output: "123549876"
console.log(smallestNumber("DDD"));      // Output: "4321"
console.log(smallestNumber("IID"));      // Output: "12354"
console.log(smallestNumber("IDID"));     // Output: "13254"
console.log(smallestNumber("III"));      // Output: "1234"
console.log(smallestNumber("DDI"));      // Output: "3214"
console.log(smallestNumber("DIDI"));     // Output: "21435"
