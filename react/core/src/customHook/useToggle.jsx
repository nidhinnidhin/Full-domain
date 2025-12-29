import React, { useState } from 'react'
import useToggle from './toggleHook';

const UseToggle = () => {
    const [isVisible, toggleVisible] = useToggle(false);
  return (
    <div>
      <button onClick={toggleVisible}>{isVisible ? 'Hide' : 'Show'} Message</button>
      {isVisible && <h2>He i am visible</h2>}
    </div>
  )
}

export default UseToggle;
