import React from "react";
import { LuHome,LuBookOpen } from "react-icons/lu";
import logo from '../../../assests/logo.png'
const Navbar = ()=>{
    return <>
    <div className="bg-slate-100 h-screen">
        <div className="">
            <ul className=" text-black font-1 font-semibold px-5">
                <li className="mb-3"><img src={logo} alt="logo" /></li>
                <li className="hover:text-white active:scale-95 duration-200  my-4 flex items-center p-2 cursor-pointer hover:bg-slate-700 justify-center rounded-lg"><LuHome className="mr-3 text-xl font-semibold"/>Home</li>
                <li className="hover:text-white active:scale-95 duration-200 my-4 flex items-center p-2 cursor-pointer hover:bg-slate-700 justify-center rounded-lg"><LuBookOpen className="mr-3 text-xl font-semibold" />Courses</li>
                
            </ul>
        </div>
    </div>
    </>
}
export default Navbar;