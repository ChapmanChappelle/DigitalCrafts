
import React, { Component } from 'react'

class AddMovie extends Component {

    constructor() {
        super() 

        this.state = {
            title: '', 
            year: '', 
            poster: ''
        }
    }

    handleSaveMovie = () => {

        fetch('http://localhost:8080/movies', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                // the history only works if the route you are going to is defined in index.js
                this.props.history.push('/')
            }
        })

    }

    handleOnChange = (e) => {
        console.log(e.target.name)
        
        this.setState({
            [e.target.name]: e.target.value 
        })

        // JS 
        /*
        let car = {make: 'Honda', model: 'Accord'}
        car.make 
        car.model 

        car['make']
        car['model']
        car.isElectric = true 
        car['isElectric'] = true 
        */

    }

    render() {

        return (
            <div>
                <input type="text" name="title" placeholder="Title" onChange={this.handleOnChange} />
                <input type="text" name="year" placeholder="Year" onChange={this.handleOnChange} />
                <input type="text" name="poster" placeholder="Poster" onChange={this.handleOnChange} />
                <button onClick={this.handleSaveMovie}>Save</button> 
            </div>
        )

    }

}

export default AddMovie 