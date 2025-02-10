import React from 'react'
import { UserContextProvider } from './context/user'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Login />
        <div className="mt-8">
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
