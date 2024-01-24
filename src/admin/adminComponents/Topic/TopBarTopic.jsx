import React from 'react'
import { useLocation } from 'react-router-dom'
const TopBarTopic = () => {
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search)
    const status = queryParams.get('status') 
  return (
    // parent div
    <div>
      {/* headind and status container */}
      <div className='mt-5 p-3 flex justify-between'>
        <h1 className='font-3 text-xl font-semibold'>Name of the Topic</h1>
        <h1 className={`${status === 'true' ? 'bg-green-500 rounded p-2 font-3 text-white' : 'bg-red-500 rounded p-2 font-3 text-white'}`}>{status === 'true' ? "Live" : "Not Live"}</h1>
      </div>
      {/* headind and status container end */}
    </div>
  )
}

export default TopBarTopic
