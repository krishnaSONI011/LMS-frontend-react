import React from 'react'
import { LuPlay } from "react-icons/lu";
const VideoHeading = () => {
  return (
    <div className='w-80 m-2 bg-white border p-2 '>
    <div className='flex items-center justify-around'>
        <h1 className='font-1 text-lg'>Heading name here </h1>
        <button className='text-lg border-2 border-black rounded-full p-2'><LuPlay /></button>
    </div>
    </div>
  )
}

export default VideoHeading
