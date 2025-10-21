function numberOfWeeks(milestones: number[]): number {
  let largest = Math.max(...milestones);
  let others = milestones.reduce((prev, curr) => prev + curr, 0) - largest;

  if (largest > others) return 2 * others + 1;
  else return others + largest;
}
