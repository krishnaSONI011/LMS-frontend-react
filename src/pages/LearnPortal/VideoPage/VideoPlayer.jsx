import React from 'react'

const VideoPlayer = () => {
  return (
    <div>
       <video   controls className='w-full h-[92vh]'>
        <source
          src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
          type="video/mp4"
        />
        
      </video>
    </div>
  )
}

export default VideoPlayer
