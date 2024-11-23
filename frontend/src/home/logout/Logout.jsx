import React, { useState } from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelLogout = async ()=> {
    setLoading(true);
    try {
      const response = await axios.post('/api/user/logout');
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logged out");
      navigate("/login");
    } catch (error) {
      
    }
  }

  return (
    <div className='w-[5%] flex justify-end flex-col p-4 text-3xl bg-black border-r border-r-slate-600'>
     <button onClick={handelLogout}>
      <RiLogoutBoxLine  className='hover:bg-gray-500 rounded-md m-2'/>
     </button>
    
    </div>
  )
}

export default Logout;
