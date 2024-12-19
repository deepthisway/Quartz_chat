import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js';

const Messages = () => {
  const {messages, loading} = useGetMessage();
  // console.log("Logs are" + messages);
  
  return (
    <div className='' style={{minHeight: "calc(92vh - 8vh)"}}>
      
      <Message/>
    </div>
  )
}

export default Messages