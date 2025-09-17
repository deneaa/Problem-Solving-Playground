function findWordsContaining(words: string[], x: string): number[] {
  let result: number[] = [];

  words.forEach((word, index) => {
    if (word.includes(x)) {
      result.push(index);
    }
  });

  return result;
}
