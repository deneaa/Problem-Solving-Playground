function areNumbersAscending(s: string): boolean {
  const l = s.split(" ");
  let lowest = 0;
  for (const e of l) {
    const last = parseInt(e);
    if (!isNaN(last)) {
      if (last <= lowest) {
        return false;
      }
      lowest = last;
    }
  }
  return true;
}
