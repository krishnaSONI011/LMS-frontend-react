import React,{useState} from 'react'
import CoursesCard from './CoursesCard'
import axios from 'axios'
const Courses = ()=>{
    const [data,setData] = useState([])
    const getCourse = async ()=>{
        try{
            const response = await axios.get('http://localhost:8080/api/course/get-frontend')
            setData(response.data.courses)

        }catch(e){
            console.log(e)
        }
    }
    React.useEffect(()=>{
        getCourse()
    },[])
    return(
        <>
        <div className=' pt-24'>
            <div className='flex flex-wrap flex-grow justify-center'>
                {
                    data.map((m)=>(

                        <CoursesCard key={m._id} title={m.title} subtitle={m.subTitle} slug={m.slug}/>
                    ))
                }
                
                
                
                

            
            </div>
        </div>
        </>
    )
}
export default Courses