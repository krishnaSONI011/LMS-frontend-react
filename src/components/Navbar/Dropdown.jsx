import React from "react";
import { Link } from 'react-router-dom'
import { LuUser2, LuLogOut } from "react-icons/lu";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

const Dropdown = () => {
    const [ setAuth] = useAuth();
    const navi = useNavigate();

    const logout = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('auth'));
            const userId = user.id;
            const response = await axios.post('https://lms-backend-1-q2w4.onrender.com/api/user/logout', { userId });

            toast.success(response.data.message, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

            localStorage.removeItem('auth');
            setAuth(false);
            navi('/auth/ask-user/email');
        } catch (error) {
            console.error(error);
            toast.error('An error occurred. Please try again later.', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    };

    return (
        <div className="h-40 w-64 bg-white shadow-md py-3 rounded-lg border">
            <ul>
                <li key="account" onClick={() => navi('/account')} className="px-3">
                    <Link className="hover:bg-gray-100 flex items-center justify-center text-lg gap-x-2 p-2 rounded-lg active:scale-95 duration-200">
                        <LuUser2 /> Account
                    </Link>
                </li>
                <li key="logout" className="px-3 pt-5">
                    <Link className="hover:bg-red-200 flex items-center justify-center text-lg gap-x-2 p-2 rounded-lg active:scale-95 duration-200" onClick={logout}>
                        <LuLogOut /> Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
