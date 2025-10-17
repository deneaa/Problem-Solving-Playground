class FrequencyTracker {
  map: Map<number, number> = new Map();
  map2: Map<number, number[]> = new Map();
  constructor() {}

  add(number: number): void {
    if (this.map.has(number)) {
      let freq = this.map.get(number)!;
      this.map.set(number, this.map.get(number)! + 1);

      let array = this.map2.get(freq)!.filter((val) => val !== number);
      this.map2.set(freq, array);

      if (this.map2.get(freq + 1) === undefined) {
        this.map2.set(freq + 1, [number]);
      } else {
        this.map2.set(freq + 1, [...this.map2.get(freq + 1)!, number]);
      }
    } else {
      this.map.set(number, 1);
      if (this.map2.get(1) === undefined) {
        this.map2.set(1, [number]);
      } else {
        this.map2.set(1, [...this.map2.get(1)!, number]);
      }
    }
  }

  deleteOne(number: number): void {
    if (!this.map.has(number)) return;

    let freq = this.map.get(number)!;
    this.map2.set(
      freq,
      this.map2.get(freq)!.filter((nr) => nr !== number)
    );

    if (freq === 1) {
      this.map.delete(number);
    } else {
      this.map.set(number, freq - 1);

      if (!this.map2.has(freq - 1)) {
        this.map2.set(freq - 1, [number]);
      } else {
        this.map2.get(freq - 1)!.push(number);
      }
    }
  }

  hasFrequency(frequency: number): boolean {
    return this.map2.has(frequency) && this.map2.get(frequency)!.length > 0;
  }
}
