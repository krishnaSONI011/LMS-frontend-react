import React from 'react'
import { LuUser2 } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import Button from '../../components/fragment/Button';

const Passwordinputer = ()=>{
    const {email} = useParams();
    const focusInput = React.useRef();

    React.useEffect(()=>{
        focusInput.current.focus();
    },[])
    return<React.Fragment>

        <div className='text-center text-xl py-2'>
            Hi ! UserName
        </div>
        <div className='flex justify-center '>
            
            <div className='flex items-center justify-between font-1 w-64 bg-purple-300  p-2 rounded-lg border-2 border-black'><span className='bg-white rounded-full '><LuUser2/></span> {email}</div>
        </div>
        <div className='text-center pt-4  '>
            <input ref={focusInput} type="password" name='email' className='bg-gray-50 w-64 p-3 border rounded-md' placeholder='Password'/>
        </div>

        <div className='text-center pt-4'>
        
            <Button>Submit</Button>
        </div>
    </React.Fragment>
}
export default Passwordinputer;