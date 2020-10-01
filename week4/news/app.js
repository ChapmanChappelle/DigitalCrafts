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

let articleBox = document.getElementById("news")

let articleItem = news.articles.map((article) => {

    if (article.author == null) {
        article.author = " "
    } if (article.title == null) {
        article.title = " "
    } if (article.description == null) {
        article.description = " "
    } if (article.url == null) {
        article.url = " "
    } if (article.urlToImage == null) {
        article.urlToImage = " "
    } if (article.publishedAt == null) {
        article.publishedAt = " "
    }


    let articleInfo = ` <div id="article">
                            <p>${article.author}</p>
                            <b class="title">${article.title}</b>
                            <p>${article.description}</p>
                            <a href"${article.url}"></a>
                            <img class="imgs" src="${article.urlToImage}"></img>
                            <p>${article.publishedAt}</p>
                        </div>`

  return articleInfo
})
console.log(articleItem)
articleBox.innerHTML = articleItem.join(" ")
