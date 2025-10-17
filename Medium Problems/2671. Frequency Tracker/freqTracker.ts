class FrequencyTracker {
  map: Map<number, number> = new Map();
  freqCount: Map<number, number> = new Map();

  add(number: number): void {
    const prevFreq = this.map.get(number) ?? 0;
    const newFreq = prevFreq + 1;
    this.map.set(number, newFreq);

    if (prevFreq > 0) {
      this.freqCount.set(prevFreq, this.freqCount.get(prevFreq)! - 1);
    }

    this.freqCount.set(newFreq, (this.freqCount.get(newFreq) ?? 0) + 1);
  }

  deleteOne(number: number): void {
    if (!this.map.has(number)) return;

    const freq = this.map.get(number)!;
    this.map.set(number, freq - 1);

    this.freqCount.set(freq, this.freqCount.get(freq)! - 1);

    if (freq - 1 > 0) {
      this.freqCount.set(freq - 1, (this.freqCount.get(freq - 1) ?? 0) + 1);
      this.map.set(number, freq - 1);
    } else {
      this.map.delete(number);
    }
  }

  hasFrequency(frequency: number): boolean {
    return (this.freqCount.get(frequency) ?? 0) > 0;
  }
}
