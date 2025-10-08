class CustomStack {
  arr: number[];
  max: number;
  constructor(maxSize: number) {
    this.arr = [];
    this.max = maxSize;
  }

  push(x: number): void {
    if (this.arr.length < this.max) {
      this.arr.push(x);
    }
  }

  pop(): number {
    if (this.arr.length === 0) {
      return -1;
    } else {
      return this.arr.pop()!;
    }
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < k; i++) {
      if (this.arr[i] === undefined) break;
      this.arr[i] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
