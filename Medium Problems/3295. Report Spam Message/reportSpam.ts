function reportSpam(message: string[], bannedWords: string[]): boolean {
  let set: Set<string> = new Set(bannedWords);
  let count = 0;

  for (let i = 0; i < message.length; i++) {
    if (set.has(message[i])) {
      count++;
      if (count === 2) return true;
    }
  }
  return false;
}
