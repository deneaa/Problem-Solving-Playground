function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let drunkedBottles = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    let newBottle = 1;          
    emptyBottles -= numExchange;
    drunkedBottles += newBottle;
    emptyBottles += newBottle;  
    numExchange++;           
  }

  return drunkedBottles;
}
