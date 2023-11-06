import React from 'react'
import Emailinputer from './Emailinputer'
import {Routes,Route,Outlet} from 'react-router-dom'
import Passwordinputer from './Passwordinputer'
import NewUser from './NewUser'
const Askforuser=()=>{
    return(
        <>
            <div className='flex justify-center items-center h-screen '>
                <div className='border rounded w-2/6 p-3'>
                    {/* Topp */}
                            <div className='font-1 font-semibold text-2xl text-center'>
                                <span className='text-purple-600 font-extrabold '>C</span>OURSES
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