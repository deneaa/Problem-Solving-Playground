function largestTimeFromDigits(arr: number[]): string {
  let maxHour = -1;
  let bestTime = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue;

      const hour = arr[i] * 10 + arr[j];
      if (hour >= 0 && hour <= 23) {
        const remaining = arr.filter((_, idx) => idx !== i && idx !== j);

        const minute1 = remaining[0] * 10 + remaining[1];
        const minute2 = remaining[1] * 10 + remaining[0];

        let bestMinute = -1;
        if (minute1 <= 59) bestMinute = minute1;
        if (minute2 <= 59 && minute2 > bestMinute) bestMinute = minute2;

        if (bestMinute >= 0) {
          const totalMinutes = hour * 60 + bestMinute;
          if (totalMinutes > maxHour * 60 + (bestTime ? Number(bestTime.slice(3)) : -1)) {
            maxHour = hour;
            bestTime = `${hour.toString().padStart(2, "0")}:${bestMinute
              .toString()
              .padStart(2, "0")}`;
          }
        }
      }
    }
  }

  return bestTime;
}

