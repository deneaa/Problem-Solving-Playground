class ExamTracker {
  times: number[];
  prefix: number[];
  constructor() {
    this.times = [];
    this.prefix = [];
  }

  record(time: number, score: number): void {
    this.times.push(time);
    if (this.prefix.length === 0) {
      this.prefix.push(score);
    } else {
      this.prefix.push(this.prefix[this.prefix.length - 1] + score);
    }
  }

  totalScore(startTime: number, endTime: number): number {
    let l = this.lowerBound(this.times, startTime);
    let r = this.upperBound(this.times, endTime);
    if (l >= r) return 0;

    return this.prefix[r - 1] - (l > 0 ? this.prefix[l - 1] : 0);
  }

  lowerBound(times: number[], start: number): number {
    let left = 0;
    let right = times.length - 1;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (times[mid] >= start) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  upperBound(times: number[], stop: number): number {
    let left = 0;
    let right = times.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (times[mid] <= stop) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

/**
 * Your ExamTracker object will be instantiated and called as such:
 * var obj = new ExamTracker()
 * obj.record(time,score)
 * var param_2 = obj.totalScore(startTime,endTime)
 */
