let arr = []
arr.push("Amy")
arr.push("George")
arr.push("Johnny")
arr.push("Aaron")

//for loop
console.log("for loop")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// while loop
console.log("while loop")
let count = 0
while (count < arr.length) {
    console.log(arr[count])
    count++
}

// activity 2A
console.log("activity 2A")


function isVowel(letter) {
    if (letter == "A" || letter == "a" || letter == "E" || letter == "e" || letter == "I" || letter == "i"
        || letter == "O" || letter == "o" || letter == "U" || letter == "u") {
        console.log("vowel")
    } else {
        console.log("not a vowel")
    }
}

isVowel("a")
isVowel("A")
isVowel("G")
isVowel("g")

//  activity 2B
console.log("activity 2B")

let int1 = 20
let int2 = 36

function sum(num1, num2) {
    sum = num1 + num2
    if (sum >= 50 && sum <= 80) {
        return (65)
    } else {
        return (80)
    }
}

console.log((sum(int1, int2)))

// Activity 3
console.log("Activity 3")
class BankAccount {
    constructor(balance, accountType){
        this.balance = balance;
        this.accountType = accountType;
    }
    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        this.balance -= amount
    }
}

let bank = new BankAccount(100, "checking")
console.log(bank)
bank.deposit(100)
bank.withdraw(50)
console.log("Balance: " + bank.balance)

