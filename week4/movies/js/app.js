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
