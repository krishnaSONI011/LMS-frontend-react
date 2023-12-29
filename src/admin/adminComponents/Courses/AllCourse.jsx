import React from 'react'
import CourseTable from './CourseTable';
import { useNavigate } from 'react-router-dom';
const AllCourse = ()=>{
    const navi = useNavigate()
    const sender = ()=>{
        navi('/admin/home/add-course')
    }
    return (
        <>
        <div className='mt-10'>
           <h1 className='text-center text-xl font-3 font-medium'>Here the data of all the Course we offer </h1>
        </div>
        <div className='flex justify-center'>
            <CourseTable/>
        </div>
        <div className='flex justify-center mt-10'>
                <div>
                    <button onClick={sender} className='bg-green-600 active:scale-95 duration-150 p-2 hover:bg-green-700 font-3 rounded text-white'>Add New Course +</button>
                </div>
        </div>
        </>
    )
}

export default AllCourse;