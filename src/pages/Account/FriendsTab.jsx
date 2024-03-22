import React from 'react'

import { Link } from 'react-router-dom'
const FriendsTab = (props) => {
  return (
    <Link to={`/mail/mailsender?page_id=0&reciver_id=${props.id}`}>
    <div className='p-2 hover:scale-110 duration-150 cursor-pointer'>
      {/* tab container */}
      <div className='bg-slate-100 rounded flex items-center justify-evenly'>
        {/* image div */}
            <div>
                <img src={props.avatar} alt="" className='w-14 rounded-full'/>
            </div>
            <div>
                <h1 className='font-1 font-semibold'>{props.name}</h1>
            </div>
            <div>
              {
                props.online ? <p className='p-2 rounded-full bg-green-400'></p> :<p className='p-2 rounded-full bg-red-400'></p>
              }
                
                
            </div>
      </div>
      {/* tab container end */}
    </div>
    </Link>
  )
}

export default FriendsTab
