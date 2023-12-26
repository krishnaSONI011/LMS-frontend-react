import React from 'react'
import { LuSearch,LuBell } from "react-icons/lu";
import Box from '../Box/Box';


const MiddleSection = ()=>{
    return <>
    <div className='p-4  border-r'>

        {/* top bar */}
        <div className='flex items-center justify-between' >
            <div>
                <p className='text-2xl font-3 font-medium'>Hello Admin <span > &#128075;</span></p>
                <p className='text-gray-500 text-lg font-semibold font-1 '>check your status !</p>
            </div>
            <div>
            <div className='flex items-center w-fit relative font-1'>
                            <input type="text" className={` hover:outline-blue-500 hover:outline-1  p-1 rounded-lg focus:outline-[#E1E2F6]  border border-black `} placeholder='Search'/>
                                <LuSearch className={`absolute right-1 z-100 $  bg-gray-50 text-lg`}/>
                            </div>
            </div>
<div className='border p-2 rounded-lg '>
        <LuBell className='text-2xl'/>
        </div>
        </div>
        <div className='flex justify-around'>
        <Box title='Number of Student'/>
        <Box title='Number of Course'/>
        <Box title='Number of  '/>

        </div>
        
    </div>
    </>
}

export default MiddleSection ;