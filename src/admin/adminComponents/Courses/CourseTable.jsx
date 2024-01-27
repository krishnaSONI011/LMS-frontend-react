import React from 'react'
import TableData from './TableData';
import axios from 'axios';
const CourseTable = ()=>{
  const [data,setData] = React.useState([])
  
    async function fetchCourseData(){
      try{
        const response = await axios.get('https://lms-backend-production-fcd7.up.railway.app/api/course/get')
        
          
          setData(response.data.courses)
        
       

      }catch(err){
        console.log(err)
      }
    }
    React.useEffect(()=>{
      fetchCourseData()
      
    },[])
    return(
<>
<table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Course Name</th>
              <th scope="col" className="px-6 py-4">About</th>
              <th scope="col" colSpan={2} className="text-center">Action</th>
              <th scope="col"  className="text-center">Status</th>
            </tr>
          </thead> 
          <tbody>
            {
             data.map((m,index)=>(
                <TableData key={m._id} id={m._id} sr={index +1} name={m.title} about={m.description} status = {m.live}/>
              
            )) 
          }
          </tbody>
        </table>
</>
    )
};
export default CourseTable;