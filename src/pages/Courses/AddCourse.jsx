import React from 'react'
import { useNavigate } from 'react-router-dom'
const AddCourse = ()=>{
    const navi = useNavigate()

    return <>

    <div className='h-full w-full flex justify-center items-center'>
        <div className='bg-slate-100 p-6 rounded font-3'>
            {/* first row */}
          <div className='flex'>


              <div className=''>
                <label htmlFor="">Course Title</label>
                <input type="text" className='border ml-3 p-1'/>
              </div>


              <div className='ml-5'>
                <label htmlFor="">Course Subtitle</label>
                <input type="text" className='border ml-3 p-1'/>
              </div>



          </div>

{/* second row */}
            <div className='mt-6 flex items-center'>
                <label htmlFor="">Description: </label>
                <textarea className='w-full ml-3 p-2' />
            </div>

            {/* third row*/}

            <div className='mt-4 flex'>
                <div className='font-3'>
                    <label htmlFor="">Main Image</label>
                    <input
    className="ml-3 border file:border-1 file:cursor-pointer"
    type="file"
    id="formFile" />
                </div>
            </div>
            {/* fourth row */}
            <div className='mt-4 flex'>
                <div className='font-3'>
                    <label htmlFor="">Logo Image</label>
                    <input
    className="ml-3 border file:border-1 file:cursor-pointer"
    type="file"
    id="formFile" />
                </div>
            </div>
            {/*  */}

            <div  className='flex justify-center mt-10'>
                <button onClick={()=>navi('/admin/home/course')} className='active:scale-95 duration-150 bg-blue-600 p-2 text-white rounded hover:bg-blue-500'>
                    back
                </button>
                <button  className='active:scale-95 duration-150 bg-green-600 p-2 text-white rounded hover:bg-green-500 ml-6'>
                    Add
                </button>
            </div>
        </div>
    </div>
    </>
}

export default AddCourse