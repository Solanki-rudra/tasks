import React from 'react'
import { useAuth } from '../../contexts/auth'

const Profile = () => {
  const {user} = useAuth()
  return (
    <div className='ml-64 p-4'>
      <h1>Profile</h1>
      <h1>Hello, {user} 👋</h1>
    </div>
  )
}

export default Profile
