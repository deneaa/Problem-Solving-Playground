function sortTheStudents(score: number[][], k: number): number[][] {
  let map: Map<number, number> = new Map();

  for (let i = 0; i < score.length; i++) {
    map.set(score[i][k], i);
  }
  let newMap = [...map.entries()].sort((a, b) => b[0] - a[0]);
  let finalScore: number[][] = [];
  for (let [scoreValue, rowIndex] of newMap) {
    finalScore.push(score[rowIndex]);
  }
  return finalScore;
}
