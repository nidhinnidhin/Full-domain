import React from 'react'
import { useCallback } from 'react';

const UseCallback = () => {
    const handleClick = useCallback(() => {
        console.log('Hello button clicked')
    })
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseCallback;
