class Bank {
  map: Map<number, number> = new Map();
  constructor(balance: number[]) {
    for (let i = 1; i <= balance.length; i++) {
      this.map.set(i, balance[i - 1]);
    }
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (this.map.has(account1) && this.map.has(account2)) {
      let balance = this.map.get(account1)!;
      if (balance >= money) {
        this.map.set(account2, this.map.get(account2)! + money);
        this.map.set(account1, this.map.get(account1)! - money);
        return true;
      }
    }
    return false;
  }

  deposit(account: number, money: number): boolean {
    if (this.map.has(account)) {
      this.map.set(account, this.map.get(account)! + money);
      return true;
    }
    return false;
  }

  withdraw(account: number, money: number): boolean {
    if (this.map.has(account)) {
      let balance = this.map.get(account)!;
      if (balance >= money) {
        this.map.set(account, balance - money);
        return true;
      }
    }
    return false;
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
