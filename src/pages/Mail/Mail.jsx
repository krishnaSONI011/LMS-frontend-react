import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import UserProfile from '../Account/UserProfile'
import Mailsender from './Mailsender'

const Mail = () => {
  return (
    <div className='pt-20'>
        <Routes>
            <Route path='/mailsender' element={<Mailsender/>} />
        </Routes>
      <Outlet/>
    </div>
  )
}

export default Mail
