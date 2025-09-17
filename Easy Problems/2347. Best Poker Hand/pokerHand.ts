function bestHand(ranks: number[], suits: string[]): string {
    if (new Set(suits).size === 1) return "Flush";

    const count = new Map<number, number>();
    for (const rank of ranks) {
        count.set(rank, (count.get(rank) || 0) + 1);
    }

    const maxFreq = Math.max(...count.values());

    if (maxFreq >= 3) return "Three of a Kind";
    if (maxFreq === 2) return "Pair";

    return "High Card";
}
