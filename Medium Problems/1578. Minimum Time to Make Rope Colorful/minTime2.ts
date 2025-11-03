function minCost(colors: string, neededTime: number[]): number {
  let c = colors.split("");
  let time = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i + 1] === c[i]) {
      let index = i;
      while (c[index + 1] === c[i]) {
        index++;
      }
      let arr = neededTime.slice(i, index + 1);
      let max = Math.max(...arr);
      let sum = arr.reduce((prev, curr) => prev + curr, 0);
      time += sum - max;
      a;
      i = index;
    }
  }
  return time;
}
