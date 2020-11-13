
import React, { Component } from 'react'

class MovieDetails extends Component {

    componentDidMount() {
        console.log(this.props.match.params.movieId)
    }

    render() {

        return (
            <h1>MovieDetails</h1>
        )

    }

}

export default MovieDetails 