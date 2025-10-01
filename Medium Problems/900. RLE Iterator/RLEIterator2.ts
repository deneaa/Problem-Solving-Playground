class RLEIterator {
  arr: number[] = [];
  constructor(encoding: number[]) {
    for (let i = 0; i < encoding.length; i += 2) {
      if (encoding[i] === 0) continue;
      let n = encoding[i];
      while (n > 0) {
        this.arr.push(encoding[i + 1]);
        n--;
      }
    }
  }

  next(n: number): number {
    if (this.arr.length < n) return -1;
    let response = this.arr[n - 1];
    this.arr.splice(0, n);
    return response;
  }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
