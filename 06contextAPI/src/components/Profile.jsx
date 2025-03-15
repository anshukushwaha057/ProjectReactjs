import React, { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const { user } = useContext(userContext)
    if(!user) return <h1>Please Login</h1>
    return (
        <div>
            <h1>Hello : { user.username } </h1>
        </div>
    )
}

export default Profile
