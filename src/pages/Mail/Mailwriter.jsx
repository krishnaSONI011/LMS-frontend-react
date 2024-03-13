import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'

const Mailwriter = (props) => {
    const user = JSON.parse(localStorage.getItem('auth'))
    const [emailId,setEmailId] = useState(user.email)
    const [mail,setMail] = useState('')
    const words = mail.split(' ').length
    const [emailTo,setEmailTo] = useState(props.page_id === '0' ? props.email_to :'')
   async function sendMails(){
      try{
        const senderMail = emailId
        const reciverMail = emailTo
        const mailBody = mail
        const userName = user.firstname + " " + user.lastname
        const response = await axios.post('http://localhost:8080/api/mail/send-mail',{
          senderMail,reciverMail,mailBody,userName
        })
       setMail('')
        toast.success(response.data.message)
      }catch(e){
        console.log(e)
      }
    }
  return (
    <div className={`${props.page_id === '0' ? '' : 'ml-16'} w-full`}>
      {/* inputs for email writer and emailer  */}
      <div>
        
            <label htmlFor="" className='font-1 text-lg font-semibold mr-2'>From : </label>
            <input type="email" className='bg-slate-100 border-2 border-slate-700 rounded font-1 p-3 text-xl w-2/4'  value={emailId} disabled={props.page_id === '0' ? true : false}/>
      </div>
      {/* inputs for email writer and emailer end */}
      {/* inputs for email writer and emailer  */}
      <div className='mt-6'>
        
            <label htmlFor="" className='font-1 text-lg font-semibold mr-8'>To : </label>
            <input onChange={(e)=>setEmailTo(e.target.value)} type="email" className='bg-slate-100 border-2 border-slate-700 rounded font-1 p-3 text-xl w-2/4' value={props.page_id === '0' ? props.email_to : emailTo} disabled={props.page_id === '0' ? true : false} />
      </div>
      {/* inputs for email writer and emailer end */}
      {/* text area or mail area */}
      <div className='w-3/4'>
        {/* word counter */}
        <div className='flex justify-end font-1 font-semibold'>
          <span className='mr-2 font-bold'>{mail.length === 0 ? 0 : words}</span> Words
        </div>
        {/* word counter end */}
        {/* text area */}
        <div>
          <textarea onChange={(e)=>{setMail(e.target.value)}} name="" id="" rows="16" className='bg-slate-100 rounded border-2 border-dashed border-slate-600 p-1 font-1  w-[90%]'></textarea>
        </div>
        {/* text area end */}
      </div>
      {/* text area or mail area end */}
      {/* button for send */}
    { <div className='flex mt-4'>
      <button onClick={sendMails} className='bg-green-400 p-1 font-1 text-xl text-white rounded '>send</button>
    </div>}
      {/* button for send end */}
    </div>
  )
}

export default Mailwriter
