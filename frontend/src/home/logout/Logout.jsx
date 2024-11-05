import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className='w-[5%] flex justify-end flex-col p-4 text-3xl bg-black border-r border-r-slate-600'>
     <RiLogoutBoxLine className='hover:bg-gray-500 rounded-md m-2'/>
    </div>
  )
}

export default Logout;
