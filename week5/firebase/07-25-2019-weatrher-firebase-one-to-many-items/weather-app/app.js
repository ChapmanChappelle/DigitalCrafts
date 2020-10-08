url = "http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=7d2dd8c9c5578b741c7735ad3f0d39ea&units=imperial"

const weatherDiv = document.getElementById("weatherDiv")
const fancyWeatherDiv = document.getElementById("fancyWeatherDiv")

async function fetchWeather2() {
    let response = await fetch(url )
    let json = await response.json() 
    return json 
}

fetchWeather2().then(json => console.log(json))

function fetchWeather(callback) {

  //  let result = {}

    fetch(url).then(response => {
        return response.json()
    }).then(json => {
       // result = json 
        callback(json) // callback can be ANY function which can take one argument 
        //displayFancyWeather(json)
    })

    //return result 
}

function displayWeather(weather) {
    
    let spanElement = `<span id="tempSpan">Temperature: ${weather.main.temp}</span>
    `
    weatherDiv.innerHTML = spanElement
}

function displayFancyWeather(weather) {

    let weatherItem = `<h1>${weather.main.temp}</h1>`
    fancyWeatherDiv.innerHTML = weatherItem
    console.log("display fancy weather")
}

function add(a) {
    console.log("add")
}

fetchWeather(add)
fetchWeather(displayFancyWeather) 
fetchWeather(displayWeather)

fetchWeather((weather) => {
    let weatherItem = `<h1>${weather.main.temp}</h1>`
    fancyWeatherDiv.innerHTML = weatherItem
    console.log("anonymouse function for weather")
})




