import React from 'react'
import Button from '../../components/fragment/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Emailinputer = () => {
    const navi = useNavigate();
    const [email , setEmail] = React.useState('')
   
    const clickHendle = async ()=>{
        try{
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