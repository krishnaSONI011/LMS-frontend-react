import React from 'react'
import Askforuser from './Askforuser'
import {Routes,Route,Outlet} from 'react-router-dom'
const Auth =()=>{
    return(
        <>
        <Routes>
        <Route path='/ask-user/*' element={<Askforuser/>} />
        </Routes>
        <Outlet/>
        </>
    )
}

export default Auth