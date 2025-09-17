var lexicalOrder = function (n) {
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

  return result;
};
