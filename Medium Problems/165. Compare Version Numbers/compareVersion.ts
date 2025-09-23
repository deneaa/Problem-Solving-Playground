function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  const length = Math.max(v1.length, v2.length);

  for (let i = 0; i < length; i++) {
    const num1 = Number(v1[i] || 0);
    const num2 = Number(v2[i] || 0);

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}
