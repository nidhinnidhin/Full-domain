import React, { useState } from 'react'
import Child from './child'

const Parent = () => {
    const [data, setData ] = useState('')
    const handleData = (msg) => {
        setData(msg)
    }
    const placeEmpty = () => {
        if(data.length !== 0){
            setData('')
        }
        else{
            setData('No data found to remove')
        }
    }

  return (
    <div>
      <Child sendData = {handleData} removeData = {placeEmpty} parentData = {data}/>
      <h1>{data}</h1>
    </div>
  )
}

export default Parent
