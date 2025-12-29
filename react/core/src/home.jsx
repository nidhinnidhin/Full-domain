import React from 'react'
import useCounter from './useCounter'

const Home = () => {
  const {count, increment, decrement} = useCounter(0)
  return (
    <div>
      Counter
      <button onClick={increment}>
        Increment
      </button>
      {count}
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default Home
