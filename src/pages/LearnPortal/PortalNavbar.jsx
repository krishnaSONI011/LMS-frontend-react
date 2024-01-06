import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import logo from '../../assests/logo.png'
import { useNavigate} from 'react-router-dom';
import Userbar from '../../components/Navbar/Userbar';
export default function PortalNavbar(props) {
    const navi = useNavigate()
  return (
    <>
    {/* parent div */}
    <div className={`w-full h-[50px] border-b-2 px-2 `}>
            {/* inner nabbar div */}
            <div className='flex w-full h-full items-center justify-between'>
                    {/* arrow and logo div */}
                    <div className='flex items-center'>
                        {/* arrow div */}
                        <div onClick={()=>{navi('/'); }} className='rounded-full hover:bg-slate-300 active:scale-95 duration-150 p-2 cursor-pointer text-lg'>
                        <LuArrowLeft />

                        </div>
                        {/* arrow div end */}
                        {/* logo div */}
                        <div>
                            <img src={logo} alt="" className='w-52  '/>
                        </div>
                        {/* logo div end */}
                    </div>
                    {/* arrow and logo div end */}
                    <div>
                      <Userbar />
                    </div>
            </div>
            {/* inner nabbar div end */}
    </div>
    {/* parent div end */}
    </>
  )
}
