import React  from "react";

const Button = ({children})=>{
    return <button className='active:scale-95 duration-200 bg-[#e6f7ff] px-6 font-1 rounded-2xl py-4'> {children} </button>
}
export default Button;