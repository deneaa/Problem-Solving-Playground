function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const t of tokens) {
    if (t === "+" || t === "-" || t === "*" || t === "/") {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(calc(a, b, t));
    } else {
      stack.push(Number(t));
    }
  }

  return stack[0];
}

function calc(n1: number, n2: number, type: string) {
  switch (type) {
    case "*":
      return n1 * n2;
    case "/":
      return Math.trunc(n1 / n2);
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    default:
      throw new Error("Unknown operator");
  }
}
