var clearStars = function(s) {
  let n = s.length, indices = Array(26).fill(0).map(() => []);
  let deleted = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (s[i] === '*') {
      for (let j = 0; j < 26; j++) {
        if (indices[j].length > 0) {
          deleted[indices[j].pop()] = true;
          break;
        }
      }
    } else {
      indices[s.charCodeAt(i) - 97].push(i);
    }
  }
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (s[i] !== '*' && !deleted[i]) {
      ans += s[i];
    }
  }
  return ans;
};