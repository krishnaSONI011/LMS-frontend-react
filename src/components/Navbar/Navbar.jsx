import React from 'react';
import { LuSearch,LuSun,LuMoon} from "react-icons/lu";
import { useMode } from '../context/DarkMode';
import Userbar from './Userbar';

const Navbar = () =>{
    const [dark,setMode] = useMode();
   React.useEffect(()=>{
    document.body.style.backgroundColor = dark ? '#101426' : 'white'
   },[dark]) ;
    return <>
           <div className={`fixed w-screen ${dark ? 'bg-black' : 'bg-white'}`}>
                    <div className='flex p-3 items-center justify-between'>


                        <div className='flex w-96 justify-around'>
                            <div className={`text-2xl font-2 ${dark ? 'text-white' : 'text-black'}`}>
                            <span className='color-1'>C</span>OURSES
                        </div>



                        <div>
                            <div className='flex items-center w-fit relative font-1'>
                            <input type="text" className={`${dark ? 'bg-[#101426] border text-white' : 'bg-gray-50 border-2'} hover:outline-blue-500 hover:outline-1  p-1 rounded-lg focus:outline-[#E1E2F6]`} placeholder='Search'/>
                                <LuSearch className={`absolute right-1 z-100 ${dark ? 'bg-slate-900 text-white' : 'bg-gray-50'} bg-gray-50 text-lg`}/>
                            </div>
                        </div>



                        </div>

                        <div className='font-1 flex justify-around w-96'>
                            <button className={` font-semibold hover:bg-gray-100 px-5 rounded-2xl active:scale-95 duration-200  ${dark ? 'text-white' : 'text-gray-600'}`}>Learn</button>
                            <button className={` font-semibold hover:bg-gray-100 px-5 rounded-2xl active:scale-95 duration-200  ${dark ? 'text-white' : 'text-gray-600'}`}>Courses</button>
                            <button className={`p-3 active:scale-95 duration-200 ${dark ? 'hover:bg-slate-500' : 'hover:bg-gray-100'}  rounded-full `} onClick={()=>dark ? setMode(false) : setMode(true)}>
                                 {
                                     dark ? 
                                     <LuSun  className='font-semibold text-xl text-slate-100' />
                                     :
                                     <LuMoon className='text-slate-600 font-semibold text-xl'/> 
                                    }  
                                     
                                    
                            </button>
                            <button className=' active:scale-95 duration-200 bg-[#e6f7ff] px-5 rounded-2xl  '>
                                   Enroll
                            </button>
                            <div className={`hidden`}>
                            <Userbar/>

                            </div>
                        </div>
                        
                    </div>
                        
           </div>
    </>
}

export default Navbar;