// using React from react framework
import React, { Component } from "react"
import Header from "./Header"
import Content from "./Content"
import Articles from "./Articles"
import "./App.css"

class App extends Component {
   render() {
      return (
         <div id="container">
            {/* header */}
            <div id="headerDiv">
               <Header />
            </div>
            {/* header */}
            <div id="contentDiv">
               <Content />
            </div>
            {/* header */}
            <div id="articlesDiv">
               <Articles />
            </div>
         </div>
      )
   }
}

export default App
