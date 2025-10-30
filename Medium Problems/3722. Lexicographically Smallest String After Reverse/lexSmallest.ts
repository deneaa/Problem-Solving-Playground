function lexSmallest(s: string): string {
  let smallest = s;

  const reverse = (str: string) => str.split("").reverse().join("");

  let prefix = "";
  for (let i = 0; i < s.length; i++) {
    prefix += s[i];
    const candidate = reverse(prefix) + s.slice(i + 1);
    if (candidate < smallest) smallest = candidate;
  }

  let suffix = "";
  for (let i = s.length - 1; i >= 0; i--) {
    suffix = s[i] + suffix;
    const candidate = s.slice(0, i) + reverse(suffix);
    if (candidate < smallest) smallest = candidate;
  }

  return smallest;
}
