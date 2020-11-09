// using React from react framework
import React, { Component } from "react"
import Name from "./Name"
import Friends from "./Friends"
import './App.css';

class App extends Component {
   render() {
      return (
         <div id="container">
            <h1>Activity 1</h1>
            <Name name="Mary" lastName="Doe" />
            <Name name="Alex" lastName="Last Name" />
            <h1>Activity 2</h1>
            <Friends />
         </div>
      )
   }
}

export default App
