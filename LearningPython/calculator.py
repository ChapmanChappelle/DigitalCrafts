num1 = input("First number: ")
sign = input("Enter the operand (+,-,*,/): ")
num2 = input("Second number: ")

calculated_num = 0

if(sign == "+"):
    calculated_num = float(num1) + float(num2)
elif (sign == "-"):
    calculated_num = float(num1) - float(num2)
elif (sign == "*"):
    calculated_num = float(num1) * float(num2)
elif (sign == "/"):
    calculated_num = float(num1) / float(num2)
else:
    print(f"{sign} is not a valid operand")

print(f"{num1} {sign} {num2} = {calculated_num}")