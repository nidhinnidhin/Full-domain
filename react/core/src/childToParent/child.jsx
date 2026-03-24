import React from 'react'

const Child = ({passData}) => {
  return (
    <button onClick={() => passData('Hello')}>Click</button>
  )
}

export default Child;