import React from 'react'
import image from '../../assests/mockup-web.jpg'
const Card = ()=>{
    return(
        <>
            <div className='mx-4 hover:shadow-xl duration-200 w-64 h-[400px] bg-white p-2 rounded-lg border '>
                <div className='text-center w-full flex justify-center'>
                    <img src={image} alt='' className='w-60 rounded'/>
                </div>
                <div className='pl-3 mt-4'>
                   <h1 className='text-lg font-3'>Web Development </h1> 
                </div>
                <div className='px-3 text-gray-500 '>
                    <p className='text-justify'>
                    Bringing a machine learning model into the real world involves a lot more than just modeling. 
                    </p>
                </div>
                <div className='flex mt-3 justify-between'>
                    <button className='font-semibold hover:bg-gray-100 px-5 rounded-2xl active:scale-95 duration-200'>More Info</button>
                <button className=' active:scale-95 duration-200 bg-[#e6f7ff] px-6 rounded-2xl py-3 '>
                                   Enroll
                            </button>
                </div>
            </div>
        </>
    )
}

export default Card