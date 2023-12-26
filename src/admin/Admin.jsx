import React from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import AdminAuth from './adminComponents/adminAuth/AdminAuth';
import Home from './adminComponents/home/Home';
const Admin = ()=>{
    return <>
    <Routes>
        <Route path='/auth' element={<AdminAuth/>} />
        <Route path = '/home' element={<Home/>} />
    </Routes>
    <Outlet />
    </>
}
export default Admin;