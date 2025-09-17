function earliestTime(tasks: number[][]): number {
  return tasks.reduce(
    (min, [start, duration]) => Math.min(min, start + duration),
    Infinity
  );
}
