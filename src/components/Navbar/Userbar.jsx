import React,{useState} from 'react'
import ava from '../../assests/avatar5.png'
import Dropdown from './Dropdown';

const Userbar = () => {
    const [dropToggle,SetdropToggle] = useState(false)
    return (
        <>
            <div className='relative'>
                <div>
                    <button className='overflow-hidden active:scale-95 duration-200 rounded-full' onClick={()=> dropToggle ? SetdropToggle(false) : SetdropToggle(true)}>
                        <img src={ava} alt="" className='w-10' />
                    </button>
                </div>
            </div>

            <div className={` ${dropToggle ? '' : ' hidden'} absolute  right-4 top-16    `}>
                <Dropdown/>
            </div>


        </>
    )
}
export default Userbar;