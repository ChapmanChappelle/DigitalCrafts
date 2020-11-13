
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {

    render() {

        return (
            <ul>
                <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "/add-movie">Add Movie</NavLink></li>
                <li>Search Movie</li>
            </ul>
        )

    }

}

export default Menu 