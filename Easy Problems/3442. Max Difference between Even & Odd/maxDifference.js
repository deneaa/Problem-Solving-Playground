/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  let map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let maxOdd = -Infinity;
  let minEven = Infinity;

  map.forEach((value) => {
    if (value % 2 === 0) {
      minEven = Math.min(minEven, value);
    } else {
      maxOdd = Math.max(maxOdd, value);
    }
  });

  if (maxOdd === -Infinity || minEven === Infinity) {
    return 0;
  }
  
  return maxOdd - minEven;
};


console.log(maxDifference("aaaaabbc"))
console.log(maxDifference("abcabcab"))