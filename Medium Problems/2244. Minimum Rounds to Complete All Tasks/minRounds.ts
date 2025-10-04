function minimumRounds(tasks: number[]): number {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < tasks.length; i++) {
    map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
  }
  let rounds = 0;
  for (let [key, value] of map.entries()) {
    if (value === 1) return -1;
    rounds += Math.ceil(value / 3);
  }
  return rounds;
}
