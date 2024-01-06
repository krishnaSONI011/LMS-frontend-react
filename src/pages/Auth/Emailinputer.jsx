import React from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Emailinputer = () => {
    const navi = useNavigate();
    const [email , setEmail] = React.useState('')
   
    const clickHendle = async ()=>{
        try{
            if(email=== ''){
                toast.warn('Fill Email First', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                return;
            }
                const response = await axios.post('http://localhost:8080/api/user/email-verify',{email});
                if(response.data.status){
                        localStorage.setItem('tempData',JSON.stringify(response.data.user))
                        navi(`/auth/ask-user/verify-user/${email}`);
                }
                else navi(`/auth/ask-user/new-user/${email}`);
        }
        catch(err){
            console.log(err)
        }
    }
    return <>
        <div className='p-2'>
            <p className='text-center font-2 text-lg'>Use Your Email</p>
        </div>
        <div className='text-center pt-2'>
            <input type="email" name='email' className='bg-gray-50 p-3 border rounded-md' placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
         <div className='text-center pt-8'>
            <button className='active:scale-95 duration-200 bg-[#e6f7ff] px-6 font-1 rounded-2xl py-4' onClick={clickHendle}>Next</button >
         </div>
    </>
}
export default Emailinputer