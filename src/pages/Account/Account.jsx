import React,{useState,useEffect} from 'react'
import Friends from './Friends';
import { useNavigate,Routes,Route,Outlet } from 'react-router-dom';
import Todo from './Todo';
import UserProfile from './UserProfile';
import UserAvatar from './UserAvatar';
import Bottombar from './Bottombar';

const Account = ()=>{
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const navi = useNavigate()
    function checkForLogin(){
        if(!(localStorage.getItem('auth'))) navi('/')
    }
    const [avatarBox , SetAvatarBox] = React.useState(false)
    React.useEffect(()=>{checkForLogin()},[])
    useEffect(()=>{
        if(screenWidth > 994 ){
            navi('/account')
        }
       
    },[screenWidth])
    return(
        <>
       {avatarBox ?  <UserAvatar setBox={SetAvatarBox}/> : <span></span>}
        <div className={`w-screen flex p-2 pt-20 ${screenWidth < 994 ? 'justify-center' : ''}`}>
            {screenWidth > 994 ?<> <UserProfile box= {avatarBox} setBox = {SetAvatarBox}/>
            <Friends/>
            <Todo/></> : ""}
                
            <Routes>
                <Route path='/user' element={<UserProfile width={screenWidth > 994 ? true:false} box= {avatarBox} setBox = {SetAvatarBox}/>} />
                <Route path='/friends' element={ <Friends width={screenWidth }/>} />
                <Route path='/todo' element={<Todo/>} />

            </Routes>
            <Outlet/>
            {screenWidth < 994 ? <Bottombar/> : ''}
        </div>
        </>
    )
}
export default Account ; 