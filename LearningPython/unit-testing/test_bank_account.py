
# UNIT TESTS 
# 1) Unit Test should be indenpendent 
# 2) Unit Test should never wait for human input 
# 3) Unit Test should be repeatable 

# WHAT TO TEST? 
# CODE COVERAGE - Code Under Test 
# Code Coverage 10% - 10% of my code is under test 
# Code Coverage 80% - 80% of my code is under test 
# DOMAIN OF YOUR APP - HEART OF THE APP 

from bank_account import BankAccount
import unittest 

class BankAccountTests(unittest.TestCase):

    # setup is fired before each test is executed...
    def setUp(self): 
        self.bank_account = BankAccount()
        print("SETUP")

    def test_deposit_money_in_bank(self): 
        print("test_deposit_money_in_bank")
        self.bank_account.deposit(100)
        # assert
        #self.assertEqual(expected value, supplied value)
        self.assertEqual(100, self.bank_account.balance)

    def test_transfer_funds_between_two_accounts(self): 
        
        print("test_transfer_funds_between_two_accounts")
        self.bank_account.deposit(100)
        destination_account = BankAccount() 
        self.bank_account.transfer(75, destination_account)
        self.assertEqual(25, self.bank_account.balance)
        self.assertEqual(75, destination_account.balance)

    # tearDown is fired after running each test
    def tearDown(self):
        print("TEAR DOWN")



unittest.main() # run the tests