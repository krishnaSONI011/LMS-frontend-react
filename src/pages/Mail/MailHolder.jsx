import React,{useState,useEffect} from 'react'
import MailBox from './MailBox'
import { IoTrashBin } from "react-icons/io5";

import axios from 'axios'
import { toast } from 'react-toastify';
const MailHolder = () => {
  const [data,setData] = useState([])
  const [deleteList,setDelete] = useState([])
 async function deleteMaker(){
  console.log(deleteList)
  try{
    if(deleteList.length === 0){
      toast.error("Please select at least one mail")
      return
    }
    const mailIds  = deleteList
    const user = JSON.parse(localStorage.getItem('auth'))
    const userMailId = user.email
    const response = await axios.post('https://lms-backend-1-q2w4.onrender.com/api/mail/delete-mail',{
        userMailId,mailIds
    })
    setData(response.data.userMails)
    setDelete([])
    
    if(response.data.status) toast.success(response.data.message)
  }catch(e){
    console.log(e)
  }
  }
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
          <p onClick={deleteMaker} className='mr-3 bg-red-500 text-white p-2 rounded cursor-pointer active:scale-75 duration-200'><IoTrashBin/></p>
                <p className='font-1 font-semibold'><span>{data.length+' '}</span>Mail</p>
        </div>
        {
          data.map((mail)=>{
            return <MailBox setDelete={setDelete} delete={deleteList} id={mail._id} name={mail.userName} body={mail.mailBody} time={mail.createdAt}/>
          })
        }
        
      </div>
    </div>
  )
}

export default MailHolder
