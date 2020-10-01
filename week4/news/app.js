//getting divs from index.html
let articleBox = document.getElementById("articleBox")
let sourcesBox = document.getElementById("sourcesBox")
let sourceTxt = document.getElementById("sourceTxt")
let searchBtn = document.getElementById("searchBtn")

//checking for null article properties
let checkNull = (item) => {
  if (item == null) {
    item = " "
    return item
  } else {
    return item
  }
}
// mapping article
let articleItem = news.articles.map((article) => {
  // template literals
  let articleInfo = ` <div id="article">
                            <p>${checkNull(article.author)}</p>
                            <b class="title">${checkNull(article.title)}</b>
                            <p>${checkNull(article.description)}</p>
                            <a href="${checkNull(article.url)}">See Article</a>
                            <img class="imgs" src="${checkNull(
                              article.urlToImage
                            )}"></img>
                            <p>${checkNull(article.publishedAt)}</p>
                        </div>`
  //return article item
  return articleInfo
})
// writing items to articleBox
articleBox.innerHTML = articleItem.join("")

// mapping sources
let sourcesItem = sources.sources.map((source) => {
  //template literals
  let sourceInfo = ` <div id="source">
                            <p>${source.id}</p>
                            <p>${source.name}</p>
                            <p>${source.description}</p>
                            <a href="${source.url}">See Source</a>
                            <p>${source.category}</p>
                            <p>${source.language}</p>
                            <p>${source.country}</p>
                        </div>`
  // returning source item
  return sourceInfo
})
// writing items to sourcesBox
//sourcesBox.innerHTML = sourcesItem.join("")


searchBtn.addEventListener("click", function () {

    let input = sourceTxt.value

    sourcesBox.innerHTML = sourcesItem
})