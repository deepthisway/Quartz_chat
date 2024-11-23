import React from 'react'

const User = ({ user }) => {
  return (
    <div className='flex space-x-5 px-6 py-7 hover:bg-slate-600 duration-200 cursor-pointer'>
        <div className="avatar online">
        <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>
        <div >
            <h1 className='font-bold'>{user.name}</h1>
            <span>{user.email}</span>
        </div>
    </div>
  )
}

export default User