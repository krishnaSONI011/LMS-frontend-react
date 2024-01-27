import React from 'react'
import TopBarTopic from './TopBarTopic'
import TopicTableBody from './TopicTableBody';
import axios from 'axios';
import { useNavigate,useParams,useLocation} from 'react-router-dom'
import { toast } from 'react-toastify';
const AllTopic = () => {
  const [data,setData] = React.useState([])
  

  const {search} = useLocation();
    const queryParams = new URLSearchParams(search)
    let status = queryParams.get('status') 
    const name = queryParams.get('name') 
  const { courseSlug } = useParams();
   async function getTopics(){
    const response = await axios.get(`https://lms-backend-production-fcd7.up.railway.app/api/topics/get-topic/${courseSlug}`)
    setData(response.data.data)
    toast.success(response.data.message)
   }
   React.useEffect(()=>{getTopics()},[])
   async function setLive() {
    try {
      const response = await axios.put(
        `https://lms-backend-production-fcd7.up.railway.app/api/course/update-course/${status === 'true' ? 'false' : 'true'}/${courseSlug}`
      );
      console.log(response.data);

      status = response.data.message;
      queryParams.set('status', status);
      navi({ search: queryParams.toString() });
    } catch (e) {
      console.log(e);
    }
  }
    const navi = useNavigate()
  return (
    <>
      <TopBarTopic name={name} status={status}/>
      {/* table div  */}
      <div>
      <table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="text-center">Topic Name</th>
              <th scope="col" className="text-center">Video</th>
              
              <th scope="col"  className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((m,index)=>(
                <TopicTableBody key={index} id={m._id} name={m.topic} video={m.videoEmbed} h={200} w={200}/>

              ))
            }
           
          </tbody>
        </table>
      </div>
      {/* table div end */}
      {/* add topic button */}
      <div className='text-center mt-5 flex justify-evenly'>
        <button onClick={()=> navi(`/admin/home/add-course?page_id=topic&course_id=${courseSlug}`)} className='bg-green-500 text-white rounded p-2 active:scale-95 duration-150'> Add Course Topic + </button>
        <button onClick={setLive} className={`${status === 'true' ? 'bg-red-500 text-white' : 'bg-green-500 text-white '} p-2 rounded active:scale-95 duration-150`}>{status === 'true' ? 'Drop Video' : 'Live Course'}</button>
      </div>
      {/* add topic button end*/}
    </>
  )
}

export default AllTopic
