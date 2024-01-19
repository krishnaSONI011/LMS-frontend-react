import React from 'react'

const DayBlock = props => {
  
  return (

        <div className={`${props.isActive ? 'bg-green-500 text-white': 'bg-slate-100'} rounded p-1 px-2 font-1 text-sm mx-1 mt-3`}>
      {props.day}
    </div>
    
    
  )
}

export default DayBlock
