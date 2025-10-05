function averageWaitingTime(customers: number[][]): number {
  let time = customers[0][0];
  let finishedTime = 0;
  let waitingTime = 0;
  let count = 0;
  let waitings: number[] = [];
  let initialTime = 0;
  customers.forEach((arr) => {
    initialTime = arr[0];
    finishedTime = Math.max(time, initialTime) + arr[1];
    waitingTime = finishedTime - initialTime;
    time = finishedTime;
    waitings.push(waitingTime);
    count++;
  });
  return waitings.reduce((prev, curr) => prev + curr, 0) / count;
}
