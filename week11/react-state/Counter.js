

import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    constructor() {
        // make sure to call the constructor of the parent (Component)
        super()
        //this.counterValue = 0 

        //console.log(this) // the value of this is NOT undefined 

        // We are providing the value of this at a time when it was not undefined to the handleIncrement function 
        //this.handleIncrement = this.handleIncrement.bind(this)

        // STATE 
        // Every time you will update the state 
        // it will automatically call RENDER 
        this.state = {
            counter: 99, 
            age: 23
        }

    }

    handleIncrement = () => {

        // update the state and increment the counter 
        //this.state.counter += 1 // DON'T DO THIS 

        // setState is async operation, which means it will eventually update the state  
        this.setState({
            counter: this.state.counter + 1 
        },() => {
            // OPTIONAL: Fired when the state has been updated 
            console.log('INSIDE STATE CALLBACK')
            console.log(this.state.counter)
        })

        console.log(this.state.counter)

        //this.counterValue += 1 
        //console.log(this.counterValue)
    }
    
    /*
    handleIncrement() {
        console.log(this)
       // this.counterValue += 1 
       // console.log(this.counterValue)
    } */

    render() {

        return (

            <div className="counter">
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

}

export default Counter