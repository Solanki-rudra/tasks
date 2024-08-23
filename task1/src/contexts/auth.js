import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        const savedUser = localStorage.getItem('user');
        return savedUser ? savedUser : null;
    });

    function login(user) {
        setUser(user)
        localStorage.setItem('user',user)
    }
    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    }
  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider
