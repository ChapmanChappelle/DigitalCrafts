console.log("Hello World")

// var a = 10
let a = 10

const pi = 3.142  //constant

// method/function hoisting - when JS moves the function to the top of the file
sayHello();

function sayHello() {
    console.log("Function Hello")
}

sayHello();

function displayName(name) {
    let age = 12
    console.log(name)
}

displayName("John")

// array
let arr = []

// add items to arr
arr.push("Wash the car")
arr.push("Feed the dog")
arr.push("Example")

// remove items from arr
arr.pop()   // also returns the item in the arr

// removing item based on index
delete arr[0]

//deleting item using splice
arr.splice(0,1)     // start at 0 index and remove item

//loops
console.log("for loop")
for(let i = 0; i <=10; i++) {
    console.log(i)
}

// printing out items of an array
console.log("looping through array")
let testArr = []
testArr.push("Test1")
testArr.push("Test2")
testArr.push("TESt3")
testArr.push("Test4")
testArr.push("Test5")

for(let i=0; i<testArr.length; i++) {
    console.log(testArr[i])
}

// while loops
console.log("while loop")
let count = 0
while(count < 10) {
    console.log(count)
    count++
}

// conditions
console.log("conditions")
let version = 2
let os = "windows"

if(version == 1 && os == "MacOS") {
    console.log("VERSION 1")
} else if(version == 2 || os == "windows") {
    console.log("VERSION 2")
} else {
    console.log("undefined version")
}

