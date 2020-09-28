// functions
// app which will print whether a string is a palindrome or not
function isPalindrome(str) {
    for (let i = 0; i <= (str.length / 2); i++) {
        if (str[i] != str[str.length - (i + 1)]) {
            return false
        }
        else {
            return true
        }
    }
}

// app which removes duplicates from an array 
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        str = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (str == arr[j]) {
                delete arr[j]
            }
        }
    }
    return arr
}

// app whichs returns true/false depending on if the item is in the array 
function inArray(item, arr) {
    if (arr.includes(item)) {
        return true
    }
    return false
}

// an app which finds the largest number in an array 
function largest(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// an app which finds the smallest number in an array 
function smallest(arr) {
    let min = 99999
    for (let i = 0; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i]
        }
    }
    return min
}

// FizzBuzz app 
function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 != 0) {
        console.log("Fizz")
    }
    else if (num % 5 == 0 && num % 3 != 0) {
        console.log("Buzz")
    }
    else if (num % 3 == 0 && num % 5 == 0) {
        console.log("Fizz Buzz")
    }
    else {
        console.log(num + "is not divisible by 3 or 5.")
    }

}

// app which determines whether the number is even or odd. 
function evenOdd(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.

function sortUp(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < ((arr.length) - 1); j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}
function sortDown(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < ((arr.length) - 1); j++) {
            if (arr[j] < arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}



// test
console.log("--------------------------------")
console.log("--------------------------------")
console.log(isPalindrome("racecar"))
console.log(isPalindrome("car"))
console.log("--------------------------------")
console.log("--------------------------------")
let arr = []
arr.push("John")
arr.push("Mary")
arr.push("Alex")
arr.push("Mary")
arr.push("Steve")
arr.push("John")
console.log(arr)
console.log(removeDuplicates(arr))
console.log("--------------------------------")
console.log("--------------------------------")
let test = []
test.push("John")
test.push("Mary")
test.push("Alex")
test.push("Steve")
console.log(inArray("Alex", test))
console.log("--------------------------------")
console.log("--------------------------------")
let testArr = []
testArr.push(1)
testArr.push(14)
testArr.push(60)
testArr.push(20)
testArr.push(52)
console.log(testArr)
console.log(largest(testArr))
console.log("--------------------------------")
console.log("--------------------------------")
console.log(testArr)
console.log(smallest(testArr))
console.log("--------------------------------")
console.log("--------------------------------")
fizzBuzz(15)
fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(10)
console.log("--------------------------------")
console.log("--------------------------------")
console.log(evenOdd(100))
console.log(evenOdd(99))
console.log("--------------------------------")
console.log("--------------------------------")
let numArr = [3, 4, 56, 7, 8, 1]
console.log(numArr)
sortUp(numArr)
console.log(numArr)
sortDown(numArr)
console.log(numArr)








