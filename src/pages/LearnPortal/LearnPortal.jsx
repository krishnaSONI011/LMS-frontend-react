import React from 'react'
import LearnData from './LearnData';
import PortalNavbar from './PortalNavbar';
import { Route,Routes,Outlet } from 'react-router-dom';
import VideoPage from './VideoPage/VideoPage';
const LearnPortal = props=>{

    return (

        <>
        <PortalNavbar/>
        <Routes>
        <Route path='/video/:courseData' element={<VideoPage/>}/>
        <Route path='/' element={<LearnData/>} />
        
        </Routes>
        <Outlet/>
        </>
    )
}

export default LearnPortal;