
// using React from react framework 
import React, { Component } from 'react'
import Customers from './Customers'
import Name from './Name'
import SayHello from './SayHello'


class App extends Component {

  // render function dictates that what the component 
  // will display on the screen 
  render() {

    let customers = ["Alex", "Mary", "John"]

    return (
      <div>
        <h1>Hello World 2</h1> 
        <h1>Another Line</h1>
        <SayHello name = "Mary" age = "34" />
        <SayHello name = "Alex" age = "56" />

        <Name firstName = "John" lastName = "Doe" />

        <Customers listOfCustomers = {customers} />

      </div>
    )
  }

}

export default App


