import React, { Component } from "react"

class App extends Component {
   constructor() {
      super()

      this.state = {
        facts: []
      }
   }

   render() {
     const factItems = this.state.facts.map(fact => {
       return <li>
         <p>{fact.text}</p>
       </li>
     })

     return <ul>{factItems}</ul>

   }

   componentDidMount() {
      fetch(
         "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4"
      )
         .then((response) => response.json())
         .then((result) =>  {
           this.setState({
             facts: result
           })
         })
   }
}

export default App