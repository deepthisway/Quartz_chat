import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Logout from './home/logout/Logout'

const App = () => {
  return (
    <div className='flex h-screen'>
      <Logout/>
      <Left/>
      <Right/>
    </div>
  )
}

export default App