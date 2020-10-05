let request = new XMLHttpRequest()

request.addEventListener('load', function() { 
    let result = JSON.parse(this.responseText)
    console.log(result)
})

request.open('GET', 'https://cat-fact.herokuapp.com/facts')
request.send()
