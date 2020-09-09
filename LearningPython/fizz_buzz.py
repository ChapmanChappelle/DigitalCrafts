given_num = input("Enter a number: ")

if(float(given_num) % 3 == 0 and float(given_num) % 5 != 0  ):
    print("Fizz")
elif(float(given_num) % 5 == 0 and float(given_num) % 3 != 0 ):
    print("Buzz")
elif(float(given_num) % 3 == 0 and float(given_num) % 5 == 0 ):
    print("Fizz Buzz")
else:
    print(f"{given_num} is not divisible by 3 or 5.")
