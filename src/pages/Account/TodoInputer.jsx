import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
export default function TodoInputer(props) {
  const [text,setText] = useState('')
  async function todoSender(){
      
    try{
      const user = JSON.parse(localStorage.getItem('auth'));
      const userId = user.id; 
      const respons = await axios.post('https://lms-backend-production-fcd7.up.railway.app/api/todo/add-todo',{
      userId,text
      });
      if(respons.data.status){
        setText('')
        toast.success(respons.data.message,{
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
        props.setCount(props.count + 1)
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <div className='flex justify-center w-full'>
        <input type="text" placeholder='Write your Todo' className='font-1 p-2 bg-slate-100' onChange={(e)=>setText(e.target.value)} value={text} onKeyDown={(e)=>{if(e.key === 'Enter') todoSender()}}/>
        <button onClick={todoSender} className='text-lg font-1 p-2 bg-[#f9a682] rounded px-3 text-white ml-4 active:scale-95 duration-150 '>+</button>
      </div>
    </>
  )
}
