import React, { useRef, useState } from 'react'
import Counter from './counter';

const RefCounter = () => {
    const countRef = useRef(0);
    const [, counterState] = useState(false)

    const Increment = () => {
        countRef.current += 1;
        counterState(prev => !prev)
    }

    const Decrement = () => {
        countRef.current -= 1;
        counterState(prev => !prev)
    }
  return (
    <div>
        Counter ref
        <div>
            <button onClick={Increment}>Increment</button>
            <h1>{countRef.current}</h1>
            <button onClick={Decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default RefCounter;
