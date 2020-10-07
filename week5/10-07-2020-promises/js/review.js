

let ordersUL = document.getElementById("ordersUL")

let request = new XMLHttpRequest() 
request.open('GET','https://dc-coffeerun.herokuapp.com/api/coffeeorders/')

request.onload = function() {

    let result = JSON.parse(this.responseText)

    // more prefered way of getting access to the orders
    let values = Object.values(result)

    values.map((order) => {
        //order.emailAddress
    })

    let emails = Object.keys(result)

    let orderItems = emails.map((email) => {
        let order = result[email]
        return `<li>${order.emailAddress} - ${order.coffee}</li>`
    })

    ordersUL.innerHTML = orderItems.join('')

    //console.log(result)

}


request.send() 