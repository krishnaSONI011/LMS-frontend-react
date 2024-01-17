import React from 'react'
import profile from '../../assests/avatar5.png'
const UserProfile = ()=>{
  
    const auth = JSON.parse(localStorage.getItem('auth'))
    
    
    return(
        <>
        {/* parent div */}
        <div className='p-2 w-96'>
            {/* account div */}
            <div className='flex flex-col items-center'>
                {/* image div */}
                <div className=''>
                    <img src={profile} alt="" className='hover:brightness-90 cursor-pointer w-32 rounded-full'/>
                </div>
                {/* image div end */}
                {/* data div */}
                <div>
                    {/* name div */}
                    <div className='font-1 font-semibold mt-7 text-lg border-b-2 text-center p-2'>
                        {auth.firstname + ' ' + auth.lastname}
                    </div>
                    {/* name div end */}
                    {/* other data div */}
                    <div>
                        {/* email div */}
                        <div className='font-1 border-b-2 p-2 text-center'>
                                {auth.email}
                        </div>
                        {/* email div end */}
                        {/* address div */}
                        <div className='font-1 border-b-2 p-2 text-center'>
                                Jaipur
                        </div>
                        {/* address div end */}
                    </div>
                    {/* other data div end */}
                </div>
                {/* data div end */}
                {/* button div */}
                <div className='mt-7'>
                    <button className='bg-[#f9a682] p-2 rounded text-white font-1 text-lg active:scale-95 duration-150'>
                        edit
                    </button>
                </div>
                {/* button div end */}
            </div>
            {/* account div end */}
        </div>
        {/* parent div end */}
        </>
    )
}

export default UserProfile;