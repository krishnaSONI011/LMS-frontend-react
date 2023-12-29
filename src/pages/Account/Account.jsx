import React from 'react'
import Mycourse from './Mycourse';
import Todo from './Todo';
import UserProfile from './UserProfile';

const Account = ()=>{
    return(
        <>
        <div className='w-screen flex p-2 pt-20'>
            <UserProfile/>
            <Mycourse/>
            <Todo/>
        </div>
        </>
    )
}
export default Account ; 