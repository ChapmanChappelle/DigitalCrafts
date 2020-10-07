let searchBtn = document.getElementById("searchBtn")
let searchTxt = document.getElementById("searchTxt")
let weatherDiv = document.getElementById("weatherDiv")
let locationBtn = document.getElementById("locationBtn")

// listener that takes user input for city
searchBtn.addEventListener("click", function () {
   let city = searchTxt.value
   fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=d650535edf33536ba7a9691a5847bde7&units=imperial`
   )
      .then(function (response) {
         return response.json()
      })
      .then(function (data) {
         writeWeather(data)
      })
      .catch(function (err) {
         console.log("error: " + err)
      })
})

// listener that takes the user's location, which calls the write weather function
locationBtn.addEventListener("click", function () {
   navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      fetch(
         `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d650535edf33536ba7a9691a5847bde7&units=imperial`
      )
         .then(function (response) {
            return response.json()
         })
         .then(function (data) {
            writeWeather(data)
         })
         .catch(function (err) {
            console.log("error: " + err)
         })
   })
})

// function for turning json into HTML
function writeWeather(data) {
   let weatherItem = `<div id="weatherItemDiv">
                        <b>Weather Info for ${data.name}</b>
                        <p>Min Temp: ${data.main.temp_min} Degrees F</p>
                        <p>Max Temp: ${data.main.temp_max} Degrees F</p>
                        <p>Pressure: ${data.main.pressure} hPa</p>
                      </div>`
   weatherDiv.innerHTML = weatherItem
}
