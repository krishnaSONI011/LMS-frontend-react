import React from 'react'
import image from '../../assests/developer-2.jpg'
import { HiStar } from "react-icons/hi";

const Single = ()=>{
    return(
        <>
        <div className='pt-20 mx-0 md:mx-32'>
            <div className='p-4'>
                    <div className='flex '>
                        <div className='w-3/4'>
                            <p className='text-blue-600 text-lg font-1 my-7 '>FOR BEGINNERS AND EXPERIENCED LEARNERS</p>
                            <p className='text-4xl font-semibold' >Full Stack Web Development Course — MERN Stack</p>
                            <p className='text-lg my-7 font-1'>Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)</p>
                            <div className='text-center'>
                               
                                <button className='text-xl font-3 duration-200 active:scale-95 w-52 py-5 rounded-lg  text-white bg-blue-500'>Enroll</button>
                            </div>
                        </div>

                        <div className='p-3 flex items-center   '>
                            <img src={image} alt="" className='w-full rounded'/>
                        </div>

                    </div>

                    <div className='flex mt-10 justify-center'>
                        <div className='w-2/4 rounded-lg  bg-[#f3f8ff] flex p-4 justify-between'>
                                <div className='flex flex-col items-center px-5 border-r-blue-600 border-r'>
                                    <div className='flex items-center text-3xl'>4.8 <HiStar className='text-yellow-600'/></div>
                                    <div className='font-1 font-medium'>
                                    13K+ Learners enrolled
                                    </div>
                                </div>
                                <div className='text-center border-r border-r-blue-500 px-5'>
                                  <span className='text-3xl'> 140+</span> 
                                   <div className='font-medium font-1'>Hours of lectures
</div>
                                </div>
                                <div className='text-center border-r-blue-500 px-5'>
                                  <span className='text-3xl'> 6+</span> 
                                   <div className='font-medium font-1'>Project
</div>
                                </div>
                        </div>

                    </div>
            </div>
        </div>
        </>
    )
}

export default Single;