import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FriendsTab from './FriendsTab'

const Friends = () => {
  const [data,setData] = useState([])
  
  const [loading,setLoading] = useState(false)
  let filterData = []
  async function getUsers(){
    try{
      const user = JSON.parse(localStorage.getItem('auth'))
      const userId = user.id
      setLoading(true)
      const response = await axios.get('http://localhost:8080/api/user/get-all')
      filterData = response.data.users.filter((f)=> userId !== f._id )
      setData(filterData)
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className='w-2/5 border rounded'>
      {/* parent div */}
      <div>
        {/* box div */}
        <div className='p-2 text-center font-1 font-bold text-xl'>
            Your Friends
        </div>
        <div className='h-[500px] overflow-y-scroll overflow-x-hidden scrollbar-hide'>
          {
            loading ?<div className='flex justify-center  items-center'>
            <p className='p-5 border border-b-hidden border-blue-500 rounded-full animate-spin'></p>
          </div>  :  data.map((user)=>(
              <FriendsTab avatar ={user.avatar} key={user._id} id={user._id} name={user.firstname + ' '+user.lastname } online={user.online}/>
            ))
          }
            
           
        </div>
        {/* box div end */}
      </div>
      {/* parent div end */}
    </div>
  )
}

export default Friends
