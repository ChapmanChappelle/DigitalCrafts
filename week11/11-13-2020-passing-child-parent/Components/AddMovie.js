import React, { useState } from "react"

function AddMovie() {
   const [movie, setMovie] = useState({})

   const handleChange = (e) => {
      setMovie({
         ...movie, // spread operator
         [e.target.name]: e.target.value,
      })
   }

   return (
      <div>
         <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
         />
         <input
            type="text"
            name="year"
            onChange={handleChange}
            placeholder="Year"
         />
         <input
            type="text"
            name="genre"
            onChange={handleChange}
            placeholder="Genre"
         />
      </div>
   )
}

export default AddMovie
