

import React , {useEffect, useState}from 'react'
// import { useLoaderData } from 'react-router-dom'





const Github = () => {
    // const data = useLoaderData();
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/CodeFromRahul')
        .then(response=>response.json())
        .then(data=> {
            console.log(data)
            setData(data);


        })
    },[])
  return (
    <div className='text-3xl bg-gray-400 p-4  text-white flex align-center justify-center text-bold'>Github follower :{data.followers}
    <img src={data.avatar_url}  alt="Git Picture" className='flex justify-center align-center w-{300}' />
    </div>
  )
}

export default Github


// export const githubInfo= async ()=>{
//    const response = await fetch('https://api.github.com/users/CodeFromRahul')
//     return response.json();

// }