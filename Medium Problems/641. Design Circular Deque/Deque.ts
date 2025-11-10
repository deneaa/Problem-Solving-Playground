class MyCircularDeque {
  arr: number[];
  k: number;
  constructor(k: number) {
    this.arr = new Array();
    this.k = k;
  }

  insertFront(value: number): boolean {
    if (this.arr.length < this.k) {
      this.arr.unshift(value);
      return true;
    } else return false;
  }

  insertLast(value: number): boolean {
    if (this.arr.length < this.k) {
      this.arr.push(value);
      return true;
    } else return false;
  }

  deleteFront(): boolean {
    if (this.arr.length > 0) {
      this.arr.shift();
      return true;
    } else return false;
  }

  deleteLast(): boolean {
    if (this.arr.length > 0) {
      this.arr.pop();
      return true;
    } else return false;
  }

  getFront(): number {
    if (this.arr.length > 0) return this.arr[0];
    return -1;
  }

  getRear(): number {
    if (this.arr.length > 0) return this.arr[this.arr.length - 1];
    return -1;
  }

  isEmpty(): boolean {
    if (this.arr.length > 0) return false;
    return true;
  }

  isFull(): boolean {
    if (this.arr.length === this.k) return true;
    return false;
  }
}
