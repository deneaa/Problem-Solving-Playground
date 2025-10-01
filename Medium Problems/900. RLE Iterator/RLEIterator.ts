class RLEIterator {
  index: number;
  encoding: number[];
  constructor(encoding: number[]) {
    this.index = 0;
    this.encoding = encoding;
  }

  next(n: number): number {
    while (this.index < this.encoding.length) {
      if (n <= this.encoding[this.index]) {
        this.encoding[this.index] -= n;
        return this.encoding[this.index + 1];
      } else {
        n -= this.encoding[this.index];
        this.index += 2;
      }
    }
    return -1;
  }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
