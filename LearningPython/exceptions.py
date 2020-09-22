
try:
    first_number = int(input("Enter first number: "))
    Second_number = int(input("Enter second number: "))
    result = first_number / Second_number
except ZeroDivisionError:
    print("Don't divide by 0")
except ValueError:
    print("Don't enter characters other than 0-9")
except NameError:
    print("Don't enter characters other than 0-9")
except:
    print("Oops! ERROR ERROR ERROR")
#fired when no exception has happenned
else:print(f"Result: {result}")
#finally fired when exception happens and when it doesn't (Happens every time)
finally:print("Finally block excecuted....")

