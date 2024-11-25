import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const buttonClicked = () => {
        setCount(count + 1)
    }

    const tralalaa = () => {
      setCount(count - 1)
  }

  return (
    <div>
      <p>The Button Has Been Clicked {count} Times</p>
      <button onClick={buttonClicked}>Yamete kodasai</button>
      <button onClick={tralalaa}>erm</button>

    </div>
  )
}

export default Counter
