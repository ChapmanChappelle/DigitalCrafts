/* 
//DISPLAY MOVIES ON SCREEN
let moviesListUL = document.getElementById("moviesList")

let movieItems = movies.map((movie) => { 
    return `
        <div>
            <b>${movie.Title}</b>
            <img src="${movie.Poster}"></p>
            <p>${movie.Year}</p>
        </div>}`
})

moviesListUL.insertAdjacentHTML('beforeend', movieItems.join(""))
 */

//TIMER PROGRAM
let userTxt = document.getElementById("userTxt")
let startBtn = document.getElementById("startBtn")
let timerH1 = document.getElementById("timerH1")

startBtn.addEventListener("click", function () {
  let time = userTxt.value
  let intervalID = window.setInterval(() => {
    time--
    timerH1.innerHTML = time
    if (time == 0) {
      window.clearInterval(intervalID)
      timerH1.innerHTML = "DING DING DING"
    }
  }, 1000)
})
