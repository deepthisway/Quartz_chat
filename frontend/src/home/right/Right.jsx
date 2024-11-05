import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeMessage from './TypeMessage'

const Right = () => {
  return (
    <>
    <div className=' w-[70%] bg-slate-800 text-white'>
    <ChatUser/>
    <div className='py-2 overflow-auto flex-noscrollbar' style={{maxHeight: "calc(92vh - 8vh)"}}>
      <Messages/>
    </div>
    <TypeMessage/>
    </div>
    </>
  )
}

export default Right