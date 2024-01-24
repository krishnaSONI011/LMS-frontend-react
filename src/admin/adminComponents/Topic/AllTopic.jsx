import React from 'react'
import TopBarTopic from './TopBarTopic'
import TopicTableBody from './TopicTableBody'
import { useNavigate } from 'react-router-dom'
const AllTopic = () => {
    const navi = useNavigate()
  return (
    <>
      <TopBarTopic/>
      {/* table div  */}
      <div>
      <table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="text-center">Topic Name</th>
              <th scope="col" className="text-center">Video</th>
              
              <th scope="col"  className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
           <TopicTableBody/>
           <TopicTableBody/>
          </tbody>
        </table>
      </div>
      {/* table div end */}
      {/* add topic button */}
      <div className='text-center mt-5'>
        <button onClick={()=> navi('/admin/home/add-course?page_id=topic')} className='bg-green-500 text-white rounded p-2 active:scale-95 duration-150'> Add Course Topic + </button>
      </div>
      {/* add topic button end*/}
    </>
  )
}

export default AllTopic
