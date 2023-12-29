import React from 'react'

export default function TableData(props) {
  return (
    <>
    <tr className='font-3 border-b bg-white'>
        <td className='whitespace-nowrap px-6 py-4 font-medium'>{props.sr}</td>
        <td className='whitespace-nowrap px-6 py-4'>{props.name}</td>
        <td className='whitespace-nowrap px-6 py-4'>{props.about} </td>
        <td className='whitespace-nowrap px-6 py-4'><button className='p-2 active:scale-95 duration-150 text-white bg-blue-600 rounded '>Update</button></td>
        <td className='whitespace-nowrap px-6 py-4'><button className='p-2 active:scale-95 duration-150 text-white bg-red-600 rounded '>Delete</button></td>
    </tr>
    </>
  )
}
