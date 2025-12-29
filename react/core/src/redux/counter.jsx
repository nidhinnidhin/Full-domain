import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

const RedCounter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default RedCounter;
