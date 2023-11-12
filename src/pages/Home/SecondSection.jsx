import React from 'react'
import Card from '../../components/Card/Card'
import { LuArrowLeft,LuArrowRight } from "react-icons/lu";
import {Link } from 'react-router-dom'
export default function SecondSection() {
  const [slide,addSlideValue] = React.useState(0)

  return (
    <div className='bg-d p-6'>
      <div >
        <h1 className='my-4 font-3 text-center text-4xl '>
          Our Course
        </h1>
        <div className='duration-200 flex items-center '>
          <button className='h-fit border p-3 rounded-full hover:scale-90  active:scale-95 duration-200 text-xl' onClick={()=>addSlideValue(slide + 100)}><LuArrowLeft/></button>
          <div className=' relative overflow-hidden w-full h-[400px]  sc '>
            <div className='duration-200 absolute w-full overflow-hidden  flex justify-evenly' style={{
              left:slide
            }}>

              {/* here this fetch with the api 
               */}
              <div>

                <Card />
              </div>
              {/* this whole div comes under this map function  */}

            </div>
          </div>
          <button className='h-fit border p-3 rounded-full hover:scale-90  active:scale-95 duration-200 text-xl' onClick={()=>addSlideValue(slide - 100)}><LuArrowRight/></button>

        </div>

        <div className='text-center mt-10'>
          <button className='bg-[#e6f7ff] p-3 px-4 rounded duration-200 active:scale-95'><Link>
            View All</Link>
          </button>
        </div>

      </div>
    </div>
  )
}
