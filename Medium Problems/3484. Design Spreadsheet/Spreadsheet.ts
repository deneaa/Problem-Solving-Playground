class Spreadsheet {
  private map: Map<string, number> = new Map();
  private rows: number;

  constructor(rows: number) {
    this.rows = rows;
  }

  setCell(cell: string, value: number): void {
    this.map.set(cell, value);
  }

  resetCell(cell: string): void {
    this.map.delete(cell);
  }

  getValue(formula: string): number {
    const [left, right] = formula.slice(1).split("+");

    const parseOperand = (op: string): number => {
      if (this.map.has(op)) return this.map.get(op)!; 
      if (/^\d+$/.test(op)) return Number(op);
      return 0
    };

    return parseOperand(left) + parseOperand(right);
  }
}
