import React, { useState } from 'react'
import Child1 from './child1';
import Child2 from './child2';

const LiftParent = () => {
    const [val, setVal] = useState('')
  return (
    <div>
      parent
      <Child1 value = {val} setValue = {setVal}/>
      <Child2 value = {val}/>
    </div>
  )
}

export default LiftParent;
