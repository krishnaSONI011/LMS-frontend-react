import React from 'react'
import Friends from './Friends';
import { useNavigate } from 'react-router-dom';
import Todo from './Todo';
import UserProfile from './UserProfile';

const Account = ()=>{
    const navi = useNavigate()
    function checkForLogin(){
        if(!(localStorage.getItem('auth'))) navi('/')
    }
    React.useEffect(()=>{checkForLogin()},[])
    return(
        <>
        <div className='w-screen flex p-2 pt-20'>
            <UserProfile/>
            <Friends/>
            <Todo/>
        </div>
        </>
    )
}
export default Account ; 