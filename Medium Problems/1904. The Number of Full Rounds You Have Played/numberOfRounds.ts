function numberOfRounds(loginTime: string, logoutTime: string): number {
  let [hours1, minutes1] = loginTime.split(":").map(Number);
  let [hours2, minutes2] = logoutTime.split(":").map(Number);

  if (hours1 > hours2 || (hours1 === hours2 && minutes1 > minutes2)) {
    hours2 += 24;
  }

  let start = hours1 * 60 + minutes1;
  let end = hours2 * 60 + minutes2;

  let loginNext = Math.ceil(start / 15) * 15;
  let logoutPrev = Math.floor(end / 15) * 15;

  let count = Math.floor((logoutPrev - loginNext) / 15);
  return Math.max(count, 0);
}
