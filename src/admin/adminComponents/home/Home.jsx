import React from 'react'
import Navbar from '../navbar/Navbar';
import FirstPage from './FirstPage';

import {Routes,Route,Outlet} from 'react-router-dom'
import AllCourse from '../Courses/AllCourse';
import AddCourse from '../../../pages/Courses/AddCourse';
import AllTopic from '../Topic/AllTopic';
const Home = ()=>{
    return <>
    <div className='flex'>
        <div className='w-64'>

        <Navbar/>
        </div>
        <div className='overflow-y-scroll h-screen w-[90%]'>
            <Routes>
                <Route path='/info' element = {<FirstPage />} />
                <Route path='/course/*' element = {<AllCourse/>} />
                <Route path='/add-course' element = {<AddCourse/>} />
                <Route path='/topics/:courseSlug' element={<AllTopic/>} />
            </Routes>
            <Outlet />
        </div>
        
    </div>

    </>
}
export default Home ; 