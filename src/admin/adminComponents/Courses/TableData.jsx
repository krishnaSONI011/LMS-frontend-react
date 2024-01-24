import React from 'react'

export default function TableData(props) {
  return (
    <>
    <tr className='font-3 border-b bg-white'>
        <td className='whitespace-nowrap px-6 py-4 font-medium'>{props.sr}</td>
        <td className='whitespace-nowrap px-6 py-4'>{props.name}</td>
        <td className='whitespace-nowrap px-6 py-4'>{props.about} </td>
        {
          props.status ? <><td className='whitespace-nowrap text-center'><button className='p-2 active:scale-95 duration-150 text-white bg-blue-600 rounded '>Update</button></td>
          <td className='whitespace-nowrap '><button className='p-2 active:scale-95 duration-150 text-white bg-red-600 rounded '>Delete</button></td></>
          :
          <td className='whitespace-nowrap text-center'><button className='p-2 active:scale-95 duration-150 text-white bg-blue-600 rounded '>Add subCourse</button></td>
        }
        
        <td className='whitespace-nowrap text-center '>{props.status ? <span className='bg-green-500 text-white p-1 rounded'>Live</span>: <span className='bg-red-500 text-white p-1 rounded ml-10'>Not Live</span>}</td>
    </tr>
    </>
  )
}
