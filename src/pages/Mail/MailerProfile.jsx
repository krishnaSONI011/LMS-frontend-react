import axios from 'axios'
import React,{useState,useEffect} from 'react'

import logo from '../../assests/avatar5.png'

const MailerProfile = props => {
    
const user = JSON.parse(localStorage.getItem('auth'))
const avatar = user.avatar
   
    
   
  return (
    <div>
      <div className='p-2 w-full md:w-96'>
            {/* account div */}
            <div className='flex flex-col items-center'>
                {/* image div */}
                <div className=''>
                    <img src={avatar} alt="" className='hover:brightness-90 cursor-pointer w-32 rounded-full'/>
                </div>
                {/* image div end */}
                
                {/* data div */}
                <div>
                    {/* online div */}
                    <div className='flex justify-center'>
                         <div className='w-fit flex justify-center items-center mt-7 p-2  border-2 border-dashed border-slate-700 rounded'>
                            {
                                props.online ?<>  <span className='p-2 bg-green-500 rounded-full'></span> <span className='font-semibold font-1 ml-2'>Online</span></> : <>  <span className='p-2 bg-red-500 rounded-full'></span> <span className='font-semibold font-1 ml-2'>Offline</span></>
                            }
                   
                </div>
                    </div>
               
                {/* online div end */}
                    {/* name div */}
                    <div className='font-1 font-semibold mt-7 text-lg border-b-2 text-center p-2'>
                        {props.name}
                    </div>
                    {/* name div end */}
                    {/* other data div */}
                    <div>
                        {/* email div */}
                        <div className='font-1 border-b-2 p-2 text-center'>
                                {props.email}
                        </div>
                        {/* email div end */}
                        {/* address div */}
                        
                        {/* address div end */}
                    </div>
                    {/* other data div end */}
                </div>
                {/* data div end */}
                {/* button div */}
                
                {/* button div end */}
            </div>
            {/* account div end */}
        </div>
    </div>
  )
}

export default MailerProfile
