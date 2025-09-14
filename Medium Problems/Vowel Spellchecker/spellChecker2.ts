function spellchecker(wordlist: string[], queries: string[]): string[] {
  return queries.map((query) => {
    if (wordlist.includes(query)) return query;

    for (const word of wordlist) {
      if (word.toLowerCase() === query.toLowerCase()) {
        return word;
      }
    }

    for (const word of wordlist) {
      if (mascVocale(word.toLowerCase()) === mascVocale(query.toLowerCase())) {
        return word;
      }
    }

    return "";
  });
}

function mascVocale(cuvant: string): string {
  return cuvant.replace(/[aeiou]/gi, "*");
}
