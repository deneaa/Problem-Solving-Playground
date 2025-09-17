function candy(ratings: number[]): number {
  let array = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      array[i] = array[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      array[i] = Math.max(array[i], array[i + 1] + 1);
    }
  }

  return array.reduce((acc, curr) => acc + curr, 0);
}
