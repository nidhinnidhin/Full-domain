import React from 'react'
import withGreetings from './hoc'
import Message from './message'


const MessageWithGreeting = withGreetings(Message)

const UseHoc = () => {
  return (
    <div>
      <MessageWithGreeting text = 'this is my original message!'/>
    </div>
  )
}

export default UseHoc
