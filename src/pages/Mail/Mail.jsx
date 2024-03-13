import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import UserProfile from '../Account/UserProfile'
import AllMails from './AllMails'
import Mailsender from './Mailsender'
import SingleMail from './SingleMail'

const Mail = () => {
  return (
    <div className='pt-20'>
        <Routes>
            <Route path='/mailsender' element={<Mailsender/>} />
            <Route path='/all-mail' element={<AllMails/>} />
            <Route path='/single-mail/:id' element={<SingleMail/>} />
        </Routes>
      <Outlet/>
    </div>
  )
}

export default Mail
