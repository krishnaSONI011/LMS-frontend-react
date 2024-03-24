import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const VideoPlayer = (props) => {
  const [data,setData] = useState([])
  const videoId = props.video
  const [loading,setLoading] = useState(false)
  async function getVideo(){
    try{  
      setLoading(true)
      const response = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/topics/get/${props.video}`)
        setData(response.data.topic)
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
  }
  React.useEffect(()=>{getVideo()},[videoId])
  return (
    <div>
       {loading ? <><div className='h-screen w-full flex items-center justify-center'><p className='p-5 border-4 border-blue-500 border-b-0  animate-spin rounded-full'></p></div></> :<video   controls className='w-full h-[92vh]'>
        <source
          src={`https://lms-backend-1-q2w4.onrender.com/${data.videoEmbed}`}
          type="video/mp4"
        />
        
      </video>}
      {/* {
        loading ? <><div className='h-screen w-full flex items-center justify-center'><p className='p-5 border-4 border-blue-500 border-b-0  animate-spin rounded-full'></p></div></> :<div className='w-full flex justify-center items-center'>
        <p  dangerouslySetInnerHTML={{ __html: data.videoEmbed }}></p>
</div>
      } */}
      
    
      
    </div>
  )
}

export default VideoPlayer
