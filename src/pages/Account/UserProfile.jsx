import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'


const UserProfile = (props)=>{
  
    const auth = JSON.parse(localStorage.getItem('auth'))
    const profile = auth.avatar
    const [editable, setEditable] = React.useState(false)
    const [name,setName] = React.useState(auth ? auth.firstname + " " + auth.lastname : "")
    const [email,setEmail] = React.useState(auth ? auth.email: "")
    const handle = ()=>{
        setEditable( !editable)
        toast.warning(editable ? 'editing disable' : 'editing enable',{
            position: 'bottom-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
        })
    }

   async function saveData(){
    
            try{
                const userName = name.split(" ")
                const firstname = userName[0]
                const lastnameFunc =(userName)=>{
                        let name = " "
                            for(let i=1 ; i<userName.length; i++){
                                name = name + userName[i]
                                name = name + " "
                            }
                            return name
                }
                const lastname = lastnameFunc(userName)
                
                const userId = auth.id
                const response = await axios.post('https://lms-backend-1-q2w4.onrender.com/api/user/update-user',{
                    userId,firstname,lastname,email
                })
                if(response.data.status){ localStorage.setItem('auth',JSON.stringify(response.data.user))
                    toast.success(response.data.message,{
                        position: 'bottom-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                    })
                    setEditable(false)
            }
                else toast.error(response.data.message)
            }catch(e){
                console.error(e)
            }
    }
    return(
        <>
        
        {/* parent div */}
        <div className={`p-2  w-96`}>
            {/* account div */}
            <div className='flex flex-col items-center'>
                {/* image div */}
                <div className=''>
                    <img src={profile} alt="" className='hover:brightness-90 cursor-pointer w-32 rounded-full' onClick={()=> props.setBox(true)}/>
                </div>
                {/* image div end */}
                {/* data div */}
                <div>
                    {/* name div */}
                    <div className='font-1 font-semibold mt-7 text-lg border-b-2 text-center p-2'>
                        <input disabled={editable ? false : true} onChange={(e)=>setName(e.target.value)} type={`text`} className={`text-center  bg-white ${editable ? "outline outline-1" : ""}`} value={name}/>
                      
                    </div>
                    {/* name div end */}
                    {/* other data div */}
                    <div>
                        {/* email div */}
                        <div className='font-1 border-b-2 p-2 text-center'>
                        <input disabled={editable ? false : true} onChange={(e)=>setEmail   (e.target.value)} type={`text`} className={`text-center  bg-white ${editable ? "outline outline-1" : ""}`} value={email}/>
                                
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
                <div className='mt-7 flex justify-evenly w-96'>
                    <button onClick={handle} className='bg-[#f9a682] p-2 rounded text-white font-1 text-lg active:scale-95 duration-150'>
                        edit
                    </button>
                    {editable ? <button onClick={saveData} className={`bg-[#82a0f9] p-2 rounded text-white font-1 text-lg active:scale-95 duration-150 `}>
                        save
                    </button> : ""}

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