import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {Userid} = useParams();
  return (
    <div className=' text-3xl bg-gray-500 flex align-center justify-center text-white'>User:{Userid}</div>
  )
}

export default User