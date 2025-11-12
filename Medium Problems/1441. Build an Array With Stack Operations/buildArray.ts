function buildArray(target: number[], n: number): string[] {
  const result: string[] = [];
  let curr = 1;
  let i = 0;

  while (i < target.length) {
    result.push("Push");

    if (curr === target[i]) {
      i++;
    } else {
      result.push("Pop");
    }

    curr++;
  }

  return result;
}
