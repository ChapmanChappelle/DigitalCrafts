// using React from react framework
import React, { Component } from "react"

class App extends Component {
   render() {
      return (
         <div id="container">
            // header
            <div id="headerDiv">
               <Header />
            </div>
            // content
            <div id="contentDiv">
               <Content />
            </div>
            // articles
            <div id="articleDiv">
               <Articles />
            </div>
         </div>
      )
   }
}

export default App
