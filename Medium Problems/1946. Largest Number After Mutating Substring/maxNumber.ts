function maximumNumber(num: string, change: number[]): string {
  let numStr = num.split("");
  let started = false;

  for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);
    let newDigit = change[digit];

    if (!started) {
      if (newDigit > digit) {
        started = true;
        numStr[i] = newDigit.toString();
      }
    } else {
      if (newDigit >= digit) {
        numStr[i] = newDigit.toString();
      } else {
        break;
      }
    }
  }

  return numStr.join("");
}
