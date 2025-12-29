import React from 'react'

const Child1 = ({value, setValue}) => {
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default Child1;
