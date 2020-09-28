
class BankAccount {
    constructor(firstName, lastName, midName, accountType, balance, status) {
        if (balance >= 100) {
            this.firstName = firstName
            this.lastName = lastName
            this.midName = midName
            this.accountType = accountType
            this.balance = balance
            this.status = status
        } else {
            console.log("You need $100 to create an account")
        }
    }
    deposit(amount) {
        this.balance += amount
        this.checkBalance()
    }
    withdraw(amount) {
        this.balance -= amount
        this.checkBalance()
    }
    checkBalance() {
        if (this.balance < 0) {
            this.balance -= 35
            console.log("Overdraft fee of $35 added. Account Balance now: $" + this.balance)
        } else {
            console.log("Balance: $" + this.balance)
        }
    }

    transfer(amount, destination) {
        this.balance -= amount
        destination.balance += amount
        console.log("Sent $" + amount + " to " + destination.lastName )
    }

}

let acct1 = new BankAccount("John", "Doe", "J.", "checking", 100, "opened")
let acct2 = new BankAccount("Jane", "Dough", "I.", "checking", 100, "opened")
console.log(acct1)
acct1.withdraw(101)
acct1.deposit(100)
console.log(acct1)
console.log(acct2)
acct2.transfer(50, acct1)
console.log(acct1)
console.log(acct2)

