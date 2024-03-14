import React from 'react'
import Friends from './Friends';
import { useNavigate } from 'react-router-dom';
import Todo from './Todo';
import UserProfile from './UserProfile';
import UserAvatar from './UserAvatar';

const Account = ()=>{
    const navi = useNavigate()
    function checkForLogin(){
        if(!(localStorage.getItem('auth'))) navi('/')
    }
    const [avatarBox , SetAvatarBox] = React.useState(false)
    React.useEffect(()=>{checkForLogin()},[])
    return(
        <>
       {avatarBox ?  <UserAvatar setBox={SetAvatarBox}/> : <span></span>}
        <div className='w-screen flex p-2 pt-20'>
            <UserProfile box= {avatarBox} setBox = {SetAvatarBox}/>
            <Friends/>
            <Todo/>
        </div>
        </>
    )
}
export default Account ; 