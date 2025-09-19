function maxDiff(num: number): number {
  const numStr = num.toString();

  let maxStr = numStr;
  const firstNotNine = numStr.split("").find((d) => d !== "9");
  if (firstNotNine) {
    const regex = new RegExp(firstNotNine, "g");
    maxStr = numStr.replace(regex, "9");
  }

  let minStr = numStr;
  const firstDigit = numStr[0];
  if (firstDigit !== "1") {
    const regex = new RegExp(firstDigit, "g");
    minStr = numStr.replace(regex, "1");
  } else {
    const rest = numStr.slice(1);
    const firstGreaterThanZero = rest
      .split("")
      .find((d) => d !== "0" && d !== "1");
    if (firstGreaterThanZero) {
      const regex = new RegExp(firstGreaterThanZero, "g");
      minStr = numStr.replace(regex, "0");
    }
  }

  return Number(maxStr) - Number(minStr);
}
