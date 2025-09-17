function divideString(s: string, k: number, fill: string): string[] {
  let result: string[] = [];
  let startIndex = 0;
  let endIndex = k;
  for (let i = 0; i < Math.ceil(s.length / k); i++) {
    result.push(s.substring(startIndex, endIndex));
    startIndex = endIndex;
    endIndex += k;
  }

  while (result[result.length - 1].length !== k) {
    result[result.length - 1] += `${fill}`;
  }
  return result;
}
