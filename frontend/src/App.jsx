import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Logout from "./home/logout/Logout";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import {Routes , Route, Navigate} from 'react-router-dom';
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const {authUser ,  setAuthUser} = useAuth();

  return (
    <>
    <Routes>
      <Route path='/' element = {
        authUser ? (
          <div className="flex h-screen">
          <Logout/>
          <Left />
          <Right />
        </div>
        ) : ( 
          <Navigate to= {"/login"} />
          )
      }
      />
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<SignUp/>}/>
    </Routes>
      
      {/* <SignUp/> */}
    </>
  );
};

export default App;