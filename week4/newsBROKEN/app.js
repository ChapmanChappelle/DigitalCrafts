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

let getArticles = (userID) => {
  if (userID === "All Articles") {
    return news.articles
  } else {
    news.articles.filter(function(item){
        return item.id == userID
    })
  }
}

// mapping article
let writeArticle = (id) => {
  let displayArticles = getArticles(id)

  let mapArticles = displayArticles.map((article) => {
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
  // write articles
  articleBox.innerHTML = mapArticles.join("")
}

searchBtn.addEventListener("click", function () {
  let input = sourceTxt.value
  writeArticle(input)
})
// writing items to articleBox
writeArticle("All Articles")

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
