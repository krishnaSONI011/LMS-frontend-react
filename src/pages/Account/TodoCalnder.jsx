import React from 'react'
import Attendance from './Attendance'

export default function TodoCalnder() {
  return (
    // parent div
    <div className=''>
      {/* border box  */}
      <div className='border border-black rounded h-52 w-80'>
        <Attendance/>
      </div>

    </div>
  )
}
