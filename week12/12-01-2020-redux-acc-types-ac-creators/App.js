import logo from "./logo.svg"
import "./App.css"
import { connect } from "react-redux"
import { useEffect } from "react"
import MoviesDisplay from "./components/MoviesDisplay"
import * as actionTypes from "./store/actions/actionTypes"
import * as actionCreators from "./store/creators/actionCreators"

function App(props) {
   useEffect(() => {
      fetchMovies()
   }, [])

   const fetchMovies = () => {
      fetch("http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa")
         .then((response) => response.json())
         .then((result) => props.onMoviesFetch(result.Search))
   }

   return (
      <div>
         <h1>{props.ctr}</h1>
         <button onClick={() => props.onIncrementCounter()}>Increment</button>
         <MoviesDisplay />
      </div>
   )
}
const mapStateToProps = (state) => {
   return {
      ctr: state.counter,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onIncrementCounter: () => dispatch(actionCreators.incrementCounter()),
      onMoviesFetch: (movies) => dispatch(actionCreators.movieLoaded(movies)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
