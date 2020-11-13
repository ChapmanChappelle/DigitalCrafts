
import React, { useState, useEffect } from 'react'

function IncrementCounter(props) {

    // local state / private state 
    const [count, setCount] = useState(99)

    useEffect(() => {
        props.onIncrement(count)
    },[count])

    const handleIncrement = () => {
        setCount(count + 1)
        //props.onIncrement(count)
    }

    return (
        <button onClick={handleIncrement}>Increment</button>
    )

}

export default IncrementCounter