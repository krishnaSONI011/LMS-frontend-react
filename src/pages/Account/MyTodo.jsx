import React from "react";
import { LuTrash2 } from "react-icons/lu";
const MyTodo = ()=>{
    return (
        <>
        <div className="px-4 mt-3 flex justify-evenly items-center">
            <div className="p-2 bg-slate-200 rounded">
                I have to Complete this
            </div>
            <button className="bg-red-400 text-white hover:bg-red-500 p-3 rounded"><LuTrash2/></button>
        </div>
        </>
    )
}
export default MyTodo