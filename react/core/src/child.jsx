import React, { useState } from 'react'
import Parent from './parent'

const Child = () => {
    const [data, setData] = useState('hello')
  return <Parent data = {data}/>
}

export default Child
