import React, { useContext } from 'react'
import { UserContext } from '../context/user'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">Please login</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="p-6 bg-white rounded-lg shadow-md text-gray-800">
        <h1 className="text-2xl font-bold">Hello, {user.username}!</h1>
        <p className="mt-2 text-gray-600">Welcome back to your profile.</p>
      </div>
    </div>
  )
}

export default Profile
