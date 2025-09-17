function maxAverageRatio(classes: number[][], extraStudents: number): number {
  function gain(a: number, b: number): number {
    return (a + 1) / (b + 1) - a / b;
  }

  while (extraStudents > 0) {
    classes.sort((a, b) => gain(b[0], b[1]) - gain(a[0], a[1]));

    classes[0][0] += 1;
    classes[0][1] += 1;
    extraStudents -= 1;
  }

  return (
    classes.reduce((acc, curr) => acc + curr[0] / curr[1], 0) / classes.length
  );
}

