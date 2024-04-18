import React,{useState} from 'react'
import VideoHeading from './VideoHeading'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const VideoHeadingPage = () => {
  const [data,setData] = React.useState([])
  const [loading,setLoading] = React.useState(false)
  const [checked , setChecked] = useState(0)
  const {courseData} = useParams()
  const [checkedResponse , setCheckedResponse] = useState([])
  async function getData(){
    try{
      setLoading(true)
      const id = courseData
      const user = JSON.parse(localStorage.getItem('auth'))
      const userId = user.id
      const response = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/topics/get-topic/${id}`)
      const responseForChecked = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/checked/get-video/${userId}`)
     
      setCheckedResponse(responseForChecked.data.result)
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
        <div className='bg-white w-full p-2'>
            <h1 className='text-xl pb-1'>Mern Stack </h1>
            <div className='w-full mt-2 bg-gray-100 h-2.5  rounded border'>
              <div className={` bg-blue-600 h-2 rounded`} style={{
                width: `${(checked/data.length)*100}%`
              }}></div>
            
            </div>
            <div className=' mt-2 flex justify-between'>
                <div>
                  {checked} of {data.length} Lessons Completed
                </div>
                <div className='text-green-600'>
                  {(checked/data.length)*100}%
                </div>
            </div>
        </div>
{
    loading ? <><div className='h-screen flex items-center justify-center'><p className='p-5 border-4 border-blue-500 border-b-0  animate-spin rounded-full'></p></div></> :
    data.map((m)=>(
      
      <VideoHeading title={m.topic} id={m._id} count = {checked} checkedCount = {setChecked} key={m._id} checkedAr = {checkedResponse}/>
    ))
}
            
    </div>
  )
}

export default VideoHeadingPage
