// using React from react framework 
import React, { Component } from 'react'
import Name from './Name'


class App extends Component {

  // render function dictates that what the component 
  // will display on the screen 
  render() {
    return (
      <div>
        <h1>Hello World 2</h1> 
        <h1>Another Line</h1>
        <Name name = "Mary" lastName = "Doe" />
        <Name name = "Alex" lastName = "Doe2" />
      </div>
    )
  }

}

export default App