var countAndSay = function(n) {

    function mapToPairs(str) {
        const result = [];
        let currentDigit = str[0];
        let count = 1;
    
        for (let i = 1; i < str.length; i++) {
            if (str[i] === currentDigit) {
                count++;
            } else {
                result.push([count, currentDigit]);
                currentDigit = str[i];
                count = 1;
            }
        }
    
        result.push([count, currentDigit]);
        return result;
    }

    function takesArrayOfPairs(array){
        let number = '';
        array.forEach((arr) => {
            number += `${arr[0]}${arr[1]}`;
        });
        return number;
    }

    let result = "1";
    for (let i = 1; i < n; i++) {
        const pairs = mapToPairs(result);
        result = takesArrayOfPairs(pairs);
    }

    return result;
};

console.log(countAndSay(1)); // "1"
console.log(countAndSay(2)); // "11"
console.log(countAndSay(3)); // "21"
console.log(countAndSay(4)); // "1211"
console.log(countAndSay(5)); // "111221"
console.log(countAndSay(6)); // "312211"
console.log(countAndSay(7)); // "13112221"
