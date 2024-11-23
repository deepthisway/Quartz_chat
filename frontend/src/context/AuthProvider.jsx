import React, { createContext, useContext, useState } from 'react'
export const AuthContext = createContext();
import Cookies from 'js-cookie'

const AuthProvider = ({ children }) => {
    const initialUserState = Cookies.get('jwt') || localStorage.getItem("messenger");
    // parse the user data and store into the state
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState): undefined);

  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()  => useContext(AuthContext);

export default AuthProvider;

