import React, { Component } from "react"

class Facts extends Component {
   render() {
      return (
         <p id="fact" key={this.props.facts._id}>
            {this.props.facts.text}
         </p>
      )
   }
}

export default Facts
