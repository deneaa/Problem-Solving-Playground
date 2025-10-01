function numWaterBottles(numBottles: number, numExchange: number): number {
  let drinkedBottles = 0;
  let emptyBottles = 0;
  while (true) {
    drinkedBottles += numBottles;
    let newBottles = Math.floor((numBottles + emptyBottles) / numExchange);
    if (newBottles === 0) return drinkedBottles;
    emptyBottles = (numBottles + emptyBottles) % numExchange;
    numBottles = newBottles;
  }
}
