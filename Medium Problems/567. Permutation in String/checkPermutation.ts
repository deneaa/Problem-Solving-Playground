function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  let arr = Array(26).fill(0);
  let arr2 = Array(26).fill(0);

  for (let ch of s1) {
    arr[ch.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    arr2[s2[i].charCodeAt(0) - 97]++;

    if (i >= s1.length) {
      arr2[s2[i - s1.length].charCodeAt(0) - 97]--;
    }

    if (i >= s1.length - 1 && checkVectors(arr, arr2)) {
      return true;
    }
  }
  return false;
}

function checkVectors(arr1: number[], arr2: number[]) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
