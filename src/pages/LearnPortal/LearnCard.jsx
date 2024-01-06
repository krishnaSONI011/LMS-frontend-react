import React from "react";
import image from '../../assests/card.png'
const LearnCard = ()=>{
    return(
        <>
        {/* parent div  */}
        <div className="w-[20%] m-2 my-3  bg-slate-100 p-2 rounded">
                {/* data container div */}
                <div className="flex flex-col items-center justify-evenly">
                    {/* image div */}
                    <div>
                        <img src={image} alt="" className="w-40"/>
                    </div>
                    {/* image div end */}
                    {/* Heading div */}
                    <div className="my-2">
                        <h1 className="font-1 font-bold">Name of the Course</h1>
                    </div>
                    {/* Heading div end */}
                    {/* about div */}
                    <div className="my-2">
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod incidunt dolor, et ea ex ut libero voluptatibus atque vel quas </p>
                    </div>
                    {/* about div end */}
                    {/* status bar and its percents */}
                    <div className="w-full my-2">
                        <div className="text-start w-full">
                            0% complete
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-7">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': 50+'%'}}></div>
                </div>
                        
                    </div>
                    {/* status bar and its percents end*/}
                    {/* button div */}
                    <div className="flex justify-between my-3">
                    <button className=' p-1 font-1 text-white bg-[#fe9b71] rounded active:scale-95 duration-150'>Go to course</button>
                <button className='mx-3 p-2 font-1 text-white bg-red-500 rounded hover:bg-red-600 active:scale-95 duration-150'>Remove</button>
                    </div>
                    {/* button div end */}
                </div>
                {/* data container div end */}
        </div>
        </>
    )
}
export default LearnCard