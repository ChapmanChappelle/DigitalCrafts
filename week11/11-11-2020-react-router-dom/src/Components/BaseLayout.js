

import React, { Component } from 'react'
import Footer from './Footer'
import Menu from './Menu'

class BaseLayout extends Component {

    render() {

        return (
            <div>
                <Menu />
                  {this.props.children}
                <Footer />
            </div>
        )

    }

}

export default BaseLayout 