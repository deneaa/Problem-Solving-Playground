/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  const result = [];
  let num = 1;

  while (result.length < n) {
    result.push(num);
    if (num * 10 <= n) {
      num *= 10;
    } else {
      if (num + 1 > n) {
        num = Math.floor(num / 10);
        while (num % 10 === 9) {
          num = Math.floor(num / 10);
        }
        num++;
      } else {
        while (num % 10 === 9) {
          num = Math.floor(num / 10);
        }
        num++;
      }
    }
  }
  return result[k - 1];
};


console.log(findKthNumber(13, 2));
console.log(findKthNumber(1, 1));