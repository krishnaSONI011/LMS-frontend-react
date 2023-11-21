import React from "react";
import { Link } from 'react-router-dom'
import { LuUser2,LuLogOut } from "react-icons/lu";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Dropdown = ( )=>{
    const [auth,setAuth] = useAuth()
    const navi = useNavigate()
    const logout = ()=>{

        localStorage.removeItem('auth')
        setAuth(false)
        navi('/auth/ask-user/email')
    }
    return <>
    <div className="h-40 w-64 bg-white shadow-md py-3 rounded-lg border">
        <ul>
            <li className=" px-3 "><Link className=" hover:bg-gray-100 flex items-center justify-center text-lg gap-x-2 p-2 rounded-lg active:scale-95 duration-200"><LuUser2/> Account</Link></li>
            <li className="px-3 pt-5"><Link className="hover:bg-red-200 flex items-center justify-center text-lg gap-x-2 p-2 rounded-lg active:scale-95 duration-200" onClick={logout}><LuLogOut/>Logout</Link></li>
        </ul>
    </div>
    </>
}
export default Dropdown;