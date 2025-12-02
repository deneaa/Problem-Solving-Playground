class KthLargest {
  heap: number[];
  k: number;

  constructor(k: number, nums: number[]) {
    this.heap = nums;
    this.k = k;

    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
      this.heapify(this.heap, this.heap.length, i);
    }

    while (this.heap.length > k) {
      this.extractMin();
    }
  }

  add(val: number): number {
    this.insert(val);

    if (this.heap.length > this.k) {
      this.extractMin();
    }

    return this.heap[0];
  }

  heapify(arr: number[], n: number, i: number) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      this.heapify(arr, n, smallest);
    }
  }

  insert(value: number) {
    this.heap.push(value);
    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[i] < this.heap[parent]) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  extractMin(): number {
    if (this.heap.length === 1) return this.heap.pop()!;

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapify(this.heap, this.heap.length, 0);
    return root;
  }
}
