
let coffeeURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"


let orderList = document.getElementById("orderList")
let coffeeNameTextBox = document.getElementById("coffeeNameTextBox")
let emailTextBox = document.getElementById("emailTextBox")
let addOrderButton = document.getElementById("addOrderButton")

addOrderButton.addEventListener('click',() => {
    let coffee = coffeeNameTextBox.value 
    let email = emailTextBox.value 
    placeOrder(coffee,email)
})

function placeOrder(coffee, email) {

    fetch(coffeeURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: email,
          coffee: coffee,
        })
      }).then(response => response.json())
        .then(result => {
            if(result._id) {
                // looks like the order went through 
                displayOrders() 
            } else {
                // show error to the user on the screen 
            }

        })
        
        /*
        {
    "__v": 0,
    "coffee": "Hot Coffee",
    "emailAddress": "johndoe@gmail.com",
    "_id": "5d386d148846d40400f11f5e"
}
        */

}



async function fetchOrders() {
    
    let response = await fetch(coffeeURL)
    return await response.json() // returning a promise 
    //console.log("inside fetch orders function")
    //console.log(json)
    //return json 
}   

function displayOrders() {
    console.log("calling fetch orders")
    fetchOrders().then(orders => {
        let list = Object.values(orders)
        let orderItems = list.map(order => {
            return `<div>${order.coffee} - ${order.email}</div>`
        })
        
        orderList.innerHTML = orderItems 

    })
}

displayOrders()




/*
fetch(coffeeURL)
    .then(response => {
        return response.json()
    }).then(json => {
        console.log(json)
    })
*/

