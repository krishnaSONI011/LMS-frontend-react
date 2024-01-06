import React from 'react'
import videosoasd from '../../../assests/video.mp4'
const VideoPlayer = () => {
  return (
    <div>
       <video   controls className='w-full h-[92vh]'>
        <source
          src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
