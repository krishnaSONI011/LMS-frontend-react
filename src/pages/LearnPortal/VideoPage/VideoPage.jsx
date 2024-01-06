import React from 'react'
import VideoPlayer from './VideoPlayer';
import VideoHeadingPage from './VideoHeadingPage';

const VideoPage = ()=>{
    return(
        <>
        <div className='w-full h-[92vh] flex'>
            <VideoHeadingPage/>
            <VideoPlayer/>
        </div>
        </>
    )
}
export default VideoPage;