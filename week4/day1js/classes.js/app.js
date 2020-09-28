//classes in JavaScript

// Modern JavaScript BEST WAY
class Bike {
    constructor(color, cost){
        this.color = color
        this.cost = cost
    }
    drive() {
        console.log("The wheels spin as the bike goes forward")
    }
    brake() {
        console.log("The bike goes to a screeching halt")
    }
}

let bike = new Bike("red", 200)

console.log(bike)
bike.drive()
bike.brake()


// old way 
function Car(make, model) {
    this.make = make
    this.model = model
}

function drive() {
    console.log("Car is driving")
}

function brake() {
    console.log("Car stopped")
}


// anonymous functions
Car.prototype.drive = function() {
    console.log("Car is driving")
}
Car.prototype.brake = function() {
    console.log("Car stopped")
}

let car = new Car("Honda", "Accord")
console.log(car)
car.drive()
car.brake()



//creating object from scratch
/*
//let carObject = new Object()

let carObject = {}
carObject.make = "Honda"
carObject.model = "Accord"
carObject.drive = drive
carObject.brake = brake
console.log(carObject)
*/
