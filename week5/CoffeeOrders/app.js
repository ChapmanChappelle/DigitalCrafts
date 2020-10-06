// POST https://dc-coffeerun.herokuapp.com/api/coffeeorders/
// emailAddress: String
// coffee: String
// GET https://dc-coffeerun.herokuapp.com/api/coffeeorders/

let ordersDiv = document.getElementById("ordersDiv")
let emailTxt = document.getElementById("emailTxt")
let coffeeTxt = document.getElementById("coffeeTxt")
let orderBtn = document.getElementById("orderBtn")
let deleteBtn = document.getElementById("deleteBtn")
let deleteEmailTxt = document.getElementById("deleteEmailTxt")
let searchBtn = document.getElementById("searchBtn")
let searchEmailTxt = document.getElementById("searchEmailTxt")

// method for loading all orders (used to write new orders)
function loadAllOrders() {
   let xhr = new XMLHttpRequest()

   // GETTING ALL ORDERS
   xhr.open("GET", "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")

   // activates when xhr GET happens
   xhr.onload = function () {
      // turning string into object using parse
      let orders = JSON.parse(this.responseText)
      console.log(orders)
   }
   // push request
   xhr.send()
}

// place order button
orderBtn.addEventListener("click", () => {
   let emailAddress = emailTxt.value
   let coffee = coffeeTxt.value

   //making object out of text boxes
   let xhrObject = {
      emailAddress: emailAddress,
      coffee: coffee,
   }

   // logging object and string version of the object
   console.log(xhrObject)
   console.log(JSON.stringify(xhrObject))

   // new request
   let xhr = new XMLHttpRequest()

   // function for pushing to the API
   xhr.onload = function () {
      let result = JSON.parse(this.responseText)
      if (result.success) {
         // call load orders function
         loadAllOrders()
      }
   }
   // POST
   xhr.open("POST", "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
   xhr.setRequestHeader("Content-Type", "application/json")
   // push request
   xhr.send(JSON.stringify(xhrObject))
   displayOrders()
})

// delete button
deleteBtn.addEventListener("click", () => {
   // taking user input
   let emailAddress = deleteEmailTxt.value
   let link = `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${emailAddress}`

   // start request
   let xhr = new XMLHttpRequest()

   // delete @ link and sendrequest
   xhr.open("DELETE", link)
   xhr.send()
   console.log(`${link} Deleted`)
})

// search button
searchBtn.addEventListener("click", () => {
   // take user input
   let emailAddress = searchEmailTxt.value
   let link = `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${emailAddress}`

   // start request
   let xhr = new XMLHttpRequest()
   xhr.open("GET", link)
   xhr.onload = function () {
      // turning JSON string into object
      let order = JSON.parse(this.responseText)
      orderArr = Object.keys(order)
      for (i in order) {
         ordersDiv.innerHTML = " "
         ordersDiv.insertAdjacentHTML("afterend", `${i} : ${order[i]} <br>`)
         console.log(`${i} : ${order[i]}`)
      }
   }
   // send request
   xhr.send()
})

// put all orders on screen
displayOrders = function () {
   let xhr = new XMLHttpRequest()

   // GETTING ALL ORDERS
   xhr.open("GET", "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")

   // activates when xhr GET happens
   xhr.onload = function () {
      // turning string into object using parse
      let orders = JSON.parse(this.responseText)
      orderArr = Object.keys(orders)
      orderArr.forEach(function () {
         ordersDiv.innerText = orderArr.join("\n")
      })
   }
   // push request
   xhr.send()
}
// start with all the orders on the screen
displayOrders()