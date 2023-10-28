const BankAccount = {
  OwnerName: "Amirarsalan",
  Accountnumber: 25685,
  Balance: 8000,
  Withdraw: function (amount) {
    this.Balance += amount;
    console.log(this.Balance);
  },
  Deposit: function (amount) {
    this.Balance -= amount;
    console.log(this.Balance);
  },
};
