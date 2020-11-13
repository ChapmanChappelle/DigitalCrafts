
import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  render() {
    
    const movieItems = this.state.movies.map(movie => {
      return <li>
        <img src={movie.poster} />
        <b>{movie.title}</b>
        </li>
    })

    return (
      <div>
    <ul>{movieItems}</ul>
      </div>
    )

  }

  fetchMovies = () => {
    fetch('http://localhost:8080/movies')
    .then(response => response.json())
    .then(results => {
      // set the new state 
        this.setState({
          movies: results 
        })
    })
  }

  componentDidMount() {
    this.fetchMovies()
  }

}

export default App;
