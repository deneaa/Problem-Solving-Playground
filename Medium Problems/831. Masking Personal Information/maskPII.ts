function maskPII(s: string): string {
  if (s.includes("@")) {
    let [name, domain] = s.toLowerCase().split("@");
    let firstLetter = name[0];
    let lastLetter = name[name.length - 1];
    return `${firstLetter}*****${lastLetter}@${domain}`;
  } else {
    let digits = s.replace(/\D/g, "");
    let local = digits.slice(-10);
    let countryLen = digits.length - 10;
    let countryCode = "*".repeat(countryLen);

    if (countryLen === 0) {
      return `***-***-${local.slice(-4)}`;
    } else {
      return `+${countryCode}-***-***-${local.slice(-4)}`;
    }
  }
}
