import React from "react";
import img from '../../../assests/auth.jpg'
const AdminAuth = ()=>{
    return <>
    <div className="flex h-screen">
        <div className="w-2/4 h-full flex justify-center items-center ">
        <img src={img} alt="" className="w-96" />
        
    </div>
        <div className="flex justify-center items-center w-2/4">
            <div className="border rounded shadow w-2/4 flex flex-col justify-center items-center py-4">
                <h1 className="font-1 text-3xl font-semibold">Login</h1>
                <div className="mt-5">
                    <input type="email" className="bg-gray-100 rounded p-2 " placeholder="Email"/>
                </div>
                <div className="mt-5">
                    <input type="password" className="bg-gray-100 rounded p-2 " placeholder="Password"/>
                </div>
                <div className="mt-5">
                    <button className="active:scale-95 duration-200 bg-[#e6f7ff] px-6 font-1 rounded-2xl py-4">Login</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
}

export default AdminAuth;