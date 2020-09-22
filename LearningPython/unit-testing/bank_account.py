

class BankAccount: 
    def __init__(self): 
        self.balance = 0
    
    def deposit(self, amount): 
        self.balance += amount 

    def withdraw(self, amount): 
        self.balance -= amount 

    def transfer(self, amount, destination_account): 
        self.withdraw(amount)
        destination_account.deposit(amount)
    
