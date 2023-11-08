import React from 'react';
import { LuSearch,LuSun,LuMoon} from "react-icons/lu";
import { useMode } from '../context/DarkMode';

const Navbar = () =>{
    const [dark,setMode] = useMode();
   React.useEffect(()=>{
    document.body.style.backgroundColor = dark ? '#101426' : 'white'
   },[dark]) ;
    return <>
           <div className={`sticky w-screen ${dark ? 'bg-black' : 'bg-white'}`}>
                    <div className='flex p-3 items-center justify-between'>


                        <div className='flex w-96 justify-around'>
                            <div className={`text-2xl font-2 ${dark ? 'text-white' : 'text-black'}`}>
                            <span className='color-1'>C</span>OURSES
                        </div>



                        <div>
                            <div className='flex items-center w-fit relative font-1'>
                            <input type="text" className={`${dark ? 'bg-[#101426] border text-whitez' : 'bg-gray-50 border-2'}  p-1 rounded-lg focus:outline-[#E1E2F6]`} placeholder='Search'/>
                                <LuSearch className={`absolute right-1 z-100 ${dark ? 'bg-[#101426] text-white' : 'bg-gray-50'} bg-gray-50 text-lg`}/>
                            </div>
                        </div>



                        </div>

                        <div className='font-1 flex justify-around w-52'>
                            <button className={`p-2 border-2 ${dark ? 'hover:bg-slate-500' : 'hover:bg-gray-50'}  rounded-full `} onClick={()=>dark ? setMode(false) : setMode(true)}>
                                 {
                                     dark ? 
                                     <LuSun  className='font-semibold text-xl text-slate-100' />
                                     :
                                     <LuMoon className='text-slate-600 font-semibold text-xl'/> 
                                    }  
                                     
                                    
                            </button>
                            <button className='bg-[#E1E2F6] px-4 rounded-lg  '>
                                   Enroll
                            </button>
                        </div>
                        
                    </div>
                        
           </div>
    </>
}

export default Navbar;