import React from 'react'
import VideoHeading from './VideoHeading'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const VideoHeadingPage = () => {
  const [data,setData] = React.useState([])
  const [loading,setLoading] = React.useState(false)
  const {courseData} = useParams()

  async function getData(){
    try{
      setLoading(true)
      const id = courseData 
      const response = await axios.get(`http://localhost:8080/api/topics/get-topic/${id}`)

      setData(response.data.data)
    }catch(e){
      console.log(e)
    }
    finally{
      setLoading(false)
    }
  }
  React.useEffect(()=>{
    getData()
  },[])
  return (
    // parent
    <div className='h-full overflow-y-scroll w-96 bg-slate-100 p-2'>
        {/* that contain heading */}
{
    loading ? <><div className='h-screen flex items-center justify-center'><p className='p-5 border-4 border-blue-500 border-b-0  animate-spin rounded-full'></p></div></> :
    data.map((m)=>(
      
      <VideoHeading title={m.topic} id={m._id} key={m._id} />
    ))
}
            
    </div>
  )
}

export default VideoHeadingPage
