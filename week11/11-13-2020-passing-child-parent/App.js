
import React, { useState, useEffect } from 'react'
import DisplayCounter from './Components/DisplayCounter'
import IncrementCounter from './Components/IncrementCounter'



function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = (count) => {
    setCount(count)
  }

  return (
    <div>
      <IncrementCounter onIncrement = {handleIncrement} />
      <DisplayCounter counter = {count} />
    </div>
  )

}

export default App;
