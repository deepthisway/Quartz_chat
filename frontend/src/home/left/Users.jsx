import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'

const Users = () => {
  const [allUsers, loading]= useGetAllUsers();
  console.log(allUsers);
  
  return (

    <div style={{maxHeight:"calc(84vh)"}} className='overflow-y-auto flex-noscrollbar'>
      {
        allUsers.map ((user, index)=> {
          return (<User user= {user}/>)
        })
      }
    </div>

)

}

export default Users;