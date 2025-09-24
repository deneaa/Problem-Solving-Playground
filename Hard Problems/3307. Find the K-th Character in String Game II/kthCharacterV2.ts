function kthCharacter(k: number, operations: number[]): string {
  let length = 1; 
  let char = 'a';

  for (const op of operations) {
    length *= 2;
  }

  for (let i = operations.length - 1; i >= 0; i--) {
    const op = operations[i];

    length /= 2;

    if (k > length) {
      k -= length;
      if (op === 1) {
        char = nextChar(char);
      }
    }
  }

  return char;
}

function nextChar(c: string): string {
  return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
}
