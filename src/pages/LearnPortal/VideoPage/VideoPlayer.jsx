import React from 'react'

const VideoPlayer = (props) => {
  return (
    <div>
       {/* <video   controls className='w-full h-[92vh]'>
        <source
          src={'https://ln5.sync.com/dl/30a9cad70/eakk6acv-ummdgb6q-7um92nu8-yn68eifa'}
          type="video/mp4"
        />
        
      </video> */}
    {props.video}
      
    </div>
  )
}

export default VideoPlayer
