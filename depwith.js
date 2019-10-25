const Wallet = function(currentAmount, depositAmount, withdrawAmount) {
  this.currentAmount = currentAmount;
  this.depositAmount = depositAmount;
  this.withdrawAmount = withdrawAmount;
}

Wallet.prototype.calculateDepositAmountBalance = function() {
  return {
    depositAmount: `Your entered amount is ${this.depositAmount}`,
    currentAmount: `Your balance is now ${this.currentAmount + this.depositAmount}`
  }
}

Wallet.prototype.calculateWithdrawAmountBalance = function() {
  return {
    withdrawAmount: `Your entered amount is ${this.withdrawAmount}`,
    currentAmount: `Your remaining balance is now ${this.currentAmount - this.withdrawAmount}`
  }
}

const personTransaction = new Wallet(2000, 500, 1500);

console.log(personTransaction.calculateDepositAmountBalance());
console.log(personTransaction.calculateWithdrawAmountBalance());