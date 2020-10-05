// activity 1 and 2

let request = new XMLHttpRequest()
let container = document.getElementById("container")


request.addEventListener("load", function () {
  let result = JSON.parse(this.responseText)

  let writeFacts = result.all.map((fact) => {
      let factItem = `
        <p>${fact.text}</p>
        <b>${fact.user ? fact.user.name.first : ""}</b>
        <b>${fact.user ? fact.user.name.last : ""}</b>
        <br>
      `
      return factItem
  })

  container.insertAdjacentHTML('beforeend', writeFacts.join(""))
})


request.open("GET", "https://cat-fact.herokuapp.com/facts")
request.send()