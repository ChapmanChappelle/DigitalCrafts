import React, { Component } from "react"

class Articles extends Component {
   render() {
      return (
         <div>
            <h3 class="title">Hello WatchKits</h3>
            <p class="info">
               Last month Apple released the anticipated WatchKit Framework for
               developers in the form of iOS 8.2 beta SDK release. The WatchKit
               framework enables the developers to create Apple Watch
               applications. In this article we are going to focus on the basics
               of getting started wuth the WatchKit framework and developing
               apps for the Apple Watch.
            </p>
            <div class="bar">
               <p>12 comments 124 likes</p>
            </div>
            <h3 class="title">Introduction to Swift</h3>
            <p class="info">
               Swift is a modern programming language developed by Apple to
               create the next generation of iOS and OSX applications. Swift is
               a fairly new language and is still in development but it clearly
               reflects the intentions and the future direction. This article
               will resolve around the basic concepts in the Swift language and
               how you can get started
            </p>
            <p class="bar">15 comments 45 likes</p>
         </div>
      )
   }
}

export default Articles
