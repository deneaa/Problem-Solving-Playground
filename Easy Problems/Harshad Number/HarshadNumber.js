var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    let originalX = x; 

    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }

    return originalX % sum === 0 ? sum : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18)); // 9 (18 este Harshad)
console.log(sumOfTheDigitsOfHarshadNumber(19)); // -1 (19 nu este Harshad)
console.log(sumOfTheDigitsOfHarshadNumber(20)); // 2 (20 este Harshad)
console.log(sumOfTheDigitsOfHarshadNumber(21)); // 3 (21 este Harshad)
console.log(sumOfTheDigitsOfHarshadNumber(22)); // -1 (22 nu este Harshad)
console.log(sumOfTheDigitsOfHarshadNumber(23)); // -1 (23 nu este Harshad)
