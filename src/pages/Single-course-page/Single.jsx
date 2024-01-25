import React from 'react'
import image from '../../assests/developer-2.jpg'
import { HiStar } from "react-icons/hi";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Single = ()=>{
    const [data,setData] = useState([])
    const {coursesSlug} = useParams()
    const getData = async ()=>{
        const response = await axios.get(`http://localhost:8080/api/course/get/${coursesSlug}`)
        setData(response.data.course)
        console.log(response.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
        <div className='pt-20 mx-0 md:mx-32'>
            <div className='p-4'>
                    <div className='flex '>
                        <div className='w-3/4'>
                            <p className='text-blue-600 text-lg font-1 my-7 '>{data.subTitle}</p>
                            <p className='text-4xl font-semibold' >{data.title}</p>
                            <p className='text-lg my-7 font-1'>{data.description}</p>
                            <div className='text-center'>
                               
                                <button className='text-xl font-3 duration-200 active:scale-95 w-52 py-5 rounded-lg  text-white bg-blue-500'>Enroll</button>
                            </div>
                        </div>

                        <div className='p-3 flex items-center   '>
                            <img src={`http://localhost:8080/${data.logo}`} alt="" className='w-[600px] rounded'/>
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