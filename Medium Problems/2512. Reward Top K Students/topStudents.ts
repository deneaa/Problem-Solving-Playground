function topStudents(
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
): number[] {
  let map: Map<number, number> = new Map();
  let goodSet: Set<string> = new Set(positive_feedback);
  let badSet: Set<string> = new Set(negative_feedback);

  for (let i = 0; i < student_id.length; i++) {
    let points = 0;
    for (const word of report[i].split(" ")) {
      if (goodSet.has(word)) points += 3;
      else if (badSet.has(word)) points--;
    }

    map.set(student_id[i], points);
  }

  const sorted = [...map.entries()].sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0] - b[0];
  });

  let result = [];
  for (const [id, points] of sorted) {
    result.push(id);
    if (result.length === k) break;
  }

  return result;
}
