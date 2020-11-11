import React, { Component } from "react"
import Facts from "./Facts"
import "./App.css"

class App extends Component {
   constructor() {
      super()

      this.state = {
         facts: [],
      }
   }

   render() {
      return (
         <div id="container">
            <div id="buttonDiv">
               <button id="factBtn" onClick={this.showFact}>
                  press for a cat fact!
               </button>
            </div>
            <div id="factsDiv">
               <Facts facts={this.state.facts} />
            </div>
         </div>
      )
   }

   showFact = () => {
      this.fetchFacts()
   }

   fetchFacts() {
      fetch(
         "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"
      )
         .then((response) => response.json())
         .then((result) => {
            this.setState({
               facts: result,
            })
         })
   }
}
export default App
