function maxValue(n: string, x: number): string {
  const isNegative = n[0] === "-";
  const len = n.length;

  if (!isNegative) {
    for (let i = 0; i < len; i++) {
      if (Number(n[i]) < x) {
        return n.slice(0, i) + x + n.slice(i);
      }
    }
    return n + x;
  } else {
    for (let i = 1; i < len; i++) {
      if (Number(n[i]) > x) {
        return n.slice(0, i) + x + n.slice(i);
      }
    }
    return n + x;
  }
}
