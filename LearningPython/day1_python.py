'''
first_name = "Chapman"
last_name = "Chappelle"
year = 2020

#welcome_message = f"My name is {first_name} {last_name} and I belong in {year} DC cohort."
#print(welcome_message)
'''

#greet function
'''
def greet(name, name2):
  print(f"Hello {name}")

greet("Mary", "John")
'''
#adding two dollar amounts
'''
first_dollars = input("Enter the first amount: ")
second_dollars = input("Enter the second amount: ")
total = float(first_dollars) + float(second_dollars) 
print(f"Your total is ${total}")
'''
#calculate tip function

def calculate_tip(total_cost, percentage):
    return total_cost * (percentage/100)

tip = calculate_tip(100,10)
print(tip)


#conditions
if tip >= 5:
    print("Thanks!")
else: 
    print("You are a bad tipper!")


