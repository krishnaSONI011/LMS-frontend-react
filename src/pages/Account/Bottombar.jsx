import React from 'react'
import { LuUser2 } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { FaTableCells } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Bottombar = () => {
  return (
    <div className='fixed bottom-0 w-screen bg-white p-2 border z-10'>
      <ul className='flex justify-evenly '>
        <li className='text-xl'><Link to='/account/user'><LuUser2/></Link></li>
        <li className='text-xl'><Link to='/account/friends'><GrGroup/></Link></li>
        <li className='text-xl'><Link to='/account/todo'><FaTableCells/></Link></li>
        
      </ul>
    </div>
  )
}

export default Bottombar
