import React from 'react';
import { useState } from 'react';
import { LuSearch,LuSun,LuMoon} from "react-icons/lu";
import { useMode } from '../context/DarkMode';
import Userbar from './Userbar'
import {Link,useNavigate} from 'react-router-dom'
import logo from '../../assests/logo.png'
import { useAuth } from '../context/authContext';
const Navbar = props =>{

    const [auth,setAuth] = useAuth()
    
    const navi = useNavigate()
    const [dark,setMode] = useMode();
    const [shadow,toggleShadow] = useState(false)
   React.useEffect(()=>{
    document.body.style.backgroundColor = dark ? '#101426' : 'white'
   },[dark]) ;
   let scroll 
   
 
   React.useEffect(()=>{
    window.addEventListener('scroll',handle)
   })
   function handle(){
    scroll = window.scrollY
    if(scroll > 0 ) toggleShadow(true);
    else if(scroll === 0) toggleShadow(false)
   }
    return <>
           <div className={`transition ${props.hider ? 'hidden' : ''} duration-200 ${shadow ? 'shadow' : 'shadow-none'} fixed w-screen ${dark ? 'bg-black' : 'bg-white'}`}>
                    <div className='flex p-3 items-center justify-between'>


                        <div className='flex w-96 items-center mx-2 justify-around'>
                            {/* <div className={`text-2xl font-2 ${dark ? 'text-white' : 'text-black'}`}>
                            <span className='color-1'>C</span>OURSES */}
                            <Link to='/'><img src={logo} alt='' className='w-52 active:scale-95 duration-200'/></Link>
                        



                        <div>
                            <div className='flex items-center w-fit relative font-1'>
                            <input type="text" className={`${dark ? 'bg-[#101426] border  text-white' : 'bg-gray-50 border-2'} hover:outline-blue-500 hover:outline-1  p-1 rounded-lg focus:outline-[#E1E2F6]`} placeholder='Search'/>
                                <LuSearch className={`absolute right-1 z-100 ${dark ? 'bg-slate-900 text-white' : 'bg-gray-50'} bg-gray-50 text-lg`}/>
                            </div>
                        </div>



                        </div>

                        <div className='font-1 flex justify-around w-96'>
                        <button onClick={()=> {navi('/learn'); }} className={` font-semibold hover:bg-gray-100 px-5 rounded-2xl active:scale-95 duration-200  ${dark ? 'text-white' : 'text-gray-600'}`}>Learn</button>
                            <button className={` font-semibold hover:bg-gray-100 px-5 rounded-2xl active:scale-95 duration-200  ${dark ? 'text-white' : 'text-gray-600'}`} onClick={()=>navi('/courses')}>Courses
                            </button>
                            <button className={`p-3 active:scale-95 duration-200 ${dark ? 'hover:bg-slate-500' : 'hover:bg-gray-100'}  rounded-full `} onClick={()=>dark ? setMode(false) : setMode(true)}>
                                 {
                                     dark ? 
                                     <LuSun  className='font-semibold text-xl text-slate-100' />
                                     :
                                     <LuMoon className='text-slate-600 font-semibold text-xl'/> 
                                    }  
                                     
                                    
                            </button>
                            {
                                auth ?<>
                                <div>
                                <Userbar/>
    
                                </div> </> : <> <button className=' active:scale-95 duration-200 bg-[#e6f7ff] px-5 rounded-2xl  ' onClick={()=>navi('/auth/ask-user/email')}>
                                Enroll   
                            </button></>
                            }
                            
                            
                        </div>
                        
                    </div>
                        
           </div>
    </>
}

export default Navbar;