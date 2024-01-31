import React from 'react'
import { LuPlay } from "react-icons/lu";
import { useLocation,useNavigate } from 'react-router-dom';
const VideoHeading = (props) => {
  const navi = useNavigate()
  const {search} = useLocation()
  const queryParams = new URLSearchParams(search)
  function videoSetter(){
    queryParams.set('video_id',props.id)
    navi({ search: queryParams.toString() });
  }
  return (
    <div className={`w-80 m-2 ${props.id == queryParams.get('video_id') ?  'bg-blue-500 text-white' : 'bg-white text-black'} border p-2 `}>
    <div className='flex items-center justify-around'>
        <h1 className='font-1 text-lg'>{props.title} </h1>
        <button onClick={videoSetter} className={`text-lg border-2 ${props.id == queryParams.get('video_id') ?  'bg-white text-blue-500' : 'bg-blue-500 text-white'}   rounded-full p-2`}><LuPlay /></button>
    </div>
    </div>
  )
}

export default VideoHeading
