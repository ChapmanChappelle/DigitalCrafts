import React, { Component } from 'react'

class Name extends Component {

    render() {
        return (
        <h1>Hello {this.props.name}! - {this.props.lastName}</h1>
        )
    }


}

// exporting so other files can import it
export default Name