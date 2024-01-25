import React from 'react'

const TopBarTopic = (props) => {
    
  return (
    // parent div
    <div>
      {/* headind and status container */}
      <div className='mt-5 p-3 flex justify-between'>
        <h1 className='font-3 text-xl font-semibold'>Course - {props.name}</h1>
        <h1 className={`${props.status === 'true' ? 'bg-green-500 rounded p-2 font-3 text-white' : 'bg-red-500 rounded p-2 font-3 text-white'}`}>{props.status === 'true' ? "Live" : "Not Live"}</h1>
      </div>
      {/* headind and status container end */}
    </div>
  )
}

export default TopBarTopic
