import React,{useState,useEffect} from 'react'
import MailBox from './MailBox'
import axios from 'axios'
const MailHolder = () => {
  const [data,setData] = useState([])
  const getMails =async ()=>{
    try{
      const user = JSON.parse(localStorage.getItem('auth'))
      const userMailId = user.email
      const response = await axios.get(`https://lms-backend-1-q2w4.onrender.com/api/mail/get-mails/${userMailId}`)
      setData(response.data.userMails)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getMails()
  },[])
  return (
    <div className='w-full flex justify-center'>
      <div className='bg-slate-100 scrollbar-hide rounded-xl w-3/4 overflow-y-scroll h-[470px] p-4'>
        <div className='border-b flex justify-end'>
                <p className='font-1 font-semibold'><span>{data.length+' '}</span>Mail</p>
        </div>
        {
          data.map((mail)=>{
            return <MailBox id={mail._id} name={mail.userName} body={mail.mailBody} time={mail.createdAt}/>
          })
        }
        
      </div>
    </div>
  )
}

export default MailHolder
