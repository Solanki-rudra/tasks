import React, { useState } from 'react'
import { useAuth } from '../contexts/auth';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate()
    const {login} =  useAuth()
    const handleLogin = () => {
        if(username.trim()){
          login(username)
          navigate('/')
        }
    }
  return (
    <div className='mx-auto bg-gray-500 rounded p-10 my-5 w-fit flex flex-col'>
      <input type="text" placeholder='Enter Username...' onChange={(e)=>setUsername(e.target.value)} className='rounded border-none p-4'/>
      <button className='px-4 py-2 rounded bg-blue-500 my-2 w-fit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
