import React, { Component } from 'react'
import Movies from './Components/Movies'
import Counter from './Counter'

// named export 
// when importing make sure to use curly brackets
export class App extends Component {

  constructor() {
    super()
    console.log('constructor')

    this.state = {
      movies: [], 
      search: '' 
    }

  }

  /*
  fetchMovies = () => {

    fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
      .then(response => response.json())
      .then(result => {
          this.setState({
            movies: result.Search
          })
      })

  } */

  searchMovieByKeyword = (keyword) => {

    fetch(`http://www.omdbapi.com/?s=${keyword}&page=2&apikey=564727fa`)
      .then(response => response.json())
      .then(result => {
          this.setState({
            movies: result.Search
          })
      })

  }


  handleOnChange = (e) => {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  handleSearch = () => {
    this.searchMovieByKeyword(this.state.search)
  }


  componentDidMount() {
    //this.fetchMovies()
  }

  render() {
    
    return (
      /*<Counter /> */
      <div>
        <input type="text" onChange = {this.handleOnChange} />
        <button onClick={this.handleSearch}>Search</button>
      <Movies movies = {this.state.movies} />
      </div>
    )
  }
}

//export const PI = 3.142

// default export 
//export default App 


