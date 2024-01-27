import React from 'react'
import { LuUser2 } from "react-icons/lu";
import { useParams,useNavigate } from 'react-router-dom';
import Button from '../../components/fragment/Button';
import {toast} from 'react-toastify'
import axios from 'axios'
import { useAuth } from '../../components/context/authContext';
const Passwordinputer = ()=>{
    const [auth,setAuth] = useAuth()
    const navi = useNavigate();
    const {email} = useParams();
    const focusInput = React.useRef();
    const [password,setPassword]= React.useState('')
    const name = JSON.parse(localStorage.getItem('tempData'))
    async function login(){
        try{
            const response = await axios.post('https://lms-backend-production-fcd7.up.railway.app/api/user/login',{email,password});
            if(response.data.status){
                localStorage.setItem('auth', JSON.stringify(response.data.user));
        navi('/');
        toast.success(response.data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setAuth(true)
        const userId = response.data.user.id
        const date = new Date()
        const day = date.getDate().toString(); 
        const year = date.getFullYear().toString(); 
        const month = (date.getMonth() + 1).toString();
        const attadenceResponse = await axios.post('https://lms-backend-production-fcd7.up.railway.app/api/attendence/send-attendence',{
            userId,
            year,
            month,
            day
        })
        if(attadenceResponse.data.status){
            toast.success(attadenceResponse.data.message,{
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              })
        }
            }
            else if(!response.data.status){
                toast.error(response.data.message, {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                  });
                  setPassword('')
              }
        }catch(e){
            console.log(e)
        }
    }
    React.useEffect(()=>{
        focusInput.current.focus();
    },[])
    return<React.Fragment>

        <div className='text-center text-xl py-2'>
            Hi ! {name.firstname}
        </div>
        <div className='flex justify-center '>
            
            <div className='flex items-center justify-between font-1 w-64 bg-color-2 text-white p-2 rounded-lg border-2 border-black'><span className='bg-white rounded-full text-black'><LuUser2/></span> {email}</div>
        </div>
        <div className='text-center pt-4  '>
            <input ref={focusInput} type="password" name='email' className='bg-gray-50 w-64 p-3 border rounded-md' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} onKeyDown={(e)=>{if(e.key === 'Enter') login()}}/>
        </div>

        <div className='text-center pt-4'>
        
            <button className='active:scale-95 duration-200 bg-[#e6f7ff] px-6 font-1 rounded-2xl py-4' onClick={login} >Submit</button>
        </div>
    </React.Fragment>
}
export default Passwordinputer;