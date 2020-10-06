// POST https://island-bramble.glitch.me/orders 

//  name: String 
//  coffeeName: String 
//  total: String 
//  size: String 

// GET https://island-bramble.glitch.me/orders 

let nameTextBox = document.getElementById("nameTextBox")
let coffeeNameTextBox = document.getElementById("coffeeNameTextBox")
let totalTextBox = document.getElementById("totalTextBox")
let sizeTextBox = document.getElementById("sizeTextBox")
let placeOrderButton = document.getElementById("placeOrderButton")


function loadAllOrders() {

    let request = new XMLHttpRequest() 
    request.open('GET','https://island-bramble.glitch.me/orders')

    request.onload = function() {
        let orders = JSON.parse(this.responseText)
        console.log(orders)
    }

    request.send() 

}

placeOrderButton.addEventListener('click',() => {

    let name = nameTextBox.value 
    let coffeeName = coffeeNameTextBox.value 
    let total = parseFloat(totalTextBox.value) 
    let size = sizeTextBox.value 

    let requestObject = {
        name: name, 
        coffeeName: coffeeName,
        total: total, 
        size: size  
    }

    console.log(requestObject)
    console.log(JSON.stringify(requestObject))

    let request = new XMLHttpRequest() 

    request.onload = function() {
       let result = JSON.parse(this.responseText)
       if(result.success) {
           // load all the orders 
           loadAllOrders() 
       }
    }

    request.open('POST', 'https://island-bramble.glitch.me/orders')
    request.setRequestHeader('Content-Type','application/json')

    request.send(JSON.stringify(requestObject))

    

})

loadAllOrders() 