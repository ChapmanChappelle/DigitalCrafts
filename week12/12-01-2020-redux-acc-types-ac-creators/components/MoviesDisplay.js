
import { connect } from 'react-redux'

function MoviesDisplay(props) {

    const movieItems = props.movies.map(movie => {
        return <li key = {movie.imdbID}>{movie.Title}</li>
    })

    return (
        <ul>
            {movieItems}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesDisplay) 