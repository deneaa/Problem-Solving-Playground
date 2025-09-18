type Task = {
  userId: number;
  priority: number;
};

class TaskManager {
  private taskMap: Map<number, Task> = new Map();
  private heap: [number, number][] = [];

  constructor(tasks: number[][]) {
    tasks.forEach(([userId, taskId, priority]) => {
      this.taskMap.set(taskId, { userId, priority });
      this.pushHeap([priority, taskId]);
    });
  }

  add(userId: number, taskId: number, priority: number): void {
    this.taskMap.set(taskId, { userId, priority });
    this.pushHeap([priority, taskId]);
  }

  edit(taskId: number, newPriority: number): void {
    const task = this.taskMap.get(taskId);
    if (task) {
      task.priority = newPriority;
      this.taskMap.set(taskId, task);
      this.pushHeap([newPriority, taskId]);
    }
  }

  rmv(taskId: number): void {
    this.taskMap.delete(taskId);
  }

  execTop(): number {
    while (this.heap.length > 0) {
      const [priority, taskId] = this.popHeap();
      const task = this.taskMap.get(taskId);
      if (task && task.priority === priority) {
        this.taskMap.delete(taskId);
        return task.userId;
      }
    }
    return -1;
  }

  private pushHeap(item: [number, number]) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  private popHeap(): [number, number] {
    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private compare(a: [number, number], b: [number, number]): number {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  }

  private bubbleUp(i: number) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[i], this.heap[p]) > 0) {
        [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
        i = p;
      } else break;
    }
  }

  private bubbleDown(i: number) {
    const n = this.heap.length;
    while (true) {
      let largest = i;
      const l = i * 2 + 1,
        r = i * 2 + 2;
      if (l < n && this.compare(this.heap[l], this.heap[largest]) > 0)
        largest = l;
      if (r < n && this.compare(this.heap[r], this.heap[largest]) > 0)
        largest = r;
      if (largest !== i) {
        [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
        i = largest;
      } else break;
    }
  }
}
