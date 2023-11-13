import React  from "react";
import logo from '../../assests/courses-logo.png'
import { LuClock4,LuBookCopy } from "react-icons/lu";

const CoursesCard = ()=>{
    return(
        <>
        <div className=" m-3 w-96 border-2 rounded-lg  hover:border-4 cursor-pointer ">
            <div className="flex flex-col justify-center">


                <div className="flex justify-between bg-d  p-4 py-5 border-b">
                    <div className="">
                        <p className="text-lg">Full Stack</p>
                        <p className="font-semibold text-xl">MERN Stack</p>
                    </div>
                    <div className="flex items-center">
                        <img src={logo} alt="" />
                    </div>

                </div>


                <div className="p-4 py-5 flex justify-between items-center">
                        <div className="flex items-center ">
                            <LuClock4/> 140+ Hours
                        </div>
                        <div className="flex items-center">
                                <LuBookCopy/> 6+ Project
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CoursesCard;