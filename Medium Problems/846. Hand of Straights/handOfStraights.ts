function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;

  let map = new Map<number, number>();
  for (let card of hand) {
    map.set(card, (map.get(card) || 0) + 1);
  }

  let keys = Array.from(map.keys()).sort((a, b) => a - b);

  for (let key of keys) {
    let count = map.get(key)!;
    if (count > 0) {
      for (let i = 0; i < groupSize; i++) {
        let next = key + i;
        if ((map.get(next) || 0) < count) return false;
        map.set(next, map.get(next)! - count);
      }
    }
  }
  return true;
}
