function earliestTime(tasks: number[][]): number {
  let min = tasks[0][0] + tasks[0][1];

  for (let i = 1; i < tasks.length; i++) {
    if (tasks[i][0] + tasks[i][1] < min) {
      min = tasks[i][0] + tasks[i][1];
    }
  }
  return min;
}
