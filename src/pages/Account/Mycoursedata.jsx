import React from 'react'

export default function Mycoursedata() {
    return (
        <div className='border mb-3 p-3 rounded bg-slate-100'>
            {/* title div */}
            <div>
                <div>
                    FUll STACK DEVELOPER
                </div>
            </div>
            {/* seek bar */}
            <div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-7">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': 50+'%'}}></div>
                </div>

            </div>
            {/* seekbar end */}
            {/* button div */}
            <div className='mt-5 flex justify-end'>
                <button className='mx-3 p-2 font-1 text-white bg-[#fe9b71] rounded active:scale-95 duration-150'>Go to course</button>
                <button className='mx-3 p-2 font-1 text-white bg-red-500 rounded hover:bg-red-600 active:scale-95 duration-150'>Remove</button>
            </div>
            {/* button div end */}
            {/* title div end */}
        </div>
    )
}
