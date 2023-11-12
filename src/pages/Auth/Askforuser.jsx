import React from 'react'
import Emailinputer from './Emailinputer'
import {Routes,Route,Outlet} from 'react-router-dom'
import Passwordinputer from './Passwordinputer'
import NewUser from './NewUser'
import logo from '../../assests/logo.png'
const Askforuser=()=>{
    return(
        <>
            <div className='flex justify-center items-center h-screen '>
                <div className='border rounded w-2/6 p-3'>
                    {/* Topp */}
                            <div className='font-1 font-semibold text-2xl flex justify-center'>
                            <img src={logo} alt='' className='w-52'/>
                            </div>
                            <Routes>
                                <Route path='/email' element={<Emailinputer />} />
                                <Route path='/verify-user/:email' element={<Passwordinputer/>} />
                                <Route path='/new-user/:email' element={<NewUser/>}/>
                            </Routes>
                            <Outlet/>

                </div>
            </div>
        </>
    )
}

export default Askforuser