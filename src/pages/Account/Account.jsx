import React from 'react'
import Friends from './Friends';

import Todo from './Todo';
import UserProfile from './UserProfile';

const Account = ()=>{
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