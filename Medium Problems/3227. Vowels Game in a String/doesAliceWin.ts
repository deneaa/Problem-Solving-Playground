function doesAliceWin(s: string): boolean {
  for (const ch of "aeiou") {
    if (s.includes(ch)) return true;
  }
  return false;
}
