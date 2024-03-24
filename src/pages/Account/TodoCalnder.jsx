import React from 'react'
import Attendance from './Attendance'

export default function TodoCalnder() {
  return (
    // parent div
    <div className=''>
      {/* border box  */}
      <div className='border border-black rounded h-64 w-80'>
        <Attendance/>
        <div className='flex justify-end mt-3'>
          <div>
            <p><span className='bg-green-500 px-4 rounded m-2'></span><span className='mr-4'>Day of online</span> </p>
          </div>
        </div>
      </div>


    </div>
  )
}
