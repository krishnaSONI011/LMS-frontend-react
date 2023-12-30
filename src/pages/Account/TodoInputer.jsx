import React from 'react'

export default function TodoInputer() {
  return (
    <>
      <div className='flex justify-center w-full'>
        <input type="text" placeholder='Write your Todo' className='font-1 p-2 bg-slate-100'/>
        <button className='text-lg font-1 p-2 bg-[#f9a682] rounded px-3 text-white ml-4 active:scale-95 duration-150 '>+</button>
      </div>
    </>
  )
}
