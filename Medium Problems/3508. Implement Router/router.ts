class Router {
  Array: number[][] = [];
  memoryLength: number;

  constructor(memoryLimit: number) {
    this.memoryLength = memoryLimit;
  }

  addPacket(source: number, destination: number, timestamp: number): boolean {
    if (
      this.Array.some(
        (p) => p[0] === source && p[1] === destination && p[2] === timestamp
      )
    ) {
      return false;
    }

    if (this.Array.length === this.memoryLength) {
      this.Array.shift();
    }

    this.Array.push([source, destination, timestamp]);
    return true;
  }

  forwardPacket(): number[] {
    if (this.Array.length === 0) return [];
    return this.Array.shift()!;
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    return this.Array.filter(
      (p) => p[1] === destination && p[2] >= startTime && p[2] <= endTime
    ).length;
  }
}
