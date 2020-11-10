import React, { Component } from 'react'
import Movies from './Movies'


// named export 
// when importing make sure to use curly brackets
export class App extends Component {

  constructor() {
    super()
    console.log('constructor')

    this.state = {
      movies: [] 
    }

  }

  fetchMovies = () => {

    fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
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
      searchTerm: e.target.value
    })
  }

  handleOnSearch = (e) => {
    
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    console.log('render')
    return (
      <div>
        <input type="text" onChange = {this.handleOnChange} />
        <button>Search</button>
        <Movies movies = {this.state.movies} />
      </div>
    )
  }
}

// default export 
export default App 