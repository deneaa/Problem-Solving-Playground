function productQueries(n: number, queries: number[][]): number[] {
  let powers = nrToBinary(n);
  let response = new Array(queries.length);
  let index = 0;
  let mod = 1e9 + 7;

  queries.forEach(([start, end]) => {
    let res = 1;
    for (let i = start; i <= end; i++) {
      res = (res * powers[i]) % mod;
    }
    response[index] = res;
    index++;
  });
  return response;
}

function nrToBinary(n: number): number[] {
  let powers: number[] = [];
  let power = 1;

  while (n > 0) {
    if (n % 2 === 1) powers.push(power);
    n = Math.floor(n / 2);
    power *= 2;
  }

  return powers;
}
