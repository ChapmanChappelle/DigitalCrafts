'''
Create Palindrome (Minimum Insertions to Form a Palindrome)

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word.
If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

Input: 'race'
Output: 'ecarace'
Output explanation: Since we can add three letters to it (which is the smallest amount to make a palindrome).
                    There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

Input: 'google'
Output: 'elgoogle'

Input: 'abcda'
Output: 'adcbcda'
Output explanation: Number of insertions required is 2 - aDCbcda (between the first and second character).

Input: 'adefgfdcba'
Output: 'abcdefgfedcba'
Output explanation: Number of insertions required is 3 i.e. aBCdefgfEdcba.
'''


# Start your code below this line

def create_palindrome_1(word):
    
    pal = " "
    word_arr = list(word)
    arr_length = len(word_arr)

    for i in word_arr:
       
        if (word_arr[i] != (word_arr[arr_length-i] )):
            pal += word_arr[i]
            print(pal)
        else:
            print(pal)
            print(f"Number of insertions required is {i}")
            break 
        

        


    














###########
# Testing #
###########

# Test 1
# Correct result => 'ecarace'
word = 'race'
print(create_palindrome_1(word))
#print(create_palindrome_2(word))

# Test 2
# Correct result => 'elgoogle'
word = 'google'
print(create_palindrome_1(word))
#print(create_palindrome_2(word))

# Test 3
# Correct result => 'adcbcda'
word = 'abcda'
print(create_palindrome_1(word))
#print(create_palindrome_2(word))

# Test 4
# Correct result => 'abcdefgfedcba'
word = 'adefgfdcba'
print(create_palindrome_1(word))
#print(create_palindrome_2(word))