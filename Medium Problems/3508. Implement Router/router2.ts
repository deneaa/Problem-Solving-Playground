class Router {
  queue: number[][] = [];
  memoryLimit: number;
  duplicates: Set<string> = new Set();
  destMap: Map<number, number[]> = new Map();

  constructor(memoryLimit: number) {
    this.memoryLimit = memoryLimit;
  }

  addPacket(source: number, destination: number, timestamp: number): boolean {
    const key = `${source}#${destination}#${timestamp}`;
    if (this.duplicates.has(key)) return false;

    if (this.queue.length === this.memoryLimit) {
      const old = this.queue.shift()!;
      const oldKey = `${old[0]}#${old[1]}#${old[2]}`;
      this.duplicates.delete(oldKey);
      const arr = this.destMap.get(old[1])!;
      arr.shift(); 
    }

    this.queue.push([source, destination, timestamp]);
    this.duplicates.add(key);

    if (!this.destMap.has(destination)) this.destMap.set(destination, []);
    this.destMap.get(destination)!.push(timestamp);

    return true;
  }

  forwardPacket(): number[] {
    if (this.queue.length === 0) return [];
    const packet = this.queue.shift()!;
    const key = `${packet[0]}#${packet[1]}#${packet[2]}`;
    this.duplicates.delete(key);
    this.destMap.get(packet[1])!.shift();
    return packet;
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    if (!this.destMap.has(destination)) return 0;
    const timestamps = this.destMap.get(destination)!;

    const left = this.lowerBound(timestamps, startTime);
    const right = this.upperBound(timestamps, endTime);
    return right - left;
  }

  private lowerBound(arr: number[], target: number): number {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (arr[m] < target) l = m + 1;
      else r = m;
    }
    return l;
  }

  private upperBound(arr: number[], target: number): number {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (arr[m] <= target) l = m + 1;
      else r = m;
    }
    return l;
  }
}
