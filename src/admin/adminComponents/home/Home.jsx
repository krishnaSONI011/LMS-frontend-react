import React from 'react'
import Navbar from '../navbar/Navbar';
import FirstPage from './FirstPage';
import ProfileSection from './ProfileSection';

const Home = ()=>{
    return <>
    <div className='flex'>
        <div className='w-64'>

        <Navbar/>
        </div>
        <div className='overflow-y-scroll h-screen w-[90%]'>
            <FirstPage />
        </div>
        
    </div>

    </>
}
export default Home ; 