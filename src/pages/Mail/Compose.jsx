import React from 'react'
import { Link } from 'react-router-dom'
const Compose = () => {
  return (
    <Link to='/mail/mailsender'>
    <div className='h-[90vh] flex justify-center items-center w-[200px]'>
      <div> <button className='bg-black text-white font-1 p-2 rounded font-semibold active:scale-95 duration-150'>Compose</button></div>
    </div>
    </Link>
  )
}

export default Compose
