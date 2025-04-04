var lexicalOrder = function (n) {
  const result = [];

  function dfs(num) {
    if (num > n) return;

    result.push(num);

    for (let i = 0; i <= 9; i++) {
      let nextNum = num * 10 + i;
      if (nextNum <= n && nextNum > num) {
        dfs(nextNum);
      }
    }
  }

  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }

  return result;
};
