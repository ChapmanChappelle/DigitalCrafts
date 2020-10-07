
// PROMISES 
/*
let promise = new Promise(function(resolve, reject) {
    resolve([1,2,3,4,5])
})

promise.then((numbers) => {
    console.log(numbers)
    console.log('promise has been resolved')
})
.then(() => {
    console.log("another then")
})
.catch((error) => {
    console.log('Error has happened')
})

function getAllCoffeeOrders() {

    return new Promise(function(resolve, reject) {

        let request = new XMLHttpRequest()
        request.open('GET','https://dc-coffeerun.herokuapp.com/api/coffeeorders/')

        request.onload = function() {
            let orders = JSON.parse(null)
            if(orders) {
                resolve(orders)
            }
            else {
                reject('Unable to fetch orders!')
            }
        }

        request.send()

    })

}


getAllCoffeeOrders().then((orders) => {
    console.log(orders)
}).catch((error) => {
    console.log(error)
}) */

// FETCH API to fetch Coffee Orders 
// Another library is called Axios - Axios is not part of the browser so you must add it explicitly 

// by default fetch performs a GET request 
/* fetch('https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
    .then((response) => {
        console.log(response)
        return response.json()
    }).then((json) => {
        console.log(json)
    }).catch((error) => {
        console.log(error)
    })
 */
function getAllOrders(completion) {

   // return fetch('https://dc-coffeerun.herokuapp.com/api/coffeeorders/')

    fetch('https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
        .then((response) => {
            console.log(response)
            return response.json()
        }).then((json) => {
            completion(json)
        })
        .catch((error) => {
            console.log(error)
        }) 

}


getAllOrders().then(response => response.json())
.then((json) => {
    console.log(json)
}) 

//getAllOrders((orders) => {

//})


// fetch API POST REQUEST 
/*
  name 
  coffeeName 
  total
  size
  https://island-bramble.glitch.me/orders
*/
/* 
fetch('https://island-bramble.glitch.me/orders',{
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
        name: 'John', 
        coffeeName: 'Regular Coffee', 
        total: 3.45, 
        size: 'Small'
    })
}).then(response => response.json())
.then((result) => {
    console.log(result)
    console.log("another line...")
}).catch((error) => {
    console.log(error)
})
 */
// async/await Promises 

/* async function getAllCoffeeOrdersAsync() {
 
    let response = await fetch('https://island-bramble.glitch.me/orders')
    let json = await response.json()
    console.log(json)

}

getAllCoffeeOrdersAsync() */