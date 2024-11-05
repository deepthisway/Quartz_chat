import React from 'react'
import { IoSend } from "react-icons/io5";

const TypeMessage = () => {
  return (
    <div className='flex text-center items-center gap-3 h-[8vh]'>
        <div className='w-[70%]'>
        <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full grow outline-none bg-slate-900 m-2" />
        </div>
       <IoSend className="text-2xl hover:bg-gray-300 hover:rounded-full transition duration-300 ease-in-out" />
    </div>
  )
}

export default TypeMessage