const maxSubsequence = (nums: number[], k: number) =>
  nums
    .map((n, i) => [n, i])
    .sort((a, b) => a[0] - b[0])
    .slice(-k)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
