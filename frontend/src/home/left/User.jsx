import React from 'react'

const User = () => {
  return (
    <div className='flex space-x-5 px-6 py-7 hover:bg-slate-600 duration-200 cursor-pointer'>
        <div className="avatar online">
        <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>
        <div >
            <h1 className='font-bold'>Sunny Leone</h1>
            <span>sunnyLeone@gmail.com</span>
        </div>
    </div>
  )
}

export default User