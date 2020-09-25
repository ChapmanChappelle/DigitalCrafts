'''
=========================================
Simple solution, just iterate the string and count.
    Time Complexity:    O(N)
    Space Complexity:   O(1)
'''


############
# Solution #
############

def encoding(word):
    n = len(word)
    if n == 0:
        return ''

    letter = word[0]
    length = 1
    res = ''

    for i in range(1, n):
        if word[i] == letter:
            length += 1
        else:
            res += str(length) + letter
            letter = word[i]
            length = 1

    res += str(length) + letter

    return res
