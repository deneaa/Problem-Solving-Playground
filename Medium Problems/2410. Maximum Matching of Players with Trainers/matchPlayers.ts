function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let count = 0;
  let j = 0;

  for (let i = 0; i < players.length; i++) {
    while (j < trainers.length && trainers[j] < players[i]) {
      j++;
    }

    if (j < trainers.length) {
      count++;
      j++;
    }
  }

  return count;
}
