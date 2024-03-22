import axios from 'axios';
import React from 'react'
import Avatar from './Avatar';

const UserAvatar = (props) => {
    const [active , setActve] = React.useState(null)
    const avatarImages = [
        "/images/avatar.png",

        "/images/avatar2.png",
        "/images/avatar3.png",
        "/images/avatar4.png",
        "/images/avatar5.png",
    ]
  async  function hendel(){
        const user = JSON.parse(localStorage.getItem('auth'))
        const userId = user.id
        try {
            const response =await axios.post("http://localhost:8080/api/user/update-avatar",{
                userId,
                avatarImg:avatarImages[active]
            })
            console.log(response.data.user)
           const auth = JSON.stringify(response.data.user)
           localStorage.setItem("auth",auth)
           props.setBox(false)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className='absolute z-100 w-screen h-screen backdrop-brightness-50'>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='p-3 bg-white w-[400px] h-[450px] rounded-lg'>
                        <div className='flex justify-end font-1  border-b'>
                            <p className='w-fit p-2 hover:bg-slate-50   px-3 rounded-full cursor-pointer ' onClick={() => props.setBox(false)}> X</p>
                        </div>
                        <div className='grid grid-cols-3  h-[340px] overflow-y-scroll'>
                            {
                                avatarImages.map((m, index) => (

                                    <Avatar image={m} active={active} setActive={setActve} key={index} in={index}/>
                                ))
                            }
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={hendel} disabled={active === null ? true : false} className={`bg-[#f9a682] ${active === null ? 'hidden' : '' } text-white p-2 px-5 font-1 rounded`}>ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserAvatar; 