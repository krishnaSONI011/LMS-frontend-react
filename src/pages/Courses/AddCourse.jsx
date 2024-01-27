import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const AddCourse = ()=>{
    const navi = useNavigate()
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search)
    const page_id = queryParams.get('page_id') 
    const course_id = queryParams.get('course_id') 
    const[courseTitle,setCourseTitle] = useState('')
    const[courseSubtitle,setCourseSubtitle] = useState('');
    const[description,setDescription] = useState('')
    const [ image,setImage] = useState(null)

    async function postTopicData(){
      try{
        const topic = courseTitle
        const videoEmbed = description
        const courseId = course_id
          const response = await axios.post('https://lms-backend-production-fcd7.up.railway.app/api/topics/add-topic',{
              courseId,topic,videoEmbed
          })
          toast.success(response.data.message)
      }catch(e){
        console.log(e)
      }
    }
    async function postCourseData() {
        try {
          const formData = new FormData();
          formData.append('image', image);
          formData.append('title', courseTitle); // Use the correct field names
          formData.append('subTitle', courseSubtitle); // Use the correct field names
          formData.append('description', description); // Use the correct field names
      
          const response = await axios.post(
            'https://lms-backend-production-fcd7.up.railway.app/api/course/add-course',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
      
          if(response.data.status) {toast.success(response.data.message)
            setCourseTitle('')
            setCourseSubtitle('')
            setDescription('')
            setImage(null)
            
        }
          else toast.error(response.data.message)
        } catch (e) {
          console.error(e);
        }
      }
    return <>

    <div className='h-full w-full flex justify-center items-center'>
        <div className='bg-slate-100 p-6 rounded font-3'>
            {/* first row */}
          <div className='flex'>


              <div className=''>
                <label htmlFor="">{page_id === 'topic' ? 'topic Title' : 'Course Title'}</label>
                <input type="text" className='border ml-3 p-1' onChange={(e)=>setCourseTitle(e.target.value)} value={courseTitle}/>
              </div>


            {page_id === 'topic' ? <></> : <><div className='ml-5'>
            <label htmlFor="">Course Subtitle</label>
            <input type="text" className='border ml-3 p-1' onChange={(e)=>setCourseSubtitle(e.target.value)} value={courseSubtitle}/>
            </div></>}



          </div>

{/* second row */}
            <div className='mt-6 flex items-center'>
                <label htmlFor="">{page_id === 'topic' ? 'Past embed from youtube' : 'Description: '}</label>
                <textarea className='w-full ml-3 p-2' onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </div>

            {/* third row*/}

            {page_id === 'topic' ? <></> : <div className='mt-4 flex'>
                <div className='font-3'>
                    <label htmlFor="">{page_id === 'topic' ? 'Add Video' : 'Main Image'}</label>
                    <input
    className="ml-3 border file:border-1 file:cursor-pointer"
    type="file"
    id="formFile" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
            </div>}
            {/* fourth row */}
    {page_id === 'topic' ? <></> : <div className='mt-4 flex'>
        <div className='font-3'>
            <label htmlFor="">Logo Image</label>
            <input
className="ml-3 border file:border-1 file:cursor-pointer"
type="file"
id="formFile" />
        </div>
    </div>}
            {/*  */}

            <div  className='flex justify-center mt-10'>
                <button onClick={()=>{page_id==='topic'?navi('/admin/home/topics/loding'):navi('/admin/home/course')}} className='active:scale-95 duration-150 bg-blue-600 p-2 text-white rounded hover:bg-blue-500'>
                    back
                </button>
                <button onClick={page_id === 'topic' ? postTopicData : postCourseData}  className='active:scale-95 duration-150 bg-green-600 p-2 text-white rounded hover:bg-green-500 ml-6'>
                    Add
                </button>
            </div>
        </div>
    </div>
    </>
}

export default AddCourse