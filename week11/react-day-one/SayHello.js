
import React, { Component } from 'react'

class SayHello extends Component {

    render() {
        return (
        <h1>Hello {this.props.name}! - {this.props.age}</h1>
        )
    }


}

// exporting so other files can import it
export default SayHello