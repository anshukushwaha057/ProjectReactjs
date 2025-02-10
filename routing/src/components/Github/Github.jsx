import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData() // hook to use data of api

    // const [followers, setFollowers]=useState(100)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/anshukushwaha057')
    //     .then((response)=>response.json())
    //     .then((data)=>setFollowers(data.followers))
    // },[followers])

  return (
    <div>
      <h1 className='bg-gray-500 text-center p-5 text-2xl mt-5'>GitHub Followers : {data.followers} </h1>
    </div>
  )
}

export default Github


export const gitLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/anshukushwaha057')
    return response.json()
}