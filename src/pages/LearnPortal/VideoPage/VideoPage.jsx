import React from 'react'
import VideoPlayer from './VideoPlayer';
import VideoHeadingPage from './VideoHeadingPage';
import { useLocation } from 'react-router-dom';
const VideoPage = ()=>{
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const video_id = queryParams.get('video_id')
    const [video,setVideo] = React.useState('')
    return(
        <>
        <div className='w-full h-[92vh] flex'>
            <VideoHeadingPage setVideo={setVideo}/>
            <VideoPlayer video={video_id} />
        </div>
        </>
    )
}
export default VideoPage;