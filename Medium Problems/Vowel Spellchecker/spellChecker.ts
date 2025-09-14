function spellchecker(wordlist: string[], queries: string[]): string[] {
  const exact = new Set(wordlist);
  const lowerMap = new Map<string, string>();
  const maskedMap = new Map<string, string>();

  for (const word of wordlist) {
    const lower = word.toLowerCase();
    const masked = mascVocale(lower);

    if (!lowerMap.has(lower)) lowerMap.set(lower, word);
    if (!maskedMap.has(masked)) maskedMap.set(masked, word);
  }

  return queries.map((query) => {
    if (exact.has(query)) return query;

    const lower = query.toLowerCase();
    if (lowerMap.has(lower)) return lowerMap.get(lower)!;

    const masked = mascVocale(lower);
    if (maskedMap.has(masked)) return maskedMap.get(masked)!;

    return "";
  });
}

function mascVocale(cuvant: string): string {
  return cuvant.replace(/[aeiou]/gi, "*");
}
