import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { Link,useParams } from 'react-router-dom';
const SingleMail = () => {
const [data,setMail] = useState([])
const {id} = useParams()
const getMail =async ()=>{
  try{
    const mailId = id
 const response = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/mail/single-mail/${mailId}`)
 setMail(response.data.userMails)
  }catch(e){
    console.log(e)
  }
}
useEffect(()=>{getMail()},[])
  return (
    
      <div className='w-full flex justify-center'>
      <div className='bg-slate-100 scrollbar-hide rounded-xl w-3/4 overflow-y-scroll h-[470px] p-4'>
        <div className='border-b flex justify-start'>
            <Link to='/mail/all-mail'>    <p className='font-1 font-semibold p-2 hover:bg-slate-200 rounded-full cursor-pointer '><LuArrowLeft /></p></Link>
        </div>
          <div>
            <p className='font-1'>from : <span>{data.senderMail}</span></p>
            <p className='mt-10 font-3'>{data.mailBody}</p>
          </div>
      </div>
    </div>
    
  )
}

export default SingleMail
