import React from 'react'
import { useAuth } from '../contexts/auth'
import { useNavigate } from 'react-router-dom'

const Signout = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  function handleSignout() {
    logout()
    navigate('/login')
  }
   return (
    <div className='ml-64'>
      <button onClick={handleSignout} className='m-4 px-4 py-2 bg-red-400 rounded text-white'>Sign Out</button>
    </div>
  )
}

export default Signout
