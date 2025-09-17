function minOperations(queries: number[][]): number {
  function prefixSteps(n: number) {
    if (n <= 0) return 0;
    let k = Math.floor(Math.log(n) / Math.log(4));
    let response = 0;

    for (let i = 0; i < k; i++) {
      response += (i + 1) * 3 * Math.pow(4, i);
    }

    response += (k + 1) * (n - Math.pow(4, k) + 1);

    return response;
  }

  let finalResponse = 0;
  queries.forEach((query) => {
    let totalSteps = prefixSteps(query[1]) - prefixSteps(query[0] - 1);
    let minOperations = Math.ceil(totalSteps / 2);
    finalResponse += minOperations;
  });

  return finalResponse;
}
