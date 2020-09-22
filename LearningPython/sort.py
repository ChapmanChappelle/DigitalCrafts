
arr = [3,5,6,12,99,45,23]

#ascending order bubble [3,5,6,12,23,45,99]
def down_bubble_sort(numbers):
    for i in range(0, len(numbers)):
        for j in range(0, (len(numbers)-1)):
            if numbers[j] < numbers[j+1]:       #less than
                temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp

#decending order bubble [99, 45, 23, 12, 6, 5, 3]
def up_bubble_sort(numbers):
    for i in range(0, len(numbers)):
        for j in range(0, (len(numbers)-1)):
            if numbers[j] > numbers[j+1]:       #greater than
                temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp

up_bubble_sort(arr)
print(arr)
down_bubble_sort(arr)
print(arr)
