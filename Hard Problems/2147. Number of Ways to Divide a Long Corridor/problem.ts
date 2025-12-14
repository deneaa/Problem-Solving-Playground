function numberOfWays(corridor: string): number {
  const MOD = 1_000_000_007;

  let seats = 0;
  for (const c of corridor) {
    if (c === "S") seats++;
  }

  if (seats === 0 || seats % 2 !== 0) return 0;

  let result = 1;
  let seatCount = 0;
  let plantsBetween = 0;

  for (const c of corridor) {
    if (c === "S") {
      seatCount++;

      if (seatCount > 2 && seatCount % 2 === 1) {
        result = (result * (plantsBetween + 1)) % MOD;
        plantsBetween = 0;
      }
    } else if (seatCount >= 2 && seatCount % 2 === 0) {
      plantsBetween++;
    }
  }

  return result;
}
