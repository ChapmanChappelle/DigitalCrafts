let request = new XMLHttpRequest()

// using event listener
request.addEventListener("readystatechange", function () {})

// using anonymous function
request.onreadystatechange = function () {}

request.open("GET", "https://cat-fact.herokuapp.com/facts")
request.send