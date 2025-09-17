function findClosest(x: number, y: number, z: number): number {
  if (Math.abs(x - z) > Math.abs(y - z)) return 2;
  else if (Math.abs(x - z) === Math.abs(y - z)) return 0;
  else return 1;
}
